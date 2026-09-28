"use client"

import { useState } from "react"
import { TaskCard } from "./taskCard"


export function RenderTask({ name, date, message }: { name: string; date: Date | null; message: string }) {
    const [done, setDone] = useState(false);
    
    return (<TaskCard
                name={name}
                description={message}
                date={date ? date.toString() : "No due date"}
                done={done}
                onDoneChange={setDone}
              />
    );
}