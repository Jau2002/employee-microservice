import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Employee from '../../entity/Employee';

async function builderEmployee(
	{ code, department, firstLastName, name, nif, secondLastName }: Employee,
	EmployeeCode?: number
): Promise<Employee> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	const createEmployee: Employee = await employeeRepository.save({
		code: code ?? EmployeeCode,
		department,
		firstLastName,
		name,
		nif,
		secondLastName,
	});
	return createEmployee;
}

export default builderEmployee;
