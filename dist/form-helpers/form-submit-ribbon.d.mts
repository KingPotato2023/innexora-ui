import * as react_jsx_runtime from 'react/jsx-runtime';

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

export { FormSubmitRibbon };
