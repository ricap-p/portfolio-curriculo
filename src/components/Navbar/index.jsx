import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import { navigation } from "./navigation";
import curriculum from "../../assets/pdf/ricardo-prudencio.pdf";
import Button from "../Button";

import {
  Header,
  Container,
  Nav,
  LeftSide,
  Logo,
  NavList,
  NavItem,
  NavLink,
  MobileButton,
} from "./styles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Header>
      <Container>
        <Nav>
          <Logo href="#home">RP</Logo>

          <MobileButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
          </MobileButton>

          <LeftSide open={menuOpen}>
            <NavList>
              {navigation.map((item) => (
                <NavItem key={item.id}>
                  <NavLink
                    href={item.href}
                    onClick={closeMenu}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>

            <Button
              as="a"
              href={curriculum}
              download="Ricardo_Passos_Prudencio_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              onClick={closeMenu}
            >
              Download CV
            </Button>
          </LeftSide>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;