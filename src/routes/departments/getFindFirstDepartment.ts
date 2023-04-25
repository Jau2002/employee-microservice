import { Router, type Request, type Response } from 'express';
import findDepartmentByCode from '../../controllers/departments/findDepartmentByCode.controller';
import type Department from '../../entities/Department';

const getFindFirstDepartment: Router = Router();

getFindFirstDepartment.get(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const { code } = req.params;
		try {
			const foundDepartment: Department | null = await findDepartmentByCode(
				parseInt(code ?? '0')
			);

			return foundDepartment
				? res.status(200).json({
						message: 'Department found successfully',
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

export default getFindFirstDepartment;
