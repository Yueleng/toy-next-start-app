import { notFound } from "next/navigation";

type UserDetail = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default async function UserDetailPage({
  params,
}: {
  params?: Promise<{ userId: string }>;
}) {
  const { userId } = (await params) || { userId: null };
  // if userId is not a number, then selectedId is NaN
  // if userId is null then selectedId is null and Number(null) is 0
  const selectedId = userId ? Number(userId) : null;

  if (Number.isNaN(selectedId)) {
    return notFound();
  }

  let detail: UserDetail | null = null;

  if (selectedId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${selectedId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user detail");
      }

      detail = await response.json();
    } catch (err) {
      console.error(err);
      return notFound();
    }
  }

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <main className="mx-auto flex max-w-5xl flex-col gap-6">
        {!selectedId && <p>Select a user to see details.</p>}
        {detail && (
          <>
            {detail && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{detail.name}</h2>
                <p>
                  <strong>Username:</strong> {detail.username}
                </p>
                <p>
                  <strong>Email:</strong> {detail.email}
                </p>
                <p>
                  <strong>Phone:</strong> {detail.phone}
                </p>
                <p>
                  <strong>Website:</strong> {detail.website}
                </p>
                <div>
                  <strong>Address:</strong>
                  <p>
                    {detail.address.suite}, {detail.address.street},{" "}
                    {detail.address.city}, {detail.address.zipcode}
                  </p>
                </div>
                <div>
                  <strong>Company:</strong>
                  <p>{detail.company.name}</p>
                  <p className="italic">{detail.company.catchPhrase}</p>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
