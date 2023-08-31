import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("should display all images from server", async () => {
  render(<Options optionType={"scoops"} />);

  //find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //checck there alt text
  const altText = scoopImages.map((img) => img.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test.only("should diplay images of toppings", async () => {
  render(<Options optionType={"toppings"} />);

  //find the images
  const toppingsImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingsImages).toHaveLength(2);

  //check there alt text
  const altText = toppingsImages.map((img) => img.alt);
  expect(altText).toEqual(["Cherries topping", "Hot Fudge topping"]);
});
