import { Router, type Request, type Response } from 'express';
import { getDepartmentsByCode } from '../controllers/departments.controller';
import {
	builderEmployee,
	findAllEmployees,
	findByCodeEmployee,
	removeEmployee,
} from '../controllers/employees.controller';
import type Department from '../entity/Department';
import type Employee from '../entity/Employee';

const employeesRoute: Router = Router();

employeesRoute.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		try {
			const employees: Employee[] = await findAllEmployees();

			return res.status(200).json({
				message: `${employees.length} Employees found`,
				data: employees,
			});
		} catch (err) {
			return res.status(400).json({ message: (err as Error).message });
		}
	}
);

employeesRoute.get(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const { code } = req.params;
		try {
			const employee: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);
			return employee
				? res
						.status(200)
						.json({ message: 'Employee found successfully', data: employee })
				: res
						.status(400)
						.json({ message: 'The employee does not exist in the database' });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

employeesRoute.post(
	'/',
	async (req: Request, res: Response): Promise<Response> => {
		const {
			body: { code, department },
			body,
		} = req;
		try {
			const employeeFound: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);

			if (employeeFound) {
				return res.status(409).json({
					message: `The employee with code: ${employeeFound.code} already exists in the database`,
				});
			}

			const foundDepartment: Department | null = await getDepartmentsByCode(
				parseInt(department ?? '0')
			);

			if (!foundDepartment) {
				return res.status(400).json({
					message: 'The department does not exist',
				});
			}

			const employee: Employee = await builderEmployee(body);

			return res.status(200).json({
				message: 'The employee has been created successfully',
				data: employee,
			});
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

employeesRoute.patch(
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
					.status(400)
					.json({ message: 'The employee does not exist in the database' });
			}

			const foundDepartment: Department | null = await getDepartmentsByCode(
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

employeesRoute.delete(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const { code } = req.params;
		try {
			const employeeFound: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);

			if (employeeFound !== null) {
				await removeEmployee(employeeFound);
			}

			return !employeeFound
				? res
						.status(400)
						.json({ message: 'The employee does not exist in the database' })
				: res.status(204).json({
						message: `The employee identified with: ${employeeFound.code} has been deleted successfully`,
				  });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default employeesRoute;
