import { render, screen } from "@testing-library/react";
import Options from "../Options";

test.only("should display all images from server", () => {
  render(<Options optionType={"scoops"} />);

  //find the images
  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //checck there alt text
  const altText = scoopImages.map((img) => img.alt);
  expect(altText).toHave(["Chocolate scoop", "Vanilla scoop"]);
});
