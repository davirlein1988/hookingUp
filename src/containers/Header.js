import React from 'react';
import {
  A,
  Form,
  Input,
  Button,
  Navbar,
  Container,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from '@bootstrap-styled/v4';

const Header = () => {
  let open = false;
  return (
    <Navbar color="faded" light toggleable="lg">
      <Container>
        <div className="d-flex justify-content-between">
          <NavbarBrand tag={A} to="javascript:;">
            Brand
          </NavbarBrand>
          <NavbarToggler onClick={() => (open = !open)} />
        </div>
        <Collapse navbar isOpen={open}>
          <Nav navbar className="mr-auto">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled>Disabled</NavLink>
            </NavItem>
          </Nav>
          <Form inline className="my-2 my-lg-0">
            <Input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <Button href="javascript:;" color="success">
              Search
            </Button>
          </Form>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
