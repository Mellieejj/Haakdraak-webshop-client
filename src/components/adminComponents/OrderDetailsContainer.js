import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import OrderDetails from "./OrderDetails";
import { loadOrder } from "../../actions/orderActions";

export default function OrderDetailsContainer() {
  const { user, order } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams()

  useEffect(() => {
    dispatch(loadOrder(params.orderId));
  }, [dispatch, params]);

  return (
    <div>
      {!user.jwt ? (
        <div className="pagina-naam">
          <h2> </h2>
          <Link to="/admin">Je moet inloggen</Link>
        </div>
      ) : (
        <OrderDetails order={order} history={history} />
      )}
    </div>
  );
}
