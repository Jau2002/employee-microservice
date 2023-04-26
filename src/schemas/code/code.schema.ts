import { z, type ZodNumber, type ZodObject } from 'zod';

type CodeSchema = ZodObject<{
	code: ZodNumber;
}>;

export const codeSchema: CodeSchema = z.object({
	code: z.number().int().gte(1000000000).lte(9999999999),
});
