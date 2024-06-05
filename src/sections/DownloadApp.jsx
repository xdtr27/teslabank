import Logo from "../assets/images/Union.png";

// icons
import { FaApple as AppleIcon } from "react-icons/fa";
import { FaGooglePlay as GplayIcon } from "react-icons/fa";

export default function DownloadApp() {
  return (
    <section className="p-mobile py-24 md:p-desktop md:py-48 bg-rose-50 flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl sm:text-5xl md:text-6xl font-medium">
          Uma nova experiência <br /> em{" "}
          <span className="text-alt">serviços financeiros</span>.
        </h3>
        <p className="font-medium text-md md:text-2xl">
          Nossa abordagem inovadora e personalizada oferece uma <br />{" "}
          experiência única para atender às suas necessidades.
        </p>
        <div className="flex flex-wrap gap-5 md:gap-7">
          <a href="#" className="flex items-center bg-black py-2 px-6 gap-3 rounded-md">
            <div>
              <AppleIcon className="text-white text-4xl" />
            </div>
            <div className="flex flex-col leading-5">
              <small className="text-white font-light">Download via</small>
              <strong className="text-white">App Store</strong>
            </div>
          </a>
          <a href="#" className="flex items-center bg-black py-2 px-6 gap-3 rounded-md">
            <div>
              <GplayIcon className="text-white text-3xl" />
            </div>

            <div className="flex flex-col leading-5">
              <small className="text-white font-light">Download via</small>
              <strong className="text-white">Google Play</strong>
            </div>
          </a>
        </div>
      </div>
      <div className="bg-alt w-fit hidden xl:flex items-center px-24 py-20 rounded-[60px] pb-14">
        <img src={Logo} alt="Logo" />
      </div>
    </section>
  );
}
