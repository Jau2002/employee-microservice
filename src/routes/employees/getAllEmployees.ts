import { Router, type Request, type Response } from 'express';
import findAllEmployees from '../../controllers/employees/findAllEmployees.controller';
import type Employee from '../../entity/Employee';

const getAllEmployees: Router = Router();

getAllEmployees.get(
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

export default getAllEmployees;
