import express, { Request, Response} from 'express'
import cors from 'cors'
import { PdfFormated } from './PdfFormated'
import { upload } from './configMulter'


const app = express()


app.use(express.json())
app.use(cors()) 


app.post('/', upload.single('file'), (request: Request, response:Response) =>{

    const pdfFormated = new PdfFormated(request.file.filename)

    return response.json({ok: true})
})

app.listen(3333, () => {
    console.log('Server is Running!')
})