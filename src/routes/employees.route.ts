import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware';
import { schemaEmployeeRequest } from '../schemas/employees/employee.schema';
import deleteEmployee from './employees/deleteEmployee';
import getAllEmployees from './employees/getAllEmployees';
import getFindEmployee from './employees/getFindEmployee';
import patchEmployee from './employees/patchEmployee';
import postEmployee from './employees/postEmployee';

const employeesRoute: Router = Router();

employeesRoute.use(getAllEmployees);

employeesRoute.use(
	schemaValidator(schemaEmployeeRequest.deepPartial()),
	getFindEmployee
);

employeesRoute.use(
	schemaValidator(schemaEmployeeRequest.deepPartial()),
	postEmployee
);

employeesRoute.use(
	schemaValidator(schemaEmployeeRequest.deepPartial()),
	patchEmployee
);

employeesRoute.use(
	schemaValidator(schemaEmployeeRequest.deepPartial()),
	deleteEmployee
);

export default employeesRoute;
