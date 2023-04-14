import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Department from './Department';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

@Entity()
class Employee {
	@PrimaryColumn({ primary: true, width: 10, type: 'int' })
	code: number;

	@Column({ length: 9, type: 'varchar' })
	nif: string;

	@Column({ length: 100, type: 'varchar' })
	name: string;

	@Column({ length: 100, type: 'varchar' })
	firstLastName: string;

	@Column({ length: 100, type: 'varchar' })
	secondLastName: string;

	@ManyToOne(
		(): typeof Department => Department,
		(department: Department): number => department.code,
		{ cascade: true }
	)
	@JoinColumn({ name: 'department_code' })
	department: number;
}

export default Employee;
