//Puerto

process.env.PORT = process.env.PORT || 3000;


// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cursoNode';
} else {
    urlDB = process.env.NODE_ENV.MONGO_URL;
    // 'mongodb+srv://smith8776:Ls13246102@cluster0.hcptq.mongodb.net/cursoNode'
}

process.env.URLDB = urlDB;