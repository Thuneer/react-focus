import classes from "./Search.module.css";
import { MagnifyingGlassIcon } from "@navikt/aksel-icons";
import { Textfield } from "@digdir/design-system-react";

export const Search = () => {
  return (
    <div className={classes.search}>
      <MagnifyingGlassIcon
        title="a11y-title"
        fontSize="1.5rem"
        className={classes.icon}
      />
      <Textfield description="" label="" size="small" />
    </div>
  );
};
