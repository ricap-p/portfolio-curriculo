import { technologies } from "./technologies";


import {
  Section,
  Container,
  Subtitle,
  Title,
  Description,
  Grid,
  Card,
  CardTitle,
  CardLevel,
  CardIcon,
  
} from "./styles";

const Technologies = () => {
  return (
    <Section id="technologies">
      <Container>
        <Subtitle>Tecnologias</Subtitle>

        <Title>Minhas Habilidades</Title>

        <Description>
          Algumas das tecnologias que fazem parte da minha jornada como
          desenvolvedor.
        </Description>

        <Grid>
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <Card key={tech.id}>
                <CardIcon>
                  <Icon />
                </CardIcon>

                <CardTitle>{tech.name}</CardTitle>

                <CardLevel>{tech.level}</CardLevel>
              </Card>
            );
          })}
        </Grid>

       
      </Container>
    </Section>
  );
};

export default Technologies;