import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Department from '../../entities/Department';

async function findDepartmentByCode(code: number): Promise<Department | null> {
	const departmentRepository: Repository<Department> =
		AppDataSource.getRepository(Department);

	const findDepartment: Department | null = await departmentRepository.findOne({
		where: {
			code,
		},
		relations: ['employees'],
	});
	return findDepartment;
}

export default findDepartmentByCode;
