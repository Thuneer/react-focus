import React from "react";

import { Container } from "react-bootstrap";

import { Card } from "../../components/Card/Card";

import classes from "./FrontPage.module.css";
import { Button, Heading } from "@digdir/design-system-react";
import { useNavigate } from "react-router-dom";

export const FrontPage = () => {
  const navigate = useNavigate();

  const Test = () => {
    setTimeout(() => {
      navigate("/innovasjon");
    }, 150);
  };

  return (
    <div className={classes.bg}>
      <Container className={classes.container}>
        <Heading size="large" spacing={true}>
          Lær mer om innovasjon
        </Heading>
        <Button
          size="large"
          variant="outline"
          color="secondary"
          onClick={() => Test()}
        >
          Innovasjon
        </Button>
      </Container>
    </div>
  );
};
