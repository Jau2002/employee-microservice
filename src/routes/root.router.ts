import { Router } from 'express';
import employeesRoute from './employees.route';

const rootRoute: Router = Router();

rootRoute.use('/employees', employeesRoute);

export default rootRoute;
