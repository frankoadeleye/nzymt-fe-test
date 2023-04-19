import Image from "next/image";
import styles from "styles/image.module.scss";

type IWProp = {
  src: HTMLImageElement;
  alt?: any;
};

function ImageWrapper({ src, alt }: IWProp) {
  return (
    <div className={styles.image_cover}>
      <Image src={src} alt={alt} width={60} height={60} priority={true} />
    </div>
  );
}

export default ImageWrapper;
