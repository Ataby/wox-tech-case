import React, { useState } from "react";
import CrownHotel from "../assets/crown-hotel.jpg";
import Discount from "../assets/discount.svg";
import Cost from "../assets/cost.svg";

const CalcPrice = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [extraCost, setExtraCost] = useState(0);
  const [extraNote, setExtraNote] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateDifference = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      // Tarihler arasındaki farkı milisaniye cinsinden hesapla
      const timeDifference = end - start;

      // Milisaniyeden gün sayısına çevir
      const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
      console.log(dayDifference);
      setDaysDifference(dayDifference);
      console.log(dayDifference);
      setTotalPrice(dayDifference * 6000 + (extraCost - discount));
    }
  };

  return (
    <div className=" border-end border-black pe-2">
      <div className="d-flex flex-column align-items-center ">
        <img
          src={CrownHotel}
          alt="hotel_img"
          className="mb-1"
          style={{ maxWidth: "300px" }}
        />

        <div className="d-flex justify-content-between align-items-center w-100">
          <label className="fw-semibold ">Başlangıç Tarihi:</label>
          <input
            type="date"
            style={{ maxWidth: "300px" }}
            className="rounded p-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3 w-100 mt-1">
          <label className="fw-semibold ">Bitiş Tarihi:</label>
          <input
            type="date"
            style={{ maxWidth: "300px" }}
            className=" rounded p-1"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              calculateDifference();
            }}
          />
        </div>

        <div className="d-flex flex-column gap-2" style={{maxWidth:"300px"}}>
          <div className="p- d-flex align-items-center w-75 justify-content-evenly ">
            <img src={Discount} alt="" />
            <label className="mr-2 text-success fw-semibold">İndirim: </label>
            <input
              type="number"
              className="ms-1 w-50 border-1 rounded"
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center w-75 justify-content-evenly">
            <img src={Cost} alt="" />
            <label className="mr-2 text-danger fw-semibold">Ekstra: </label>
            <input
              type="number"
              className=" ms-1 w-50 border-1 rounded"
              onChange={(e) => setExtraCost(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 w-100 border-1" style={{ maxWidth: "300px" }}>
          <textarea
            className="form-control "
            value={extraNote}
            placeholder="Ekstra Not: "
            onChange={(e) => setExtraNote(e.target.value)}
          />
        </div>

        <button
          className="rounded p-1 mt-2"
          onClick={calculateDifference}
          style={{ backgroundColor: "#f5f5dc" }}
        >
          Yeni Fiyat Hesapla
        </button>

        {daysDifference !== null && (
          <div
            className="bg-gold mt-2 rounded text-white p-1"
            style={{ maxWidth: "300px" }}
          >
            Toplam gün sayısı: {daysDifference} gün
            <br />
            Toplam Ücret : {totalPrice} TL
          </div>
        )}
      </div>
    </div>
  );
};

export default CalcPrice;
