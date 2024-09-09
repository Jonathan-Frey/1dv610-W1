export class Crypto {

    #span = 3

    encrypt(textToEncrypt : string) {
        let encryptText = ''
        textToEncrypt.split('').forEach((char) => {
            const charCode = char.charCodeAt(0)
            const newCharCode = charCode + this.#span
            encryptText += String.fromCharCode(newCharCode)
        })

        return encryptText
    }

    decrypt(textToDecrypt : string) {
        let decryptText = ''
        textToDecrypt.split('').forEach((char) => {
            const charCode = char.charCodeAt(0)
            const newCharCode = charCode - this.#span
            decryptText += String.fromCharCode(newCharCode)
        })

        return decryptText
    }
  
  }
  