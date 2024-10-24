import { db } from '@/db';
import { users } from '@/db/schema';
import React from 'react'

const UserShow = async () => {
  const allUsers = await db.select().from(users);
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Users</h1>
      <ul className="bg-white shadow overflow-hidden sm:rounded-md">
        {allUsers.map(user => (
          <li key={user.id} className="border-b border-gray-200 last:border-b-0">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{user.name}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserShow