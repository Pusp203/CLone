import React from "react";
import "./header.css";
import image1 from "../../../public/photos/asset 5.svg";
import image2 from"../../../"

const Header = () => {
  return (
    <div className="">
      <div className="header-content">
        <h1>Build. Grow. Pivot.</h1>
        <p className="header-content__text">
          Unlock your company or startup`s hidden growth potential with us,{" "}
          <br />
          using Blockchain, Fintech or the Cloud. IT outsourcing company. <br />
          Boosty Labs helps you create an innovative end to end product or{" "}
          <br />
          augment your team with the right experts.
        </p>

        <div className="header-link-home">
          <a href="/#freeHome">
            <div className="header-link_label">FREE CONSULATION</div>
            <div className="header-link_button"></div>
          </a>
        </div>

        <div className="text-header">
          <p>
            {" "}
            We built engineering teams for world leading crypto & SSI companies
          </p>

          <a href="#">
            <img
              src="https://boostylabs.com/uploads/home-logos/1653635221739.svg
      "
              alt="Ledger"
              width="100"
              height="100"
            />
          </a>
          <a href="https://boostylabs.com/img/cases/case-4/case-4-1.svg">
            <img src="" alt="Consensys" width="100" height="100" />
          </a>
          <a href="#">
            <img src={image1} alt="storyj" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="nem" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="mysterium" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="Celcius" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="Affindi" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="Trustana" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="BLoom" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="eliir" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="pokt" width="100" height="100" />
          </a>
          <a href="#">
            <img src="" alt="paraswap" width="100" height="100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
