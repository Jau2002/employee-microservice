import { Router, type Request, type Response } from 'express';
import {
	builderEmployee,
	findAllEmployees,
	findByCodeEmployee,
} from '../controllers/employees.controller';
import type Employee from '../entity/Employee';

const employeesRoute: Router = Router();

employeesRoute.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		const employees: Employee[] = await findAllEmployees();

		try {
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

		const employee: Employee | null = await findByCodeEmployee(
			parseInt(code ?? '0')
		);
		try {
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
		const { body } = req;

		const { code } = body;
		try {
			const employeeFound: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);

			if (employeeFound) {
				return res.status(409).json({
					message: `the employee with code: ${employeeFound.code} already exists in the database`,
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

export default employeesRoute;
