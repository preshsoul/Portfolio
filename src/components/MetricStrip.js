export default function MetricStrip({ metrics }) {
  return (
    <div className="metric-run">
      {metrics.map((metric, index) => (
        <article key={`${metric.value}-${metric.label}`}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{metric.value}</p>
          <h3>{metric.label}</h3>
          <small>{metric.qualification}</small>
        </article>
      ))}
    </div>
  );
}
