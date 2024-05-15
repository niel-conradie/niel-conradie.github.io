import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="select-none"
      src="./images/logo.png"
      alt="Logo"
      width={200}
      height={200}
      priority
    />
  );
}
