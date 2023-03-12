import classes from './TotalAmount.module.css';

interface Props {
  close: () => void;
}
const TotlaAmount = (props: Props) => {
  return (
    <>
      <div>
        <div className={classes.up}>
          <h3>Total Amount</h3>
          <h2>$ 72.49</h2>
        </div>
        <div className={classes.down}>
          <div
            className={classes.btn}
            onClick={props.close}>
            Close
          </div>
          <div className={classes.btn}>Order</div>
        </div>
      </div>
    </>
  );
};

export default TotlaAmount;
