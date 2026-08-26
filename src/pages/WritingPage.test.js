import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import WritingPage from "./WritingPage";

const renderWritingPage = () =>
  render(
    <MemoryRouter>
      <WritingPage />
    </MemoryRouter>
  );

describe("WritingPage", () => {
  test("keeps publishing instructions out of the public writing page", () => {
    renderWritingPage();

    expect(screen.getByRole("heading", { name: "Read by trail, not just by date." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "A first path through the room." })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Choose a shelf, then follow a tag." })).toBeInTheDocument();
    expect(screen.queryByLabelText(/Start here/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/How new articles enter the system/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Create a Markdown file/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Every piece gets a status/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/article lab/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/looking for a home/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Seeking a home/i)).not.toBeInTheDocument();
  });
});
