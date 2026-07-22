import React, { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  color?: string; // HEX color
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  color = "#d4ff3f",
  quantity = 40,
  staticity = 30,
  ease = 50,
  refresh = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const circlesRef = useRef<any[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dprRef = useRef<number>(1);
  const animationFrameRef = useRef<number>(0);
  const isRunningRef = useRef(false);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    if (canvasRef.current) {
      contextRef.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    startAnimation();
    window.addEventListener("resize", initCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
      if (entry.isIntersecting && !document.hidden) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
    if (canvasContainerRef.current) {
      observer.observe(canvasContainerRef.current);
    }

    return () => {
      stopAnimation();
      window.removeEventListener("resize", initCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, [color]);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const rectRef = useRef<{ left: number; top: number } | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (canvasRef.current) {
      if (!rectRef.current) {
        const r = canvasRef.current.getBoundingClientRect();
        rectRef.current = {
          left: r.left + window.scrollX,
          top: r.top + window.scrollY,
        };
      }
      const rect = rectRef.current;
      const { pageX, pageY } = e;
      const x = pageX - rect.left - canvasSizeRef.current.w / 2;
      const y = pageY - rect.top - canvasSizeRef.current.h / 2;
      mouseRef.current = { x, y };
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const initCanvas = () => {
    rectRef.current = null;
    resizeCanvas();
    drawParticles();
  };

  const handleVisibilityChange = () => {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  };

  const startAnimation = () => {
    if (isRunningRef.current || document.hidden || !isVisibleRef.current) return;
    isRunningRef.current = true;
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    isRunningRef.current = false;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = 0;
    }
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && contextRef.current) {
      circlesRef.current = [];
      canvasSizeRef.current.w = canvasContainerRef.current.offsetWidth;
      canvasSizeRef.current.h = canvasContainerRef.current.offsetHeight;
      dprRef.current = Math.min(window.devicePixelRatio || 1, 1.5);
      canvasRef.current.width = canvasSizeRef.current.w * dprRef.current;
      canvasRef.current.height = canvasSizeRef.current.h * dprRef.current;
      canvasRef.current.style.width = `${canvasSizeRef.current.w}px`;
      canvasRef.current.style.height = `${canvasSizeRef.current.h}px`;
      contextRef.current.scale(dprRef.current, dprRef.current);
    }
  };

  const circleParams = (): any => {
    const x = Math.floor(Math.random() * canvasSizeRef.current.w);
    const y = Math.floor(Math.random() * canvasSizeRef.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2.5) + 0.5;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.2;
    const dy = (Math.random() - 0.5) * 0.2;
    const magnetism = 0.1 + Math.random() * 4;
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const hexToRgb = (hex: string): number[] => {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex.split("").map((char) => char + char).join("");
    }
    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  };

  const drawCircle = (circle: any, update = false) => {
    const ctx = contextRef.current;
    if (ctx) {
      const rgb = hexToRgb(color);
      const { x, y, translateX, translateY, size, alpha } = circle;
      ctx.translate(translateX, translateY);
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(${rgb.join(",")}, ${alpha})`;
      ctx.fill();
      ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);

      if (!update) {
        circlesRef.current.push(circle);
      }
    }
  };

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const animate = () => {
    if (!isRunningRef.current) return;
    const ctx = contextRef.current;
    if (ctx) {
      ctx.clearRect(0, 0, canvasSizeRef.current.w, canvasSizeRef.current.h);
      circlesRef.current.forEach((circle: any, i: number) => {
        // Handle fading in/out
        const edge = [
          circle.x + circle.translateX - circle.size, // left
          canvasSizeRef.current.w - circle.x - circle.translateX - circle.size, // right
          circle.y + circle.translateY - circle.size, // top
          canvasSizeRef.current.h - circle.y - circle.translateY - circle.size, // bottom
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat((closestEdge / 20).toFixed(2));
        if (remapClosestEdge < 1) {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        } else if (circle.alpha < circle.targetAlpha) {
          circle.alpha += 0.02;
        }

        circle.x += circle.dx;
        circle.y += circle.dy;
        
        // Mouse interaction
        circle.translateX += (mouseRef.current.x / staticity - circle.translateX) / ease;
        circle.translateY += (mouseRef.current.y / staticity - circle.translateY) / ease;

        // Reposition particles if out of bounds
        if (
          circle.x < -circle.size ||
          circle.x > canvasSizeRef.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSizeRef.current.h + circle.size
        ) {
          circlesRef.current[i] = circleParams();
          circlesRef.current[i].alpha = 0;
        } else {
          drawCircle(circle, true);
        }
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};
