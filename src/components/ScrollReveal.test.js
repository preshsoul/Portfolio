import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import ScrollReveal from "./ScrollReveal";

describe("ScrollReveal", () => {
  const RealIntersectionObserver = global.IntersectionObserver;

  afterEach(() => {
    global.IntersectionObserver = RealIntersectionObserver;
    jest.useRealTimers();
  });

  test("shows content immediately when IntersectionObserver is unavailable", () => {
    global.IntersectionObserver = undefined;

    render(<ScrollReveal>Readable article section</ScrollReveal>);

    expect(screen.getByText("Readable article section")).toHaveStyle({ opacity: "1" });
  });

  test("fails open if the observer never reports an intersection", async () => {
    jest.useFakeTimers();

    render(<ScrollReveal>Do not stay blank</ScrollReveal>);

    act(() => {
      jest.advanceTimersByTime(1200);
    });

    await waitFor(() => {
      expect(screen.getByText("Do not stay blank")).toHaveStyle({ opacity: "1" });
    });
  });
});
