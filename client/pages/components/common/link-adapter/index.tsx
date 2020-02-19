import React, {forwardRef} from "react";
import {Link, LinkProps} from "react-router-dom";


export const LinkAdapter = forwardRef<HTMLAnchorElement, LinkProps>(({to, ...props}: LinkProps, ref) => (
  <Link innerRef={ref} to={to} {...props} />
));
