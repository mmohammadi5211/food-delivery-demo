import classes from './Cart.module.css';

interface Props {
  children: React.ReactNode;
}

const Cart = (props: Props) => {
  return (
    <>
      <div className={classes.main}>{props.children}</div>
    </>
  );
};

export default Cart;
