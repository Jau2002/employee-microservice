import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Department from '../entities/Department';
import Employee from '../entities/Employee';
import CustomNamingStrategy from './customNamingStrategy';

dotenv.config();

const { DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME, DB_USER } = process.env;

const AppDataSource = new DataSource({
	type: 'postgres',
	host: DB_HOST,
	port: parseInt(DB_PORT),
	username: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	synchronize: true,
	logging: false,
	entities: [Employee, Department],
	migrations: [],
	subscribers: [],
	namingStrategy: new CustomNamingStrategy(),
});

export default AppDataSource;
