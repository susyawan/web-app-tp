import React from "react";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsChevronRight,
  BsTriangleHalf,
  BsFillGridFill,
  BsFullscreen,
  BsFillXDiamondFill,
  BsToggles,
  BsStack,
  BsBox,
  BsFillFolderFill,
  BsMicFill,
  BsBatteryCharging,
  BsFileEarmark,
  BsArchive,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <>
      <nav
        className="col-2 p-0 offcanvas-lg offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ borderRight: "2px solid #DCDCDC" }}
      >
        <div className="d-flex flex-column gap-5 p-3 bg-custom sidebar">
          <div className="offcanvas-header d-flex align-items-center self-place-center">
            <a
              href="/"
              className="d-flex flex-row flex-md-row flex-lg-column flex-xl-row align-items-center gap-2 md-3 me-md-auto link-dark text-decoration-none"
            >
              <BsTriangleHalf size="40px" />
              <h4
                className="offcanvas-title text-nowrap"
                id="offcanvasResponsiveLabel"
              >
                Super Finti
              </h4>
            </a>
          </div>

          <div className="offcanvas-body d-flex flex-column gap-4">
            <div className="d-flex align-items-center d-block d-lg-none d-xl-none">
              <div className="d-flex flex-row">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <a href="/" className="text-black">
                      <BsFileEarmark size="1.2em" />
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/" className="text-black">
                      <BsArchive size="1.2em" />
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/" className="text-black">
                      <BsThreeDotsVertical size="1.2em" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex flex-row">
                <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                    <a href="/" className="text-decoration-none text-muted">
                      <span>Wallet</span>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a href="/" className="text-decoration-none text-muted">
                      <span>Invoice</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h5>Main Navigation</h5>
              <ul className="nav nav-pills flex-column mb-auto mt-2">
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsFillGridFill />
                      Dashboard
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsFullscreen />
                      Transactions
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsFillXDiamondFill />
                      Contacts
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsToggles />
                      Features
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsStack />
                      Library
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5>Settings &amp; Schedule</h5>
              <ul className="nav nav-pills flex-column mb-auto mt-2">
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsBox />
                      Base Wallet
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsFillFolderFill />
                      My Contacts
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsMicFill />
                      Invoices
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/"
                    className="nav-link d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      <BsBatteryCharging />
                      Schedules
                    </div>
                    <BsChevronRight />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div
                className="shadow position-relative d-flex flex-column align-items-center text-center py-3 pt-5 mt-4 bg-gradienting"
                style={{ borderRadius: "10px" }}
              >
                <div
                  className="shadow-lg position-absolute d-flex bg-light justify-content-center align-items-center"
                  style={{
                    placeSelf: "center",
                    top: "-30px",
                    height: "60px",
                    width: "60px",
                    borderRadius: "50%",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center text-white"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "tomato",
                    }}
                  >
                    <span>?</span>
                  </div>
                </div>
                <div className="my-3">
                  <h5>Help Center</h5>
                  <p className="m-0">Having Trouble in Finti.</p>
                  <p>Please contact us for more question.</p>
                </div>
                <div className="shadow">
                  <Button variant="light">Go To Help Center</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
