import React, { useState } from "react";

import classes from "./DashboardPage.module.css";
import { Container, Col, Row } from "react-bootstrap";
import {
  Heading,
  Switch,
  Checkbox,
  Button,
  Pagination,
} from "@digdir/design-system-react";
import { UserRow } from "../../components/UserRow/UserRow";
import { Search } from "../../components/Search/Search";
import { Tabs, TabsBody } from "../../components/Tabs/Tabs";

export const DashboardPage = () => {
  const [users, setUsers] = useState([
    { name: "Alexis Cantu", checked: false },
    { name: "Rey Solis", checked: false },
    { name: "Destiny Thomas", checked: false },
    { name: "Triston Duarte", checked: false },
    { name: "Desiree Peck", checked: false },
    { name: "Catherine Gamble", checked: false },
  ]);

  const [activeTab, setActiveTab] = useState(1);

  const checkUsers = (e: any) => {
    let newArr = [...users];
    for (let i = 0; i < newArr.length; i++) {
      newArr[i].checked = e.target.checked;
    }
    setUsers(newArr);
  };

  const setChecked = (name: string, checked: boolean) => {
    let newArr = [...users];
    const user = newArr.find((item) => item.name === name);
    if (user) {
      user.checked = checked;
      setUsers(newArr);
    }
  };

  return (
    <div className={classes.page}>
      <Container>
        <Row className="gx-4 gy-4">
          <Col xl={9}>
            <div className={classes.left}>
              <Heading size="small" spacing={true}>
                Alle brukere
              </Heading>
              <div className={classes.toolbar}>
                <div className={classes.toolbarLeft}>
                  <Checkbox
                    size="small"
                    description=""
                    value="value"
                    onClick={(e) => checkUsers(e)}
                  />
                  <Button size="small" className={classes.addBtn}>
                    Legg til bruker
                  </Button>
                  <Button
                    size="small"
                    variant="outline"
                    color="secondary"
                    className={classes.addBtn}
                  >
                    Vis liste
                  </Button>
                </div>
                <div className={classes.toolbarRight}>
                  <Switch size="small">Vis kun ledere</Switch>
                  <Search></Search>
                </div>
              </div>
              <div className={classes.items}>
                {users.map((item, index) => (
                  <UserRow
                    key={index}
                    name={item.name}
                    index={index}
                    checked={item.checked}
                    onChanged={(name: string, checked: boolean) =>
                      setChecked(name, checked)
                    }
                  ></UserRow>
                ))}
              </div>
              <div className={classes.pagination}>
                <Pagination
                  currentPage={1}
                  nextLabel="Neste"
                  onChange={function noRefCheck() {}}
                  previousLabel="Forrige"
                  size="small"
                  totalPages={10}
                />
              </div>
            </div>
          </Col>
          <Col xl={3}>
            <div className={classes.right}>
              <Heading size="small" className={classes.rightHeading}>
                Viktig info
              </Heading>
              <div>
                <Tabs sendData={(id: number) => setActiveTab(id)} />
                <TabsBody type={activeTab} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
