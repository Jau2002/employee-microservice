import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Employee from './Employee';

@Entity()
class Department {
	constructor(
		code: number,
		name: string,
		estimate: number,
		employees?: Employee[]
	) {
		this.code = code;
		this.name = name;
		this.estimate = estimate;
		this.employees = employees;
	}

	@PrimaryColumn({ primary: true, width: 10, type: 'int' })
	code;

	@Column({ length: 100, type: 'varchar' })
	name;

	@Column({ type: 'float8' })
	estimate;

	@ManyToOne(
		(): typeof Employee => Employee,
		(employee: Employee): number => employee.code,
		{ cascade: true }
	)
	employees;
}

export default Department;
