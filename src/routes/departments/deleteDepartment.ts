import { Router, type Request, type Response } from 'express';
import findDepartmentByCode from '../../controllers/departments/findDepartmentByCode.controller';
import { removeDepartment } from '../../controllers/departments/removeDepartment.controller';
import type Department from '../../entity/Department';

const deleteDepartment: Router = Router();

deleteDepartment.delete(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const { code } = req.params;
		try {
			const foundDepartment: Department | null = await findDepartmentByCode(
				parseInt(code ?? '0')
			);

			if (foundDepartment !== null) {
				await removeDepartment(foundDepartment);
			}

			return !foundDepartment
				? res.status(400).json({ message: 'The department does not exist' })
				: res.status(204).json({
						message: `The employee identified with: ${foundDepartment.code} has been deleted successfully`,
				  });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default deleteDepartment;
