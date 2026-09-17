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
    skills: "Liderança Técnica, Gestão de Incidentes, Gestão de Problemas, Projetos de Infraestrutura, ITSM, ITIL, Scrum, Kanban, SLA, Melhoria Contínua, Governança de TI, Windows Server, AD, GPO, DNS/DHCP, Linux, Proxmox, Virtualização, Docker, Backup e Restore, Monitoramento, M365, Azure, Entra ID, Intune, MDM, Apple Business Manager, Exchange Admin, Teams Admin, Redes, Switching/Routing, Firewall, VPN, Wi-Fi Corporativo, Cabeamento Estruturado, Antivírus Corporativo, Hardware",
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
      "Responsável pela operação e sustentação de ambientes de alta criticidade, com foco em estabilidade e continuidade dos serviços. Gestão do ambiente de TI, análise de problemas e coordenação de tratativas junto às equipes especializadas. Interface direta com áreas de negócio e diferentes times de tecnologia, acompanhando demandas de ponta a ponta e contribuindo para a segurança e eficiência operacional.",
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
      "Responsável pela gestão e sustentação de ambientes de TI de diversos clientes, nacionais e multinacionais. Liderança de equipes, infraestrutura, redes e servidores, gestão de incidentes críticos e condução de projetos de melhoria e padronização. Interface direta com gestores e diretorias, alinhando prioridades e garantindo estabilidade, eficiência e continuidade das operações de TI.",
    current: false,
  },
  {
    id: "exp-2",
    company: "HCL Technologies",
    role: "Analista Sênior de Suporte e Infraestrutura",
    location: "",
    startDate: "2017-11",
    endDate: "2022-06",
    description: "Suporte bilíngue para Rockwell Automation (global). Diagnóstico de incidentes complexos de rede/estação, substituição de equipamentos e interface com fornecedores em projetos de implantação.",
    current: false,
  },
  {
    id: "exp-3",
    company: "Sonda IT",
    role: "Analista Pleno de Suporte de TI",
    location: "",
    startDate: "2015-10",
    endDate: "2016-09",
    description: "Suporte para Cielo e Rhodia Solvay — diagnóstico de rede, hardware e software para usuários locais e internacionais.",
    current: false,
  },
  {
    id: "exp-4",
    company: "Econocom Brasil",
    role: "Analista Pleno de Suporte de TI",
    location: "",
    startDate: "2013-05",
    endDate: "2015-10",
    description: "Suporte Windows para Banco do Brasil e Mapfre (Telefonica/Vivo) — configuração de rede e melhorias de infraestrutura.",
    current: false,
  },
  {
    id: "exp-5",
    company: "Grupo Help Online",
    role: "Técnico de Campo Júnior",
    location: "",
    startDate: "2012-01",
    endDate: "2012-12",
    description: "Manutenção de PCs no varejo, redes locais (cabeamento) e atendimento presencial.",
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
    skills: "Liderança Técnica, Gestão de Incidentes, Gestão de Problemas, Projetos de Infraestrutura, ITSM, ITIL, Scrum, Kanban, SLA, Melhoria Contínua, Governança de TI",
  },
  {
    category: "Sistemas e Servidores",
    skills: "Windows Server, Active Directory, GPO, DNS/DHCP, Linux, Proxmox, Virtualização, Docker, VPS, Backup e Restore, Monitoramento, MacOS",
  },
  {
    category: "Cloud e Produtividade",
    skills: "Microsoft 365, Azure, Entra ID, Intune, MDM, Apple Business Manager, Exchange Admin, Teams Admin, Teams",
  },
  {
    category: "Infraestrutura e Redes",
    skills: "Redes, Switching/Routing, Firewall, VPN, Wi-Fi Corporativo, VLAN, Cabeamento Estruturado, Antivírus Corporativo, Hardware",
  },
];
