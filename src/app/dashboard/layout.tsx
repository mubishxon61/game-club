import Sidebar from "@/components/layouts/Sidebar/Sidebar";
import { ReactNode } from "react";


export default function DashboardLayout({children}: {children: ReactNode}) {
  return <div className="w-full h-full flex">
    <Sidebar/>
    <div>
    <header>Header</header>
    <div>Rooms</div>
    </div>
  </div>
}