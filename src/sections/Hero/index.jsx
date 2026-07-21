import profileImage from "../../assets/images/profile.jpg";
import {
  Section,
  Container,
  Content,
  Greeting,
  Name,
  Profession,
  Description,
  Image,
  ProfileImage,
} from "./styles";

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Content>
          <Greeting>Olá, eu sou</Greeting>

          <Name>Ricardo Prudêncio</Name>

          <Profession>Desenvolvedor Full Stack | React • Node.js</Profession>

          <Description>
            Desenvolvo aplicações Full Stack utilizando React, JavaScript e Node.js,
            transformando ideias em soluções modernas, organizadas e focadas na melhor
            experiência para o usuário.
          </Description>
        </Content>

        <Image>
          <ProfileImage
            src={profileImage}
            alt="Ricardo Prudêncio"
          />
        </Image>
      </Container>
    </Section>
  );
};

export default Hero;