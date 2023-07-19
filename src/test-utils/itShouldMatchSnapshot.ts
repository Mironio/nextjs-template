import { expect, it } from 'vitest';
import { JSX } from 'react';

export default function itShouldMatchSnapshot(jsx: JSX.Element) {
  it('should match snapshot', () => {
    expect(jsx).toMatchSnapshot();
  });
}
