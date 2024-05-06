import Image from "next/image";

export default function Logo() {
  return (
    <Image
      alt="Image Test"
      src="./images/logo.png"
      width={200}
      height={200}
      priority
    />
  );
}
