import Image from "next/image";
import cx from "classnames";

type BackgroundImageProps = {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  as?: any;
  [x: string]: any;
};

function BackgroundImage(props: BackgroundImageProps) {
  const { src, alt, children, className, as, ...rest } = props;

  const ElementType = as || "div";
  return (
    <ElementType className="block relative" {...rest}>
      <div className="absolute w-full h-full left-0 top-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>
      <div
        className={cx(
          "relative bg-gradient-to-t from-black to-transparent z-10",
          className
        )}
      >
        {children}
      </div>
    </ElementType>
  );
}

export default BackgroundImage;
