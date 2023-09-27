import { Link, useNavigate } from "react-router-dom";

import classes from "./HeaderLink.module.css";
import { removeFocus } from "../../utils/RemoveFocus";

type Props = {
  url: string;
  text: string;
};

export const HeaderLink = ({ url, text }: Props) => {
  const navigate = useNavigate();
  const Test = (e: any, url: string) => {
    e.preventDefault();
    setTimeout(() => {
      navigate(url);
      removeFocus();
    }, 150);
  };

  return (
    <Link className={classes.link} to={url} onClick={(e) => Test(e, url)}>
      {text}
    </Link>
  );
};
