import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { ReactNode, FormHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DayPicker } from 'react-day-picker';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "teal" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Avatar: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
declare function BrandedAvatar({ name, imageUrl, size, }: {
    name: string;
    imageUrl?: string | null;
    size?: number;
}): react_jsx_runtime.JSX.Element;
declare function OwnerCell({ name, imageUrl, }: {
    name: string;
    imageUrl?: string | null;
}): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const Separator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
} & React.RefAttributes<HTMLDivElement>>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare function EmptyState({ icon, title, description, action, }: {
    icon?: ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}): react_jsx_runtime.JSX.Element;

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

type StatusBadgeTone = "neutral" | "muted" | "positive" | "warning" | "negative" | "info" | "brand";
declare function StatusBadge({ children, tone, dot, }: {
    children: ReactNode;
    tone?: StatusBadgeTone;
    dot?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function leadStageTone(stage: string): StatusBadgeTone;
declare function workOrderStatusTone(status: string): StatusBadgeTone;
declare function priorityTone(priority: string): StatusBadgeTone;
declare function contractStatusTone(status: string): StatusBadgeTone;
declare function invoiceStatusTone(status: string): StatusBadgeTone;
declare function srStatusTone(status: string): StatusBadgeTone;
declare function stakeholderTypeTone(type: string): StatusBadgeTone;
declare function assetConditionTone(condition: string): StatusBadgeTone;
declare function activeTone(active: boolean): StatusBadgeTone;
declare function communicationTypeTone(type: string): StatusBadgeTone;
declare function communicationDirectionTone(direction: string): StatusBadgeTone;
declare function maintenanceFrequencyTone(_freq: string): StatusBadgeTone;
declare function maintenanceStatusTone(status: string): StatusBadgeTone;
declare function auditActionTone(action: string): StatusBadgeTone;

type PillOption = {
    value: string;
    label: string;
    /** Pre-baked "peer-checked:bg-X peer-checked:text-Y peer-checked:ring-Z" */
    selectedClass: string;
};
declare function PillGroup({ name, options, defaultValue, disabled, required, onValueChange, }: {
    name: string;
    options: readonly PillOption[];
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    onValueChange?: (next: string) => void;
}): react_jsx_runtime.JSX.Element;
declare function PillButtons<T extends string>({ options, value, onChange, ariaLabel, variant, }: {
    options: readonly PillOption[];
    value: T;
    onChange: (next: T) => void;
    ariaLabel?: string;
    variant?: "color" | "filter";
}): react_jsx_runtime.JSX.Element;

type HiddenFormSelectOption = {
    value: string;
    label: string;
};
declare function HiddenFormSelect({ name, defaultValue, placeholder, options, disabled, ariaInvalid, className, onChange, }: {
    name: string;
    defaultValue?: string;
    placeholder?: string;
    options: HiddenFormSelectOption[];
    disabled?: boolean;
    ariaInvalid?: boolean;
    className?: string;
    onChange?: (next: string) => void;
}): react_jsx_runtime.JSX.Element;

type Option<T extends string> = {
    value: T;
    label: string;
};
declare function SegmentedControlLinks<T extends string>({ options, value, hrefFor, ariaLabel, }: {
    options: readonly Option<T>[];
    value: T;
    hrefFor: (value: T) => string;
    ariaLabel?: string;
}): react_jsx_runtime.JSX.Element;

declare function DatePicker({ name, defaultValue, required, placeholder, className, id, disabled, fromYear, toYear, withTime, }: {
    name: string;
    /** ISO string. Date-only mode: "yyyy-mm-dd". DateTime mode: "yyyy-mm-ddThh:mm". */
    defaultValue?: string | null;
    required?: boolean;
    placeholder?: string;
    className?: string;
    id?: string;
    disabled?: boolean;
    fromYear?: number;
    toYear?: number;
    withTime?: boolean;
}): react_jsx_runtime.JSX.Element;

type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

declare const Dialog: React.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;

declare const AlertDialog: React.FC<AlertDialogPrimitive.AlertDialogProps>;
declare const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogPrimitive.AlertDialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogPortal: React.FC<AlertDialogPrimitive.AlertDialogPortalProps>;
declare const AlertDialogOverlay: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AlertDialogContent: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AlertDialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const AlertDialogDescription: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDialogAction: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogActionProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AlertDialogCancel: React.ForwardRefExoticComponent<Omit<AlertDialogPrimitive.AlertDialogCancelProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Alert: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string> & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;

declare const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare function PageHero({ icon, title, description, meta, actions, kicker, }: {
    icon: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    actions?: ReactNode;
    /** Optional eyebrow above the title, e.g. "Sales · Master Tracker". */
    kicker?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function PageHeader({ title, description, actions, kicker, }: {
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    /** Optional eyebrow above the title. */
    kicker?: ReactNode;
}): react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    label: string;
    /** Omit to render the item as the current page (no link). */
    href?: string;
};
declare function Breadcrumbs({ items }: {
    items: ReadonlyArray<BreadcrumbItem>;
}): react_jsx_runtime.JSX.Element | null;

type SidebarNavItem = {
    href: string;
    label: string;
    /** Lucide icon component (already imported by the consumer). */
    icon: React.ComponentType<{
        className?: string;
    }>;
    /** Optional grouping bucket. Ungrouped items render under no heading. */
    group?: string;
};
declare function SidebarNav({ items, onNavigate, groupOrder, groupLabels, }: {
    items: ReadonlyArray<SidebarNavItem>;
    onNavigate?: () => void;
    /** Display order of groups. Defaults to the order groups appear in `items`. */
    groupOrder?: ReadonlyArray<string>;
    /** Override the eyebrow label for a group. Defaults to capitalised key. */
    groupLabels?: Record<string, string>;
}): react_jsx_runtime.JSX.Element;
declare function MobileMenuButton({ open, onClick, }: {
    open: boolean;
    onClick: () => void;
}): react_jsx_runtime.JSX.Element;

declare function ShellLayout({ children, navItems, brand, userFooter, groupOrder, groupLabels, }: {
    children: React.ReactNode;
    navItems: ReadonlyArray<SidebarNavItem>;
    /** Top-left wordmark / logo. */
    brand: React.ReactNode;
    /** Bottom-of-sidebar block (avatar + name + signout, etc). */
    userFooter?: React.ReactNode;
    /** Forwarded to SidebarNav. */
    groupOrder?: ReadonlyArray<string>;
    /** Forwarded to SidebarNav. */
    groupLabels?: Record<string, string>;
}): react_jsx_runtime.JSX.Element;

declare function FormCard({ children, className, }: {
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function FormSplitBody({ left, right, }: {
    left: ReactNode;
    right: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function FormSection({ title, icon, children, }: {
    title: ReactNode;
    icon?: ReactNode;
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function FormActions({ primary, destructive, }: {
    /** The Save / Submit button — gets pushed to the right via ml-auto. */
    primary: ReactNode;
    /** Optional Delete (or other destructive) button — sits on the left. */
    destructive?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function FormError({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element | null;

declare function DetailSection({ title, icon, action, children, className, }: {
    title: string;
    icon: ReactNode;
    /** Optional right-aligned slot — typically a Button (Add child, Edit, …). */
    action?: ReactNode;
    children: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function DetailGrid({ children, cols, }: {
    children: ReactNode;
    /** 2 (default) or 1 — single-column for narrow surfaces. */
    cols?: 1 | 2;
}): react_jsx_runtime.JSX.Element;
declare function DetailRow({ icon, label, value, span, }: {
    /** Lucide icon — usually `<Mail className="h-3.5 w-3.5" />` etc. */
    icon: ReactNode;
    label: string;
    value: ReactNode;
    /** Set to 2 to make the row span both columns of a DetailGrid. */
    span?: 1 | 2;
}): react_jsx_runtime.JSX.Element;

type KpiTone = "teal" | "indigo" | "warn" | "neutral";
interface KpiTileProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    tone?: KpiTone;
    delta?: number;
    deltaLabel?: string;
    upIsGood?: boolean;
    href?: string;
    caption?: string;
    sparkline?: number[];
}
declare function KpiTile({ icon, label, value, tone, delta, deltaLabel, upIsGood, href, caption, sparkline, }: KpiTileProps): react_jsx_runtime.JSX.Element;

declare function TipCard({ title, children, footer, sticky, icon, className, }: {
    title: string;
    children: ReactNode;
    footer?: ReactNode;
    sticky?: boolean;
    icon?: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function TipStrip({ title, children, icon, className, }: {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;

declare function ZenStrip({ variant }: {
    variant?: "strip" | "card";
}): react_jsx_runtime.JSX.Element;

interface ManagerHeroProps {
    userName: string;
    openRequests: number;
    activeWorkOrders: number;
    outstandingAed: number;
    propertyCount: number;
    now?: Date;
    /** Optional override for the secondary "<segment> · Briefing" kicker. */
    briefingLabel?: string;
}
declare function ManagerHero({ userName, openRequests, activeWorkOrders, outstandingAed, propertyCount, now, briefingLabel, }: ManagerHeroProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    /** 1-based page number currently being shown. */
    currentPage: number;
    /** Total page count (computed: ceil(totalCount / pageSize)). */
    totalPages: number;
    /** Total row count across all pages — shown in the "X of Z" counter. */
    totalCount: number;
    /** Items per page — used for the "showing X–Y" range label. */
    pageSize: number;
    /** Path the page lives at, e.g. "/audit-log". Query string appended. */
    baseHref: string;
    /**
     * Other query params currently in effect (filters, search, etc.).
     * They're preserved across page-link clicks so navigating doesn't
     * drop the user's filter state.
     */
    searchParams?: Record<string, string | undefined>;
}
declare function Pagination({ currentPage, totalPages, totalCount, pageSize, baseHref, searchParams, }: PaginationProps): react_jsx_runtime.JSX.Element;

declare const Table: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableElement> & React.RefAttributes<HTMLTableElement>>;
declare const TableHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableSectionElement> & React.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableRowElement> & React.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React.ForwardRefExoticComponent<React.ThHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React.ForwardRefExoticComponent<React.TdHTMLAttributes<HTMLTableCellElement> & React.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLTableCaptionElement> & React.RefAttributes<HTMLTableCaptionElement>>;

type KanbanStage = {
    key: string;
    label: string;
};
type KanbanBoardProps<T extends {
    id: string;
}> = {
    stages: ReadonlyArray<KanbanStage>;
    items: ReadonlyArray<T>;
    /** Returns the stage key for an item — usually `(it) => it.stage` or `(it) => it.status`. */
    stageKey: (item: T) => string;
    /** Render the card body (the package handles the wrapper, drag plumbing, ring/hover state). */
    renderCard: (item: T) => React.ReactNode;
    /** Server action invoked on drop. Receives the item id and the destination stage key. */
    onMove?: (id: string, toStage: string) => void | Promise<void>;
    /** Gates the drag affordance (cursor-grab + draggable=true). Per-record check still in onMove. */
    canMove?: boolean;
    /** Optional — wraps each card in a Link to this href. */
    cardHref?: (item: T) => string;
};
declare function KanbanBoard<T extends {
    id: string;
}>({ stages, items, stageKey, renderCard, onMove, canMove, cardHref, }: KanbanBoardProps<T>): React.JSX.Element;

declare function FormSubmitRibbon({ submitLabel, 
/** Override the dirty-detection. Most forms should leave this alone
 *  and let the ribbon track FormData snapshots; pass `true` for
 *  forms whose initial state is intentionally "dirty" (e.g. a
 *  Create flow where the empty form should still show an enabled
 *  submit button). */
alwaysDirty, }: {
    submitLabel: string;
    alwaysDirty?: boolean;
}): react_jsx_runtime.JSX.Element;

interface UnsavedChangesGuard {
    /** Render this anywhere inside the form's tree — the dialog itself
     *  uses portal-style fixed positioning so its DOM location doesn't
     *  matter. */
    dialog: ReactNode;
    /** Suppress the guard for the next navigation. Call this before
     *  programmatic redirects from a successful submit so the success
     *  path isn't confirmed. */
    disable: () => void;
}
declare function useUnsavedChangesGuard(active: boolean): UnsavedChangesGuard;

declare function ConfirmForm({ message, children, className, ...formProps }: {
    /** Message shown in the confirm() prompt. */
    message: string;
    children: ReactNode;
    className?: string;
} & Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit" | "children">): react_jsx_runtime.JSX.Element;

declare function LocalClock(): react_jsx_runtime.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

/**
 * Compact currency formatting: $0, $500, $1k, $340k, $1.2M, $12.5M.
 * Prisma's Decimal fields arrive as strings or numbers depending on
 * how they're serialised, so we accept both.
 */
declare function formatCurrencyShort(value: number | string): string;
/**
 * Compact AED formatting for hero / dashboard tiles. "AED 0", "AED 500",
 * "AED 1.2k", "AED 340k", "AED 1.2M". Use full-precision Intl format on
 * tables / detail pages where exact values matter.
 */
declare function formatAedShort(value: number | string): string;
/**
 * Full-precision AED formatting with thousand separators: "AED 148,050.00".
 * Use on invoice / payment / contract detail pages and finance tables.
 */
declare function formatAed(value: number | string): string;

declare const PALETTE: readonly ["bg-teal-600", "bg-slate-600", "bg-amber-600", "bg-rose-600", "bg-emerald-600", "bg-indigo-600", "bg-orange-600", "bg-violet-600", "bg-cyan-600", "bg-fuchsia-600"];
type AvatarColorClass = (typeof PALETTE)[number];
declare const AVATAR_PALETTE: readonly AvatarColorClass[];
declare function avatarColorClass(seed: string): AvatarColorClass;

interface Quote {
    text: string;
    author: string;
}
declare function dailyQuote(now?: Date): Quote;

type TimeOfDay = "morning" | "afternoon" | "evening" | "late_night";
interface Greeting {
    greeting: string;
    timeOfDay: TimeOfDay;
    emoji: string;
}
/**
 * Compute time-of-day greeting in the Asia/Dubai timezone.
 * Returns a three-part object so callers can render the emoji separately
 * (e.g., wrapped in aria-hidden) from the text.
 */
declare function getGreeting(now: Date, fullName: string): Greeting;

export { AVATAR_PALETTE, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, Avatar, type AvatarColorClass, AvatarFallback, AvatarImage, Badge, type BadgeProps, BrandedAvatar, type BreadcrumbItem, Breadcrumbs, Button, type ButtonProps, Calendar, type CalendarProps, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, ConfirmForm, DatePicker, DetailSection as DetailCard, DetailGrid, DetailRow, DetailSection, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuTrigger, EmptyState, FormActions, FormCard, FormError, FormSection, FormSplitBody, FormSubmitRibbon, type Greeting, HiddenFormSelect, type HiddenFormSelectOption, Input, type InputProps, KanbanBoard, type KanbanBoardProps, type KanbanStage, KpiTile, type KpiTileProps, type KpiTone, Label, LocalClock, ManagerHero, MobileMenuButton, OwnerCell, PageHeader, PageHero, Pagination, PillButtons, PillGroup, type PillOption, Popover, PopoverContent, PopoverTrigger, type Quote, SegmentedControlLinks, Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, Separator, ShellLayout, SidebarNav, type SidebarNavItem, Skeleton, StatusBadge, type StatusBadgeTone, Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, type TimeOfDay, TipCard, TipStrip, type UnsavedChangesGuard, ZenStrip, activeTone, assetConditionTone, auditActionTone, avatarColorClass, badgeVariants, buttonVariants, cn, communicationDirectionTone, communicationTypeTone, contractStatusTone, dailyQuote, formatAed, formatAedShort, formatCurrencyShort, getGreeting, invoiceStatusTone, leadStageTone, maintenanceFrequencyTone, maintenanceStatusTone, priorityTone, srStatusTone, stakeholderTypeTone, useUnsavedChangesGuard, workOrderStatusTone };
