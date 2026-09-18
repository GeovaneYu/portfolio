/**
 * Portfolio Data
 * Single source of truth for all portfolio content
 */

import type {
  PersonalInfo,
  Experience,
  Education,
  Language,
  SkillCategory,
} from "@/types/portfolio";

// ===== Portfolio Data =====

const whatsappMessage = encodeURIComponent("Olá Geovane! Vim pelo seu portfólio.");

export const personalInfo: PersonalInfo = {
  name: "Geovane Gofredo",
  title: "MANUTENÇÃO, SUPORTE, INFRA, OPERAÇÕES E SERVIÇOS DE TI",
  location: { city: "São Paulo, SP", country: "Brasil" },
  website: "linkedin.com/in/geovane-gofredo",
  email: "geovane.gofredo@outlook.com",
  phone: "(11) 96882-8204",
  whatsapp: `https://wa.me/5511968828204?text=${whatsappMessage}`,
  bio: "Profissional de TI com mais de 14 anos em infraestrutura, suporte avançado e gestão técnica de ambientes corporativos. Atuo com administração de redes, servidores, segurança e condução de projetos de melhoria. Perfil proativo, focado em estabilidade operacional e visão estratégica para otimização de ambientes críticos. Experiência direta com cliente corporativo, assumindo responsabilidade técnica, organização do ambiente e entrega de soluções com autonomia para times globais.",
    skills: "Gestão, Liderança, Gestão de Incidentes, Gestão de Problemas, Projetos de Infraestrutura, ITSM, ITIL, COBIT, Scrum, Kanban, Ágil, Jira, Confluence, Markdown, SLA, Melhoria Contínua, Governança de TI, Windows Server, AD, GPO, DNS/DHCP, PowerShell, CLI, Linux, Proxmox, Virtualização, Docker, Backup e Restore, Monitoramento, M365, Azure, Entra ID, Intune, Windows Autopilot, MDM, Apple Business Manager, iPhone, Android, Exchange Admin, Teams Admin, Redes, Switching/Routing, Firewall, VPN, Wi-Fi Corporativo, Cabeamento Estruturado, Antivírus Corporativo, Hardware",
};

