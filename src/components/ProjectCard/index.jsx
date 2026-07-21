import Button from "../Button";

import {
  Card,
  ImageContainer,
  ProjectImage,
  Content,
  Title,
  Description,
  Technologies,
  Buttons,
} from "./styles";

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}) => {
  return (
    <Card>
      <ImageContainer>
        <ProjectImage
          src={
            image ||
            "https://placehold.co/600x350/151B2D/FFFFFF?text=Projeto"
          }
          alt={title}
        />
      </ImageContainer>

      <Content>
        <Title>{title}</Title>

        <Description>{description}</Description>

        <Technologies>
            {technologies}
            </Technologies>

        <Buttons>
          <Button href={github} target="_blank">
            GitHub
          </Button>

          {demo && (
            <Button href={demo} target="_blank" variant="outline">
              Demo
            </Button>
          )}
        </Buttons>
      </Content>
    </Card>
  );
};

export default ProjectCard;