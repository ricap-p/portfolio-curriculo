import { useState } from "react";

import { certificates } from "./certificates";

import { CertificateModal } from "../../components/CertificateModal";

import {
  Section,
  Container,
  Subtitle,
  Title,
  Description,
  Category,
  CategoryTitle,
  Cards,
  Card,
  CertificateTitle,
  Institution,
  Year,
  Button,
} from "./styles";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseCertificate = () => {
    setSelectedCertificate(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Section id="certificates">
        <Container>

          <Subtitle>Formação</Subtitle>

          <Title>Formação & Aprendizado Contínuo</Title>

          <Description>
            Acredito que aprender continuamente é uma das habilidades mais
            importantes para um profissional de tecnologia. Esta seção representa
            minha evolução ao longo da carreira, desde a formação técnica em
            elétrica até a transição para o desenvolvimento Full Stack, e
            continuará crescendo com novos conhecimentos e certificações.
          </Description>

          {certificates.map((category) => (
            <Category key={category.category}>

              <CategoryTitle>
                {category.category}
              </CategoryTitle>

              <Cards>

                {category.items.map((certificate) => (
                  <Card key={certificate.title}>

                    <CertificateTitle>
                      {certificate.title}
                    </CertificateTitle>

                    <Institution>
                      {certificate.institution}
                    </Institution>

                    <Year>
                      {certificate.year}
                    </Year>

                    <Button
                      onClick={() => handleOpenCertificate(certificate)}
                    >
                      Ver Certificado
                    </Button>

                  </Card>
                ))}

              </Cards>

            </Category>
          ))}

        </Container>
      </Section>

      <CertificateModal
        isOpen={isModalOpen}
        certificate={selectedCertificate}
        onClose={handleCloseCertificate}
      />
    </>
  );
}

export default Certificates;