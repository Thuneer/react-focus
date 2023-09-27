import React from "react";

import { Container } from "react-bootstrap";

import { Card } from "../../components/Card/Card";

import classes from "./FrontPage.module.css";

export const FrontPage = () => {
  return (
    <div>
      <Container>
        <div className={classes.cards}>
          <Card color="red"></Card>
          <Card color="blue"></Card>
          <Card color="yellow"></Card>
        </div>
      </Container>
    </div>
  );
};
