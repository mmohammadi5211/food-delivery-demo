import classes from './BackDrop.module.css';

interface Props {
  show: boolean;
  handleShow: () => void;
}

const Backdrop = (props: Props) => {
  return (
    <>
      {props.show ? (
        <div
          className={classes.backdrop}
          onClick={props.handleShow}
        />
      ) : null}
    </>
  );
};

export default Backdrop;
