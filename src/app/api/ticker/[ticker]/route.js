import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { ticker } = await params; 

  const response = await fetch(`${process.env.NEXT_PUBLIC_FMP_API_URL}/quote?symbol=${ticker}&apikey=${process.env.NEXT_PUBLIC_FMP_API_TOKEN}`)
    .then(resp => resp.json())

  return NextResponse.json(response, { status: 200 });
}
