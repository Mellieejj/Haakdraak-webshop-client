import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OrderDetails from "./OrderDetails";

class OrderDetailsContainer extends Component {
  componentDidMount() {
    console.log(this.props.match.params.orderId);

    // this.props.loadOrder(this.props.match.params.orderId);
  }

  render() {
    return (
      <div>
        {!this.props.user.jwt ? (
          <div className="pagina-naam">
            <Link to="/admin">Je moet inloggen</Link>
          </div>
        ) : (
          <div className="pagina-naam">
            
            <div>
              <OrderDetails
                order={this.props.order}
                history={this.props.history}
              />
            </div>
            
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("orderdetailscontainer", state.user);
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsContainer);
