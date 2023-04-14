//        __
//     __----__
//    {   p p  }
//    {____||__}__
//      /  || \/ /
//     / /  - |_/
//     \_\    |
//      |= = =|
//      '-----'
//      |_) |_)

import AppDataSource from './db/dbConfig';
import app from './middlewares/app';
import type { Serve } from './types';

const PORT: number = parseInt(process.env.PORT) ?? 0;

AppDataSource.initialize()
	.then(
		(): Serve =>
			app.listen(PORT, 'localhost', function (): void {
				console.log(`http://localhost:${this.address().port}`);
			})
	)
	.catch((err: string): never => {
		throw new Error(err);
	});
