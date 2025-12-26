import { getUsers } from "./data";
import UserExplorer from "./UserExplorer";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <div className="min-h-screen bg-white px-6 py-10 text-slate-900 dark:text-slate-900">
      <main className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-slate-900">Users</h1>
          <p className="text-slate-700">
            Fetched from jsonplaceholder and loaded on demand when you click a
            name.
          </p>
        </header>
        <UserExplorer users={users}>{children}</UserExplorer>
      </main>
    </div>
  );
}
