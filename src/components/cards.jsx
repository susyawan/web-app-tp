import React from "react";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsBox,
} from "react-icons/bs";

const Cards = () => {
  return (
    <>
      <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 col-12 position-absolute">
        <div
          className="bg-custom position-absolute"
          style={{
            height: "100px",
            width: "100%",
            borderBottom: "2px solid #DCDCDC",
          }}
        ></div>
      </div>
      <div className="col-12">
        <div className="container-fluid row row-cols-auto justify-content-center align-items-center mx-0">
          {/* Cards */}
          <div className="col-xl-4 py-3">
            <div
              className="card shadow bg-gradienting"
              style={{ minWidth: "330px", height: "200px" }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Your Working Balance</h6>
                  <h6 className="text-muted text-decoration-underline">
                    Saving Account
                  </h6>
                </div>
                <div className="d-flex justify-content-around align-items-baseline">
                  <h3>PKR 9,250,000</h3>
                  <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                    PKR
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 py-3">
            <div
              className="card shadow bg-pinkour"
              style={{ minWidth: "330px", height: "200px" }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Your Saving Status</h6>
                  <div
                    className="d-flex justify-content-center align-items-center text-white"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: 'grey'
                    }}
                  >
                    <h6>?</h6>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div
                    className="bg-redie d-flex justify-content-center align-items-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                  ><BsBox size='1.5em'/></div>
                  <div>
                    <h4>4.28%</h4>
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Your spending increased
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 py-3">
            <div
              className="card shadow bg-greenie"
              style={{ minWidth: "330px", height: "200px" }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <div className="d-flex">
                  <div
                    className="position-absolute bg-black"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "grey",
                      marginLeft: "20px",
                    }}
                  ></div>
                </div>
                <div className="d-flex flex-column align-items-baseline">
                  <h6 className="text-muted">Card Number</h6>
                  <h5>3829 4820 4629 5025</h5>
                </div>
                <div className="d-flex justify-content-between align-items-baseline">
                  <div>
                    <span className="text-muted" style={{fontSize: "12px"}}>CARD HOLDER NAME</span>
                    <h5>Anita Rose</h5>
                  </div>
                  <div>
                  <span className="text-muted" style={{fontSize: "12px"}}>VALID THRU</span>
                    <h5>09/17</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
