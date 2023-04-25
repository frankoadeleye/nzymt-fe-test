import Image from "next/image";
import styles from "styles/image.module.scss";

type IWProp = {
  src: HTMLImageElement;
  alt?: any;
};

function ImageWrapper({ src, alt }: IWProp) {
  return (
    <>
      <Image src={src} alt={alt} width={60} height={60} priority={true} />
    </>
  );
}

export default ImageWrapper;
