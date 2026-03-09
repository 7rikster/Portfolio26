import NextLink from "next/link";
import React from "react";
import { globalScrollRegistry } from "./pageTransition";

const Link = React.forwardRef<HTMLAnchorElement, React.ComponentProps<typeof NextLink>>(
  (props, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Clear the target scroll position so forward navigations always start at the top.
      // This leaves back/forward browser buttons to use the registry correctly since they don't fire onClick.
      let targetPath = props.href?.toString() || "";
      if (targetPath && targetPath.startsWith("/")) {
        // Strip query params/hashes to match how the registry stores paths
        targetPath = targetPath.split('?')[0].split('#')[0];
        delete globalScrollRegistry[targetPath];
      }
      
      if (props.onClick) props.onClick(e);
    };

    return <NextLink scroll={false} ref={ref} onClick={handleClick} {...props} />;
  }
);
Link.displayName = "Link";

export default Link;
