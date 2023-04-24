import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Employee from '../../entity/Employee';

async function findByCodeEmployee(code: number): Promise<Employee | null> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	const allEmployees: Employee | null = await employeeRepository.findOne({
		where: {
			code,
		},
		relations: ['department'],
	});
	return allEmployees;
}

export default findByCodeEmployee;
