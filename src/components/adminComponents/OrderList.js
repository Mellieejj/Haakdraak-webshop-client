import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function OrderList({orders}) {
  return (
    <div>
      {!orders ? null : (
        <table>
          <thead>
            <tr>
              <td>Datum</td>
              <td>Naam</td>
              <td>Producten</td>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{moment(order.createdAt).format("D MMM YYYY, HH:mm")}</td>
                  <td>
                    {order.firstName} {order.lastName}
                  </td>
                  <td>
                    {/* products .order_products.quantity ff checken hoe het zit  */}
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
