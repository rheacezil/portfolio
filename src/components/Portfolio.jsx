import React from "react";

function Portfolio() {
  return (
    <>
      <section
        id="portfolio"
        className="container d-flex justify-content-center p-5"
      >
        <div className="col-lg-12">
          <h1 className="pt-3 fw-bold text-center">What I Do</h1>
          {/* <Webdev /> */}
          <div className="row pt-4">
            <h2 className="lead fw-bold">WEB DEVELOPMENT</h2>
            <div className="col-md-6 col-lg-4 pt-3">
              <div className="portfolio-item position-relative overflow-hidden">
                <img src="/images/simon-game.png" />
                <a href="https://rheacezil.github.io/simon-game/">
                  <div className="portfolio-overlay">
                    <div className="portfolio-text">
                      <h2 className="text-white fw-bold">Simon Game Online</h2>
                      <p className="text-white">
                        Put your memory and pattern recognition to the test!
                        Check out this JavaScript and jQuery-developed game
                        inspired from the classic Simon Game
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pt-3">
              <div className="portfolio-item position-relative overflow-hidden">
                <img src="/images/ultra-foundation.png" />
                <a href="https://kakana-ultra-foundation.vercel.app/">
                  <div className="portfolio-overlay">
                    <div className="portfolio-text">
                      <h2 className="text-white fw-bold">ULTRA Foundation</h2>
                      <p className="text-white">
                        This website showcases different fundraisers and
                        volunteer programs
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 pt-3 pb-5">
              <div className="portfolio-item position-relative overflow-hidden">
                <img src="/images/ultra-emart.png" />
                <a href="https://rheacezil.github.io/ultra-emart/#">
                  <div className="portfolio-overlay">
                    <div className="portfolio-text">
                      <h2 className="text-white fw-bold">ULTRA E-mart</h2>
                      <p className="text-white">
                        This is the front-end of an e-commerce website developed
                        using HTML, CSS, and Bootstrap.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <h2 className="lead fw-bold pt-5 ">GRAPHIC DESIGN</h2>
            <div className=" col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD1.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD2.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD3.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD4.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD5.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD6.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD7.png" className="card-img" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 pt-3">
              <div className="portfolio-item card position-relative overflow-hidden">
                <img src="/images/GD8.png" className="card-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
