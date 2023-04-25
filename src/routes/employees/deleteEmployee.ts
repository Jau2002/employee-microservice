import { Router, type Request, type Response } from 'express';
import findByCodeEmployee from '../../controllers/employees/findByCodeEmployee.controller';
import removeEmployee from '../../controllers/employees/removeEmployee.controller';
import type Employee from '../../entities/Employee';

const deleteEmployee: Router = Router();

deleteEmployee.delete(
	'/:code',
	async (req: Request, res: Response): Promise<Response> => {
		const { code } = req.params;
		try {
			const employeeFound: Employee | null = await findByCodeEmployee(
				parseInt(code ?? '0')
			);

			if (employeeFound !== null) {
				await removeEmployee(employeeFound);
			}

			return !employeeFound
				? res
						.status(400)
						.json({ message: 'The employee does not exist in the database' })
				: res.status(204).json({
						message: 'The employee has been deleted successfully',
				  });
		} catch (err) {
			return res.status(404).json({ message: (err as Error).message });
		}
	}
);

export default deleteEmployee;
