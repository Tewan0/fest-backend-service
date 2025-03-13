//จัดการ DB
const {PrismaClient} = require('@prisma/client');
//จัดการ Upload
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { info } = require('console');

//ตัวแปรอ้างอิงสำหรับ prisma เพื่อเอาไปทำงาน
const prisma = new PrismaClient();

//การอัปโหลดไฟล์-------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/users");
    },
    filename: (req, file, cb) => {
        cb(null, 'user_'+ Math.floor(Math.random()* Date.now()) + path.extname(file.originalname));
    }
})
exports.uploadUser = multer({
     storage: storage,
     limits: {
         fileSize: 1000000
     },
     fileFilter: (req, file, cb) => {
         const fileTypes = /jpeg|jpg|png/;
         const mimeType = fileTypes.test(file.mimetype);
         const extname = fileTypes.test(path.extname(file.originalname));
         if(mimeType && extname) {
             return cb(null, true);
         }
         cb("Error: Images Only");
     }
}).single("userImage");
//--------------------------------

//เอาข้อมูลที่ส่งมาจาก Frontend เพิ่ม (Create/Insert) ลงในตาราง DB--------------------
exports.createUser = async (req, res) => {
    try {
        //-----------
        const result = await prisma.user_tb.create({
            data: {
                userFullname: req.body.userFullname,
                userName: req.body.userName,
                userPassword: req.body.userPassword,
                userImage: req.file ? req.file.path.replace('\\images\\users\\', '') : "",
            }
        });
        //-----------
        res.status(201).json({
            message: "Success",
            info: result
        })
    } catch (error) {
        res.status(500).json({
            message: `Error: ${error}`
        });
        console.log(`Error: ${error}`);
    }
}
//-----------------------------------------------------------------------------