import { Outlet } from "react-router";
import MainLayout from "~/ui/layout";
import Sidebar from "~/widgets/sidebar";
import { sidebarItems } from "./consts";

const AppLayout: React.FC = () => (
  <MainLayout sidebar={<Sidebar sidebarItems={sidebarItems} />}>
    <Outlet />
  </MainLayout>
) 

export default AppLayout;
