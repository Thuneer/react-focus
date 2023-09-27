import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "../../components/Card/Card";
import { Heading, Paragraph } from "@digdir/design-system-react";
import classes from "./ThemePage.module.css";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export const ThemePage = () => {
  return (
    <div className={classes.page}>
      <Container>
        <Breadcrumbs />
        <Heading size="large" spacing={true}>
          Innovasjon
        </Heading>
        <Paragraph>
          Innovasjon er å fornye eller lage noe nytt som skaper verdi for
          virksomhet, samfunn eller innbyggere. Formen er eksperimenterende og
          løsningen er ikke kjent på forhånd.
        </Paragraph>
        <div className={classes.cards}>
          <Card color="red" title="Stimulab" url="/innovasjon/stimulab"></Card>
          <Card
            color="blue"
            title="StartOff"
            url="/innovasjon/start-off"
          ></Card>
        </div>
      </Container>
    </div>
  );
};
