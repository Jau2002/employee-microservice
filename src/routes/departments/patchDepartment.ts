import { Router, type Request, type Response } from 'express';
import constructDepartment from '../../controllers/departments/constructDepartment.controller';
import findDepartmentByCode from '../../controllers/departments/findDepartmentByCode.controller';
import type Department from '../../entities/Department';
import type {
	BodyTypeDepartment,
	ParamsTypeDepartment,
} from '../../schemas/departments/department.schema';

const patchDepartment: Router = Router();

patchDepartment.patch(
	'/:code',
	async (
		req: Request<ParamsTypeDepartment, unknown, BodyTypeDepartment>,
		res: Response
	): Promise<Response> => {
		const {
			params: { code },
			body,
		} = req;

		try {
			const foundDepartment: Department | null = await findDepartmentByCode(
				parseInt(code ?? '0')
			);

			const department = await constructDepartment(body);

			return foundDepartment
				? res.status(200).json({
						message: 'Department found successfully',
						before: foundDepartment,
						data: department,
				  })
				: res.status(400).json({ message: 'The department does not exist' });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default patchDepartment;
