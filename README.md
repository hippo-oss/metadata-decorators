# metadata-decorators

DTO decorators with reflect-metadata.

Provides an implementation of a `dto-decorators` flavor that persists metadata using `reflect-metadata`;
other systems may use this persistence to implement runtime logic that is aware of decorated attributes.


## Usage

Decorate a class with `METADATA_DECORATORS` (or any composition thereof):

```ts
import { METADATA_DECORATORS } from '@hippo-oss/metadata-decorators';

const { IsString } = METADATA_DECORATORS;

class Example {
    @IsString({
        optional: true,
    })
    name?: string;
}
```

At runtime, query the class for schema data:

```ts
import { getSchema } from '@hippo-oss/metadata-decorators'

const schema = getSchema(Example);
```
