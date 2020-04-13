import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import { loadOrder } from "../../actions/orderActions";

class OrderDetailsContainer extends Component {
  componentDidMount() {
    console.log(this.props.match.params.orderId);

    this.props.loadOrder(this.props.match.params.orderId);
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
          <OrderDetails order={this.props.order} history={this.props.history} />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("orderdetailscontainer", state.order);
  return {
    user: state.user,
    order: state.order,
  };
}

const mapDispatchToProps = { loadOrder };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsContainer);
