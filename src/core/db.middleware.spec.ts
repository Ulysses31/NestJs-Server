import { DbMiddleware } from './db.middleware';

describe('DbMiddleware', () => {
	it('should be defined', () => {
		expect(new DbMiddleware()).toBeDefined();
	});
});
