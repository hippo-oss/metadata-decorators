import {
    NOOP_DECORATORS,
    DTODecoratorFactories,
    DTODecoratorName,
    DTODecoratorOptions,
    PropertyDecoratorFactory,
    Target,
    isClass,
} from '@hippo-oss/dto-decorators';

import { putProperty } from './storage';
import { DTOSchemaProperty } from './types';

/* Create a property decorator that saves schema metadata.
 *
 * The decorator's `target` MUST be a class.
 */
export function storeMetadata<Name extends DTODecoratorName>(
    name: Name,
): PropertyDecoratorFactory<DTODecoratorOptions<Name>> {
    return (options: DTODecoratorOptions<Name>): PropertyDecorator => {
        const property = {
            name,
            options,
        } as DTOSchemaProperty;

        return (target: Target, propertyKey: string | symbol): void => {
            if (!isClass(target)) {
                putProperty(target, propertyKey, property);
            } else {
                putProperty(target.constructor, propertyKey, property);
            }
        };
    };
}

/* Define dto decorator factories that saves decorator metadata.
 */
export const METADATA_DECORATORS: DTODecoratorFactories = Object.keys(NOOP_DECORATORS).reduce(
    (acc, name) => ({
        ...acc,
        [name]: storeMetadata(name as keyof DTODecoratorFactories),
    }),
    {} as DTODecoratorFactories,
);
