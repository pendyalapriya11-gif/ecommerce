import CartItem from "./CartItem";
function OrderSummary({cart, deliveryOptions, loadCart}) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 &&
              cart.map((cartItem) => {
                return (<CartItem
                  key={cartItem.productId}
                  cartItem={cartItem}
                  deliveryOptions={deliveryOptions}
                  loadCart={loadCart}
                />);
              })}
          </div>
    );
}
export default OrderSummary;