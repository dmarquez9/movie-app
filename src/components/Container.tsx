import cx from "classnames";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cx("w-[1200px] max-w-full px-4 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
