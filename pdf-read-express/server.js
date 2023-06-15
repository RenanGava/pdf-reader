import express from 'express'
import cors from 'cors'
import { PdfFormated } from './PdfFormated.js';

import { upload } from './configMulter.js'
const app = express()


app.use(express.json())
app.use(cors())


app.post('/', upload.single('file'), (request, response) => {

    console.log(request.file)

    const pdfFormated = new PdfFormated(request.file.filename).ParseStringLines()

    return response.json({ ok: true })
})

app.listen(3333, () => {
    console.log('Server is Running!')
})