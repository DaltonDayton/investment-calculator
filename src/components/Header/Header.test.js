import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renders Investment Calculator", () => {
    render(<Header />);
    const headerElement = screen.getByText(/Investment Calculator/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders header image", () => {
    render(<Header />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    const imageAlt = screen.getByAltText(/logo/i);
    expect(imageAlt).toBeInTheDocument();
  });
});
