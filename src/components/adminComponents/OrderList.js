import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function OrderList(props) {
  return (
    <div>
      {!props.orders ? null : (
        <table>
          <thead>
            <tr>
              <td>Datum</td>
              <td>Naam</td>
              <td>Producten</td>
            </tr>
          </thead>
          <tbody>
            {props.orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{moment(order.createdAt).format("D MMM YYYY, HH:mm")}</td>
                  <td>
                    {order.firstName} {order.lastName}
                  </td>
                  <td>
                    <ul>{order.products.length}</ul>
                  </td>
                  <td>
                    <Link to={`/admin/orders/${order.id}`}>Details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
