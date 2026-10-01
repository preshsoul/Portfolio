import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import QuickAnswers from "./QuickAnswers";

describe("QuickAnswers", () => {
  test("renders exactly five accessible questions", () => {
    render(<MemoryRouter><QuickAnswers /></MemoryRouter>);
    const questions = screen.getAllByRole("button");
    expect(questions).toHaveLength(5);
    expect(questions[0]).toHaveAttribute("aria-expanded", "true");
  });

  test("expands an answer from its button", () => {
    render(<MemoryRouter><QuickAnswers /></MemoryRouter>);
    const trigger = screen.getByRole("button", { name: "How can you help me?" });
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("See what I'm useful for", { exact: false })).toBeVisible();
  });
});
