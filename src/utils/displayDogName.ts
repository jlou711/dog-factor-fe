import { capitalizeFirstLetter } from "./capitalize";

export function displayDogName(string: string): string {
  if (string.includes("-")) {
    return string
      .split("-")
      .map((word) => capitalizeFirstLetter(word))
      .reverse()
      .join(" ");
  }
  return capitalizeFirstLetter(string);
}
