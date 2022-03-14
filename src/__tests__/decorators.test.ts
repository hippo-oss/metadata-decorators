import { getSchema } from '../storage';
import { Address, Location } from './fixtures';

describe('decorators', () => {
    it('define Address properties', () => {
        const properties = getSchema(Address);
        expect(properties).toMatchSnapshot();
    });
    it('define Location properties', () => {
        const properties = getSchema(Location);
        expect(properties).toMatchSnapshot();
    });
});
