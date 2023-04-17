import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Employee from '../../entity/Employee';

async function findAllEmployees(): Promise<Employee[]> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	const allEmployees: Employee[] = await employeeRepository.find({
		order: {
			name: 'ASC',
		},
	});
	return allEmployees;
}

export default findAllEmployees;
