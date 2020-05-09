import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getOrders } from "../../actions/orderActions";
import OrderList from "./OrderList";

export default function OrdersContainer() {
  const { user, orders } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <div>
      {!user.jwt ? (
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
              onClick={() => history.goBack()}
            >
              <i className="far fa-hand-point-left"></i>Terug
            </div>
            <h2>Alle bestellingen</h2>
          </div>
          <div className="box">
            <OrderList orders={orders} />
          </div>
        </div>
      )}
    </div>
  );
}
