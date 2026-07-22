declare module '*.glb' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}

declare global {
  interface Window {
    lenis?: any;
  }
}
