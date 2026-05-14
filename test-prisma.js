import { prisma } from "./src/db/prisma.js";

async function main() {
  try {
    console.log("Testando conexão...");

    // 1️⃣ Teste mais básico possível
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("Raw query OK:", result);

    // 2️⃣ Teste no model
    const products = await prisma.product.findMany();
    console.log("Model query OK:", products);

    console.log("Tudo funcionando, meow 😼");
  } catch (err) {
    console.error("Erro ao testar Prisma:");
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
}

main();