import multer from 'multer'
import { resolve } from 'path'
import crypto from 'crypto'


const MulterUpload = multer.diskStorage({
    destination: __dirname + '/pdf',
    filename: (req, file, cb) =>{
        const fileHash = crypto.randomBytes(16).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`

        cb(null, fileName)
    }
})

export const upload = multer({storage: MulterUpload})