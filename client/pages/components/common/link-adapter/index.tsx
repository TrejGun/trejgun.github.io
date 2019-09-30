import * as React from "react";
import {Link, LinkProps} from "react-router-dom";


export const LinkAdapter = React.forwardRef<HTMLAnchorElement, LinkProps>(({to, ...props}: LinkProps, ref) => (
  <Link innerRef={ref} to={to} {...props} />
));
