import React, { useState } from "react";

const OthersInfo = () => {
  const [customerNote, setCustomerNote] = useState("");
  const [operationNote, setOperationNote] = useState("");
  const [facilityNote, setFacilityNote] = useState("");
  return (
    <div className="mt-4 w-100 border-1">
      <div className="bg-cream ">
        <h5 className="py-1 ps-2"> Diğer Bilgiler</h5>
      </div>
      <div className="d-flex justify-content-end gap-3 mb-2">
        <label className="text-nowrap">Müşteri Notu: </label>
        <textarea
          className="form-control w-75 "
          value={customerNote}
          onChange={(e) => setCustomerNote(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end gap-3 mb-2">
        <label className="text-nowrap">Operasyon Notu: </label>
        <textarea
          className="form-control w-75"
          value={operationNote}
          onChange={(e) => setOperationNote(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-end gap-3 mb-2">
        <label className="text-nowrap ">Tesis Notu: </label>
        <textarea
          className="form-control w-75 "
          value={facilityNote}
          onChange={(e) => setFacilityNote(e.target.value)}
        />
      </div>
    </div>
  );
};

export default OthersInfo;
