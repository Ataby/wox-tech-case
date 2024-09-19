import React from "react";
import CalcPrice from "./CalcPrice";
import ContactInfo from "./ContactInfo";
import RoomInfo from "./RoomInfo";
import ReceiptInfo from "./ReceiptInfo";
import OthersInfo from "./OthersInfo";
import CrownHotel from "../assets/crown-hotel.jpg";

const NewReservation = () => {
  return (
    <div className="">
      {/* <img src={CrownHotel} alt="" className="z-n1 position-absolute w-100 h-100 blur" /> */}
      <div className="">
        <h3>Yeni Rezervasyon</h3>
        <h5>Crown Suit Hotel</h5>
      </div>
      <div className="d-flex p-1">
        <div className="flex-grow-0 flex-shrink-0">

        <CalcPrice />
        </div>

        <div className=" d-flex flex-column p-2 justify-content-between flex-grow-1">
          <div className="d-flex flex-row flex-wrap align-items-start ">
            <div
              className="flex-grow-0 flex-shrink-0"
              style={{ flexBasis: "200px" }}
            >
              <ContactInfo />
            </div>
            <div
              className="flex-grow-0 flex-shrink-0"
              style={{ flexBasis: "250px" }}
            >
              <RoomInfo />
            </div>
            <div className="flex-grow-1">
              <ReceiptInfo />
            </div>
          </div>
           
            <OthersInfo />
           
        </div>
      </div>
    </div>
  );
};

export default NewReservation;
