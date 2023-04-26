import { Router } from 'express';
import schemaValidator from '../middlewares/schemaValidator.middleware';
import { schemaDepartmentRequest } from '../schemas/departments/department.schema';
import deleteDepartment from './departments/deleteDepartment';
import getAllDepartments from './departments/getAllDepartments';
import getFindFirstDepartment from './departments/getFindFirstDepartment';
import patchDepartment from './departments/patchDepartment';
import postDepartment from './departments/postDepartment';

const departmentsRoute: Router = Router();

departmentsRoute.use(getAllDepartments);

departmentsRoute.use(
	schemaValidator(schemaDepartmentRequest.deepPartial()),
	getFindFirstDepartment
);

departmentsRoute.use(
	schemaValidator(schemaDepartmentRequest.deepPartial()),
	postDepartment
);

departmentsRoute.use(
	schemaValidator(schemaDepartmentRequest.deepPartial()),
	patchDepartment
);

departmentsRoute.use(
	schemaValidator(schemaDepartmentRequest.deepPartial()),
	deleteDepartment
);

export default departmentsRoute;
