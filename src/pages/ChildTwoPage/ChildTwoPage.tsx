import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import {
  Heading,
  Link,
  Paragraph,
  Accordion,
} from "@digdir/design-system-react";
import { Link as RouterLink } from "react-router-dom";

export const ChildTwoPage = () => {
  return (
    <div>
      <Container>
        <Breadcrumbs />
        <Row>
          <Col xl={3}>
            <div className="sidebar">
              <Heading size="xsmall">Innovasjon</Heading>
              <div className="sidebar-links">
                <Link as={RouterLink} to="/innovasjon/stimulab">
                  Stimulab
                </Link>
                <Link as={RouterLink} to="/innovasjon/start-off">
                  StartOff
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={9}>
            <div className="content">
              <Heading size="large" spacing={true}>
                StartOff
              </Heading>
              <Paragraph>
                Hvor offentlige oppdragsgivere og startups utvikler morgendagens
                løsninger
              </Paragraph>

              <Heading size="large" level={2} spacing={true}>
                Liste
              </Heading>
              <Accordion color="tertiary" border={true}>
                <Accordion.Item>
                  <Accordion.Header level={1}>
                    Hva er Lorem Ipsum?
                  </Accordion.Header>
                  <Accordion.Content>
                    Lorem Ipsum er rett og slett dummytekst fra og for
                    trykkeindustrien. Lorem Ipsum har vært bransjens standard
                    for dummytekst helt siden 1500-tallet, da en ukjent
                    boktrykker stokket en mengde bokstaver for å lage et
                    prøveeksemplar av en bok.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
              <Accordion color="secondary" border={true}>
                <Accordion.Item>
                  <Accordion.Header level={1}>
                    Hva er Lorem Ipsum?
                  </Accordion.Header>
                  <Accordion.Content>
                    Lorem Ipsum er rett og slett dummytekst fra og for
                    trykkeindustrien. Lorem Ipsum har vært bransjens standard
                    for dummytekst helt siden 1500-tallet, da en ukjent
                    boktrykker stokket en mengde bokstaver for å lage et
                    prøveeksemplar av en bok.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
              <Accordion color="primary" border={true}>
                <Accordion.Item>
                  <Accordion.Header level={1}>
                    Hva er Lorem Ipsum?
                  </Accordion.Header>
                  <Accordion.Content>
                    Lorem Ipsum er rett og slett dummytekst fra og for
                    trykkeindustrien. Lorem Ipsum har vært bransjens standard
                    for dummytekst helt siden 1500-tallet, da en ukjent
                    boktrykker stokket en mengde bokstaver for å lage et
                    prøveeksemplar av en bok.
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
