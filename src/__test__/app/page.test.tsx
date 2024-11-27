import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Route", () => {
  render(<Home />);

  it("renders heading on navbar component", () => {
    const text = screen.getByText(/To Do/i);
    expect(text).toBeInTheDocument();
  });
});
