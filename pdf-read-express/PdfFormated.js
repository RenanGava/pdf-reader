import {createReadStream} from "fs"
import path from "path"
import Pdfparser from 'pdf2json'


class PdfFormated {

    #pdfFile

    constructor(fileName) {
        this.pdfFile = path.__dirname + '/pdf/' + fileName
    }

    async ParseStringLines() {

        const pdfParser = new Pdfparser()
        const input = createReadStream(this.pdfFile, {
            encoding: "base64",

        })
        input.pipe(pdfParser.createParserStream()).on('data', (chunk) => {
            console.log(chunk);
        })
    }
}
export { PdfFormated }