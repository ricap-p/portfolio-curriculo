import SobreMim from "../../assets/images/sobremim.JPG";
import {
  Section,
  Container,
  Content,
  Image,
  ProfileImage,
  Text,
  Subtitle,
  Title,
  Description,
  Cards,
  Card,
  CardNumber,
  CardTitle,
  CardDescription,
} from "./styles";

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Image>
          <ProfileImage
            src={SobreMim}
            alt="Ricardo Prudêncio durante viagem ao Peru"
          />
        </Image>

        <Content>
          <Text>
            <Subtitle>Sobre Mim</Subtitle>

            <Title>Desenvolvedor Full Stack em formação</Title>

            <Description>
              Minha trajetória profissional começou na área elétrica, onde dei
              os primeiros passos como ajudante e, com dedicação, evoluí até
              atuar como eletricista autônomo. Posteriormente, tive a
              oportunidade de trabalhar na operação e manutenção de usinas
              fotovoltaicas, experiências que fortaleceram meu senso de
              responsabilidade, disciplina, capacidade de resolver problemas e,
              principalmente, minha habilidade de lidar com pessoas, compreender
              suas necessidades e oferecer soluções com um atendimento de
              qualidade. Movido pelo desejo de aprender e enfrentar novos
              desafios, decidi iniciar uma transição para a área de tecnologia.
              Desde então, venho estudando Desenvolvimento Full Stack,
              desenvolvendo projetos práticos com foco no aprendizado e na
              aplicação dos conhecimentos adquiridos, buscando evoluir
              continuamente para construir uma carreira sólida como
              desenvolvedor. No aspecto pessoal, sou cristão e procuro conduzir
              minha vida com princípios como honestidade, respeito,
              responsabilidade e comprometimento. Acredito que esses valores
              fazem diferença tanto nas relações pessoais quanto no ambiente
              profissional. Nas horas vagas gosto de praticar corrida de rua,
              ciclismo e musculação, atividades que contribuem para minha
              disciplina e qualidade de vida. Também tenho paixão por viajar de
              moto, conhecer novos lugares e culturas, ler livros e investir
              constantemente no meu desenvolvimento pessoal. Meu objetivo é
              encontrar uma empresa que me proporcione crescimento e segurança
              profissional, onde eu possa aprender com pessoas experientes,
              dedicar meu tempo e minha persistência ao crescimento da
              organização, contribuir com responsabilidade e comprometimento e
              construir uma carreira de longo prazo. Busco evoluir
              continuamente, entregar resultados consistentes e crescer tanto
              como profissional quanto como pessoa.
            </Description>
          </Text>

          <Cards>
            <Card>
              <CardNumber>10+</CardNumber>

              <CardTitle>Experiência</CardTitle>

              <CardDescription>
                Mais de 10 anos atuando como eletricista residencial e predial.
              </CardDescription>
            </Card>

            <Card>
              <CardNumber>3+</CardNumber>

              <CardTitle>Energia Solar</CardTitle>

              <CardDescription>
                Experiência em operação e manutenção de usinas fotovoltaicas.
              </CardDescription>
            </Card>

            <Card>
              <CardNumber>2026</CardNumber>

              <CardTitle>Desenvolvimento</CardTitle>

              <CardDescription>
                Transição de carreira para atuar como Desenvolvedor Full Stack.
              </CardDescription>
            </Card>

            <Card>
              <CardNumber>∞</CardNumber>

              <CardTitle>Aprendizado</CardTitle>

              <CardDescription>
                Sempre estudando novas tecnologias e buscando evolução
                constante.
              </CardDescription>
            </Card>
          </Cards>
        </Content>
      </Container>
    </Section>
  );
};

export default About;
