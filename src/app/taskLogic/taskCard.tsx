"use client"

import { CalendarDays, Check, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

type TaskCardProps = {
  name: string
  description: string
  date: string
  done?: boolean
  onDoneChange?: (done: boolean) => void
}

export function TaskCard({
  name,
  description,
  date,
  done = false,
  onDoneChange,
}: TaskCardProps) {
  return (
    <article
      className={cn(
        "flex w-full flex-col gap-5 rounded-xl border bg-card p-5 shadow-sm transition-colors sm:flex-row sm:items-start sm:justify-between sm:p-6",
        done && "bg-muted/40",
      )}
    >
      <div className="min-w-0 space-y-2">
        <h2
          className={cn(
            "break-words text-lg font-semibold tracking-tight text-card-foreground",
            done && "text-muted-foreground line-through",
          )}
        >
          {name}
        </h2>
        <p
          className={cn(
            "max-w-3xl break-words text-sm leading-6 text-muted-foreground",
            done && "line-through",
          )}
        >
          {description}
        </p>
        <div className="flex items-center gap-2 pt-1 text-sm text-muted-foreground">
          <CalendarDays className="size-4" aria-hidden="true" />
          <time>{date}</time>
        </div>
      </div>

      <Button
        type="button"
        variant={done ? "secondary" : "outline"}
        className="w-full shrink-0 gap-2 sm:w-auto"
        aria-pressed={done}
        onClick={() => onDoneChange?.(!done)}
      >
        {done ? (
          <Check className="size-4" aria-hidden="true" />
        ) : (
          <Circle className="size-4" aria-hidden="true" />
        )}
        {done ? "Done" : "Not done"}
      </Button>
    </article>
  )
}