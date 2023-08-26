import { fireEvent, render, screen } from "@testing-library/react";
import SummaryForm from "../SumaryForm";

describe("checkbox functionality test", () => {
  test("checkbox is unchekd by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    expect(checkbox).toBeInTheDocument();

    expect(checkbox).not.toBeChecked();
  });

  test("when checked button is enabbled else disabled", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    const confrmButton = screen.getByRole("button", { name: /Confirm Order/i });

    //cehck if button is present
    expect(confrmButton).toBeInTheDocument();

    //button is disabled
    expect(confrmButton).toBeDisabled();

    //checkbox is checked
    fireEvent.click(checkbox);

    expect(confrmButton).toBeEnabled();

    //cehckbox is nunchecked;
    fireEvent.click(checkbox);

    expect(confrmButton).toBeDisabled();
  });
});
