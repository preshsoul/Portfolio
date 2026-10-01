import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ANSWERS = [
  {
    question: "What do you actually do?",
    answer: <>I work across <strong>writing, research and strategy</strong>. That can mean turning a difficult brief into a clearer direction, building the research behind an argument, developing editorial or campaign strategy, or helping organise a body of ideas into something people can understand and use.</>,
    label: "See the work",
    to: "/work",
  },
  {
    question: "How can you help me?",
    answer: <>Usually when something matters, but is still messy. You may have too much information, an idea that has not quite become a strategy, expertise that needs better expression, or a project whose next move is unclear. I can help research it, frame it, write it, or build the system around it.</>,
    label: "See what I'm useful for",
    to: "#useful-for",
  },
  {
    question: "What kind of projects do you take on?",
    answer: <>Research and strategic briefs, editorial and writing projects, campaign thinking, thought-leadership systems, and other high-context work where the answer is unlikely to come from a template. If the problem is unusual but interesting, that is generally a better starting point than whether it fits neatly into a service category.</>,
    label: "See selected situations",
    to: "#selected-situations",
  },
  {
    question: "Where can I find your CV?",
    answer: <>I keep a current version on its own page, alongside a clearer record of the roles, projects and experience behind the portfolio.</>,
    label: "View my CV",
    to: "/precious-ajayi-cv.pdf",
    external: true,
  },
  {
    question: "How do I reach you?",
    answer: <>Email is usually the simplest place to start. You can also find me on LinkedIn, or send a little context about what you are working on through the contact page.</>,
    label: "Contact me",
    to: "/connect",
  },
];

export default function QuickAnswers() {
  const [open, setOpen] = useState(0);

  return (
    <div className="quick-answers">
      {ANSWERS.map((item, index) => {
        const expanded = open === index;
        const answerId = `quick-answer-${index}`;
        const triggerId = `quick-question-${index}`;
        const Action = item.external ? "a" : Link;
        const actionProps = item.external ? { href: item.to } : { to: item.to };
        return (
          <article key={item.question} className={expanded ? "is-open" : ""}>
            <h3>
              <button id={triggerId} type="button" aria-expanded={expanded} aria-controls={answerId} onClick={() => setOpen(expanded ? -1 : index)}>
                <span>{item.question}</span><ArrowDown size={20} aria-hidden="true" />
              </button>
            </h3>
            <div id={answerId} role="region" aria-labelledby={triggerId} hidden={!expanded}>
              <p>{item.answer}</p>
              <Action {...actionProps}>{item.label} <ArrowUpRight size={16} aria-hidden="true" /></Action>
            </div>
          </article>
        );
      })}
    </div>
  );
}
