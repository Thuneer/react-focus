import React, { useState } from "react";
import { Container } from "react-bootstrap";
import classes from "./Header.module.css";
import { Button, Heading, Link } from "@digdir/design-system-react";
import { PersonIcon, MenuHamburgerIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { removeFocus } from "../../utils/RemoveFocus";
import { HeaderLink } from "../HeaderLink/HeaderLink";
export const Header = () => {
  const navigate = useNavigate();
  const [showMega, setShowMega] = useState(false);
  const Login = () => {
    setTimeout(() => {
      navigate("/login");
      removeFocus();
    }, 100);
  };

  const onClickLink = (e: any) => {
    e.preventDefault();
    setTimeout(() => {
      setShowMega(false);
      navigate("/theme");
    }, 150);
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <RouterLink to="/">
            <img src="logo.svg" alt="Logo" />
          </RouterLink>
          <div className={classes.links}>
            <HeaderLink url="/innovasjon" text="Innovasjon" />
            <HeaderLink url="/innovasjon/stimulab" text="Stimulab" />
            <HeaderLink url="/innovasjon/start-off" text="StartOff" />
          </div>
        </div>
        <div className={classes.right}>
          <Button
            variant="quiet"
            color="secondary"
            icon={<MenuHamburgerIcon />}
            onClick={() => setShowMega(!showMega)}
          >
            Meny
          </Button>
          <Button
            onClick={() => Login()}
            variant="quiet"
            color="secondary"
            icon={<PersonIcon />}
          >
            Logg inn
          </Button>
        </div>
      </Container>
      {showMega && (
        <div className={classes.mega}>
          <div className={classes.overlay} />
          <div className={classes.mega2}>
            <Container className={classes.container2}>
              <Heading size="medium">Meny</Heading>
              <Button
                variant="quiet"
                color="secondary"
                icon={<XMarkIcon />}
                className={classes.closeBtn}
                onClick={() => setShowMega(false)}
              ></Button>
              <div className={classes.menu}>
                {[...Array(6)].map((x, i) => (
                  <div className={classes.list}>
                    {[...Array(6)].map((x, i) => (
                      <Link
                        to="/"
                        as={RouterLink}
                        className={classes.link}
                        onClick={(e) => onClickLink(e)}
                      >
                        Her er en lenke til en side
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
};
