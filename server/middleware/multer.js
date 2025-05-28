import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });
console.log(upload);

export default upload;
