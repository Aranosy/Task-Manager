"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"

export function MainContent({ active }: { active: string }) {

  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 border-b border-border p-4">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">{active}</h1>
      </header>
      <div className="flex-1 p-6">
        <p className="max-w-prose text-pretty text-muted-foreground">
          Your main content goes here.
        </p>
      </div>
    </main>
  )
}