import {createReadStream, createWriteStream} from "fs"
import path from "path"
import Pdfparser from 'pdf2json'
import StringfyStream from 'stringifystream'


class PdfFormated {

    #pdfFile
    #chunk_
    constructor(fileName) {
        this.pdfFile = fileName
        this.#chunk_ = []
    }

    async ParseStringLines() {
        const pdfParser = new Pdfparser()
        const input = createReadStream('pdf/'+this.pdfFile)
        input.pipe(pdfParser.createParserStream()).on('data', (stream) => {
            console.log(stream.Pages[0].Texts[0].R);
            stream.Pages.forEach( (page, index, array)=> {
                this.#chunk_.push(page)
            });
        })

        console.log(this.#chunk_);
    }


    async DecodedStringStream(string){

    }

}
export { PdfFormated }