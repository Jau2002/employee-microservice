import { Router } from 'express';
import deleteEmployee from './employees/deleteEmployee';
import getAllEmployees from './employees/getAllEmployees';
import getFindEmployee from './employees/getFindEmployee';
import patchEmployee from './employees/patchEmployee';
import postEmployee from './employees/postEmployee';

const employeesRoute: Router = Router();

employeesRoute.use(getAllEmployees);

employeesRoute.use(getFindEmployee);

employeesRoute.use(postEmployee);

employeesRoute.use(patchEmployee);

employeesRoute.use(deleteEmployee);

export default employeesRoute;
