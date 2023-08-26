import { render, screen } from "@testing-library/react";
import SummaryForm from "../SumaryForm";
import UserEvent from "@testing-library/user-event";

describe("checkbox functionality test", () => {
  test("checkbox is unchekd by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /Terms and Conditions/i,
    });
    expect(checkbox).toBeInTheDocument();

    expect(checkbox).not.toBeChecked();
  });

  test("when checked button is enabbled else disabled", async () => {
    const user = await UserEvent.setup();
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
    await user.click(checkbox);

    expect(confrmButton).toBeEnabled();

    //cehckbox is nunchecked;
    await user.click(checkbox);

    expect(confrmButton).toBeDisabled();
  });
});
