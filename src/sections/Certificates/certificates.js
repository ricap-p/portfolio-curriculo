/// ================================
// IMAGENS
// ================================

import htmlImage from "../../assets/images/certificates/html5.png";
import gitImage from "../../assets/images/certificates/git-github.png";
import javascriptImage from "../../assets/images/certificates/javascript.png";
import javascriptAsyncImage from "../../assets/images/certificates/javascript-async-await.png";
import nodeImage from "../../assets/images/certificates/node.png";
import eletricistaImage from "../../assets/images/certificates/eletricista.jpeg";

// ================================
// PDF'S - TECNOLOGIA
// ================================

// Se você tiver esses PDFs, descomente.
// Caso não tenha, deixe comentado.

// import htmlPdf from "../../assets/pdf/certificates/html5.pdf";
// import gitPdf from "../../assets/pdf/certificates/git-github.pdf";
// import javascriptPdf from "../../assets/pdf/certificates/javascript.pdf";
// import javascriptAsyncPdf from "../../assets/pdf/certificates/javascript-async-await.pdf";
// import nodePdf from "../../assets/pdf/certificates/node.pdf";

// ================================
// PDF'S - ELÉTRICA
// ================================

import nr10Pdf from "../../assets/pdf/certificates/nr10-sep.pdf";
import nr33Pdf from "../../assets/pdf/certificates/nr-33-espaço-confinado.pdf";
import dispositivoPdf from "../../assets/pdf/certificates/dispositivo-bt.pdf";
import manutencaoPdf from "../../assets/pdf/certificates/manutenção-operação-subestações-cabine-primaria.pdf";

// ================================
// PDF'S - AUTOMAÇÃO
// ================================

import clpPdf from "../../assets/pdf/certificates/clp.pdf";
import ihmPdf from "../../assets/pdf/certificates/ihm.pdf";
import servoPdf from "../../assets/pdf/certificates/servo-acionamento.pdf";
import roboPdf from "../../assets/pdf/certificates/robo-industrial.pdf";
import modbusPdf from "../../assets/pdf/certificates/rede-modbus.pdf";

import ethernetServoPdf from "../../assets/pdf/certificates/clp-iq-fservo-acionamento-ethernet.pdf";

import ethernetInversorPdf from "../../assets/pdf/certificates/clp-iq-f-inversor-frequencia-ethernet.pdf";

import inversorPdf from "../../assets/pdf/certificates/inversor-frequencia.pdf";

import redeCcPdf from "../../assets/pdf/certificates/rede-cc-ie-field.pdf";

import comunicacaoModbusPdf from "../../assets/pdf/certificates/modbusrtu-iqf.pdf";

//import configuracaoRapidaPdf from "../../assets/pdf/certificates/inversor-fr-e800.pdf";

// ================================
// PDF'S - DADOS
// ================================

import excelBasicoPdf from "../../assets/pdf/certificates/excel-basico.pdf";

import excelIntermediarioPdf from "../../assets/pdf/certificates/excel-intermediario.pdf";
//import excelAvancadoPdf from "../../assets/pdf/certificates/excel-avancado.pdf";
import powerBiPdf from "../../assets/pdf/certificates/power-bi.pdf";

import pcmPdf from "../../assets/pdf/certificates/pcm.pdf";

import gerenciamentoPdf from "../../assets/pdf/certificates/geranciamento-medicao-energia.pdf";

import termografiaPdf from "../../assets/pdf/certificates/termografia-manutenção-preditiva.pdf";

export const certificates = [
  {
    category: "💻 Desenvolvimento Full Stack",

    items: [
      {
        title: "HTML5",
        institution: "DevClub",
        year: "2026",

        image: htmlImage,
        pdf: null,
      },

      {
        title: "Git & GitHub",
        institution: "DevClub",
        year: "2026",

        image: gitImage,
        pdf: null,
      },

      {
        title: "JavaScript",
        institution: "DevClub",
        year: "2026",

        image: javascriptImage,
        pdf: null,
      },

      {
        title: "JavaScript Async / Await",
        institution: "DevClub",
        year: "2026",

        image: javascriptAsyncImage,
        pdf: null,
      },

      {
        title: "Node.js",
        institution: "DevClub",
        year: "2026",

        image: nodeImage,
        pdf: null,
      },

      {
        title: "React.js",
        institution: "DevClub",
        year: "Em andamento",

        image: null,
        pdf: null,
      },
    ],
  },

  {
    category: "⚡ Formação Técnica em Elétrica",

    items: [
      {
        title: "Instalador Eletricista",
        institution: "SENAI",

        year: "2018",

        image: eletricistaImage,
        pdf: null,
      },

      {
        title: "NR10 + SEP",
        institution: "Segurança em Instalações Elétricas",

        year: "",

        image: null,
        pdf: nr10Pdf,
      },

      {
        title: "NR33",
        institution: "Espaço Confinado",

        year: "",

        image: null,
        pdf: nr33Pdf,
      },

      {
        title: "Dispositivos de Baixa Tensão",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: dispositivoPdf,
      },

      {
        title: "Subestações e Cabine Primária",
        institution: "Treinamento",

        year: "",

        image: null,
        pdf: manutencaoPdf,
      },
    ],
  },

    {
    category: "🤖 Automação Industrial",

    items: [
      {
        title: "CLP para Iniciantes",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: clpPdf,
      },

      {
        title: "IHM",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: ihmPdf,
      },

      {
        title: "Servo Acionamento",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: servoPdf,
      },

      {
        title: "Robô Industrial",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: roboPdf,
      },

      {
        title: "Rede Modbus",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: modbusPdf,
      },

      {
        title: "Comunicação MODBUS RTU",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: comunicacaoModbusPdf,
      },

      {
        title: "CLP iQ-F + Servo via Ethernet",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: ethernetServoPdf,
      },

      {
        title: "CLP iQ-F + Inversor via Ethernet",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: ethernetInversorPdf,
      },

      {
        title: "Inversor de Frequência",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: inversorPdf,
      },

      {
        title: "Rede CC-Link IE Field Basic",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: redeCcPdf,
      },
    ],
  },

  {
    category: "📊 Dados & Produtividade",

    items: [
      {
        title: "Excel Básico",
        institution: "Fundação Bradesco",

        year: "",

        image: null,
        pdf: excelBasicoPdf,
      },

      {
        title: "Excel Intermediário",
        institution: "Fundação Bradesco",

        year: "",

        image: null,
        pdf: excelIntermediarioPdf,
      },

      {
        title: "Excel Avançado",
        institution: "Fundação Bradesco",

        year: "",

        image: null,
        pdf: null,
      },

      {
        title: "Power BI",
        institution: "Fundação Bradesco",

        year: "",

        image: null,
        pdf: powerBiPdf,
      },

      {
        title: "PCM",
        institution: "Planejamento e Controle da Manutenção",

        year: "",

        image: null,
        pdf: pcmPdf,
      },

      {
        title: "Gerenciamento e Medição de Energia",
        institution: "Mitsubishi Electric",

        year: "",

        image: null,
        pdf: gerenciamentoPdf,
      },

      {
        title: "Termografia na Manutenção Preditiva",
        institution: "Treinamento",

        year: "",

        image: null,
        pdf: termografiaPdf,
      },
    ],
  },
];