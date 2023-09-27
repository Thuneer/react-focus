import classes from "./Bar.module.css";
import { Dropdown, Button } from "@navikt/ds-react";
import { ChevronDownIcon } from "@navikt/aksel-icons";
import { useEffect, useState } from "react";

export const Bar = () => {
  const [active, setActive] = useState("Only-focus-visible");

  const Test = (e: any) => {
    document.body.className = "";
    document.body.classList.add(e.target.value);
    setActive(e.target.value);
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add("Only-focus-visible");
  }, []);

  return (
    <div className={classes.bar}>
      <div>
        <Dropdown onSelect={(e) => Test(e)}>
          <Button
            icon={<ChevronDownIcon />}
            className={classes.btn}
            variant="secondary-neutral"
            size="xsmall"
            as={Dropdown.Toggle}
          >
            Velg type
          </Button>
          <Dropdown.Menu>
            <Dropdown.Menu.List>
              <Dropdown.Menu.List.Item>
                Only-focus-visible
              </Dropdown.Menu.List.Item>
              <Dropdown.Menu.List.Item>Focus-descrete</Dropdown.Menu.List.Item>
              <Dropdown.Menu.List.Item>Focus-heavy</Dropdown.Menu.List.Item>
            </Dropdown.Menu.List>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={classes.active}>{active}</div>
      <div className={classes.active}>Simulates 150ms API delay </div>
    </div>
  );
};
