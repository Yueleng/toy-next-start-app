"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

export default function UserDetailPage() {
  const params = useParams<{ userId: string }>();
  const selectedId = params?.userId ? Number(params.userId) : null;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [detail, setDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    if (selectedId === null) return;

    const controller = new AbortController();
    const loadDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedId}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user detail");
        }

        const data: UserDetail = await response.json();
        setDetail(data);
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        setError((err as Error).message);
        setDetail(null);
      } finally {
        setLoading(false);
      }
    };

    loadDetail();

    return () => controller.abort();
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <main className="mx-auto flex max-w-5xl flex-col gap-6">
        {!selectedId && <p>Select a user to see details.</p>}
        {loading && <p>Loading user...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
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
      </main>
    </div>
  );
}
