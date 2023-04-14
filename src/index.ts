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

AppDataSource.initialize()
.catch((err: string): never => {
	throw new Error(err);
});
