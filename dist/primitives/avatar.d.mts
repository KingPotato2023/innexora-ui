import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

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

export { Avatar, AvatarFallback, AvatarImage, BrandedAvatar, OwnerCell };
