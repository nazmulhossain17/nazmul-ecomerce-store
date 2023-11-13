const Footer = () => {
  return (
    <footer className="bg-black py-[125px] text-white flex flex-col gap-24 px-14 md:items-center md:gap-[415px] md:flex-row md:justify-between md:px-[100px]">
      <div className="flex flex-col items-start gap-8">
        <div>
          <img src="./images/FASHION.png" />
        </div>
        <div>
          <p className="text-xl text-[#8E8E8E] md:text-2xl font-normal">
            Complete your style with awesome <br />
            clothes from us.
          </p>
        </div>
        <ul className="flex flex-row gap-[14px]">
          <li>
            <a href="#">
              <img src="./images/fb.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/insta.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/twitter.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/linkedin.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-[50px] md:gap-[188px] md:flex-row">
        <div className="flex flex-col  text-[#D9D9D9] gap-8">
          <h4 className="font-bold">Company</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <a href="http://">About us</a>
            </li>
            <li>
              <a href="http://">Contact us</a>
            </li>
            <li>
              <a href="http://">Support</a>
            </li>
            <li>
              <a href="http://">Carrers</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-[#D9D9D9] gap-8">
          <h4 className="font-bold">Quick Link</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <a href="http://">Share Location</a>
            </li>
            <li>
              <a href="http://">Orders Tracking</a>
            </li>
            <li>
              <a href="http://">Size Guide</a>
            </li>
            <li>
              <a href="http://">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-[#D9D9D9] gap-8">
          <h4 className="font-bold">Legal</h4>
          <ul className="flex flex-col gap-8">
            <li>
              <a href="http://">Terms & conditions</a>
            </li>
            <li>
              <a href="http://">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
