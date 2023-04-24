import { Router, type Request, type Response } from 'express';
import listAllDepartments from '../../controllers/departments/listAllDepartments.controller';
import type Department from '../../entity/Department';

const getAllDepartments: Router = Router();

getAllDepartments.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		try {
			const departments: Department[] = await listAllDepartments();

			return res.status(200).json({
				message: `${departments.length} Departments found`,
				data: departments,
			});
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default getAllDepartments;
