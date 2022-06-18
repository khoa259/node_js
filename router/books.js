import { Router } from "express";
import { createBook, deleteBook, listBook, listBookDetail, updateBook } from "../controllers/books";


const bookRoute =  Router();

bookRoute.get('/books',listBook)
bookRoute.get('/books/:id',listBookDetail)
bookRoute.post('/books',createBook)
bookRoute.delete('/books/:id',deleteBook)
bookRoute.put('/books/:id',updateBook)

export default bookRoute