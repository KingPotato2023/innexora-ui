import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

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

export { StatusBadge, type StatusBadgeTone, activeTone, assetConditionTone, auditActionTone, communicationDirectionTone, communicationTypeTone, contractStatusTone, invoiceStatusTone, leadStageTone, maintenanceFrequencyTone, maintenanceStatusTone, priorityTone, srStatusTone, stakeholderTypeTone, workOrderStatusTone };
