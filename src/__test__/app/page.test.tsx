import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Route", () => {
  render(<Home />);

  it("render title to do", () => {
    const text = screen.getByText(/Todo/i);
    expect(text).toBeInTheDocument();
  });
});
