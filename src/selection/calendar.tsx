"use client";

import * as React from "react";
import { DayPicker, type DropdownProps } from "react-day-picker";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../overlays/select";
import { cn } from "../lib/utils";

function weekStart(d: Date): Date {
  const dt = new Date(d);
  const day = dt.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  dt.setDate(dt.getDate() + diff);
  dt.setHours(0, 0, 0, 0);
  return dt;
}

function NavChevron({ orientation }: { orientation?: "left" | "right" | "up" | "down" }) {
  if (orientation === "right") return <ChevronRight className="h-3.5 w-3.5" />;
  if (orientation === "down") return <ChevronDown className="h-3.5 w-3.5" />;
  return <ChevronLeft className="h-3.5 w-3.5" />;
}

function BrandedDropdown(props: DropdownProps) {
  const currentValue = props.value === undefined ? "" : String(props.value);
  const handleChange = (next: string) => {
    if (!props.onChange) return;
    const fakeEvent = {
      target: { value: next },
      currentTarget: { value: next },
    } as unknown as React.ChangeEvent<HTMLSelectElement>;
    props.onChange(fakeEvent);
  };

  return (
    <Select value={currentValue} onValueChange={handleChange} disabled={props.disabled}>
      <SelectTrigger
        aria-label={props["aria-label"]}
        className="h-7 min-w-[88px] gap-1 rounded-md border border-ink/12 bg-white px-2 text-[13px] font-semibold text-ink-900 hover:border-ink/25 focus:ring-2 focus:ring-brand-indigo-400/35 focus:border-brand-indigo-500"
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent
        className="max-h-[260px]"
        position="popper"
        sideOffset={4}
      >
        {props.options?.map((opt) => (
          <SelectItem
            key={opt.value}
            value={String(opt.value)}
            disabled={opt.disabled}
            className="text-[13px]"
          >
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const now = new Date();
  const wkStart = weekStart(now);
  const wkEnd = new Date(wkStart);
  wkEnd.setDate(wkEnd.getDate() + 6);

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-0", className)}
      hideNavigation
      modifiers={{ thisWeek: { from: wkStart, to: wkEnd } }}
      modifiersClassNames={{
        thisWeek: "bg-brand-teal-50/60",
      }}
      classNames={{
        months: "flex flex-col gap-4",
        month: "space-y-3",
        month_caption: "flex items-center justify-center gap-1.5 px-1",
        caption_label: "sr-only",
        dropdowns: "flex items-center gap-1.5",
        dropdown_root: "relative inline-flex items-center",
        dropdown: "",
        month_grid: "w-full border-collapse mt-1",
        weekdays: "flex w-full",
        weekday:
          "flex-1 h-8 inline-flex items-center justify-center text-xs uppercase tracking-wider font-semibold text-ink/45",
        weeks: "",
        week: "flex w-full mt-1",
        day: "flex-1 h-9 p-0 text-center relative",
        day_button:
          "inline-flex items-center justify-center w-9 h-9 rounded-md text-[12px] text-ink-900 hover:bg-brand-teal-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo-400",
        outside: "[&>button]:text-ink/30",
        disabled:
          "[&>button]:text-ink/20 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent",
        today:
          "[&>button]:font-semibold [&>button]:text-brand-teal-700 [&>button]:ring-2 [&>button]:ring-brand-teal-400 [&>button]:ring-inset",
        selected:
          "[&>button]:bg-gradient-to-br [&>button]:from-brand-teal-500 [&>button]:to-brand-indigo-700 [&>button]:text-white [&>button]:font-semibold [&>button]:shadow-sm [&>button]:hover:from-brand-teal-500 [&>button]:hover:to-brand-indigo-700 [&>button]:hover:text-white",
        ...classNames,
      }}
      components={{
        Chevron: NavChevron,
        Dropdown: BrandedDropdown,
      }}
      {...props}
    />
  );
}
