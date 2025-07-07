import style from "./Button.module.css";
import { Link } from "react-router";
import rightArrow from "/icons/right_arrow.svg";

type ButtonProps = {
  to: string;
  buttonText: string;
};

export default function Button({
  to,
  buttonText,
}: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link to={to} className={style.button}>
      {buttonText}
      <img
        src={rightArrow}
        alt="Right arrow icon"
        className={style.right_arrow_icon}
      />
    </Link>
  );
}
