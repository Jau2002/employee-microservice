import type { NextFunction, Request, Response } from 'express';
import { ZodError, type AnyZodObject, type ZodIssue } from 'zod';
import type {
	ExpressFunction,
	Issue,
	ResponseMiddleware,
	SchemaValidator,
} from './middlewares';

const schemaValidator: SchemaValidator =
	(schema: AnyZodObject): ExpressFunction =>
	(req: Request, res: Response, next: NextFunction): ResponseMiddleware => {
		const { body, params } = req;

		try {
			schema.parse({ body, params });

			next();
		} catch (err) {
			if (err instanceof ZodError) {
				return res.status(400).json(
					err.issues.map(
						({ message, path, code }: ZodIssue): Issue => ({
							path,
							message,
							code,
						})
					)
				);
			}

			return res.status(404).json({ message: (err as Error).message });
		}
	};

export default schemaValidator;
