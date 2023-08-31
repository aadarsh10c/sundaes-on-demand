import { screen, render } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../mocks/server";

test("should throw error when renderd", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
      ctx.status(500);
    }),
    rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
      ctx.status(500);
    })
  );

  render(<OrderEntry />);
  const errorList = await screen.findAllByRole("alert", {
    name: "An unexpected error occured. Please try again later.",
  });

  expect(errorList).toHave(2);
});
