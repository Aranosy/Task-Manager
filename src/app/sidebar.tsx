"use client"

import { useState } from "react";
import { FiInbox } from "react-icons/fi";
import { IoIosAddCircle } from "react-icons/io";
import { AddDialog } from "./taskLogic/addTask";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar({ active, onSelect, }: { active: string, onSelect: (title: string) => void }) {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { isMobile, setOpenMobile } = useSidebar();

  const openAddDialog = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
    setShowAddDialog(true);
  };

  const demoNavItems = [
    { title: "Add task", icon: <IoIosAddCircle className="w-7! h-7!" />, onSelect: openAddDialog },
    { title: "Today", icon: <FiInbox className="w-5! h-5!" />, onSelect: () => {} },
    { title: "Upcoming", icon: <FiInbox className="w-5! h-5!" />, onSelect: () => {} },
  ];

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 px-1 py-1">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-black text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-2xl font-semibold tracking-tight">Task Manager</span>
          </div>      
        </SidebarHeader>  
        <SidebarContent>
          <SidebarMenu className="ml-3 pr-3 gap-1">
            {demoNavItems.map((item) => (
              <SidebarMenuButton
                className="mr-3 w-auto text-lg"
                key={item.title}
                isActive={active === item.title}
                onClick={() => {if (item.title !== "Add task") onSelect(item.title); item.onSelect()}}
              >
                <span className="w-6 h-6 flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
                <span>
                  {item.title}
                </span>
              </SidebarMenuButton>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          {/* <span className="text-xs text-sidebar-foreground/60">Signed in as you</span> */}
        </SidebarFooter>
      </Sidebar>
      {showAddDialog && <AddDialog onClose={() => setShowAddDialog(false)} />}
    </>
  )
}