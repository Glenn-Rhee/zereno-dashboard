import clsx from "clsx";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container(props: ContainerProps) {
  const { children, className } = props;

  return <div className={clsx("lg:ml-81  mt-16", className)}>{children}</div>;
}

export default Container;
