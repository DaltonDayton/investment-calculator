import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renders Investment Calculator", () => {
    render(<Header />);
    const headerElement = screen.getByText(/Investment Calculator/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("renders header image with correct source", () => {
    render(<Header />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    const imageSource = image.getAttribute("src");
    expect(imageSource).toBe("investment-calculator-logo.png");

    const imageAlt = screen.getByAltText(/logo/i);
    expect(imageAlt).toBeInTheDocument();
  });

  test("renders header with correct className", () => {
    render(<Header />);
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toHaveClass("header");
  });
});
