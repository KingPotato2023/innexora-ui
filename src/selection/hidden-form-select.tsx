// Bridge between Radix Select (which manages its value in React state)
// and HTML server-action forms (which read values from the DOM at
// submit time). Radix doesn't render a name'd <input> of its own, so
// without this bridge a Radix-driven dropdown inside a `<form action>`
// would submit nothing.

"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../overlays/select";

export type HiddenFormSelectOption = {
  value: string;
  label: string;
};

const EMPTY_SENTINEL = "__empty";

export function HiddenFormSelect({
  name,
  defaultValue = "",
  placeholder,
  options,
  disabled,
  ariaInvalid,
  className,
  onChange,
}: {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  options: HiddenFormSelectOption[];
  disabled?: boolean;
  ariaInvalid?: boolean;
  className?: string;
  onChange?: (next: string) => void;
}) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const internal = value === "" ? EMPTY_SENTINEL : value;

  const handleChange = (next: string) => {
    const real = next === EMPTY_SENTINEL ? "" : next;
    setValue(real);
    onChange?.(real);
  };

  return (
    <>
      <Select value={internal} onValueChange={handleChange} disabled={disabled}>
        <SelectTrigger
          className={className}
          aria-invalid={ariaInvalid ? true : undefined}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem
              key={opt.value === "" ? EMPTY_SENTINEL : opt.value}
              value={opt.value === "" ? EMPTY_SENTINEL : opt.value}
            >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input type="hidden" name={name} value={value} />
    </>
  );
}
