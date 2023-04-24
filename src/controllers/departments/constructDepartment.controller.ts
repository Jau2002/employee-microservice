import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Department from '../../entity/Department';

async function constructDepartment({
	code,
	name,
	estimate,
	employees,
}: Department): Promise<Department> {
	const departmentRepository: Repository<Department> =
		AppDataSource.getRepository(Department);

	const department = new Department(code, name, estimate, employees);

	const createDepartment: Department = await departmentRepository.save(
		department
	);
	return createDepartment;
}

export default constructDepartment;
