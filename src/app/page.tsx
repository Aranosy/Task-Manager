"use client"

import { useState } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "./sidebar"
import { MainContent } from "./main-content"

export default function Page() {
  const [active, setActive] = useState("Home")

  return (
    <SidebarProvider>
      <AppSidebar active={active} onSelect={setActive} />
      <MainContent active={active} />
    </SidebarProvider>
  )
}