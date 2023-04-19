import { Router, type Request, type Response } from 'express';

const healthCheck: Router = Router();

healthCheck.get(
	'/',
	(_: Request, res: Response): Response =>
		res.status(200).json({ message: 'The server is running' })
);

export default healthCheck;
