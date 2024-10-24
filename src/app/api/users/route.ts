import { db } from '@/db';
import { users } from '@/db/schema';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}
 
export async function POST(request: Request) {
  const { name, email } = await request.json();
  const newUser = await db.insert(users).values({
    name,
    email
  }).returning();
  
  return NextResponse.json(newUser[0]);
}