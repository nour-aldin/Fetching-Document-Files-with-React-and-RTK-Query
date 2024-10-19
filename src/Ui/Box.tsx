import { ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return (
    <div className="flex justify-center items-center my-32">{children}</div>
  );
};

export default Box;
