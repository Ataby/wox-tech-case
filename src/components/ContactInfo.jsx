import React, { useState } from "react";
import PersonName from "../assets/person-name.svg";
import Telephone from "../assets/telephone.svg";
import Email from "../assets/email.svg";
import Identity from "../assets/identity.svg";

const ContactInfo = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [id, setid] = useState("");
  return (
    <div>
      <div className="bg-cream " style={{minWidth:"230px"}}>
        <h5 className="py-1 ps-2"> İletişim Bilgileri</h5>
      </div>
      <div className=" d-flex flex-column ">
        <div className="d-flex gap-2 m-2">
          <img src={PersonName} style={{ width: "25px" }} />
          <input
            type="text"
            onChange={(e) => setname(e.target.value)}
            placeholder="İsim Soyisim"
            className="py-1"
          />
        </div>
        <div className="d-flex gap-2 m-2">
          <img src={Telephone} style={{ width: "25px" }} />

          <input
            type="number"
            onChange={(e) => setname(e.target.value)}
            placeholder="Telefon"
            className="py-1"
          />
        </div>
        <div className="d-flex gap-2 m-2">
          <img src={Email} style={{ width: "25px" }} />

          <input
            type="email"
            onChange={(e) => setname(e.target.value)}
            placeholder="Email"
            className="py-1"
          />
        </div>
        <div className="d-flex gap-2 m-2">
          <img src={Identity} style={{ width: "25px" }} />

          <input
            type="number"
            onChange={(e) => setname(e.target.value)}
            placeholder="T.C Kimlik No"
            className="py-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
