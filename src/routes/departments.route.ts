import { Router, type Request, type Response } from 'express';
import { listAllDepartments } from '../controllers/departments.controller';
import type Department from '../entity/Department';

const departmentsRoute: Router = Router();

departmentsRoute.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		const departments: Department[] = await listAllDepartments();
		try {
			return res
				.status(200)
				.json({
					message: `${departments.length} Employees found`,
					data: departments,
				});
		} catch (err) {
			return res.status(400).json({ message: (err as Error).message });
		}
	}
);

export default departmentsRoute;
