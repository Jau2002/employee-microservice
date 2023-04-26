import { Router, type Request, type Response } from 'express';
import findByCodeEmployee from '../../controllers/employees/findByCodeEmployee.controller';
import type Employee from '../../entities/Employee';
import type { ParamsTypeEmployee } from '../../schemas/employees/employee.schema';

const getFindEmployee: Router = Router();

getFindEmployee.get(
	'/:code',
	async (
		req: Request<ParamsTypeEmployee>,
		res: Response
	): Promise<Response> => {
		const { code } = req.params;

		try {
			const employee: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);

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

export default getFindEmployee;
