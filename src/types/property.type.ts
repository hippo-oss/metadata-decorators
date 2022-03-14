import { DTODecoratorName, DTODecoratorOptions } from '@hippo-oss/dto-decorators';

/* A DTO property composes the name of a DTO decorator and its options.
 */
export interface DTOProperty<Name extends DTODecoratorName> {
    name: Name,
    options: DTODecoratorOptions<Name>,
}

/* A DTO schema property is a union of the supported DTO properties.
 */
/* eslint-disable @typescript-eslint/indent */
export type DTOSchemaProperty =
    DTOProperty<'IsBoolean'> |
    DTOProperty<'IsDate'> |
    DTOProperty<'IsDateString'> |
    DTOProperty<'IsEnum'> |
    DTOProperty<'IsInteger'> |
    DTOProperty<'IsNested'> |
    DTOProperty<'IsNumber'> |
    DTOProperty<'IsString'> |
    DTOProperty<'IsUUID'>;
/* eslint-enable @typescript-eslint/indent */
