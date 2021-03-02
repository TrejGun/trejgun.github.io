import React, {forwardRef} from "react";
import {Link} from "@material-ui/core";
import {LinkProps} from "@material-ui/core/Link";

export const ExternalLink = forwardRef<HTMLAnchorElement, LinkProps>(({...props}: LinkProps, ref) => (
  <Link innerRef={ref} rel="noopener noreferrer nofollow" target="_blank" {...props} />
));
