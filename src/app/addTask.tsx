"use client"

import {useState} from "react"
import { cn } from "cn"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function AddDialog({ onClose }: { onClose: () => void }) {
  const [date, setDate] = useState<Date>()

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 w-full h-full z-50 bg-black/30 animate-bgPopOut"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white w-[500px] flex flex-col z-40 rounded-lg overflow-hidden shadow-lg
        animate-popOut"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <h2 className="text-black font-semibold text-lg">Add Task</h2>
        </div>

        {/* Main */}
        <div className="flex-1 flex items-center justify-center px-4 py-6 min-h-[200px]">
          <FieldSet className="w-full max-w-xs">
            <FieldGroup className="flex flex-col gap-5 text-xl">
              <Field className="gap-1">
                <FieldLabel htmlFor="taskName">
                  Task Name
                </FieldLabel>
                <Input id="taskName" type="text" placeholder="Do laundry" />
                <FieldDescription>
                  Choose a unique name for your task.
                </FieldDescription>
              </Field>
              <Field className="gap-1">
                <FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
                <Popover>
                  <PopoverTrigger render={<Button variant="outline" id="date-picker-simple" className="justify-start font-normal">{date ? format(date, "PPP") : <span>Pick a date</span>}</Button>} />
                  <PopoverContent className=" p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      defaultMonth={date}
                    />
                  </PopoverContent>
                </Popover>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-gray-200 px-4 py-3">
          <Button onClick={onClose} className="hover:bg-red-400" variant="outline">Cancel</Button>
          <Button onClick={onClose} className="hover:bg-green-400" variant="outline">Save</Button>
        </div>
      </div>
    </div>
  );
}