import type { Response } from 'express';
import type { ThemeType } from 'morgan-body';
import type { AnyZodObject } from 'zod';

interface CorsOptions {
	origin: string;
	optionsSuccessStatus: number;
}

interface MorganBodyOptions {
	theme: ThemeType;
	logReqDateTime: boolean;
	logIP: boolean;
	logReqUserAgent: boolean;
	immediateReqLog: boolean;
}

interface Issue {
	path: Array<string | number>;
	message: string;
	code: string;
}

type ResponseMiddleware = Response<any, Record<string, any>> | any;

type ExpressFunction = (
	req: Request,
	res: Response,
	next: NextFunction
) => ResponseMiddleware;

type SchemaValidator = (schema: AnyZodObject) => ExpressFunction;
