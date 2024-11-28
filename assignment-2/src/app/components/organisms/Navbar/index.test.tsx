import Navbar from "@/app/components/organisms/Navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar Component", () => {
  render(<Navbar />);

  it("renders a heading To Do", () => {
    const heading = screen.getByRole("heading", {
      name: /To Do/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
