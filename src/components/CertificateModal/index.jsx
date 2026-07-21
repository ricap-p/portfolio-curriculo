import * as S from "./styles";

export function CertificateModal({
  isOpen,
  onClose,
  certificate,
}) {
  if (!isOpen || !certificate) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>

        <S.CloseButton onClick={onClose}>
          ✕
        </S.CloseButton>

        <S.Image
          src={certificate.image}
          alt={certificate.title}
        />

        <S.Content>

          <S.Title>
            {certificate.title}
          </S.Title>

          <S.Institution>
            {certificate.institution}
          </S.Institution>

          <S.Year>
            {certificate.year}
          </S.Year>

          <S.Buttons>

            <S.PdfButton
              href={certificate.pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir PDF
            </S.PdfButton>

            <S.CloseModalButton
              onClick={onClose}
            >
              Fechar
            </S.CloseModalButton>

          </S.Buttons>

        </S.Content>

      </S.Modal>
    </S.Overlay>
  );
}