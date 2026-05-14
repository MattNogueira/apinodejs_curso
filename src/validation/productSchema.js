import { z } from 'zod';

export const productCreateSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "O nome deve ter pelo menos 3 caracteres")
        .max(80, "O nome deve ter no máximo 80 caracteres"),
    price_cents: z
        .number()
        .int("O preço deve ser um número inteiro")
        .min(100, "O preço deve ser no mínimo 1 real (100 centavos)")
        .max(1_000_000, "O preço deve ser no máximo 10.000 reais (1.000.000 centavos)"),
    published: z.boolean().default(false),
})