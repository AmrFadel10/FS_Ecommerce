export const SuccessExplosion = () => {
  const particles = [...Array(8)].map((_, i) => {
    const angle = (i * 360) / 8;
    const radius = 30;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  });

  return (
    <div style={{ width: "100px", height: "100px" }}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={{ display: "block", margin: "auto" }}
      >
        {/* الدائرة الخضراء */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#22c55e"
          style={{
            transformOrigin: "center",
            animation: "pop 0.3s ease-out forwards",
          }}
        />

        {/* علامة الصح (Checkmark) */}
        <path
          d="M30 52 L45 65 L70 40"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 50,
            strokeDashoffset: 50,
            animation: "drawCheck 0.4s ease-out 0.3s forwards",
          }}
        />

        {/* انفجار الدوائر الصغيرة */}
        {particles.map((p, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r="3"
            fill="#bbf7d0"
            style={{
              animation: `explode-${i} 0.6s ease-out 0.6s forwards`,
            }}
          />
        ))}

        <style>{`
          @keyframes pop {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
          }

          @keyframes drawCheck {
            to { stroke-dashoffset: 0; }
          }

          ${particles
            .map(
              (p, i) => `
            @keyframes explode-${i} {
              0% {
                transform: translate(0, 0);
                opacity: 1;
              }
              100% {
                transform: translate(${p.x}px, ${p.y}px);
                opacity: 0;
              }
            }
          `
            )
            .join("")}
        `}</style>
      </svg>
    </div>
  );
};
