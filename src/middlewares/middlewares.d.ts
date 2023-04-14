import type { ThemeType } from 'morgan-body';

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
