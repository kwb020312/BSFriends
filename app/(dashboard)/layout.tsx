import DashboardNavbar from "@/components/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col h-full w-full">
      <DashboardNavbar />

      <div className="flex-grow">{children}</div>
    </section>
  );
};

export default DashboardLayout;
