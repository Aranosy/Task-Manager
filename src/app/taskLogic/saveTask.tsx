"use client"

import { useState } from "react"
import { TaskCard } from "./taskCard"
import { format } from "date-fns"


export function RenderTask({ name, date, message }: { name: string; date: Date | null; message: string }) {
    const [done, setDone] = useState(false);
    
    return (<TaskCard
                name={name}
                description={message}
                date={date ? format(date, "MMMM d, yyyy") : "No due date"}
                done={done}
                onDoneChange={setDone}
              />
    );
}