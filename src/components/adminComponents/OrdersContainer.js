import React, { Component } from "react";
import {connect} from "react-redux"
import {getOrders} from "../../actions/orderActions"
import OrderList from "./OrderList"

class OrdersContainer extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    return (
      <div>
        <div className="pagina-naam">
          <h2>Alle bestellingen</h2>
        </div>
        <div className="box">
          <OrderList orders={this.props.orders}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.orders);
  
  return {
    orders: state.orders,
  };
}

const mapDispatchToProps = {getOrders}

export default connect (mapStateToProps, mapDispatchToProps)(OrdersContainer)