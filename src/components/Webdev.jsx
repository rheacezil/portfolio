import React from "react";

function Webdev() {
  return (
    <>
      <section
        id="webdev"
        className="p-5 container d-flex justify-content-center"
      >
        <div className="row">
          <div className="col-md-6 col-lg-4 pt-3">
            <div className="portfolio-item position-relative overflow-hidden">
              <img src="/images/ultra-foundation.png" />
              <div className="portfolio-overlay">
                <div className="portfolio-text">
                  <h2 className="text-white fw-bold">ULTRA Foundation</h2>
                  <p className="text-white">
                    This website showcases different fundraisers and volunteer
                    programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Webdev;
