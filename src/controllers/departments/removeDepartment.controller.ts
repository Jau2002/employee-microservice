import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Department from '../../entity/Department';

export async function removeDepartment(department: Department): Promise<void> {
  const departmentRepository: Repository<Department> =
	AppDataSource.getRepository(Department);
  
	await departmentRepository.remove(department);
}
