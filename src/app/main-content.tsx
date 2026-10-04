"use client"

import { useState } from "react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { TaskCard } from "./taskLogic/taskCard"
import { RenderTask } from "./taskLogic/saveTask"
import { useTasksContext } from "./taskContext"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react';
import { AddDialog } from "./taskLogic/addTask"

export function MainContent({ active }: { active: string }) {
  const [done, setDone] = useState(false)
  const { tasks } = useTasksContext();
    // const [showAddDialog, setShowAddDialog] = useState(false);

  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center gap-3 border-b border-border p-4">
        <SidebarTrigger />
        <h1 className="text-lg font-semibold">{active}</h1>
      </header>
      <div className="flex-1 p-4 sm:p-6">
        <div className="w-full gap-1 flex flex-col">
          <Button className="self-start text-xl!" size="lg" variant="ghost" onClick={() => AddDialog({ onClose: () => {} })}>
            <Plus className="w-5! h-5!" />
            Add Task
          </Button>
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