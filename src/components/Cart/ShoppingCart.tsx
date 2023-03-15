import { useState } from 'react';
import { useFoods, useFoodsDispatch } from '../../context/FoodContext';
import TotlaAmount from '../UI/TotalAmount';
import Backdrop from '../backDrop/BackDrop';
import Cart from './Cart';
import classes from './ShoppingCart.module.css';

interface Props {
  show: boolean;
  handleShow: () => void;
}
const ShoppingCart = (props: Props) => {
  const [count, setCount] = useState(1);
  const foods = useFoods();
  const dispatch = useFoodsDispatch();
  return (
    <>
      <Backdrop
        show={props.show}
        handleShow={props.handleShow}
      />
      <div className={classes.main}>
        <Cart>
          {foods?.map((food) => (
            <div className={classes.section}>
              <div className={classes.left}>
                <h4>{food.title}</h4>
                <div className={classes.price}>
                  <p>${food.price}</p>
                  <div className={classes.count}>x {food.count}</div>
                </div>
              </div>
              <div className={classes.right}>
                <div
                  className={classes.plus}
                  onClick={() => {
                    if (dispatch !== null) {
                      dispatch({
                        type: 'increment',
                        id: food?.id,
                      });
                    }
                  }}>
                  +
                </div>
                <div
                  className={classes.minus}
                  onClick={() => {
                    if (dispatch !== null) {
                      dispatch({
                        type: 'decrement',
                        id: food?.id,
                      });
                    }
                  }}>
                  -
                </div>
              </div>
            </div>
          ))}

          <hr />
          <TotlaAmount close={props.handleShow} />
        </Cart>
      </div>
    </>
  );
};

export default ShoppingCart;
