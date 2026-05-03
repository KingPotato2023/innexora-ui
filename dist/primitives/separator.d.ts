import * as React from 'react';

declare const Separator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
} & React.RefAttributes<HTMLDivElement>>;

export { Separator };
