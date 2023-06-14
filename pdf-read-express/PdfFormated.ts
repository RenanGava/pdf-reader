

export class PdfFormated {

    private pdfFile: string

    constructor(fileName: string) {
        this.pdfFile = '/pdf' + fileName
    }

    async Init(){
        console.log(this.pdfFile);
    }
}