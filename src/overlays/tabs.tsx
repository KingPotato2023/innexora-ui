"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "../lib/utils";

// Editorial Atlas tabs —
// Hairline-underlined strip; the active tab carries a 2px brand-teal underline
// instead of the shadcn default rounded-pill bg fill. Reads like a magazine
// section divider, not a software toggle. Use for grouping related views inside
// a single page (Overview / Activity / Documents on a detail page); for top-
// level navigation prefer separate routes.

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-center gap-6 border-b border-ink/10 text-ink/55",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap pb-2 -mb-px text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-100 disabled:pointer-events-none disabled:opacity-50 hover:text-ink data-[state=active]:font-medium data-[state=active]:text-ink-900 data-[state=active]:border-b-2 data-[state=active]:border-brand-teal-500",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
