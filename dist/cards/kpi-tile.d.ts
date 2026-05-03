import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

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

export { KpiTile, type KpiTileProps, type KpiTone };
