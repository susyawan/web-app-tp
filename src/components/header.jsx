import React from "react";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFileEarmark,
  BsArchive,
  BsThreeDotsVertical,
  BsList,
} from "react-icons/bs";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header className="col-12 p-3 bg-custom body-header">
      <div className="container-fluid d-flex justify-content-between flex-row">
        <div className="d-flex flex-row flex-nowrap align-items-center justify-content-center gap-2">
          <Button
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="d-xl-none d-lg-none d-md-block d-block navbar-toggle"
          >
            <BsList size="1.5em" />
          </Button>
          <form action="">
            <input
              type="search"
              name=""
              id=""
              className="form-control form-control-dark"
              placeholder="Search"
            />
          </form>
        </div>

        <div className="d-flex flex-row d-none d-lg-block d-xl-block">
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

        <div className="d-flex flex-row d-none d-lg-block d-xl-block">
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

        <div className="d-flex flex-row justify-content-center align-items-center">
          <h6 className="m-0 mx-2">Hi, Sakhir</h6>
          <div
            className="shadow bg-dark"
            style={{ width: "30px", height: "30px", borderRadius: "5px" }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
