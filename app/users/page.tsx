import UserExplorer from "./UserExplorer";
import { getUsers } from "./data";
import UserDetailCard from "./[userId]/page";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <main className="mx-auto flex max-w-5xl flex-col gap-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Users</h1>
          <p className="text-gray-700">
            Fetched from jsonplaceholder and loaded on demand when you click a
            name.
          </p>
        </header>
        <UserExplorer users={users}>
          <UserDetailCard />
        </UserExplorer>
      </main>
    </div>
  );
}
