import * as S from "./styles";

function Footer() {
  return (
    <S.Footer id="contact">
      <S.Container>

        <S.Subtitle>Contato</S.Subtitle>

        <S.Title>
          Vamos construir algo incrível juntos.
        </S.Title>

        <S.Description>
          Estou em transição para a área de Desenvolvimento Full Stack e
          aberto a oportunidades de estágio, posição júnior e projetos.
          Será um prazer conversar.
        </S.Description>

        <S.ContactList>

          <S.ContactItem
            href="mailto:ricardopp.dev@outlook.com"
          >
            📧 ricardopp.dev@outlook.com
          </S.ContactItem>

          <S.ContactItem
            href="https://wa.me/5527997327440"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </S.ContactItem>

          <S.ContactItem
            href="www.linkedin.com/in/ricardoprudencio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </S.ContactItem>

         

        </S.ContactList>

        <S.Copy>
          © {new Date().getFullYear()} Ricardo Prudêncio.
          Todos os direitos reservados.
        </S.Copy>

      </S.Container>
    </S.Footer>
  );
}

export default Footer;