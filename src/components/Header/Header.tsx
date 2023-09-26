import React from "react";
import { Container } from "react-bootstrap";
import classes from "./Header.module.css";
import { Button } from "@navikt/ds-react";
import { PersonIcon } from "@navikt/aksel-icons";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div>
          <img src="logo.svg" alt="" />
        </div>
        <div>
          <Button icon={<PersonIcon />} variant="tertiary">
            Logg inn
          </Button>
        </div>
      </Container>
    </header>
  );
};
