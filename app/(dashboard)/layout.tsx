import DashboardNavbar from "@/components/DashboardNavbar";
import { Toaster } from "react-hot-toast";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <DashboardNavbar />
      {children}
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
