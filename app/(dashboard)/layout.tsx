import DashboardHeader from "@/components/DashboardHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardHeader />
      {children}
    </>
  );
}
