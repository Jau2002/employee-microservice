import type { ZodArray, ZodNumber, ZodObject, ZodString } from 'zod';
import type { CodeSchema } from '../code/code';
import type { EmployeeSchema } from '../employees/employee';

type DepartmentSchema = ZodObject<{
	code: ZodNumber;
	name: ZodString;
	estimate: ZodNumber;
	employees: ZodArray<EmployeeSchema, 'many'>;
}>;

type SchemaDepartmentRequest = ZodObject<{
	body: DepartmentSchema;
	params: CodeSchema;
}>;
