import React, {FC} from "react";
import SyntaxHighlighter, {SyntaxHighlighterProps} from "react-syntax-highlighter";
import {idea} from "react-syntax-highlighter/dist/esm/styles/hljs";


export const Code: FC<SyntaxHighlighterProps> = ({children, ...props}) => {
  return (
    <SyntaxHighlighter style={idea} {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
