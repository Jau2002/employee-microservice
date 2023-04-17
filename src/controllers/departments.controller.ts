import type { Repository } from 'typeorm';
import AppDataSource from '../config/db';
import Department from '../entity/Department';

const departmentRepository: Repository<Department> =
	AppDataSource.getRepository(Department);

export async function listAllDepartments(): Promise<Department[]> {
	const allEmployees: Department[] = await departmentRepository.find({
		order: {
			name: 'ASC',
		},
	});
	return allEmployees;
}

export async function getDepartmentsByCode(
	code: number
): Promise<Department | null> {
	const findDepartment: Department | null = await departmentRepository.findOne({
		where: {
			code,
		},
	});
	return findDepartment;
}