export const experience: Experience[] = [
  {
    id: "exp-0",
    company: "Stefanini Brasil",
    role: "Especialista Bilíngue | Infraestrutura & Operações de TI",
    location: "",
    startDate: "2026-09",
    endDate: null,
    description:
      "Responsável pela operação e sustentação de ambientes de alta criticidade, com foco em estabilidade e continuidade dos serviços.\nGestão do ambiente de TI, análise de problemas e coordenação de tratativas junto às equipes especializadas.\nInterface direta com áreas de negócio e diferentes times de tecnologia, acompanhando demandas de ponta a ponta e contribuindo para a segurança e eficiência operacional.",
    current: true,
  },
  {
    id: "exp-1",
    company: "FCA TI",
    role: "Líder de Infraestrutura e Operações de TI | Projetos, Redes e Ambientes Corporativos",
    location: "",
    startDate: "2022-06",
    endDate: "2026-04",
    description:
      "Responsável pela gestão e sustentação de ambientes de TI de diversos clientes, nacionais e multinacionais.\nLiderança de equipes, infraestrutura, redes e servidores, gestão de incidentes críticos e condução de projetos de melhoria e padronização.\nInterface direta com gestores e diretorias, alinhando prioridades e garantindo estabilidade, eficiência e continuidade das operações de TI.",
    current: false,
  },
  {
    id: "exp-2",
    company: "HCL Technologies",
    role: "Analista Sênior de Suporte e Infraestrutura",
    location: "",
    startDate: "2017-11",
    endDate: "2022-06",
    description:
      "Suporte bilíngue para Rockwell Automation (global). Atuação em suporte técnico presencial em ambiente corporativo e industrial, prestando atendimento a usuários locais e internacionais e garantindo a estabilidade da infraestrutura de TI nas operações.\n\nPrincipais atividades:\n• Atendimento de chamados técnicos nível 2 e 3 em ambiente corporativo\n• Suporte presencial a usuários, estações de trabalho e periféricos\n• Diagnóstico e resolução de incidentes em hardware, software e rede\n• Suporte a infraestrutura de TI em ambiente de escritório e operação\n• Instalação, configuração e substituição de equipamentos de TI\n• Interface com equipes globais de suporte e fornecedores\n• Atendimento bilíngue a usuários e times internacionais (português e inglês)\n• Apoio em projetos de melhoria e implantação de infraestrutura",
    current: false,
  },
  {
    id: "exp-3",
    company: "Sonda IT",
    role: "Analista Pleno de Suporte de TI",
    location: "",
    startDate: "2015-10",
    endDate: "2016-09",
    description:
      "Suporte para Cielo e Rhodia Solvay.\n\nPrincipais atividades:\n• Atendimento de chamados técnicos nível 1 e 2\n• Suporte a usuários locais e internacionais (português e inglês)\n• Diagnóstico e resolução de incidentes em hardware, software e rede\n• Instalação e configuração de equipamentos e estações de trabalho\n• Apoio em atividades de infraestrutura e suporte a operações de TI",
    current: false,
  },
  {
    id: "exp-4",
    company: "Econocom Brasil",
    role: "Analista Pleno de Suporte de TI",
    location: "",
    startDate: "2013-05",
    endDate: "2015-10",
    description:
      "Suporte Windows para Banco do Brasil e Mapfre (Telefonica/Vivo). Atuação em suporte técnico.\n\nPrincipais atividades:\n• Atendimento de chamados de suporte nível 1 e 2\n• Diagnóstico e resolução de problemas em estações de trabalho e periféricos\n• Instalação e configuração de equipamentos de rede e dispositivos corporativos\n• Suporte a ambientes Windows e aplicações corporativas\n• Apoio em projetos de implantação e melhorias de infraestrutura",
    current: false,
  },
  {
    id: "exp-5",
    company: "Grupo Help Online",
    role: "Técnico de Campo Júnior",
    location: "",
    startDate: "2012-01",
    endDate: "2012-12",
    description:
      "Atuação em suporte técnico presencial a usuários e estações de trabalho em ambiente corporativo.\n\nPrincipais atividades:\n• Atendimento de chamados de suporte nível 1\n• Manutenção básica de computadores e periféricos\n• Instalação e configuração de sistemas operacionais e softwares corporativos\n• Suporte a rede local (cabeamento, pontos de rede e conectividade)\n• Apoio em atividades de infraestrutura e suporte de campo",
    current: false,
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "FATEC Osasco",
    degree: "Tecnólogo",
    field: "Redes de Computadores",
    startYear: "2012",
    endYear: "2015",
    location: "Osasco, SP",
  },
];

export const languages: Language[] = [
  { language: "Português", proficiency: "Nativo" },
  { language: "Inglês", proficiency: "Avançado / Fluente" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Gestão e Operações",
    skills: "Gestão, Liderança, Gestão de Incidentes, Gestão de Problemas, Projetos de Infraestrutura, ITSM, ITIL, COBIT, Scrum, Kanban, Ágil, Jira, Confluence, Markdown, SLA, Melhoria Contínua, Governança de TI",
  },
  {
    category: "Sistemas e Servidores",
    skills: "Windows Server, Active Directory, GPO, DNS/DHCP, PowerShell, CLI, Linux, Proxmox, Virtualização, Docker, VPS, Backup e Restore, Monitoramento, MacOS",
  },
  {
    category: "Cloud e Produtividade",
    skills: "Microsoft 365, Azure, Entra ID, Intune, Windows Autopilot, MDM, Apple Business Manager, iPhone, Android, Exchange Admin, Teams Admin, Teams",
  },
  {
    category: "Infraestrutura e Redes",
    skills: "Redes, Switching/Routing, Firewall, VPN, Wi-Fi Corporativo, VLAN, Cabeamento Estruturado, Antivírus Corporativo, Hardware",
  },
];
