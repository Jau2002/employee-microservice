import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Department from '../../entity/Department';

async function constructDepartment({
	code,
	employees,
	estimate,
	name,
}: Department): Promise<Department> {
  const departmentRepository: Repository<Department> =
	AppDataSource.getRepository(Department);
  
	const createDepartment: Department = await departmentRepository.save({
		code,
		employees,
		estimate,
		name,
	});
	return createDepartment;
}

export default constructDepartment