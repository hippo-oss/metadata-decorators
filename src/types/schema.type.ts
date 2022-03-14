import { DTOSchemaProperty } from './property.type';

/* A DTO schema defines the set of decorators and options for a DTO.
 */
export type DTOSchema<T> = {
    [Key in keyof T]?: DTOSchemaProperty;
};
