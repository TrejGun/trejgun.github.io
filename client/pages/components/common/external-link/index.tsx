import * as React from "react";
import {Link} from "@material-ui/core";
import {LinkProps} from "@material-ui/core/Link";


export const ExternalLink = React.forwardRef<HTMLAnchorElement, LinkProps>(({...props}: LinkProps, ref) => (
  <Link innerRef={ref} rel="noopener noreferrer nofollow" target="_blank" {...props} />
));
