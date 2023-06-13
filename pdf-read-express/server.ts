import express, { Request, Response} from 'express'
import cors from 'cors'
import multer from 'multer'
import { PdfFormated } from './PdfFormated'


const app = express()
const upload = multer({dest: 'pdf/'})

app.use(express.json())
app.use(cors()) 


app.post('/', upload.single('file'), (request: Request, response:Response) =>{
    // console.log(request.file);

    const pdfFormated = new PdfFormated(request.file).Init()


    return response.json({ok: true})
})

app.listen(3333, () => {
    console.log('Server is Running!')
})