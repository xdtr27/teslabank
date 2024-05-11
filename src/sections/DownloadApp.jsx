import Logo from "../assets/images/Union.png";


// icons
import { FaApple } from "react-icons/fa";
import { FaGooglePlay as GooglePlayIcon } from "react-icons/fa";
import { CgAdd } from "react-icons/cg";



export default function DownloadApp() {
  return (
    <section className="p-desktop py-28 bg-rose-50">
      <div>
        <h3>
          Uma nova experiência <br /> em{" "}
          <span className="text-alt">serviços financeiros</span>.
        </h3>
        <p>
          Nossa abordagem inovadora e personalizada oferece uma experiência
          única para atender às suas necessidades.
        </p>
        <div>
          <a href="">
            <div>
              <small>Download via</small>
              <strong>App Store</strong>
            </div>
            <div>
              <img src={CgAdd} alt="Apple Icon" />
            </div>
          </a>
          <a href="">
            <div>
              <small>Download via</small>
              <strong>Google Play</strong>
            </div>
            <div>
              <img src={GooglePlayIcon} alt="Google play Icon" />
            </div>
          </a>
        </div>
      </div>
      <div className="bg-alt w-fit flex items-center px-24 py-20 rounded-[60px] pb-14">
        <img src={Logo} alt="Logo" />
      </div>
    </section>
  );
}
