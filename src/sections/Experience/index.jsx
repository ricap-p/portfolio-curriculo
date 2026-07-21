import {
  experiences,
  technologies,
  skills,
} from "./experience";

import {
  Section,
  Container,
  Subtitle,
  Title,
  Description,
  Timeline,
  Card,
  CardHeader,
  Icon,
  CardTitle,
  Company,
  Period,
  List,
  ListItem,
  Tags,
  Tag,
} from "./styles";
const Experience = () => {
  return (
    <Section id="experience">
      <Container>

        <Subtitle>Experiência</Subtitle>

        <Title>Minha Jornada Profissional</Title>

        <Description>
          Uma trajetória construída com dedicação, aprendizado contínuo e
          evolução profissional.
        </Description>

        <Timeline>

          {experiences.map((experience) => (
            <Card key={experience.id}>

              <CardHeader>

                <Icon>{experience.icon}</Icon>

                <div>

                  <CardTitle>{experience.title}</CardTitle>

                  {experience.company && (
                    <Company>{experience.company}</Company>
                  )}

                  <Period>{experience.period}</Period>

                </div>

              </CardHeader>

              <List>

                {experience.items.map((item, index) => (
                  <ListItem key={index}>
                    {item}
                  </ListItem>
                ))}

              </List>

            </Card>
          ))}

        </Timeline>

        <Title>Tecnologias Estudadas</Title>

        <Tags>

          {technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}

        </Tags>

        <Title>Competências</Title>

        <Tags>

          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}

        </Tags>

      </Container>
    </Section>
  );
};

export default Experience;