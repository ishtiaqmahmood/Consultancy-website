import React from "react";

function Adv() {
  return (
    <section className="py-6 bg-100">
      <div className="container">
        <div className="row flex-center">
          <div className="col-md-7 col-lg-6 offset-xl-1">
            <h1 className="fw-light text-center text-md-start fs-lg-3 fs-xl-4">
              Ready to chase your dreams?
            </h1>
          </div>
          <div className="col-md-4 text-center text-lg-end">
            {" "}
            <a className="btn btn-lg btn-primary hover-top" href="#">
              Apply Online
              <svg
                className="bi bi-arrow-right-short ms-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                >
                  {" "}
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Adv;
