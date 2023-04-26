import type { ZodNumber, ZodObject, ZodString } from 'zod';
import type { CodeSchema } from '../code/code';

type EmployeeSchema = ZodObject<{
	code: ZodNumber;
	name: ZodString;
	nif: ZodString;
	firstLastName: ZodString;
	secondLastName: ZodString;
	department: ZodNumber;
}>;

type SchemaEmployeeRequest = ZodObject<{
	body: EmployeeSchema;
	params: CodeSchema;
}>;
