import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { formatMoney } from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";
function CartItem({cartItem, deliveryOptions, loadCart}) {
  const [QuantityUpdate, setQuantityUpdate] = useState(false);
  const [quantity,setQuantity] = useState(cartItem.quantity);
  const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId;
  });
  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  };
  const UpdateQuantity = async() => {
    if(QuantityUpdate) {
        await axios.put(`/api/cart-items/${cartItem.productId}`,{
            quantity: Number(quantity),
        });
        await loadCart();
        setQuantityUpdate(false);
    } else{
        setQuantityUpdate(true);
    }
  };
  return (
    <div key={cartItem.productId} className="cart-item-container">
      <div className="delivery-date">
        Delivery date:{" "}
        {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
          "dddd, MMMM, D",
        )}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image" src={cartItem.product.image} />

        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              Quantity:
              {QuantityUpdate ? (
                <input type="text" className="Quantity-update" value={quantity} 
                onChange={(event)=>{
                    setQuantity(event.target.value);
                }} 
                onKeyDown={(event)=>{
                    if(event.key==='Enter') {
                        UpdateQuantity();
                    } 
                    if(event.key==='Escape') {
                        setQuantity(cartItem.quantity);
                        setQuantityUpdate(false);
                    }
                }}/>
              ) : (
                <span className="quantity-label">{cartItem.quantity}</span>
              )}
            </span>
            <span
              className="update-quantity-link link-primary"
              onClick={UpdateQuantity}
            >
              Update
            </span>
            <span
              className="delete-quantity-link link-primary"
              onClick={deleteCartItem}
            >
              Delete
            </span>
          </div>
        </div>
        <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
      </div>
    </div>
  );
}

export default CartItem;