"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { TaskCard } from "./taskLogic/taskCard"
import { RenderTask } from "./taskLogic/saveTask"
import { useTasksContext } from "./taskContext"

export function MainContent({ active }: { active: string }) {
  const [done, setDone] = useState(false)
  const { tasks } = useTasksContext();

  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 border-b border-border p-4">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">{active}</h1>
      </header>
      <div className="flex-1 p-4 sm:p-6">
        <div className="w-full">
          {tasks.map((task, index) => (
            <RenderTask key={index} name={task.name} date={task.date} message={task.message} />
          ))}
          <TaskCard
            name="Plan the next sprint"
            description="Review the backlog, define priorities, and share the sprint plan with the team."
            date="September 30, 2026"
            done={done}
            onDoneChange={setDone}
          />
          
        </div>
      </div>
    </main>
  )
}