import type { Repository } from 'typeorm';
import AppDataSource from '../../config/db';
import Employee from '../../entities/Employee';

async function builderEmployee(
	{ code, department, firstLastName, name, nif, secondLastName }: Employee,
	EmployeeCode?: number
): Promise<Employee> {
	const employeeRepository: Repository<Employee> =
		AppDataSource.getRepository(Employee);

	const employee = new Employee(
		code ?? EmployeeCode,
		nif,
		name,
		firstLastName,
		secondLastName,
		department
	);

	const createEmployee: Employee = await employeeRepository.save(employee);

	return createEmployee;
}

export default builderEmployee;
