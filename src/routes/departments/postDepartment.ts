import { Router, type Request, type Response } from 'express';
import constructDepartment from '../../controllers/departments/constructDepartment.controller';
import findDepartmentByCode from '../../controllers/departments/findDepartmentByCode.controller';
import type Department from '../../entities/Department';

const postDepartment: Router = Router();

postDepartment.post(
	'/',
	async (req: Request, res: Response): Promise<Response> => {
		const {
			body: { code },
			body,
		} = req;
		try {
			const foundDepartment: Department | null = await findDepartmentByCode(
				parseInt(code ?? '0')
			);

			const newDepartment: Department = await constructDepartment(body);

			return foundDepartment
				? res.status(409).json({
						message: `The department with code: ${foundDepartment?.code} already exists in the database`,
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

export default postDepartment;
