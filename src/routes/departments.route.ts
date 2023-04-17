import { Router } from 'express';
import deleteDepartment from './departments/deleteDepartment';
import getAllDepartments from './departments/getAllDepartments';
import getFindFirstDepartment from './departments/getFindFirstDepartment';
import patchDepartment from './departments/patchDepartment';
import postDepartment from './departments/postDepartment';

const departmentsRoute: Router = Router();

departmentsRoute.use(getAllDepartments);

departmentsRoute.use(getFindFirstDepartment);

departmentsRoute.use(postDepartment);

departmentsRoute.use(patchDepartment);

departmentsRoute.use(deleteDepartment);

export default departmentsRoute;
