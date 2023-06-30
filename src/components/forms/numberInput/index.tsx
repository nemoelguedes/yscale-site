import classNames from "classnames";
import style from "../../../styles/components.module.scss";

type INumberValid = {
  label: string,
  status: boolean,
  value: number,
  handleNumber: any,
  min: number
}

export default function NumberInput(props:INumberValid){

  
  const changeValue = (e: any) => {


    if (e.target.value === undefined || Number.isNaN(e.target.value) || e.target.value === "" || e.target.value < props.min) {
      const checkNumber = props.min;
      props.handleNumber(checkNumber.toString());
    } else if(e.target.value > 0) {
      const checkNumber = parseFloat(e.target.value).toString();
      props.handleNumber(checkNumber);
    }
  }

  return (
    <div className={style.label}>{props.label}:
      <input type="number" min={props.min} className={classNames({
        [style.input]: true,
        [props.status === true ? style["input--notOk"] : ""]: true,
        [props.status === false ? style["input--ok"] : ""]: true
      })} onChange={changeValue} value={props.value} />
    </div>
  )
}