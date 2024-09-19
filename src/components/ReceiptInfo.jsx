import React, { useState } from "react";
import Identity from "../assets/identity.svg";
import PersonName from "../assets/person-name.svg";
import Location from "../assets/location.svg";

const ReceiptInfo = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [receiptOwner, setReceiptOwner] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.name);
    console.log(selectedOption);
  };
  const handleIDChange = (value) => {
    const newNames = [...receiptOwner];
    newNames[0] = value;
    setReceiptOwner(newNames);
  };

  const handleNameChange = (value) => {
    const newNames = [...receiptOwner];
    newNames[1] = value;
    setReceiptOwner(newNames);
  };
  const handleAddressChange = (value) => {
    const newNames = [...receiptOwner];
    newNames[2] = value;
    setReceiptOwner(newNames);
  };

  return (
    <div className=" d-flex flex-column" style={{minWidth:"300px"}}>
      <div className="bg-cream ">
        <h5 className="py-1 ps-2"> Fatura Bilgileri</h5>
      </div>
      <div class="form-check ms-2">
        <input
          class="form-check-input border-black"
          type="radio"
          name="Sahis Adina"
          onChange={handleOptionChange}
          checked={selectedOption === "Sahis Adina"}
        />
        <label className="fw-semibold form-check-label" for="flexRadioDefault2">
          Şahıs Adına
        </label>
      </div>
      <div class="form-check ms-2">
        <input
          class="form-check-input border-black"
          type="radio"
          name="Sirket Adina"
          onChange={handleOptionChange}
          checked={selectedOption === "Sirket Adina"}
        />
        <label class="form-check-label fw-semibold" for="flexRadioDefault1">
          Şirket Adına
        </label>
      </div>
      <div class="form-check ms-2">
        <input
          class="form-check-input border-black"
          type="radio"
          name="Yabanci Uyruk"
          onChange={handleOptionChange}
          checked={selectedOption === "Yabanci Uyruk"}
        />
        <label class="form-check-label fw-semibold" for="flexRadioDefault1">
          Yabancı Uyruklu Müşteri
        </label>
      </div>
      {selectedOption === "Yabanci Uyruk" && (
        <div className="form-group mt-4 ms-2">
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={Identity} style={{ width: "25px" }} />
            <label className="fw-semibold">Yabancı Kimlik No:</label>
          </div>
          <input
            type="number"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="Kimlik No"
            className="py-1"
          />
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={PersonName} style={{ width: "25px" }} />
            <label className="fw-semibold">İsim Soyisim:</label>
          </div>
          <input
            type="text"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="İsim Soyisim"
            className="py-1"
          />
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={Location} style={{ width: "25px" }} />
            <label className="fw-semibold">Adres:</label>
          </div>
          <input
            type="text"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="Adres"
            className="py-1"
          />
          
        </div>
      )}
      {selectedOption === "Sahis Adina" && (
        <div className="form-group mt-4 ms-2">
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={Identity} style={{ width: "25px" }} />
            <label className="fw-semibold">T.C Kimlik No:</label>
          </div>
          <input
            type="number"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="Kimlik No"
            className="py-1"
          />
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={PersonName} style={{ width: "25px" }} />
            <label className="fw-semibold">İsim Soyisim:</label>
          </div>
          <input
            type="text"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="İsim Soyisim"
            className="py-1"
          />
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={Location} style={{ width: "25px" }} />
            <label className="fw-semibold">Adres:</label>
          </div>
          <input
            type="text"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="Adres"
            className="py-1"
          />
          
        </div>
      )}
      {selectedOption === "Sirket Adina" && (
        <div className="form-group mt-4 ms-2">
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={Identity} style={{ width: "25px" }} />
            <label className="fw-semibold">Vergi No:</label>
          </div>
          <input
            type="number"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="Kimlik No"
            className="py-1"
          />
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={PersonName} style={{ width: "25px" }} />
            <label className="fw-semibold">Şirket Adı:</label>
          </div>
          <input
            type="text"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="İsim Soyisim"
            className="py-1"
          />
          <div className="d-flex gap-2 m-2 mt-4">
            <img src={Location} style={{ width: "25px" }} />
            <label className="fw-semibold">Adres:</label>
          </div>
          <input
            type="text"
            onChange={(e) => handleIDChange(e.target.value)}
            placeholder="Adres"
            className="py-1"
          />
          
        </div>
      )}
    </div>
  );
};

export default ReceiptInfo;
