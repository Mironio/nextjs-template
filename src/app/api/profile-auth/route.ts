// this is just a mock implementation of profile/auth endpoint

import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// eslint-disable-next-line import/prefer-default-export
export function POST() {
  const headersList = headers();
  const authorization = headersList.get('Authorization');

  let init;

  if (authorization && authorization.includes('success')) {
    init = {
      status: 200,
      headers: { 'Set-Cookie': `test-cookie=${authorization.split(' ').join('')}` },
    };
  } else {
    init = {
      status: 404,
    };
  }

  return NextResponse.json({}, init);
}
