const circles = [
  { className: "background-circle--one", tone: "blue" },
  { className: "background-circle--two", tone: "cyan" },
  { className: "background-circle--three", tone: "indigo" },
  { className: "background-circle--four", tone: "blue" },
  { className: "background-circle--five", tone: "cyan" },
  { className: "background-circle--six", tone: "indigo" },
] as const;

export default function BackgroundCircles() {
  return (
    <div className="background-art" aria-hidden="true">
      <div className="background-art__wash" />
      <div className="background-art__dots" />
      {circles.map(({ className, tone }) => (
        <span key={className} className={`background-circle background-circle--${tone} ${className}`} />
      ))}
      <span className="background-orbit background-orbit--one" />
      <span className="background-orbit background-orbit--two" />
      <span className="background-spark background-spark--one" />
      <span className="background-spark background-spark--two" />
      <span className="background-spark background-spark--three" />
    </div>
  );
}
