import { z } from 'zod';
import { codeSchema } from '../code/code.schema';
import type { EmployeeSchema, SchemaEmployeeRequest } from './employee';

export const employeeSchema: EmployeeSchema = codeSchema.extend({
	name: z.string().nonempty().trim(),
	nif: z.string().length(9).trim(),
	firstLastName: z.string().trim(),
	secondLastName: z.string().trim(),
	department: z.number().int().gte(1000000000).lte(9999999999),
});

export const schemaEmployeeRequest: SchemaEmployeeRequest = z.object({
	body: employeeSchema,
	params: codeSchema,
});

export type BodyTypeEmployee = z.infer<typeof schemaEmployeeRequest>['body'];

export type ParamsTypeEmployee = z.infer<
	typeof schemaEmployeeRequest
>['params'];
