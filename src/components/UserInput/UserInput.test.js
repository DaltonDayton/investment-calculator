import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UserInput from "./UserInput"; // Replace with the actual name of your form component

describe("UserInput", () => {
  test("update input values on change", () => {
    render(<UserInput />);

    const currentSavingsInput = screen.getByLabelText("Current Savings ($)");
    fireEvent.change(currentSavingsInput, { target: { value: "5000" } });
    expect(currentSavingsInput.value).toBe("5000");

    const yearlyContributionInput = screen.getByLabelText("Yearly Savings ($)");
    fireEvent.change(yearlyContributionInput, { target: { value: "1000" } });
    expect(yearlyContributionInput.value).toBe("1000");

    const expectedReturn = screen.getByLabelText(
      "Expected Interest (%, per year)"
    );
    fireEvent.change(expectedReturn, { target: { value: "5" } });
    expect(expectedReturn.value).toBe("5");

    const duration = screen.getByLabelText("Investment Duration (years)");
    fireEvent.change(duration, { target: { value: "10" } });
    expect(duration.value).toBe("10");
  });

  test("should call calculateHandler on form submission", () => {
    const calculateHandler = jest.fn();
    render(<UserInput onCalculate={calculateHandler} />);

    const calculateButton = screen.getByText("Calculate");
    fireEvent.click(calculateButton);
    expect(calculateHandler).toHaveBeenCalledTimes(1);
  });

  test("should call resetHandler on reset button click", () => {
    render(<UserInput onReset={jest.fn()} />);

    // Modify the initial values
    fireEvent.change(screen.getByLabelText("Current Savings ($)"), {
      target: { value: "20000" },
    });
    fireEvent.change(screen.getByLabelText("Yearly Savings ($)"), {
      target: { value: "2400" },
    });
    fireEvent.change(screen.getByLabelText("Expected Interest (%, per year)"), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText("Investment Duration (years)"), {
      target: { value: "5" },
    });

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    // Verify that the form fields are reset to their initial values
    expect(screen.getByLabelText("Current Savings ($)")).toHaveValue(10000);
    expect(screen.getByLabelText("Yearly Savings ($)")).toHaveValue(1200);
    expect(
      screen.getByLabelText("Expected Interest (%, per year)")
    ).toHaveValue(7);
    expect(screen.getByLabelText("Investment Duration (years)")).toHaveValue(
      10
    );
  });
});
