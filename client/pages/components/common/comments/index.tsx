import * as React from "react";
import {Comments as FacebookComments, FacebookProvider} from "react-facebook";


interface ICommentsProps {
  slug: string;
}

export const Comments: React.FC<ICommentsProps> = ({slug}) => {
  if (navigator.userAgent === "ReactSnap") {
    return null;
  }

  return (
    <FacebookProvider appId="471903663420767">
      <FacebookComments href={`https://trejgun.github.io/articles/${slug}`} />
    </FacebookProvider>
  );
};
