"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_exports = {};
__export(index_exports, {
  AVATAR_PALETTE: () => import_avatar_color.AVATAR_PALETTE,
  Alert: () => import_alert.Alert,
  AlertDescription: () => import_alert.AlertDescription,
  AlertDialog: () => import_alert_dialog.AlertDialog,
  AlertDialogAction: () => import_alert_dialog.AlertDialogAction,
  AlertDialogCancel: () => import_alert_dialog.AlertDialogCancel,
  AlertDialogContent: () => import_alert_dialog.AlertDialogContent,
  AlertDialogDescription: () => import_alert_dialog.AlertDialogDescription,
  AlertDialogFooter: () => import_alert_dialog.AlertDialogFooter,
  AlertDialogHeader: () => import_alert_dialog.AlertDialogHeader,
  AlertDialogOverlay: () => import_alert_dialog.AlertDialogOverlay,
  AlertDialogPortal: () => import_alert_dialog.AlertDialogPortal,
  AlertDialogTitle: () => import_alert_dialog.AlertDialogTitle,
  AlertDialogTrigger: () => import_alert_dialog.AlertDialogTrigger,
  AlertTitle: () => import_alert.AlertTitle,
  Avatar: () => import_avatar.Avatar,
  AvatarFallback: () => import_avatar.AvatarFallback,
  AvatarImage: () => import_avatar.AvatarImage,
  Badge: () => import_badge.Badge,
  BrandedAvatar: () => import_avatar.BrandedAvatar,
  Breadcrumbs: () => import_breadcrumbs.Breadcrumbs,
  Button: () => import_button.Button,
  Calendar: () => import_calendar.Calendar,
  Card: () => import_card.Card,
  CardContent: () => import_card.CardContent,
  CardDescription: () => import_card.CardDescription,
  CardFooter: () => import_card.CardFooter,
  CardHeader: () => import_card.CardHeader,
  CardTitle: () => import_card.CardTitle,
  Checkbox: () => import_checkbox.Checkbox,
  ConfirmForm: () => import_confirm_form.ConfirmForm,
  DatePicker: () => import_date_picker.DatePicker,
  DetailCard: () => import_detail_card2.DetailSection,
  DetailGrid: () => import_detail_card.DetailGrid,
  DetailRow: () => import_detail_card.DetailRow,
  DetailSection: () => import_detail_card.DetailSection,
  Dialog: () => import_dialog.Dialog,
  DialogClose: () => import_dialog.DialogClose,
  DialogContent: () => import_dialog.DialogContent,
  DialogDescription: () => import_dialog.DialogDescription,
  DialogFooter: () => import_dialog.DialogFooter,
  DialogHeader: () => import_dialog.DialogHeader,
  DialogOverlay: () => import_dialog.DialogOverlay,
  DialogPortal: () => import_dialog.DialogPortal,
  DialogTitle: () => import_dialog.DialogTitle,
  DialogTrigger: () => import_dialog.DialogTrigger,
  DropdownMenu: () => import_dropdown_menu.DropdownMenu,
  DropdownMenuContent: () => import_dropdown_menu.DropdownMenuContent,
  DropdownMenuGroup: () => import_dropdown_menu.DropdownMenuGroup,
  DropdownMenuItem: () => import_dropdown_menu.DropdownMenuItem,
  DropdownMenuLabel: () => import_dropdown_menu.DropdownMenuLabel,
  DropdownMenuPortal: () => import_dropdown_menu.DropdownMenuPortal,
  DropdownMenuRadioGroup: () => import_dropdown_menu.DropdownMenuRadioGroup,
  DropdownMenuSeparator: () => import_dropdown_menu.DropdownMenuSeparator,
  DropdownMenuSub: () => import_dropdown_menu.DropdownMenuSub,
  DropdownMenuTrigger: () => import_dropdown_menu.DropdownMenuTrigger,
  EmptyState: () => import_empty_state.EmptyState,
  FormActions: () => import_form_card.FormActions,
  FormCard: () => import_form_card.FormCard,
  FormError: () => import_form_card.FormError,
  FormSection: () => import_form_card.FormSection,
  FormSplitBody: () => import_form_card.FormSplitBody,
  FormSubmitRibbon: () => import_form_submit_ribbon.FormSubmitRibbon,
  HiddenFormSelect: () => import_hidden_form_select.HiddenFormSelect,
  Input: () => import_input.Input,
  KanbanBoard: () => import_kanban_board.KanbanBoard,
  KpiTile: () => import_kpi_tile.KpiTile,
  Label: () => import_label.Label,
  LocalClock: () => import_local_clock.LocalClock,
  ManagerHero: () => import_manager_hero.ManagerHero,
  MobileMenuButton: () => import_sidebar_nav.MobileMenuButton,
  OwnerCell: () => import_avatar.OwnerCell,
  PageHeader: () => import_page_header.PageHeader,
  PageHero: () => import_page_header.PageHero,
  Pagination: () => import_pagination.Pagination,
  PillButtons: () => import_pill_group.PillButtons,
  PillGroup: () => import_pill_group.PillGroup,
  Popover: () => import_popover.Popover,
  PopoverContent: () => import_popover.PopoverContent,
  PopoverTrigger: () => import_popover.PopoverTrigger,
  SegmentedControlLinks: () => import_segmented_control.SegmentedControlLinks,
  Select: () => import_select.Select,
  SelectContent: () => import_select.SelectContent,
  SelectGroup: () => import_select.SelectGroup,
  SelectItem: () => import_select.SelectItem,
  SelectTrigger: () => import_select.SelectTrigger,
  SelectValue: () => import_select.SelectValue,
  Separator: () => import_separator.Separator,
  ShellLayout: () => import_shell_layout.ShellLayout,
  SidebarNav: () => import_sidebar_nav.SidebarNav,
  Skeleton: () => import_skeleton.Skeleton,
  StatusBadge: () => import_status_badge.StatusBadge,
  Table: () => import_table.Table,
  TableBody: () => import_table.TableBody,
  TableCaption: () => import_table.TableCaption,
  TableCell: () => import_table.TableCell,
  TableHead: () => import_table.TableHead,
  TableHeader: () => import_table.TableHeader,
  TableRow: () => import_table.TableRow,
  Tabs: () => import_tabs.Tabs,
  TabsContent: () => import_tabs.TabsContent,
  TabsList: () => import_tabs.TabsList,
  TabsTrigger: () => import_tabs.TabsTrigger,
  Textarea: () => import_textarea.Textarea,
  TimePicker: () => import_time_picker.TimePicker,
  TipCard: () => import_tip_card.TipCard,
  TipStrip: () => import_tip_card.TipStrip,
  ZenStrip: () => import_zen_strip.ZenStrip,
  activeTone: () => import_status_badge.activeTone,
  assetConditionTone: () => import_status_badge.assetConditionTone,
  auditActionTone: () => import_status_badge.auditActionTone,
  avatarColorClass: () => import_avatar_color.avatarColorClass,
  badgeVariants: () => import_badge.badgeVariants,
  buttonVariants: () => import_button.buttonVariants,
  cn: () => import_utils.cn,
  communicationDirectionTone: () => import_status_badge.communicationDirectionTone,
  communicationTypeTone: () => import_status_badge.communicationTypeTone,
  contractStatusTone: () => import_status_badge.contractStatusTone,
  dailyQuote: () => import_daily_quote.dailyQuote,
  formatAed: () => import_format.formatAed,
  formatAedShort: () => import_format.formatAedShort,
  formatCurrencyShort: () => import_format.formatCurrencyShort,
  getGreeting: () => import_greeting.getGreeting,
  invoiceStatusTone: () => import_status_badge.invoiceStatusTone,
  leadStageTone: () => import_status_badge.leadStageTone,
  maintenanceFrequencyTone: () => import_status_badge.maintenanceFrequencyTone,
  maintenanceStatusTone: () => import_status_badge.maintenanceStatusTone,
  priorityTone: () => import_status_badge.priorityTone,
  srStatusTone: () => import_status_badge.srStatusTone,
  stakeholderTypeTone: () => import_status_badge.stakeholderTypeTone,
  useUnsavedChangesGuard: () => import_unsaved_changes_guard.useUnsavedChangesGuard,
  workOrderStatusTone: () => import_status_badge.workOrderStatusTone
});
module.exports = __toCommonJS(index_exports);
var import_button = require("./primitives/button");
var import_input = require("./primitives/input");
var import_textarea = require("./primitives/textarea");
var import_label = require("./primitives/label");
var import_checkbox = require("./primitives/checkbox");
var import_avatar = require("./primitives/avatar");
var import_badge = require("./primitives/badge");
var import_separator = require("./primitives/separator");
var import_skeleton = require("./primitives/skeleton");
var import_empty_state = require("./primitives/empty-state");
var import_card = require("./primitives/card");
var import_status_badge = require("./primitives/status-badge");
var import_pill_group = require("./selection/pill-group");
var import_hidden_form_select = require("./selection/hidden-form-select");
var import_segmented_control = require("./selection/segmented-control");
var import_date_picker = require("./selection/date-picker");
var import_time_picker = require("./selection/time-picker");
var import_calendar = require("./selection/calendar");
var import_dialog = require("./overlays/dialog");
var import_alert_dialog = require("./overlays/alert-dialog");
var import_alert = require("./overlays/alert");
var import_dropdown_menu = require("./overlays/dropdown-menu");
var import_popover = require("./overlays/popover");
var import_tabs = require("./overlays/tabs");
var import_select = require("./overlays/select");
var import_page_header = require("./layout/page-header");
var import_breadcrumbs = require("./layout/breadcrumbs");
var import_sidebar_nav = require("./layout/sidebar-nav");
var import_shell_layout = require("./layout/shell-layout");
var import_form_card = require("./cards/form-card");
var import_detail_card = require("./cards/detail-card");
var import_detail_card2 = require("./cards/detail-card");
var import_kpi_tile = require("./cards/kpi-tile");
var import_tip_card = require("./cards/tip-card");
var import_zen_strip = require("./cards/zen-strip");
var import_manager_hero = require("./cards/manager-hero");
var import_pagination = require("./data/pagination");
var import_table = require("./data/table");
var import_kanban_board = require("./data/kanban-board");
var import_form_submit_ribbon = require("./form-helpers/form-submit-ribbon");
var import_unsaved_changes_guard = require("./form-helpers/unsaved-changes-guard");
var import_confirm_form = require("./form-helpers/confirm-form");
var import_local_clock = require("./utility/local-clock");
var import_utils = require("./lib/utils");
var import_format = require("./lib/format");
var import_avatar_color = require("./lib/avatar-color");
var import_daily_quote = require("./lib/daily-quote");
var import_greeting = require("./lib/greeting");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AVATAR_PALETTE,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  BrandedAvatar,
  Breadcrumbs,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ConfirmForm,
  DatePicker,
  DetailCard,
  DetailGrid,
  DetailRow,
  DetailSection,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
  EmptyState,
  FormActions,
  FormCard,
  FormError,
  FormSection,
  FormSplitBody,
  FormSubmitRibbon,
  HiddenFormSelect,
  Input,
  KanbanBoard,
  KpiTile,
  Label,
  LocalClock,
  ManagerHero,
  MobileMenuButton,
  OwnerCell,
  PageHeader,
  PageHero,
  Pagination,
  PillButtons,
  PillGroup,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SegmentedControlLinks,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  ShellLayout,
  SidebarNav,
  Skeleton,
  StatusBadge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  TimePicker,
  TipCard,
  TipStrip,
  ZenStrip,
  activeTone,
  assetConditionTone,
  auditActionTone,
  avatarColorClass,
  badgeVariants,
  buttonVariants,
  cn,
  communicationDirectionTone,
  communicationTypeTone,
  contractStatusTone,
  dailyQuote,
  formatAed,
  formatAedShort,
  formatCurrencyShort,
  getGreeting,
  invoiceStatusTone,
  leadStageTone,
  maintenanceFrequencyTone,
  maintenanceStatusTone,
  priorityTone,
  srStatusTone,
  stakeholderTypeTone,
  useUnsavedChangesGuard,
  workOrderStatusTone
});
