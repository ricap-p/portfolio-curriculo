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
} from "./styles";

const Navbar = () => {
  return (
    <Header>
      <Container>
        <Nav>
          <LeftSide>
            <Logo href="#home">
              RP
            </Logo>

            <NavList>
              {navigation.map((item) => (
                <NavItem key={item.id}>
                  <NavLink href={item.href}>
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </LeftSide>

          <Button
            as="a"
            href={curriculum}
            download="Ricardo_Passos_Prudencio_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Download CV
          </Button>

        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;