import { PrismaClient } from "./generated/prisma/client"; // Ensure this path matches your schema output
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// 1. Initialize the connection pool
const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});

// 2. Initialize the adapter
const adapter = new PrismaPg(pool);

// 3. Create the Prisma Client with the adapter
export const prisma = new PrismaClient({ adapter });