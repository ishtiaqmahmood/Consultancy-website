import React from "react";

function Universities() {
  return (
    <>
      <section className="bg-100 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mx-auto align-items-center text-center">
              <h6 className="mb-4 text-uppercase fw-light fs-1 mb-6">
                Featured Universities
              </h6>
              <div
                className="carousel slide"
                id="carouselExampleDark"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100 justify-content-center">
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/mac-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/charles-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/newcastle-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/la-trobe-uni.png"
                          alt="universities"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="row h-100 justify-content-center">
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/mac-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/charles-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/newcastle-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/la-trobe-uni.png"
                          alt="universities"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="1000">
                    <div className="row h-100 justify-content-center">
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/mac-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/charles-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/newcastle-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/la-trobe-uni.png"
                          alt="universities"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 justify-content-center">
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/mac-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/charles-uni.png"
                          alt="universities"
                        />
                      </div>
                      <div className="col-sm-6 col-lg-4 col-xl-3 text-xl-start">
                        <img
                          className="mb-4"
                          src="/images/gallery/newcastle-uni.png"
                          alt="universities"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 flex-center">
                  <div className="col-auto position-relative z-index-2">
                    <ol className="carousel-indicators">
                      <li
                        className="active mx-2"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                      ></li>
                      <li
                        className="mx-2"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                      ></li>
                      <li
                        className="mx-2"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                      ></li>
                      <li
                        className="mx-2"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="3"
                      ></li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Universities;
