import React from "react";
import "./TableCard.scss";

import Heading from "../Heading/Heading";
import table from "../../External/icons/table.svg";

const TableCard = ({ year, tax, improvements, land, total }) => {
  return (
    <div className="table-card-boxx">
      <div className="table-card-box">
        <div className="table-card-heading">
          <Heading heading="heading4">Property Taxes and Assessment</Heading>
        </div>
        <div className="table-card-box-inner">
          {/* <img src={table} alt="" /> */}
          <table>
            <tr>
              <th>Year</th>
              <td>{year}</td>
            </tr>
            <tr>
              <th>Tax</th>
              <td>{tax}</td>
            </tr>
            <tr>
              <th>Assessment</th>
              <td></td>
            </tr>
            <tr>
              <th>Land</th>
              <td>{land}</td>
            </tr>
            <tr>
              <th>Improvements</th>
              <td>{improvements}</td>
            </tr>
            <tr>
              <th>Total</th>
              <td>{total}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableCard;
