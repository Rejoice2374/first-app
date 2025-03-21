import React, { useState } from "react";
import menuData from "./menuitems";

const Order = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMenu = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row item-">
          <h1>Place Your Order</h1>
          <div className="col-12">
            <input
              type="text"
              placeholder="Search Menu..."
              className="my-3 px-3 form-control w-50"
              onChange={searchMenu}
            />
          </div>
        </div>

        <div className="row">
          {menuData
            .filter((menu) => {
              if (searchTerm === "") {
                return menu;
              } else if (
                menu.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return menu;
              }
            })
            .map((m) => (
              <div className="col-md-4" key={m.id}>
                <div className="card mb-3">
                  <img src={m.Image} style={{ height: "360px" }} alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{m.name}</h5>
                    <p className="card-text">Price: {m.price}</p>
                    <button href="#" className="btn btn-success">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
