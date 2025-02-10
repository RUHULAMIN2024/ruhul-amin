import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default Container;
