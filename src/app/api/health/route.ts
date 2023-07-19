import { NextResponse } from 'next/server';
import info from '@/app/info';

// eslint-disable-next-line import/prefer-default-export
export function GET() {
  return NextResponse.json({
    info,
    env: process.env.ENV_SET || 'local',
  }, { status: 200 });
}
