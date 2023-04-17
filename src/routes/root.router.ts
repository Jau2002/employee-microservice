import { Router } from 'express';
import departmentsRoute from './departments.route';
import employeesRoute from './employees.route';

const rootRoute: Router = Router();

rootRoute.use('/employees', employeesRoute);

rootRoute.use('/departaments', departmentsRoute);

export default rootRoute;
