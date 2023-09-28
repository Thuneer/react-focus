import { Link } from "@digdir/design-system-react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@navikt/aksel-icons";
import classes from "./Breadcrumbs.module.css";

export const Breadcrumbs = () => {
  return (
    <div className={classes.breadcrumbs}>
      <Link as={RouterLink} to="/">
        Hjem
      </Link>
      <ChevronRightIcon title="a11y-title" fontSize="1.25rem" />
      <Link as={RouterLink} to="/innovasjon">
        Innovasjon
      </Link>
      <ChevronRightIcon title="a11y-title" fontSize="1.25rem" />
      <div>Siden du er på</div>
    </div>
  );
};
