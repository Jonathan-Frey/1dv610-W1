import "./style.css";
import { Converter } from "./Coverter";

const converter = new Converter();

const inputTextToTranslate = document.querySelector(
  "#inputTextToTranslate"
) as HTMLInputElement;

inputTextToTranslate.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const input = e.target as HTMLInputElement;

    const textToDisplay = converter.textToPirate(input.value);

    const h2 = document.querySelector("#textToDisplay") as HTMLHeadingElement;

    h2.textContent = textToDisplay;
  }
});
