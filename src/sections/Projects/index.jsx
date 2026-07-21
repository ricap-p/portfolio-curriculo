import { FaGithub } from "react-icons/fa";
import Button from "../../components/Button";

import {
  Section,
  Container,
  Subtitle,
  Title,
  Description,
  ButtonContainer,
} from "./styles";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <Subtitle>Projetos</Subtitle>

        <Title>Meus Projetos</Title>

        <Description>
          Conheça alguns dos projetos que estou desenvolvendo durante minha
          jornada de estudo como Desenvolvedor Full Stack.
        </Description>

        <ButtonContainer>
          <Button
            href="https://github.com/ricap-p/Perfil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            Explorar meus projetos
          </Button>
        </ButtonContainer>
      </Container>
    </Section>
  );
};

export default Projects;