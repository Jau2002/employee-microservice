import { Router, type Request, type Response } from 'express';
import findDepartmentByCode from '../../controllers/departments/findDepartmentByCode.controller';
import builderEmployee from '../../controllers/employees/builderEmployee.controller';
import findByCodeEmployee from '../../controllers/employees/findByCodeEmployee.controller';
import type Department from '../../entities/Department';
import type Employee from '../../entities/Employee';

const patchEmployee: Router = Router();

patchEmployee.patch(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const {
			params: { code },
			body,
			body: { department },
		} = req;
		try {
			const employeeFound: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);

			if (!employeeFound) {
				return res
					.status(409)
					.json({ message: 'The employee does not exist in the database' });
			}

			const foundDepartment: Department | null = await findDepartmentByCode(
				parseInt(department ?? '0')
			);

			if (!foundDepartment) {
				return res.status(400).json({
					message: 'The department does not exist',
				});
			}

			const employee: Employee = await builderEmployee(
				body,
				employeeFound.code
			);

			return res.status(200).json({
				message: 'Employee found successfully',
				data: employee,
				before: employeeFound,
			});
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default patchEmployee;
