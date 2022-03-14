import { Target } from '@hippo-oss/dto-decorators';
import 'reflect-metadata';

import { DTOSchema, DTOSchemaProperty } from '../types';
import { METADATA_KEY } from './storage.constants';

/* Save schema metadata.
 */
export function putSchema<T>(
    target: Target,
    schema: DTOSchema<T>,
): void {
    Reflect.defineMetadata(
        METADATA_KEY,
        schema,
        target,
    );
}

/* Get schema metadata.
 */
export function getSchema<T>(
    target: Target,
): DTOSchema<T> | undefined {
    const schema = Reflect.getMetadata(
        METADATA_KEY,
        target,
    ) as unknown;

    if (schema === undefined) {
        return undefined;
    }

    return schema as DTOSchema<T>;
}

/* Save option metadata.
 */
export function putProperty<T>(
    target: Target,
    propertyKey: string | symbol,
    property: DTOSchemaProperty,
): void {
    const key = String(propertyKey) as keyof T;

    const schema = getSchema<T>(target) ?? {} as DTOSchema<T>;
    schema[key] = property;

    putSchema(target, schema);
}

/* Retrieve saved option metadata.
 */
export function getProperty<T>(
    target: Target,
    propertyKey: string | symbol,
): DTOSchemaProperty | undefined {
    const key = String(propertyKey) as keyof T;

    const schema = getSchema<T>(target);

    if (schema === undefined || schema[key] === undefined) {
        return undefined;
    }

    return schema[key] as DTOSchemaProperty;
}
