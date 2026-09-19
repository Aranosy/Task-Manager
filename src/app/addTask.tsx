"use client"

import {useState} from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"

export function AddDialog({ onClose }: { onClose: () => void }) {
  const [date, setDate] = useState<Date>()

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 w-full h-full z-50 bg-black/30 animate-bgPopOut"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-white w-[95vw] max-w-lg h-[90vh] max-h-[500px] flex flex-col z-40 rounded-lg overflow-hidden shadow-lg
        animate-popOut"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b shrink-0 border-gray-200">
          <h2 className="text-black font-semibold text-lg">Add Task</h2>
        </div>

        {/* Main */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <FieldSet className="w-full flex flex-col justify-between gap-5">
            <FieldGroup className="flex flex-col gap-5">
              <Field className="gap-1 w-full max-w-md">
                <FieldLabel className="text-lg!" htmlFor="taskName">
                  Task Name
                </FieldLabel>
                <Input id="taskName" type="text" placeholder="Do laundry" className="px-4 h-12 text-lg! " />
                <FieldDescription>
                  Choose a unique name for your task.
                </FieldDescription>
              </Field>
              <Field className="gap-1">
                <FieldLabel className="text-lg!" htmlFor="date-picker-simple">
                  Date
                </FieldLabel>
                <Popover>
                  <PopoverTrigger render={<Button variant="outline" id="date-picker-simple" className="h-12 px-4  text-lg! justify-start font-normal">{date ? format(date, "PPP") : <><CalendarIcon/> <div>Pick a date</div></>}</Button>} />
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
              <Field className="gap-1">
                <FieldLabel htmlFor="textarea-message" className="text-lg!">
                  Message
                </FieldLabel>
                <Textarea id="textarea-message" className="text-lg!" placeholder="Type your message here." />
                <FieldDescription>Enter your message above.</FieldDescription>
            </Field>
            </FieldGroup>
          </FieldSet>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-gray-200 px-6 py-4 shrink-0">
          <Button onClick={onClose} className="hover:bg-red-400" variant="outline">Cancel</Button>
          <Button onClick={onClose} className="hover:bg-green-400" variant="outline">Save</Button>
        </div>
      </div>
    </div>
  );
}