import React from "react";
import { Button, Navbar } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
  return (
    <Navbar style={{ marginTop: "25px" }} fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          style={{ marginLeft: "30%" }}
          src="/popshake.png"
          className="mr-3 h-8 sm:h-9"
          alt="Pop shake logo"
        />
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Recipes</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Button
          style={{ borderRadius: "40px" }}
          size="lg"
          gradientMonochrome="lime"
        >
          <IoIosSearch />
        </Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default NavBar;
