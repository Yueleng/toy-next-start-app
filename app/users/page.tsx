import type { Metadata } from "next";
import UserDetailCard from "./[userId]/page";

export const metadata: Metadata = {
  title: "Users",
  description:
    "Browse users and load their details instantly with server-rendered data from JSONPlaceholder.",
};

export default async function UsersPage() {
  return <UserDetailCard />;
}
