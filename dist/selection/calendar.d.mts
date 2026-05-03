import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

export { Calendar, type CalendarProps };
