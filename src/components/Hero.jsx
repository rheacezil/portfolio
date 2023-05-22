import React from "react";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="container d-flex justify-content-center align-items-center text-center m-0"
      >
        <div className="">
          <img src="images/rhea-avatar.png" alt="avatar" />{" "}
          <h3 className="lead mt-4">hello, my name is</h3>
          <h1 className="fw-bold">Rhea Lamurin</h1>
          <p className="">web developer | graphic designer | video editor</p>
          <a href="https://drive.google.com/file/d/1xQI_Ks1CvecT0yf-Vipw4X0lql-_wXZ1/view?usp=sharing">
            <button className="btn btn-light btn-lg mt-4 px-5 py-3shadow">
              Hire me
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
