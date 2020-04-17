import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default class OrderList extends Component {
  render() {
    return (
      <div>
        {!this.props.orders ? null : (
          <table>
            <thead>
              <tr>
                <td>Datum</td>
                <td>Naam</td>
                <td>Producten</td>
              </tr>
            </thead>
            <tbody>
              {this.props.orders.map((order) => {
                console.log(order);
                return (
                  <tr key={order.id}>
                    <td>
                      {moment(order.createdAt).format("D MMM YYYY, HH:mm")}
                    </td>
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
}
