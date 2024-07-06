import mercadoLibreLogo from "../assets/mercadolibre.svg";
import samsungLogo from "../assets/samsung.svg";
import amazonLogo from "../assets/amazon.svg";
import ebayLogo from "../assets/ebay.svg";
import aliexpressLogo from "../assets/aliexpress.svg";

const AssociatesSlider = () => {
  return (
    <div className="p-0 max-w-xl w-screen overflow-hidden  ">
      <section className="flex h-24 w-full animate-loop-scroll hover:pause">
        <ul className="flex space-x-6">
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img
              src={mercadoLibreLogo}
              alt="mercado libre"
              className="h-full w-full"
            />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img src={amazonLogo} alt="amazon" className="h-full w-full" />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0 ">
            <img src={ebayLogo} alt="ebay" className="h-full w-full" />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img
              src={aliexpressLogo}
              alt="aliexpress"
              className="h-full w-full"
            />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img src={samsungLogo} alt="samsung" className="h-full w-full" />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img
              src={mercadoLibreLogo}
              alt="mercado libre"
              className="h-full w-full"
            />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img src={amazonLogo} alt="amazon" className="h-full w-full" />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0 ">
            <img src={ebayLogo} alt="ebay" className="h-full w-full" />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img
              src={aliexpressLogo}
              alt="aliexpress"
              className="h-full w-full"
            />
          </li>
          <li className="card w-24 p-2 h-24 background-cards flex-shrink-0">
            <img src={samsungLogo} alt="samsung" className="h-full w-full" />
          </li>
        </ul>
      </section>
    </div>
  );
};
export default AssociatesSlider;
