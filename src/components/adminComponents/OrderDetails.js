import React, { Component } from "react";

export default class OrderDetails extends Component {
  render() {
    return (
      <div>
       
          {!this.props.user ?  <div className="pagina-naam">Je moet inloggen</div> : <div className="pagina-naam">Hello</div>}
        
      </div>
    );
  }
}
