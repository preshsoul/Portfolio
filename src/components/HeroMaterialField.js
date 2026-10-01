const WORDS = ["Writing", "Strategy", "Research", "Ideas", "Campaigns", "Systems", "Questions", "Work"];

export default function HeroMaterialField() {
  return (
    <div className="hero-material-field" aria-hidden="true">
      {WORDS.map((word, index) => (
        <span key={word} style={{ "--word-index": index }}>{word}</span>
      ))}
    </div>
  );
}
