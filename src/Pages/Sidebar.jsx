import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Crown from "../assets/logo-crown-hotel.svg";
import Person from "../assets/person-check.svg";
import NewReservation from "../components/NewReservation";
import Reservations from "../components/Reservations";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [content, setcontent] = useState(null);

  // Menüleri açıp kapama işlemi
  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="d-flex border border-danger">
      {/* Sol Sidebar */}
      <nav
        className="min-vh-100 p-3  bg-cream"
        style={{ minWidth: "250px",borderRight:"6px dotted rgb(139,116,57)" }}
      >
        <div className=" d-flex align-items-start">
          <img src={Person} style={{ width: "30px" }} />
          <p>Hoşgeldiniz Yönetici</p>
        </div>
        <div>
          <img src={Crown} alt="" className="" />
        </div>
        <ol className="nav flex-column mt-3">
          <li
            className="nav-item "
            onMouseEnter={() => {
              toggleMenu("hotel");
            }}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a
              href="#"
              className={`nav-link rounded mb-2 fw-bold fw-bold ${
                activeMenu == "hotel" ? "border-gold" : "border-gray-800"
              }`}
              style={{
                color: activeMenu == "hotel" ? "rgb(139,116,57)" : "#495057",
              }}
            >
              Otel Rezervasyon{" "}
              {activeMenu === "hotel" ? <FaAngleDown /> : <FaAngleRight />}
            </a>

            {activeMenu === "hotel" && (
              <ol className="nav flex-column ms-3 ">
                <li className="nav-item">
                  <div></div>
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold fw-semibold fw-semibold custom-link custom-link:hover"
                    style={{
                      color: activeMenu != null ? "rgb(139,116,57)" : "#495057",
                    }}
                    onClick={() => setcontent("newReservation")}
                  >
                    Yeni Rezervasyon
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold custom-link custom-link:hover"
                    style={{
                      color: activeMenu != null ? "rgb(139,116,57)" : "#495057",
                    }}
                    onClick={() => setcontent("reservations")}
                  >
                    Rezervasyonlar
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold custom-link custom-link:hover"
                    style={{
                      color: activeMenu != null ? "rgb(139,116,57)" : "#495057",
                    }}
                  >
                    Yeni Aranma Talebi
                  </a>
                </li>
              </ol>
            )}
          </li>

          <li
            className="nav-item "
            onMouseEnter={() => toggleMenu("tour")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a
              href="#"
              className={`nav-link rounded mb-2 fw-bold  ${
                activeMenu == "tour" ? "border-gold" : "border-gray-800"
              }`}
              style={{
                color: activeMenu == "tour" ? "rgb(139,116,57)" : "#495057",
              }}
            >
              Tur Rezervasyonu{" "}
              {activeMenu === "tour" ? <FaAngleDown /> : <FaAngleRight />}
            </a>
            {activeMenu === "tour" && (
              <ol className="nav flex-column ms-3">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold custom-link custom-link:hover"
                    style={{
                      color:
                        activeMenu == "tour" ? "rgb(139,116,57)" : "#495057",
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold "
                    style={{
                      color:
                        activeMenu == "tour" ? "rgb(139,116,57)" : "#495057",
                    }}
                  >
                    Preferences
                  </a>
                </li>
              </ol>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => toggleMenu("customer")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a
              href="#"
              className={`nav-link rounded mb-2 fw-bold  ${
                activeMenu == "customer" ? "border-gold" : "border-gray-800"
              }`}
              style={{
                color: activeMenu == "customer" ? "rgb(139,116,57)" : "#495057",
              }}
            >
              Müşteri Yönetimi{" "}
              {activeMenu === "customer" ? <FaAngleDown /> : <FaAngleRight />}
            </a>
            {activeMenu === "customer" && (
              <ol className="nav flex-column ms-3">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold "
                    style={{
                      color:
                        activeMenu == "customer"
                          ? "rgb(139,116,57)"
                          : "#495057",
                      borderColor:
                        activeMenu == "hotel" ? "rgb(139,116,57)" : "#495057",
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold "
                    style={{
                      color:
                        activeMenu == "customer"
                          ? "rgb(139,116,57)"
                          : "#495057",
                    }}
                  >
                    Preferences
                  </a>
                </li>
              </ol>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => toggleMenu("operation")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a
              href="#"
              className={`nav-link rounded mb-2 fw-bold  ${
                activeMenu == "operation" ? "border-gold" : "border-gray-800"
              }`}
              style={{
                color:
                  activeMenu == "operation" ? "rgb(139,116,57)" : "#495057",
                borderColor:
                  activeMenu == "hotel" ? "rgb(139,116,57)" : "#495057",
              }}
            >
              Operasyon{" "}
              {activeMenu === "operation" ? <FaAngleDown /> : <FaAngleRight />}
            </a>
            {activeMenu === "operation" && (
              <ol className="nav flex-column ms-3">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold "
                    style={{
                      color:
                        activeMenu == "operation"
                          ? "rgb(139,116,57)"
                          : "#495057",
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold "
                    style={{
                      color:
                        activeMenu == "operation"
                          ? "rgb(139,116,57)"
                          : "#495057",
                    }}
                  >
                    Preferences
                  </a>
                </li>
              </ol>
            )}
          </li>

          <li
            className="nav-item"
            onMouseEnter={() => toggleMenu("account")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a
              href="#"
              className={`nav-link rounded mb-2 fw-bold  ${
                activeMenu == "account" ? "border-gold" : "border-gray-800"
              }`}
              style={{
                color: activeMenu == "account" ? "rgb(139,116,57)" : "#495057",
              }}
            >
              Muhasebe{" "}
              {activeMenu === "account" ? <FaAngleDown /> : <FaAngleRight />}
            </a>
            {activeMenu === "account" && (
              <ol className="nav flex-column ms-3">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold"
                    style={{
                      color:
                        activeMenu == "account" ? "rgb(139,116,57)" : "#495057",
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link fade-up fw-semibold fw-semibold"
                    style={{
                      color:
                        activeMenu == "account" ? "rgb(139,116,57)" : "#495057",
                    }}
                  >
                    Preferences
                  </a>
                </li>
              </ol>
            )}
          </li>
        </ol>
      </nav>

      {/* Ana içerik alanı */}
      <div className="flex-grow-1 p-3">
        {content == "newReservation" ? <NewReservation /> : <></>}
        {content == "reservations" ? <Reservations /> : <></>}
      </div>
    </div>
  );
};

export default Sidebar;
