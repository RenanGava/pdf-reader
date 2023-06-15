import fs from 'fs'
import Pdfparser from 'pdf2json'
import { Readable } from 'stream'




export class PdfToString {


    #file
    #Pdfparser
    constructor(file) {
        this.#file = file
        this.Pdfparser = new Pdfparser()
    }

    ProcessPDF(resolve, reject) {
        
        this.Pdfparser.on("pdfParser_dataReady", (pdfData) => {
            let pdfContent = ''

            for (let page of pdfData.Pages) {
                for(let text of page.Texts){
                    pdfContent += decodeURIComponent(text.R[0].T)
                }
            }

            resolve(pdfContent)
        })

        this.Pdfparser.on("pdfParser_dataError", error =>{
            reject(error)
        })

        this.Pdfparser.loadPDF('./pdf/' + this.#file)
    }


    ConvertToString(){
        return new Promise((resolve, reject) =>{
            this.ProcessPDF(resolve, reject)
        })
    }
}