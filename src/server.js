import express from 'express';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`API está rodando na porta ${PORT}`);
});