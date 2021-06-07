import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderStore from "./HeaderStore";
import { carousel } from "react-bootstrap";
import actions from "../api";

function Store(props) {
  const [equipment, setEquipment] = useState([]);
  console.log(props);

  useEffect(() => {
    actions.getEquipment().then((res) => {
      console.log(res);
      setEquipment(res.data.equipments);
    });
  }, []);
  console.log(equipment);

  const showEquipments = () => {
    return equipment.map((equipments, i) => {
      return (
        <div className="container-fluid">
          <div className="row">
            <div
              key={i}
              className="cardss col-xl-3 col-lg-4 col-md-6 col-sm-12"
            >
              <div className="card text-center">
                <img src={equipments.image} />
                <div className="card-body">
                  <p>
                    <strong>{equipments.name}</strong>
                  </p>
                  <p>{equipments.category} </p>
                  <p>${equipments.price}</p>
                </div>
                {/* <button type="button" onClick={() => addToCart(bottles)}>Add to Cart</button> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container1">
      <div className="header">
        <div>
          <h1>Our Store </h1>
        </div>

        <div className="header-div1">
          {/* <img src="https://i.pinimg.com/originals/f1/a6/b6/f1a6b62def7a67a90263587a2966cde4.jpg" /> */}
        </div>
        <HeaderStore />
      </div>

      <div>{showEquipments()}</div>
    </div>
  );
}

export default Store;
