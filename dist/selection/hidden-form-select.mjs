"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../overlays/select";
const EMPTY_SENTINEL = "__empty";
function HiddenFormSelect({
  name,
  defaultValue = "",
  placeholder,
  options,
  disabled,
  ariaInvalid,
  className,
  onChange
}) {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const internal = value === "" ? EMPTY_SENTINEL : value;
  const handleChange = (next) => {
    const real = next === EMPTY_SENTINEL ? "" : next;
    setValue(real);
    onChange?.(real);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Select, { value: internal, onValueChange: handleChange, disabled, children: [
      /* @__PURE__ */ jsx(
        SelectTrigger,
        {
          className,
          "aria-invalid": ariaInvalid ? true : void 0,
          children: /* @__PURE__ */ jsx(SelectValue, { placeholder })
        }
      ),
      /* @__PURE__ */ jsx(SelectContent, { children: options.map((opt) => /* @__PURE__ */ jsx(
        SelectItem,
        {
          value: opt.value === "" ? EMPTY_SENTINEL : opt.value,
          children: opt.label
        },
        opt.value === "" ? EMPTY_SENTINEL : opt.value
      )) })
    ] }),
    /* @__PURE__ */ jsx("input", { type: "hidden", name, value })
  ] });
}
export {
  HiddenFormSelect
};
