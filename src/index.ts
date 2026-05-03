// @innexora/ui — barrel export
//
// Re-exports every public component, grouped to mirror the section
// layout in showcase.html. Helpers (cn, format) are re-exported at the
// bottom so consumers can `import { cn, formatAed } from "@innexora/ui"`
// instead of digging into subpaths.

// ─── Primitives ──────────────────────────────────────
export { Button, buttonVariants, type ButtonProps } from "./primitives/button";
export { Input, type InputProps } from "./primitives/input";
export { Textarea, type TextareaProps } from "./primitives/textarea";
export { Label } from "./primitives/label";
export { Checkbox } from "./primitives/checkbox";
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  BrandedAvatar,
  OwnerCell,
} from "./primitives/avatar";
export { Badge, badgeVariants, type BadgeProps } from "./primitives/badge";
export { Separator } from "./primitives/separator";
export { Skeleton } from "./primitives/skeleton";
export { EmptyState } from "./primitives/empty-state";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./primitives/card";

// ─── Status & feedback ───────────────────────────────
export {
  StatusBadge,
  type StatusBadgeTone,
  priorityTone,
  srStatusTone,
  workOrderStatusTone,
  contractStatusTone,
  invoiceStatusTone,
  auditActionTone,
  activeTone,
  assetConditionTone,
  leadStageTone,
  communicationTypeTone,
  communicationDirectionTone,
  stakeholderTypeTone,
  maintenanceFrequencyTone,
  maintenanceStatusTone,
} from "./primitives/status-badge";

// ─── Selection ───────────────────────────────────────
export {
  PillGroup,
  PillButtons,
  type PillOption,
} from "./selection/pill-group";
export {
  HiddenFormSelect,
  type HiddenFormSelectOption,
} from "./selection/hidden-form-select";
export { SegmentedControlLinks } from "./selection/segmented-control";
export { DatePicker } from "./selection/date-picker";
export { Calendar, type CalendarProps } from "./selection/calendar";

// ─── Overlays ────────────────────────────────────────
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./overlays/dialog";
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./overlays/alert-dialog";
export { Alert, AlertTitle, AlertDescription } from "./overlays/alert";
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuRadioGroup,
} from "./overlays/dropdown-menu";
export { Popover, PopoverTrigger, PopoverContent } from "./overlays/popover";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./overlays/tabs";
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./overlays/select";

// ─── Layout ──────────────────────────────────────────
export { PageHeader, PageHero } from "./layout/page-header";
export { Breadcrumbs, type BreadcrumbItem } from "./layout/breadcrumbs";
export {
  SidebarNav,
  MobileMenuButton,
  type SidebarNavItem,
} from "./layout/sidebar-nav";
export { ShellLayout } from "./layout/shell-layout";

// ─── Cards & content blocks ──────────────────────────
export {
  FormCard,
  FormSection,
  FormSplitBody,
  FormActions,
  FormError,
} from "./cards/form-card";
export {
  DetailSection,
  DetailGrid,
  DetailRow,
} from "./cards/detail-card";
// DetailCard is an alias for DetailSection — kept so consumers can read
// `<DetailCard ...>` when the plan / showcase calls it that.
export { DetailSection as DetailCard } from "./cards/detail-card";
export { KpiTile, type KpiTileProps, type KpiTone } from "./cards/kpi-tile";
export { TipCard, TipStrip } from "./cards/tip-card";
export { ZenStrip } from "./cards/zen-strip";
export { ManagerHero } from "./cards/manager-hero";

// ─── Tables & data ───────────────────────────────────
export { Pagination } from "./data/pagination";
export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./data/table";
export {
  KanbanBoard,
  type KanbanStage,
  type KanbanBoardProps,
} from "./data/kanban-board";

// ─── Form helpers ────────────────────────────────────
export { FormSubmitRibbon } from "./form-helpers/form-submit-ribbon";
export {
  useUnsavedChangesGuard,
  type UnsavedChangesGuard,
} from "./form-helpers/unsaved-changes-guard";
export { ConfirmForm } from "./form-helpers/confirm-form";

// ─── Utility ─────────────────────────────────────────
export { LocalClock } from "./utility/local-clock";

// ─── Helpers (re-exported for convenience) ───────────
export { cn } from "./lib/utils";
export {
  formatAed,
  formatAedShort,
  formatCurrencyShort,
} from "./lib/format";
export {
  avatarColorClass,
  AVATAR_PALETTE,
  type AvatarColorClass,
} from "./lib/avatar-color";
export { dailyQuote, type Quote } from "./lib/daily-quote";
export { getGreeting, type Greeting, type TimeOfDay } from "./lib/greeting";
