import { Router, type Request, type Response } from 'express';
import { findAllEmployees } from '../controllers/employees.controller';
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

export default employeesRoute;
