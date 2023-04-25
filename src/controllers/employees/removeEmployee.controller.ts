import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Employee from '../../entities/Employee';

async function removeEmployee(employee: Employee): Promise<void> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	await employeeRepository.remove(employee);
}

export default removeEmployee;
