import "express-async-errors"
import express from 'express'
import cors from 'cors'
import { PdfToString } from './PdfToString.js';

import { upload } from './configMulter.js'
const app = express()


app.use(express.json())
app.use(cors())


app.post('/', upload.single('file'), (request, response) => {

    // console.log(request.file.filename)

    const pdfFormated = new PdfToString(request.file.filename)

    pdfFormated.ConvertToString().then( pdfContent =>{
        return response.json({text: pdfContent})
    }).catch( error =>{
        console.log(error);
    })

})

app.use((error, request, response, next) =>{

    console.log(error);

    return response.json({
        status: "Error ",
        message: error.message,
    })

})

app.listen(3333, () => {
    console.log('Server is Running!')
})