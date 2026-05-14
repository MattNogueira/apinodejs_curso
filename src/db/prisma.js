import "dotenv/config";
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const url = process.env.SQLITE_PATH;
const adapter = new PrismaBetterSqlite3({ url });

export const prisma = new PrismaClient({ adapter });

process.on("beforeExit", async () => {
  await prisma.$disconnect();
});