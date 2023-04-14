import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import Employee from './Employee';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

@Entity()
class Department {
	@PrimaryColumn({ primary: true, width: 10, type: 'int' })
	code: number;

	@Column({ length: 100, type: 'varchar' })
	name: string;

	@Column({ type: 'float8' })
	estimate: number;

	@ManyToOne(
		(): typeof Employee => Employee,
		(employee: Employee): number => employee.code,
		{ cascade: true }
	)
	employees: Employee[];
}

export default Department;
