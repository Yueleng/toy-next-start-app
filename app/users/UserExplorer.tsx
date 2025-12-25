"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export type UserListItem = {
  id: number;
  name: string;
};

type Props = {
  children?: React.ReactNode;
  users: UserListItem[];
};

export default function UserExplorer({ children, users }: Props) {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="grid gap-6 text-slate-900 md:grid-cols-[minmax(220px,260px)_1fr]">
      <div className="space-y-3 rounded border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900">Users</h2>
        <p className="text-sm text-slate-700">
          Click a name to load details from the API.
        </p>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id}>
              <button
                type="button"
                onClick={() => {
                  setSelectedId(user.id);
                  router.push(`/users/${user.id}`);
                }}
                className={`w-full rounded px-3 py-2 text-left text-slate-900 transition hover:bg-gray-100 ${
                  selectedId === user.id ? "bg-gray-200" : "bg-white"
                }`}
              >
                {user.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="min-h-55 rounded border border-gray-200 bg-white p-4 text-slate-900 shadow-sm">
        {children}
      </div>
    </div>
  );
}
