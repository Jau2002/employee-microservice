import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Department from '../../entity/Department';

async function listAllDepartments(): Promise<Department[]> {
	const departmentRepository: Repository<Department> =
		AppDataSource.getRepository(Department);

	const allEmployees: Department[] = await departmentRepository.find({
		order: {
			name: 'ASC',
		},
	});
	return allEmployees;
}

export default listAllDepartments;
