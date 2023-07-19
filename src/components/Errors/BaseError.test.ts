import { expect, it } from 'vitest';
import BaseError from './BaseError';

it('should match snapshot', () => {
  expect(BaseError()).toMatchSnapshot();
});
