import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Footer({ page }) {
  return (
    <footer className="px-0 desktop:px-4 desktop:pb-4 max-w-[1536px] m-auto">
      <div className={`flex flex-col gap-16 ${page === "home" ? "bg-[#fff]" : "bg-[#F5F5F5]"} px-6 py-12 desktop:px-20 desktop:py-16 rounded-lg`}>
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="flex items-end gap-1 bg-[#E5E6FF] py-2 pl-3 pr-2 rounded-md">
            <Link className="text-soDigital-grey-700  text-[15px] font-medium leading-[120%]" href="#">
              Gruppe
            </Link>
            <Image src="/threeDot.svg" alt="alt" width={5} height={10} />
          </nav>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-4 gap-4">
          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-soDigital-grey-500 text-sm font-medium leading-5">Navigation</h3>
            <ul className="flex flex-col gap-1">
              <li>
                <Link href="/about-us">
                  <p className="self-stretch text-soDigital-grey-600 text-2xl font-bold leading-[117%]">Über uns</p>
                </Link>
              </li>
              <li>
                <Link href="/jobs">
                  <p className="self-stretch text-soDigital-grey-600 text-2xl font-bold leading-[117%]">Jobs</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="self-stretch text-soDigital-grey-600 text-2xl font-bold leading-[117%]">Kontakt</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-6">
            <h3 className="text-soDigital-grey-500 text-sm font-medium leading-5">Kontakt</h3>
            <div className="flex flex-col gap-3">
              <Link href="mailto:hallo@sodigital-gruppe.de" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                hallo@sodigital-gruppe.de
              </Link>
              <p className="text-soDigital-grey-600 text-base font-normal leading-[150%]">+49 (0)160 93871335</p>
              <span>
                <p className="text-soDigital-grey-600 text-base font-normal leading-[150%]">Kreativpark Freiburg</p>
                <p className="text-soDigital-grey-600 text-base font-normal leading-[150%]">Paul-Ehrlich-Straße 7</p>
                <p className="text-soDigital-grey-600 text-base font-normal leading-[150%]">79106 Freiburg</p>
              </span>
            </div>
          </div>

          {/* Services Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-soDigital-grey-500 text-sm font-medium leading-5">Leistungen</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services/recruitment" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Web Entwicklung
                </Link>
              </li>
              <li>
                <Link href="/services/online-shops" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Online Shops
                </Link>
              </li>
              <li>
                <Link href="/services/social-media-marketing" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/google-ads" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Google Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-soDigital-grey-500 text-sm font-medium leading-5">Weiteres</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/services/recruitment" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/services/online-shops" className="text-soDigital-grey-600 text-base font-normal leading-[150%]">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex gap-10 relative">
          <div className="flex gap-2">
            <Link className="relative flex justify-center items-center" href="https://facebook.com">
              <span className="p-6 bg-[#EFEEEF] rounded-lg"></span>
              <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto w-full" quality={100} src="/facebook.svg" alt="alt" width={24} height={24} />
            </Link>
            <Link className="relative flex justify-center items-center" href="https://linkedin.com">
              <span className="p-6 bg-[#EFEEEF] rounded-lg"></span>
              <Image className="absolute top-0 bottom-0 left-0 right-0 m-auto w-full" src="/linkedin.svg" alt="alt" width={24} height={24} />
            </Link>
          </div>
          <div className="flex items-end flex-grow">
            <p className="text-soDigital-grey-300 text-xs font-normal leading-4">© 2024 sodigital. Alle Rechte vorbehalten.</p>
          </div>
          <div className="absolute right-0 bottom-0 h-[100px]">
            <Image className="w-full" src="/google-partner.svg" quality={100} alt="Google Partner Logo" width={50} height={50} />
          </div>
        </div>
      </div>
    </footer>
  );
}
