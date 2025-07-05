import { Link } from "react-router";

type ButtonProps = {
  to: string;
  buttonText: string;
};

export default function Button({
  to,
  buttonText,
}: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <Link to={to}>{buttonText}</Link>;
}
