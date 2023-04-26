import { z } from 'zod';
import { codeSchema } from '../code/code.schema';
import { employeeSchema } from '../employees/employee.schema';
import type { DepartmentSchema, SchemaDepartmentRequest } from './department';

const departmentSchema: DepartmentSchema = codeSchema.extend({
	name: z.string().nonempty().trim(),
	estimate: z.number().nonnegative(),
	employees: employeeSchema.array(),
});

export const schemaDepartmentRequest: SchemaDepartmentRequest = z.object({
	body: departmentSchema,
	params: codeSchema,
});

export type BodyTypeDepartment = z.infer<
	typeof schemaDepartmentRequest
>['body'];

export type ParamsTypeDepartment = z.infer<
	typeof schemaDepartmentRequest
>['params'];
