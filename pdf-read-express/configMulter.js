import multer from 'multer'
import crypto from 'crypto'

const MulterUpload = multer.diskStorage({
    destination:'./pdf',
    filename: (req, file, cb) =>{
        if(!file){
            return null
        }
        const fileHash = crypto.randomBytes(16).toString('hex')
        const fileName = `${fileHash}-${file.originalname}`
        cb(null, fileName)
    }
})

export const upload = multer({storage: MulterUpload})