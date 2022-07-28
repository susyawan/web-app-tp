import React from "react";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Tasks = () => {
  return (
    <>
      <div className="col-12">
        <div className="container-fluid py-4">
          <hr />
          <div className="row row-cols-auto">
            {/* 1 */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-between align-items-center my-4">
              <div className="mx-3">
                <h6>Task In Progress</h6>
                <div className="d-flex gap-3 align-items-center">
                  <h5 className="m-0 text-danger">210</h5>
                  <a
                    href="/"
                    className="bg-info d-flex align-items-center text-decoration-none"
                    style={{ borderRadius: "20px" }}
                  >
                    <span className="px-2 text-dark" style={{ fontSize: "14px" }}>
                      23&#x2197;
                    </span>
                  </a>
                </div>
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  Current Month
                </span>
              </div>
              <div className="d-flex mx-3 align-items-center gap-2">
                <div className="d-flex align-items-baseline gap-2">
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "10px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "25px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shadow bg-danger"
                    style={{
                      width: "20px",
                      height: "60px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "38px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "45px",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-between align-items-center my-4">
              <div className="mx-3">
                <h6>Task Completed</h6>
                <div className="d-flex gap-3 align-items-center">
                  <h5 className="m-0 text-primary">185</h5>
                  <a
                    href="/"
                    className="bg-info d-flex align-items-center text-decoration-none"
                    style={{ borderRadius: "20px" }}
                  >
                    <span className="px-2 text-dark" style={{ fontSize: "14px" }}>
                      45&#x2197;
                    </span>
                  </a>
                </div>
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  Current Month
                </span>
              </div>
              <div className="d-flex mx-3 align-items-center gap-2">
                <div className="d-flex align-items-baseline gap-2">
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "22px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "38px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "30px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shadow bg-primary"
                    style={{
                      width: "20px",
                      height: "60px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "38px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-between align-items-center my-4">
              <div className="mx-3">
                <h6>Monthly Tasks Summary</h6>
                <div className="d-flex gap-3 align-items-center">
                  <h5 className="m-0 text-success">1240</h5>
                  <a
                    href="/"
                    className="bg-info d-flex align-items-center text-decoration-none"
                    style={{ borderRadius: "20px" }}
                  >
                    <span className="px-2 text-dark" style={{ fontSize: "14px" }}>
                      145&#x2197;
                    </span>
                  </a>
                </div>
                <span className="text-muted" style={{ fontSize: "14px" }}>
                  Current Month
                </span>
              </div>
              <div className="d-flex mx-3 align-items-center gap-2">
                <div className="d-flex align-items-baseline gap-2">
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "45px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "22px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "40px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="shadow bg-success"
                    style={{
                      width: "20px",
                      height: "60px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "55px",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div
                    className="bg-greyde"
                    style={{
                      width: "20px",
                      height: "25px",
                      borderRadius: "4px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Tasks;
