declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

// declare module "*.svg" {
//   import * as React from "react";
//   const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//   export default ReactComponent;
// }
