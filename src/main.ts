import "./style.css";
import { Converter } from "./Coverter";
import { Crypto } from "./Crypto";

const converter = new Converter();

const crypto = new Crypto()

const pirateText = document.querySelector("#textToDisplay") as HTMLHeadingElement;

const encryptedText = document.querySelector("#textEncrypted") as HTMLHeadingElement;


const inputTextToTranslate = document.querySelector(
  "#inputTextToTranslate"
) as HTMLInputElement;

inputTextToTranslate.addEventListener("change", (e) => {

    const input = e.target as HTMLInputElement;

    const textToDisplay = converter.textToPirate(input.value);

    const textEncrypted = crypto.encrypt(textToDisplay)

    pirateText.textContent = `Detta är din text på piratspråk: ${textToDisplay}`;

    encryptedText.textContent = `Detta är din text på piratspråk krypterad: ${textEncrypted}`;

});

const decryptInput = document.querySelector('#decryptInput') as HTMLInputElement

const decryptText = document.querySelector('#decryptText') as HTMLHeadingElement



decryptInput.addEventListener('change', (e) => {
  const decryptInput = e.target as HTMLInputElement

  decryptText.textContent = crypto.decrypt(decryptInput.value)

})