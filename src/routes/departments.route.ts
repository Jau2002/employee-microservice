import { Router, type Request, type Response } from 'express';
import {
  constructDepartment,
  getDepartmentsByCode,
  listAllDepartments,
} from '../controllers/departments.controller';
import type Department from '../entity/Department';

const departmentsRoute: Router = Router();

departmentsRoute.get(
	'/',
	async (_: Request, res: Response): Promise<Response> => {
		const departments: Department[] = await listAllDepartments();
		try {
			return res.status(200).json({
				message: `${departments.length} Employees found`,
				data: departments,
			});
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

departmentsRoute.get(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const { code } = req.params;

		const foundDepartment: Department | null = await getDepartmentsByCode(
			parseInt(code ?? '0')
		);
		try {
			return foundDepartment
				? res.status(200).json({
						message: 'Employee found successfully',
						data: foundDepartment,
				  })
				: res
						.status(400)
						.json({ message: 'The department does not exist in the database' });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

departmentsRoute.post(
	'/',
	async (req: Request, res: Response): Promise<Response> => {
		const { body } = req;

		const { code } = body;

		try {
			const foundDepartment: Department | null = await getDepartmentsByCode(
				parseInt(code ?? '0')
			);

			const newDepartment: Department = await constructDepartment(body);

			return foundDepartment
				? res
						.status(409)
						.json({
							message: `the department with code: ${foundDepartment?.code} already exists in the database`,
						})
				: res.status(200).json({
						message: 'The department has been created successfully',
						data: newDepartment,
				  });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default departmentsRoute;
