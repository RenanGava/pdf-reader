import multer from 'multer'
import crypto from 'crypto'
import path from 'path'



const MulterUpload = multer.diskStorage({
    destination: path.__dirname + '/pdf',
    filename: (req, file, cb) =>{
        const fileHash = crypto.randomBytes(16).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`


        cb(null, fileName)
    }
})

export const upload = multer({storage: MulterUpload})