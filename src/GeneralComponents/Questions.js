import React from "react";
import AccordionContent from "../ProductPage.js/Accordion";
import Footer from "./Footer";
import NavbarMenu from "./NavbarMenu";

const Questions = () => {
  return (
    <div>
      <NavbarMenu />
      <div className="container mb-5">
        <div class="container ">
          <h5>
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </h5>
        </div>

        <br />
        <div class="row d-flex justify-content-center">
          <div class="col-md-9">
            <AccordionContent />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Questions;
