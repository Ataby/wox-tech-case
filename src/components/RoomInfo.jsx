import React, { useState } from "react";
import People from "../assets/people.svg";
import Children from "../assets/children.svg";
import Personal from "../assets/personal.svg";

const RoomInfo = () => {
  const [parentCount, setparentCount] = useState(0);
  const [parentNames, setparentNames] = useState([]);
  const [parentGender, setparentGender] = useState([]);
  const [childrenCount, setchildrenCount] = useState(0);
  const [childrenNames, setchildrenNames] = useState([]);

  const handleparentCountChange = (e) => {
    const count = parseInt(e.target.value);
    setparentCount(count);
    const newNames = Array(count).fill("");
    setparentNames(newNames);
  };

  const handleNameChange = (index, value) => {
    const newNames = [...parentNames];
    newNames[index] = value;
    setparentNames(newNames);
  };

  const handleparentGenderChange = (index, value) => {
    const newGenders = [...parentGender];
    newGenders[index] = value;
    setparentGender(newGenders);
  };

  const handlechildrenCountChange = (e) => {
    const count = parseInt(e.target.value);
    setchildrenCount(count);
    const newNames = Array(count).fill("");
    setchildrenNames(newNames);
  };

  const handlechildrenNameChange = (index, value) => {
    const newNames = [...childrenNames];
    newNames[index] = value;
    setchildrenNames(newNames);
  };

  return (
    <div
      className="mx-2 px-2 border-end border-start border-black"
      style={{ minWidth: "250px" }}
    >
      <div className="bg-cream ">
        <h5 className="py-1 px-2">Misafir ve Oda Bilgileri</h5>
      </div>
      {/* Dropdown List */}
      <div className="d-flex align-items-center justify-content-between px-2 ">
        <img src={People} alt="" />
        <label className="fw-semibold">Yetişkin Sayısı </label>
        <select
          className="form-control w-25"
          onChange={handleparentCountChange}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="form-group d-flex align-items-center justify-content-between px-2">
        <img src={Children} alt="" />
        <label className="fw-semibold">Çocuk Sayısı </label>
        <select
          className="form-control w-25"
          onChange={handlechildrenCountChange}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      {/* Adet sayısına göre input alanları oluştur */}
      {parentCount > 0 && (
        <div className="mt-3">
          {Array.from({ length: parentCount }).map((_, index) => (
            <div key={index} className="form-group mb-2">
              <div className="d-flex justify-content-between">
                <div>
                  <img src={Personal} alt="" />
                  <label className="fw-semibold ps-2">Kişi {index + 1}</label>
                </div>
                <label className="fw-semibold">Cinsiyet</label>
              </div>
              <div className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder={`İsim ${index + 1}`}
                  value={parentNames[index] || ""}
                  onChange={(e) => handleNameChange(index, e.target.value)}
                />
                <select
                  className="form-control w-25"
                  onChange={handleparentGenderChange}
                >
                  <option disabled value="None">
                    Seç
                  </option>
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
      {childrenCount > 0 && (
        <div className="mt-3">
          {Array.from({ length: childrenCount }).map((_, index) => (
            <div key={index} className="form-group mb-2">
              <label className="fw-semibold ps-2">Çocuk {index + 1}</label>
              <input
                type="text"
                className="form-control"
                placeholder={`İsim ${index + 1}`}
                value={childrenNames[index] || ""}
                onChange={(e) =>
                  handlechildrenNameChange(index, e.target.value)
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomInfo;
