import React from "react";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsSearch,
  BsToggles,
  BsBoxArrowRight,
  BsBoxArrowInLeft,
  BsForwardFill,
  BsFillDropletFill,
  BsCurrencyDollar,
  BsPlugFill,
  BsReceipt,
} from "react-icons/bs";

const Transactions = () => {
  return (
    <>
      <div className="col-12 justify-content-center py-4" id="transactions">
        <div className="container-fluid row row-cols-auto m-0">
          {/* 1 */}
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 p-3 bg-custom"
            style={{ borderRadius: "5px" }}
          >
            <div className="d-flex flex-column gap-4">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Latest Transactions</h4>
                <ul className=" list-group list-group-horizontal">
                  <li className="list-group-item">
                    <a href="/" className="text-black">
                      <BsSearch />
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/" className="text-black">
                      <BsToggles />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex flex-column gap-3">
                <h6 className="text-muted">Mon, Mar 1</h6>
                {/* 1 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-greyde rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsBoxArrowRight />
                    </div>
                    <h6>Payment Sent to Shakir</h6>
                  </div>
                  <div>
                    <h6 style={{ color: "red" }}>$560.00</h6>
                  </div>
                </div>

                {/* 2 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-greyde rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsBoxArrowInLeft />
                    </div>
                    <h6>Salary from Redwhale</h6>
                  </div>
                  <div>
                    <h6>$12,200.00</h6>
                  </div>
                </div>

                {/* 3 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-greyde rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsForwardFill />
                    </div>
                    <h6>Money Sent to Wise.com</h6>
                  </div>
                  <div>
                    <h6 style={{ color: "red" }}>$3,000.00</h6>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <h6 className="text-muted">Mon, Mar 1</h6>
                {/* 1 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-greyde rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsBoxArrowRight />
                    </div>
                    <h6>Purchased Macbook Pro</h6>
                  </div>
                  <div>
                    <h6 style={{ color: "red" }}>$560.00</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 p-3">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Upcoming Transactions</h4>
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <a href="/" className="text-black text-decoration-none">
                      View All
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-column gap-3">
                <h6>Today</h6>
                {/* 1 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-primary rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsFillDropletFill />
                    </div>
                    <div>
                      <h6>Water Bill</h6>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Unsuccessfully
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6 style={{ color: "red" }}>- $280.00</h6>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <h6>Tomorrow</h6>
                {/* 1 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-danger rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsCurrencyDollar />
                    </div>
                    <div>
                      <h6>Income : Salary Oct</h6>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Successfully
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6>+ $1200.00</h6>
                  </div>
                </div>
                {/* 2 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-info rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsPlugFill />
                    </div>
                    <div>
                      <h6>Electric Bill</h6>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Successfully
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6 style={{ color: "red" }}>- $480.00</h6>
                  </div>
                </div>
                {/* 3 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-warning rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsReceipt />
                    </div>
                    <div>
                      <h6>Income : Jane transfers</h6>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Successfully
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6>+ $500.00</h6>
                  </div>
                </div>
                {/* 4 */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex justify-content-between align-items-center gap-2">
                    <div
                      className="bg-warning rounded d-flex justify-content-center align-items-center"
                      style={{ width: "35px", height: "35px" }}
                    >
                      <BsReceipt />
                    </div>
                    <div>
                      <h6>Income : Jane transfers</h6>
                      <span className="text-muted" style={{ fontSize: "14px" }}>
                        Successfully
                      </span>
                    </div>
                  </div>
                  <div>
                    <h6>+ $500.00</h6>
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

export default Transactions;
