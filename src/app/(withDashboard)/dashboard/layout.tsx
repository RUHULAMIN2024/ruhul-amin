import Container from "@/components/Container";
import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Developer Ruhul Amin",
  description:
    "Manage your projects, blogs, and settings from the admin dashboard.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <div className="min-h-screen my-2">
        <div className="flex justify-between">
          <div className="w-[20%]">
            <Sidebar />
          </div>
          <div className="w-[80%] bg-slate-100 rounded-xl ml-2">{children}</div>
        </div>
      </div>
    </Container>
  );
}
