import { LinkProperties } from "./link-properties.interface";
import NextLink from "next/link";

export const Link = ({ className, children, href, style }: LinkProperties) => {
  return (
    <NextLink href={href} className={className} style={style}>
      {children}
    </NextLink>
  );
};
