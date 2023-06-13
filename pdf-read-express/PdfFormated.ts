

export class PdfFormated {

    private pdfFile: Express.Multer.File

    constructor(file: Express.Multer.File) {
        this.pdfFile = file
    }

    async Init(){
        console.log(this.pdfFile);
    }
}