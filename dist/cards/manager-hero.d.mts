import * as react_jsx_runtime from 'react/jsx-runtime';

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

export { ManagerHero };
