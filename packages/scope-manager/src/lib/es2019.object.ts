// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// RUN THE FOLLOWING COMMAND FROM THE WORKSPACE ROOT TO REGENERATE:
// npx nx generate-lib repo

import type { LibDefinition } from '../variable';

import { TYPE } from './base-config';
import { es2015_iterable } from './es2015.iterable';

export const es2019_object: LibDefinition = {
  libs: [es2015_iterable],
  variables: [['ObjectConstructor', TYPE]],
};
