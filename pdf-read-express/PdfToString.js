import { unlink } from 'fs'
import Pdfparser from 'pdf2json'




export class PdfToString {


    #file
    #Pdfparser
    constructor(file) {
        this.#file = file
        this.Pdfparser = new Pdfparser()
    }

    async #ProcessPDF(resolve, reject) {

        this.Pdfparser.on("pdfParser_dataReady", (pdfData) => {
            let pdfContent = ''
            // let page of pdfData.Pages
            for (let page of pdfData.Pages) {
                for (let text of page.Texts) {
                    pdfContent += decodeURIComponent(text.R[0].T)
                }
            }
            resolve(pdfContent)
        })

        this.Pdfparser.on("pdfParser_dataError", error => {
            reject(error)
        })

        await this.Pdfparser.loadPDF('./pdf/' + this.#file)
        unlink('./pdf/' + this.#file,  (err) =>{
            if(err) throw err
            console.log('Arquivo Deletado');
        })
    }


    #FindContent(text=''){
        text.startsWith('')
    }


    ConvertToString() {
        return new Promise((resolve, reject) => {
            this.#ProcessPDF(resolve, reject)
        })
    }
}