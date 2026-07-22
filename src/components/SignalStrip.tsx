import React from "react";
import { useApp } from "../context/AppContext";

export const SignalStrip: React.FC = () => {
  const { t } = useApp();
  
  // Fetch signal list and repeat it for seamless scrolling
  const signalsRaw = t("signal") as unknown as string[];
  const signals = Array.isArray(signalsRaw) ? signalsRaw : [];
  const repeatedSignals = [...signals, ...signals, ...signals];

  return (
    <section className="signal-strip" aria-label="Core strengths">
      <div className="signal-track" id="signal-track">
        {repeatedSignals.map((item, index) => (
          <React.Fragment key={index}>
            <span>{item}</span>
            {index !== repeatedSignals.length - 1 && (
              <span aria-hidden="true">&bull;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
