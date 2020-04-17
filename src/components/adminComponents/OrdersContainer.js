import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions/orderActions";
import OrderList from "./OrderList";

class OrdersContainer extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  render() {
    return (
      <div>
        {!this.props.user.jwt ? (
          <div className="pagina-naam">
            <h2> </h2>
            <Link to="/admin">Je moet inloggen</Link>
          </div>
        ) : (
          <div>
            <div className="pagina-naam">
              <div
                style={{ float: "left", marginTop: "auto" }}
                className="formButton"
                onClick={() => this.props.history.goBack()}
              >
                <i className="far fa-hand-point-left"></i>Terug
              </div>
              <h2>Alle bestellingen</h2>
            </div>
            <div className="box">
              <OrderList orders={this.props.orders} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.orders);

  return {
    orders: state.orders,
    user: state.user,
  };
}

const mapDispatchToProps = { getOrders };

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer);
