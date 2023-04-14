import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}

export default Employee;
