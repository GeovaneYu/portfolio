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
  title: "COORDENAÇÃO DE TI | GOVERNANÇA | OPERAÇÕES E SERVIÇOS (ITSM/SDM)",
  location: { city: "São Paulo, SP", country: "Brasil" },
  website: "linkedin.com/in/geovane-gofredo",
  email: "geovane.gofredo@outlook.com",
  phone: "(11) 96882-8204",
  whatsapp: `https://wa.me/5511968828204?text=${whatsappMessage}`,
  bio: "Sou líder de TI e profissional com mais de 14 anos de carreira construída na prática — evoluindo da operação técnica e do suporte avançado bilíngue até a coordenação de equipes, governança e operações de infraestrutura em ambientes corporativos e industriais de alta criticidade.\n\nNos últimos quatro anos, liderei a operação de TI para múltiplos clientes, conectando a execução técnica (N1/N2/N3) às prioridades de gestores e diretorias. Atuo com ITSM/SDM, gestão de incidentes críticos e SLAs, governança (ITIL/COBIT), gestão de fornecedores, projetos de infraestrutura e cloud, continuidade de negócios e segurança. Meu foco é tirar a TI do modo reativo e consolidar uma operação estável, segura, documentada e previsível. Inglês avançado/fluente para atuação com times globais.",
  skills: "Governança de TI, Coordenação de TI, Gestão de Operações, Service Delivery (SDM), Liderança de Equipes, ITIL, COBIT, ITSM, Gestão de Incidentes, Gestão de Problemas, GMUD, RCA, SLA, KPI, MTTR, FCR, CSAT, Gestão de Fornecedores, Contratos, CapEx/OpEx, ITAM, CMDB, LGPD, Compliance, BCP, DRP, Scrum, Kanban, PMBOK, Microsoft 365, Azure, Entra ID, Intune, Autopilot, MDM/MAM, Exchange Online, SharePoint Online, Teams Admin, Google Workspace, DaaS, Windows Server, Active Directory, GPO, DNS, DHCP, File Server, Linux, macOS, Proxmox, VMware, Hyper-V, VPS, Docker, RMM, Zabbix, Grafana, ServiceNow, Jira Service Management, GLPI, Redes Corporativas, TCP/IP, Roteamento, Switching, VLANs, Cabeamento Estruturado, Firewall, VPN Site-to-Site, VPN Client-to-Site, EDR, Antivírus, Acesso Condicional, Privilégio Mínimo, Backup Local, Backup em Nuvem, Acronis, Veeam, Hardware",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "FCA TI",
    role: "Líder de Infraestrutura e Operações de TI | Coordenação, Governança e Projetos",
    location: "São Paulo, SP",
    startDate: "2022-06",
    endDate: "2026-04",
    description:
      "Gestão operacional, governança técnica e sustentação de ambientes de TI de múltiplos clientes corporativos, nacionais e multinacionais, assegurando alta disponibilidade e alinhamento estratégico ao negócio:\nLiderança de Equipes e Operações (N1, N2 e N3): Coordenação técnica das equipes de suporte (Help Desk, Service Desk e Field Service), redes e servidores, definindo prioridades, fluxos de escalonamento e padronização do atendimento.\nInterface Executiva e Alinhamento Estratégico: Atuação direta junto a gestores e diretorias dos clientes para reporte de indicadores operacionais, alinhamento de demandas prioritárias e defesa técnica de projetos de evolução tecnológica.\nGestão de Incidentes Críticos e Controle de SLAs: Liderança na condução de incidentes de alta severidade (Major Incidents), coordenando diagnósticos de causa raiz (RCA) e planos de ação para cumprimento de SLAs rigorosos e redução de tempo de parada (downtime).\nGovernança de Ativos, Custos e Compliance (LGPD): Estruturação de auditorias técnicas, inventário de parque tecnológico e controle do ciclo de vida de hardware e licenciamento de software (Microsoft 365 e soluções corporativas), otimizando custos com licenças ou recursos subutilizados e apoiando a adequação técnica à LGPD.\nCondução de Projetos de Infraestrutura e Cloud: Planejamento e execução de projetos de onboarding de novos clientes, migrações e administração de Microsoft 365, Azure, Intune, servidores Windows/Linux, virtualização (Proxmox, VPS, Docker) e reestruturação de redes.\nContinuidade de Negócios e Cibersegurança: Implementação e acompanhamento de estratégias de backup corporativo (local e em nuvem), planos de recuperação de desastres (DRP), administração de firewalls, VPNs (Site-to-Site e Client-to-Site), VLANs e políticas de proteção de endpoints.\nMonitoramento Proativo e Melhoria Contínua: Gestão de rotinas preventivas 24/7 via ferramentas de RMM, documentação de topologias de rede e criação de procedimentos operacionais para eliminar incidentes recorrentes.",
    current: false,
  },
  {
    id: "exp-2",
    company: "HCL Technologies",
    role: "Analista Sênior de Suporte e Infraestrutura | Operações Globais (Rockwell Automation)",
    location: "São Paulo, SP",
    startDate: "2017-11",
    endDate: "2022-06",
    description:
      "Sustentação bilíngue de infraestrutura de TI dedicada à operação global da Rockwell Automation, atuando presencialmente em ambiente corporativo e industrial de alta criticidade com atendimento a usuários e equipes locais e internacionais:\nSustentação Avançada N2/N3 em Ambiente Corporativo e Industrial: Ponto focal técnico para diagnóstico e resolução de incidentes complexos de hardware, software, servidores e conectividade de rede tanto nas áreas de escritório quanto na operação industrial.\nArticulação Global e Gestão de Fornecedores: Interface contínua em inglês e português com times globais de suporte e engenharia internacional, além do alinhamento técnico e operacional com fornecedores e parceiros locais.\nProjetos de Melhoria e Implantação de Infraestrutura: Condução local e apoio técnico em projetos de atualização tecnológica, rollout de equipamentos, padronização de estações de trabalho e melhorias de infraestrutura física e lógica.\nGestão de Ativos e Continuidade Operacional: Controle de instalação, configuração e substituição de ativos de TI, garantindo o cumprimento dos acordos globais de nível de serviço (SLAs) e a disponibilidade dos recursos para o negócio.\nPadronização e Prevenção de Incidentes: Identificação de gargalos operacionais recorrentes e aplicação de ações corretivas e preventivas alinhadas às práticas ITIL e aos padrões globais de segurança da operação.",
    current: false,
  },
  {
    id: "exp-3",
    company: "Sonda IT",
    role: "Analista Pleno de Suporte e Infraestrutura de TI",
    location: "São Paulo, SP",
    startDate: "2015-10",
    endDate: "2016-09",
    description:
      "Sustentação Bilíngue e Operações de TI: Atendimento técnico N1 e N2 (português e inglês) para usuários locais e internacionais nos ambientes corporativos da Cielo e da Rhodia Solvay, realizando diagnóstico de incidentes em hardware, software e redes, configuração de equipamentos e apoio direto às rotinas de infraestrutura.",
    current: false,
  },
  {
    id: "exp-4",
    company: "Econocom Brasil",
    role: "Analista Pleno de Suporte e Infraestrutura de TI",
    location: "São Paulo, SP",
    startDate: "2013-05",
    endDate: "2015-10",
    description:
      "Suporte Corporativo e Projetos de Implantação: Atendimento de chamados N1 e N2 em ambientes Windows e aplicações corporativas, configuração de ativos de rede e dispositivos, e participação direta em projetos de implantação e melhorias de infraestrutura.",
    current: false,
  },
  {
    id: "exp-5",
    company: "Grupo Help Online",
    role: "Técnico de Campo Júnior | Infraestrutura e Suporte de TI",
    location: "São Paulo, SP",
    startDate: "2012-01",
    endDate: "2012-12",
    description:
      "Operações de Campo e Redes Locais: Suporte técnico presencial N1 em ambiente corporativo, manutenção de estações e periféricos, instalação de sistemas operacionais e softwares corporativos, e estruturação de rede local (cabeamento, pontos de rede e conectividade).",
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
  { language: "Espanhol", proficiency: "Intermediário" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Governança e Gestão",
    skills: "Governança de TI, Coordenação de TI, Gestão de Operações, Service Delivery (SDM), Liderança de Equipes N1/N2/N3, ITIL, COBIT, ITSM, Gestão de Incidentes, Gestão de Problemas, GMUD, RCA, SLA, KPI, MTTR, FCR, CSAT, Gestão de Fornecedores, Contratos, CapEx/OpEx, ITAM, CMDB, LGPD, Compliance, BCP, DRP, Scrum, Kanban, PMBOK",
  },
  {
    category: "Cloud e Modern Workplace",
    skills: "Microsoft 365, Azure, Entra ID, Intune, Autopilot, MDM/MAM, Exchange Online, SharePoint Online, Teams Admin, Google Workspace, DaaS, Migrações de Nuvem",
  },
  {
    category: "Sistemas, Virtualização e Monitoramento",
    skills: "Windows Server, Active Directory, GPO, DNS, DHCP, File Server, Linux, macOS, Proxmox, VMware, Hyper-V, VPS, Docker, RMM, Zabbix, Grafana, ServiceNow, Jira Service Management, GLPI",
  },
  {
    category: "Infraestrutura, Redes e Segurança",
    skills: "Redes Corporativas, TCP/IP, Roteamento, Switching, VLANs, Cabeamento Estruturado, Firewall, VPN Site-to-Site, VPN Client-to-Site, EDR, Antivírus, Acesso Condicional, Privilégio Mínimo, Backup Local, Backup em Nuvem, Acronis, Veeam, Hardware",
  },
];
