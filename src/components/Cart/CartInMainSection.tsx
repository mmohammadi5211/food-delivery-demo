import Cart from './Cart';
import classes1 from './CartInMainSection.module.css';
import data from '../Meals/meals.json';
import { useFoodsDispatch } from '../../context/FoodContext';
const CartInMainSection = () => {
  const dispatch = useFoodsDispatch();
  return (
    <>
      <div className={classes1.main}>
        <Cart>
          <>
            {data.data.map((food) => (
              <>
                <div className={classes1.cartSection}>
                  <div className={classes1.left}>
                    <h3>{food.title}</h3>
                    <p>{food.description}</p>
                    <p>$ {food.price}</p>
                  </div>
                  <div className={classes1.right}>
                    <button
                      onClick={() => {
                        if (dispatch !== null) {
                          dispatch({
                            type: 'added',
                            id: food.id,
                            title: food.title,
                            price: food.price,
                          });
                        }
                      }}>
                      add +
                    </button>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </>
        </Cart>
      </div>
    </>
  );
};

export default CartInMainSection;
