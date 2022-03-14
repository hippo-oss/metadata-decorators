import { METADATA_DECORATORS } from '../decorators';

const { IsEnum, IsString, IsNested, IsNumber, IsUUID } = METADATA_DECORATORS;

export enum State {
    CA = 'CA',
    DC = 'DC',
    TX = 'TX',
}

export class Location {
    @IsNumber({
        description: 'The latitude of the location',
        example: 38.89789,
        maxValue: 90,
        minValue: -90,
        optional: false,
    })
    latitude!: number;

    @IsNumber({
        description: 'The longitude of location.',
        example: -77.03651,
        maxValue: 180,
        minValue: -180,
        optional: true,
    })
    longitude!: number;
}

export class Address {

    @IsUUID({
        description: 'The address\'s persistent id',
        example: '00000000-0000-4000-8000-000000000000',
        optional: true,
    })
    id?: string;

    @IsString({
        description: 'The address\'s street location',
        example: '1600 Pennsylvania Ave',
        optional: false,
    })
    street!: string;

    @IsString({
        description: 'The address\'s city.',
        example: 'Washington',
        optional: false,
    })
    city!: string;

    @IsEnum({
        description: 'The address\'s state.',
        example: State.DC,
        enum: State,
        enumName: 'State',
        optional: false,
    })
    state!: State;

    @IsString({
        description: 'The address\'s zipcode.',
        example: '20500-0004',
        optional: false,
        pattern: /[0-9]{5}(-[0-9]{4})?/,
    })
    zipcode!: string;

    @IsNested({
        description: 'The location of the address.',
        optional: true,
        type: Location,
    })
    location?: Location;
}
