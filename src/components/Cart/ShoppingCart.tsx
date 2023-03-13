import { useFoods } from '../../context/FoodContext';
import TotlaAmount from '../UI/TotalAmount';
import Backdrop from '../backDrop/BackDrop';
import Cart from './Cart';
import classes from './ShoppingCart.module.css';

interface Props {
  show: boolean;
  handleShow: () => void;
}
const ShoppingCart = (props: Props) => {
  const foods = useFoods();
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
                  <div className={classes.count}>x 1</div>
                </div>
              </div>
              <div className={classes.right}>
                <div className={classes.plus}>+</div>
                <div className={classes.minus}>-</div>
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
