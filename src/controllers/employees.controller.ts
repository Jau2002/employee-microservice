import type { Repository } from 'typeorm';
import AppDataSource from '../db/dbConfig';
import Employee from '../entity/Employee';

export async function findAllEmployees(): Promise<Employee[]> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	const allEmployees: Employee[] = await employeeRepository.find({
		order: {
			name: 'ASC',
		},
	});
	return allEmployees;
}

export async function findByCodeEmployee(
	code: number
): Promise<Employee | null> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	const allEmployees: Employee | null = await employeeRepository.findOne({
		where: {
			code,
		},
	});
	return allEmployees;
}
