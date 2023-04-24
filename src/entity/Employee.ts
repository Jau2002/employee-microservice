import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Department from './Department';

@Entity()
class Employee {
	constructor(
		code: number,
		nif: string,
		name: string,
		firstLastName: string,
		secondLastName: string,
		department: number
	) {
		this.code = code;
		this.nif = nif;
		this.name = name;
		this.firstLastName = firstLastName;
		this.secondLastName = secondLastName;
		this.department = department;
	}

	@PrimaryColumn({ primary: true, width: 10, type: 'int' })
	code;

	@Column({ length: 9, type: 'varchar' })
	nif;

	@Column({ length: 100, type: 'varchar' })
	name;

	@Column({ length: 100, type: 'varchar' })
	firstLastName;

	@Column({ length: 100, type: 'varchar' })
	secondLastName;

	@ManyToOne(
		(): typeof Department => Department,
		(department: Department): number => department.code,
		{ cascade: true }
	)
	@JoinColumn({ name: 'department_code' })
	department;
}

export default Employee;
