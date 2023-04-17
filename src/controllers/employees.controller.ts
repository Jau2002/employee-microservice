import type { Repository } from 'typeorm';
import AppDataSource from '../config/db';
import Employee from '../entity/Employee';

const employeeRepository: Repository<Employee> =
	AppDataSource.getRepository(Employee);

export async function findAllEmployees(): Promise<Employee[]> {
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
	const allEmployees: Employee | null = await employeeRepository.findOne({
		where: {
			code,
		},
	});
	return allEmployees;
}

export async function builderEmployee(
	{ code, department, firstLastName, name, nif, secondLastName }: Employee,
	EmployeeCode?: number
): Promise<Employee> {
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

export async function removeEmployee(employee: Employee): Promise<void> {
	await employeeRepository.remove(employee);
}
