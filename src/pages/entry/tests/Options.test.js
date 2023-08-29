import { render, screen } from "@testing-library/react";
import Options from "../Options";

test.only("should display all images from server", async () => {
  render(<Options optionType={"scoops"} />);

  //find the images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //checck there alt text
  const altText = scoopImages.map((img) => img.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
