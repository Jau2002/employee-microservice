import { Router, type Request, type Response } from 'express';
import constructDepartment from '../../controllers/departments/constructDepartment.controller';
import findDepartmentByCode from '../../controllers/departments/findDepartmentByCode.controller';
import builderEmployee from '../../controllers/employees/builderEmployee.controller';
import findByCodeEmployee from '../../controllers/employees/findByCodeEmployee.controller';
import type Department from '../../entities/Department';
import type Employee from '../../entities/Employee';
import type { BodyTypeEmployee } from '../../schemas/employees/employee.schema';

const postEmployee: Router = Router();

postEmployee.post(
	'/',
	async (
		req: Request<unknown, unknown, BodyTypeEmployee>,
		res: Response
	): Promise<Response> => {
		const {
			body: { code, department },
			body,
		} = req;

		try {
			const employeeFound: Employee | null = await findByCodeEmployee(code);

			if (employeeFound) {
				return res.status(409).json({
					message: `The employee with code: ${employeeFound.code} already exists in the database`,
				});
			}

			const foundDepartment: Department | null = await findDepartmentByCode(
				department
			);

			if (!foundDepartment) {
				return res.status(400).json({
					message: 'The department does not exist',
				});
			}

			const employee: Employee = await builderEmployee(body);

			const injectDepartment: any = {
				code: foundDepartment.code,
				estimate: foundDepartment.estimate,
				name: foundDepartment.name,
				employees: employee,
			};

			await constructDepartment(injectDepartment);

			return res.status(200).json({
				message: 'The employee has been created successfully',
				data: employee,
			});
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default postEmployee;
