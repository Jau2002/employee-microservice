import cors from 'cors';
import express, { type Application } from 'express';
import morganBody from 'morgan-body';
import swaggerUi from 'swagger-ui-express';
import rootRoute from '../routes/root.router';
import type { CorsOptions, MorganBodyOptions } from './middlewares';
import swaggerDocument from './swagger.json';

const app: Application = express();

const { json } = express;

app.use(json({ strict: true }));

const corsOptions: CorsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const morganBodyOptions: MorganBodyOptions = {
	theme: 'inverted',
	logReqDateTime: false,
	logIP: false,
	logReqUserAgent: false,
	immediateReqLog: false,
};

morganBody(app, morganBodyOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', rootRoute);

export default app;
