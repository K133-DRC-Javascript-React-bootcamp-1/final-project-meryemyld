import React from "react";
import Footer from "./Footer";
import NavbarMenu from "./NavbarMenu";

const Store = () => {
  return (
    <div>
      <NavbarMenu />
      <div class="container ">
        <h5>
          <span>Store Policy</span>
        </h5>
      </div>{" "}
      <br />
      <div class="container-md ">
        <div class="row d-flex justify-content-center">
          <div class="col-md-8">
            <small class="lead">Customer Care</small>
            <br />
            <br />
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              esse aut, maxime fuga ratione incidunt iusto repudiandae animi
              doloribus deleniti deserunt sint quod qui temporibus? Quis
              asperiores debitis natus ut.
            </small>
            <br />
            <br />
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              esse aut, maxime fuga ratione incidunt iusto repudiandae animi
              doloribus deleniti deserunt sint quod qui temporibus? Quis
              asperiores debitis natus ut.
            </small>
            <br />
            <br /> <br />
            <small class="lead">Privacy & Safety</small>
            <br />
            <br />
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              esse aut, maxime fuga ratione incidunt iusto repudiandae animi
              doloribus deleniti deserunt sint quod qui temporibus? Quis
              asperiores debitis natus ut.
            </small>
            <br />
            <br />
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              esse aut, maxime fuga ratione incidunt iusto repudiandae animi
              doloribus deleniti deserunt sint quod qui temporibus? Quis
              asperiores debitis natus ut. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum, alias quisquam molestias
              veritatis, reprehenderit, asperiores id eos sed corrupti ipsa
              architecto hic ad omnis illum nemo exercitationem? Molestiae, et
              aliquam.
            </small>
            <br />
            <br /> <br />
            <div id="payment">
              <small class="lead">Payment Methods</small>
              <br />
              <br />
              <ul>
                <li>
                  <small>Credit / Debit Cards</small>
                </li>
                <li>
                  <small>PAYPAL</small>
                </li>
                <li>
                  <small>Offline Payments</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br/><br/> <br/>
      <Footer />
    </div>
  );
};

export default Store;
