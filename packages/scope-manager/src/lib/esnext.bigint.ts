// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib repo

import type { LibDefinition } from '../variable';

import { TYPE, TYPE_VALUE } from './base-config';
import { es2020_intl } from './es2020.intl';

export const esnext_bigint: LibDefinition = {
  libs: [es2020_intl],
  variables: [
    ['BigIntToLocaleStringOptions', TYPE],
    ['BigInt', TYPE_VALUE],
    ['BigIntConstructor', TYPE],
    ['BigInt64Array', TYPE_VALUE],
    ['BigInt64ArrayConstructor', TYPE],
    ['BigUint64Array', TYPE_VALUE],
    ['BigUint64ArrayConstructor', TYPE],
    ['DataView', TYPE],
    ['Intl', TYPE_VALUE],
  ],
};
