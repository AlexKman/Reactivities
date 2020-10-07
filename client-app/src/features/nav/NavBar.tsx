import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          ></img>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button positive content="Create Activity"></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
