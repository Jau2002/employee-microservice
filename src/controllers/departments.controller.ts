import type { Repository } from 'typeorm';
import AppDataSource from '../db/dbConfig';
import Department from '../entity/Department';

export async function listAllDepartments(): Promise<Department[]> {
	const departmentRepository: Repository<Department> =
		AppDataSource.getRepository(Department);

	const allEmployees: Department[] = await departmentRepository.find({
		order: {
			name: 'ASC',
		},
	});
	return allEmployees;
}
