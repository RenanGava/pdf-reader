import Pdfparser from 'pdf2json'




export class PdfToString {


    #file
    #Pdfparser
    constructor(file) {
        this.#file = file
        this.Pdfparser = new Pdfparser()
    }

    #ProcessPDF(resolve, reject) {

        this.Pdfparser.on("pdfParser_dataReady", (pdfData) => {
            let pdfContent = ''
            // let page of pdfData.Pages
            for (let page of pdfData.Pages) {
                for (let text of page.Texts) {
                    pdfContent += decodeURIComponent(text.R[0].T)
                }
            }

            console.log(pdfContent);
            resolve(pdfContent.split('Material para uso exclusivo de aluno matriculado em curso de Educação a Distância da Rede Senac EAD, da disciplina correspondente. Proibida a reprodução e o compartilhamento digital, sob as penas da Lei. © Editora Senac São Paulo.'))
        })

        this.Pdfparser.on("pdfParser_dataError", error => {
            reject(error)
        })

        this.Pdfparser.loadPDF('./pdf/' + this.#file)
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