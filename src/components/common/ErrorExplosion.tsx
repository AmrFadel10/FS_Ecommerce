export const ErrorExplosion = ({ size = 100 }: { size?: number }) => {
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
        width={`${size}`}
        height={`${size}`}
        viewBox="0 0 100 100"
        style={{ display: "block", margin: "auto" }}
      >
        {/* الدائرة الحمراء */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="#f87171"
          style={{
            transformOrigin: "center",
            animation: "pop 0.3s ease-out forwards ",
          }}
        />

        {/* علامة X */}
        <line
          x1="35"
          y1="35"
          x2="65"
          y2="65"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          style={{
            strokeDasharray: 42,
            strokeDashoffset: 42,
            animation: "drawX 0.3s ease-out 0.3s forwards",
          }}
        />
        <line
          x1="65"
          y1="35"
          x2="35"
          y2="65"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          style={{
            strokeDasharray: 42,
            strokeDashoffset: 42,
            animation: "drawX 0.3s ease-out 0.5s forwards",
          }}
        />

        {/* انفجار الدوائر الصغيرة */}
        {particles.map((p, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r="3"
            fill="#fecaca"
            style={{
              animation: `explode-${i} 0.6s ease-out 0.7s forwards`,
            }}
          />
        ))}

        <style>{`
          @keyframes pop {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
          }

          @keyframes drawX {
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
