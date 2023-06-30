import { render, screen } from "@testing-library/react";
import ResultsTable from "./ResultsTable";

test("renders table headers correctly", () => {
  const data = [];
  const initialInvestment = 10000;
  render(<ResultsTable data={data} initialInvestment={initialInvestment} />);

  expect(screen.getByText("Year")).toBeInTheDocument();
  expect(screen.getByText("Total Savings")).toBeInTheDocument();
  expect(screen.getByText("Interest (Year)")).toBeInTheDocument();
  expect(screen.getByText("Total Interest")).toBeInTheDocument();
  expect(screen.getByText("Invested Capital")).toBeInTheDocument();
});

test("renders table rows with correct data", () => {
  const data = [
    {
      year: 2,
      savingsEndOfYear: 13933,
      yearlyInterest: 833,
      yearlyContribution: 1200,
    },
    {
      year: 3,
      savingsEndOfYear: 16108.31,
      yearlyInterest: 975.31,
      yearlyContribution: 1200,
    },
  ];
  const initialInvestment = 10000;
  render(<ResultsTable data={data} initialInvestment={initialInvestment} />);

  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText("$13,933.00")).toBeInTheDocument();
  expect(screen.getByText("$833.00")).toBeInTheDocument();
  expect(screen.getByText("$1,533.00")).toBeInTheDocument();
  expect(screen.getByText("$12,400.00")).toBeInTheDocument();

  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("$16,108.31")).toBeInTheDocument();
  expect(screen.getByText("$975.31")).toBeInTheDocument();
  expect(screen.getByText("$2,508.31")).toBeInTheDocument();
  expect(screen.getByText("$13,600.00")).toBeInTheDocument();
});
