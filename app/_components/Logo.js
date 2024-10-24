import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import logoMobile from "@/public/logo-mobile.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src={logo} alt="so digital" className="hidden desktop:block" width={136} height={32} />
      <Image src={logoMobile} alt="so digital" className="desktop:hidden" width={136} height={32} />
    </Link>
  );
}

export default Logo;
