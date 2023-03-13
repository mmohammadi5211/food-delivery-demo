import { useState } from 'react';
import classes from './Header.module.css';
import ShoppingCart from '../Cart/ShoppingCart';
const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const handleShowCart = () => {
    setShowCart((prev) => !prev);
  };
  return (
    <>
      {showCart && (
        <ShoppingCart
          show={showCart}
          handleShow={handleShowCart}
        />
      )}
      <div className={classes.header}>
        <h1>Food Delivery</h1>
        <div
          className={classes.buttonCart}
          onClick={handleShowCart}>
          <p>Your Cart 0</p>
        </div>
      </div>
    </>
  );
};

export default Header;
