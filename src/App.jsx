import React, { useState } from 'react';

// SVGs Minimalistas de Alta Fidelidade
const LinkedinIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const WhatsappIcon = () => (
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

const CpuIcon = () => (
  <svg className="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="15" x2="23" y2="15" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="15" x2="4" y2="15" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-6 h-6 text-cyan-400/60 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('sobre');

  const mainAchievements = [
    {
      title: "Liderança em Transformação Digital",
      desc: "Direção de iniciativas voltadas à evolução de produtos e processos no ecossistema de Tecnologia."
    },
    {
      title: "Facilitação Estratégica & Discovery",
      desc: "Condução de workshops colaborativos para identificar oportunidades, levantar requisitos e desenhar soluções de alto impacto."
    },
    {
      title: "Gestão de Stakeholders Executivos",
      desc: "Atuação como elo entre executivos seniores, equipes técnicas e fornecedores estratégicos, garantindo alinhamento e decisões orientadas a resultados."
    },
    {
      title: "Governança de Performance & Financeira",
      desc: "Estruturação e monitoramento de KPIs, OKRs e indicadores de desempenho, aliado ao controle orçamentário de Opex & Capex."
    },
    {
      title: "Liderança de Squads Multidisciplinares",
      desc: "Condução de equipes na entrega de soluções críticas para o negócio com foco em maturidade e entrega contínua."
    },
    {
      title: "Integração Comercial & Tecnologia",
      desc: "Interface direta entre projetos de dados e tecnologia para otimizar produtos, ofertas e estratégias comerciais de expansão."
    }
  ];

  const skillCategories = [
    {
      title: "Estratégia, Negócios & Inovação",
      skills: [
        "Transformação Digital & Inovação Corporativa",
        "Estratégia Comercial & Expansão de Mercado",
        "Business Strategy & Corporate Innovation",
        "Inteligência Artificial & Automação em Aplicações de Negócio",
        "Adoção Tecnológica & Gestão de Mudança"
      ]
    },
    {
      title: "Liderança, Governança & Projetos",
      skills: [
        "Liderança de Squads & Programas de Transformação",
        "Governança de TI, Corporativa & Gestão de Mudanças",
        "Gestão Financeira: Opex & Capex",
        "Frameworks: SAFe 6.0, Scrum, Kanban, PMBOK, Lean",
        "Gestão de Stakeholders C-Level & Fornecedores"
      ]
    },
    {
      title: "Produtos, Discovery & Performance",
      skills: [
        "Product Discovery & Design Thinking",
        "Roadmapping Estratégico & Gestão de Portfólio",
        "Produtos Digitais & Evolução Tecnológica",
        "Gestão de Performance: KPIs, OKRs, Métricas de Eficiência",
        "Discovery & Cerimônias Estratégicas"
      ]
    },
    {
      title: "Plataformas & Ecossistemas Corporativos",
      skills: [
        "Sistemas Core Banking: Sinqia, Evertec, Autbank, Exchange",
        "Plataformas Cloud & CRM: Salesforce, ServiceNow, Google, Azure, AWS, IBM",
        "Projetos de Dados, Analytics & Inteligência de Mercado",
        "Arquitetura Micro Front-ends & Integração de APIs",
        "Projetos Regulatórios & Compliance (IFRS 9 / Resolução 4966)"
      ]
    }
  ];

  const careerTimeline = [
    {
      period: "2024 — Presente",
      role: "IT Executive Project Manager & Delivery Manager",
      company: "FinTech & Banking Sector",
      description: "Liderança de portfólios estratégicos, implantação da Resolução 4966 / IFRS 9 com micro front-ends e governança de squads em escala com SAFe 6.0."
    },
    {
      period: "2020 — 2024",
      role: "Agile Master / Senior Project Manager / RTE",
      company: "Banco ABC Brasil & Grandes Instituições",
      description: "Condução de migrações críticas de Core Banking (SBS V5), facilitação de war rooms de alta complexidade e liderança ágil corporativa."
    },
    {
      period: "2020 — 2021",
      role: "Consultor de Transformação Digital & Inovação",
      company: "HealthTech & Ecossistema Pix",
      description: "Implementação de inteligência artificial aplicada à triagem de telemedicina e integração de biometria facial ao ecossistema de pagamentos Pix."
    },
    {
      period: "2010 — 2020",
      role: "Executivo de Negócios & Gestão Comercial",
      company: "Setor Corporativo & Tecnologia",
      description: "10 anos de atuação conduzindo equipes de alta performance, estratégias de expansão de mercado e gestão de relacionamentos corporativos estratégicos."
    }
  ];

  const certifications = [
    {
      category: "Formação Executiva Internacional & IA",
      institution: "MIT & Anthropic",
      items: [
        "Professional Certified in Digital Transformation — MIT Professional Education (2025)",
        "Professional Certified in Management of Technology & Development Roadmap — MIT (2024)",
        "Professional Certified Digital Business Strategies: Bilateral Platforms — MIT (2023)",
        "Professional Certified in Leadership in Innovation & Cultural Awareness — MIT (2023)",
        "Claude Code 101, Enterprise 101, Generative AI 101 — Anthropic (2026)",
        "Gestão de Tecnologia da Informação — FIAP (2025 - 2026)"
      ]
    },
    {
      category: "Agilidade, Governança & Produtos",
      institution: "Scaled Agile, Kanban University & Uniagil",
      items: [
        "Certified SAFe® 6.0 Practice Consultant / RTE — Scaled Agile (2023)",
        "Team Kanban Professional (TKP) — Kanban University (2023)",
        "L.A.C.P Lean Agile Coach Professional — Uniagil (2022) [TOP 1 Ranking]",
        "RMP Results Management Professional & OKR Certified — Uniagil (2023)",
        "Product Backlog Professional (PBP) & Product Discovery — Uniagil (2023)",
        "Gestão de Projetos com Metodologias Ágeis — Udemy (2022)"
      ]
    },
    {
      category: "Liderança, Negociação & Negócios",
      institution: "Conquer, Sebrae & Outros",
      items: [
        "Formação em Liderança & Gestão do Tempo — Conquer Business School (2022)",
        "Negociação, Persuasão e Gestão de Conflitos — Udemy & Sebrae-SP (2021-2022)",
        "Modelagem e Validação da Proposta de Valor para Startups — Sebrae-SP (2021)",
        "Gestão Comercial — UNIP (2017)"
      ]
    }
  ];

  const recommendationsHierarchy = [
    {
      level: "Direção, C-Level, Mentores & Professores Internacionais",
      desc: "Recomendações de lideranças executivas seniores e corpo docente internacional.",
      items: [
        {
          name: "Fernando Arbache",
          title: "Professor e Consultor de Inovação no MIT",
          company: "MIT Professional Education",
          text: "Recomendo Aislan para o programa de CTO do MIT[cite: 10]. Graduado com honras em Transformação Digital no MIT e integrante do Knowledge Hub (grupo seleto de 50 profissionais globais). Destaca-se por sua visão estratégica, paixão pela transformação digital e liderança exemplar em projetos financeiros complexos[cite: 10]."
        },
        {
          name: "Ana G Soares",
          title: "Professora e Mentora do LACP",
          company: "Lean Agile Coach Professional",
          text: "As habilidades que mais te destacam são determinação com foco, proatividade e comunicação com carisma[cite: 10]. É o TOP 1 no nosso ranking catalogado de sucesso profissional[cite: 10]!"
        },
        {
          name: "Ricardo Auad Galozzi",
          title: "Superintendente de Gestão Corporativa",
          company: "LPM / Banco ABC Brasil",
          text: "Proatividade e envolvimento ímpares, além de fortes conhecimentos em agilidade e ótimo relacionamento interpessoal[cite: 7]. Identificou necessidade de capacitar o time de negócio e mobilizou os esforços necessários com enorme utilidade para a organização[cite: 7]."
        },
        {
          name: "Roberta Larisse Borges",
          title: "Head de Agilidade",
          company: "Banco ABC Brasil",
          text: "Capacidade de aprendizado e aplicação escalada[cite: 7]. Forte senso de time e companheirismo, criando ótimos ambientes de trabalho[cite: 7]. Ótimo comunicador[cite: 7]. A liderança está de fato em seu DNA[cite: 7]."
        }
      ]
    },
    {
      level: "Gerência, PMO & Governança Corporativa",
      desc: "Depoimentos de gerentes e superintendentes de portfólios, riscos e governança.",
      items: [
        {
          name: "Bruno Domingos Medeiros",
          title: "Gerente de Governança de T.I",
          company: "Banco ABC Brasil",
          text: "O feedback que chega do C-Level é que você é muito focado em resultados, não deixa assuntos pendentes e tenta sempre envolver as pessoas para a obtenção do melhor desfecho possível[cite: 7]."
        },
        {
          name: "Camila Siebra dos Santos",
          title: "Gerente de Gestão Corporativa LPM",
          company: "Banco ABC Brasil",
          text: "Profissional extremamente comprometido com suas tarefas e entregáveis, engajado em atingir sempre o melhor resultado[cite: 8]. Tem habilidade para questionar de forma coerente processos e decisões, propondo novas maneiras de fazer, pensar e inovar[cite: 8]."
        },
        {
          name: "Marcelo Nobrega",
          title: "Gerente de Passivos e Tesouro Direto",
          company: "Banco ABC Brasil",
          text: "Implantamos Sistemas para Distribuição de Fundos com muita eficácia[cite: 8]. O Espírito de equipe e Pertencimento é algo bastante forte e presente nesse profissional[cite: 8]! Sempre pronto para auxiliar as áreas envolvidas nos projetos inclusive os Vendors."
        },
        {
          name: "Camila Ribeiro",
          title: "Governança de T.I & VMO",
          company: "Banco ABC Brasil",
          text: "Em uma visão geral do nosso dia a dia vejo o quanto você é dedicado e determinado[cite: 8]. Está sempre estudando, buscando evoluir e dar o seu melhor[cite: 8]. Se posiciona com maestria, independente do desafio[cite: 8]."
        },
        {
          name: "Roselaine Guimaraes Galdino",
          title: "Release Train Engineer (RTE)",
          company: "Ex-Banco ABC Brasil / Atual Bradesco",
          text: "Profissional altamente colaborativo, que tem em seu perfil o hábito de contribuir de forma totalmente voluntária[cite: 9]. Constrói bons controles de eficiência de times para tomadas de decisão baseadas em dados[cite: 9]."
        },
        {
          name: "Tatiane Vilas Boas",
          title: "Gerente de Controle de Derivativos",
          company: "Banco ABC Brasil",
          text: "Sempre que o rumo de reuniões complexas com fornecedores começa a se perder, você consegue pausar as discussões com respeito e trazer todos para o foco principal e focado em resultado[cite: 10]."
        },
        {
          name: "Gustavo Marrero",
          title: "Gestão OPEX - Governança de TI",
          company: "Ex-Banco ABC Brasil / Atual Shopee",
          text: "Bastante seguro de si, exterioriza com precisão o que cada pessoa deve fazer para se atingir suas metas[cite: 9]. Demonstra ser um profissional totalmente qualificado, com nível de senioridade bastante elevado[cite: 9]."
        }
      ]
    },
    {
      level: "Pares, Tech Leads & Especialistas Técnicos",
      desc: "Reconhecimento de arquitetos, líderes técnicos, analistas seniores e parceiros de squad.",
      items: [
        {
          name: "Fabiano Lanzillotta",
          title: "Arquiteto Salesforce CRM",
          company: "Salesforce",
          text: "Aislan é um líder nato[cite: 7]. Soube administrar conflitos internos e lidar com a cobrança do C-Level sem transpor a pressão aos desenvolvedores, motivando todos a atender os prazos com harmonia[cite: 7]."
        },
        {
          name: "Rafael Furlan",
          title: "Gerente de T.I Core Banking",
          company: "Banco ABC Brasil",
          text: "Destaca-se pela persuasão, negociação e pragmatismo[cite: 7]. Atua perfeitamente como um 'mediador estratégico' que promove fluidez e minimiza atritos nos processos[cite: 7]."
        },
        {
          name: "Santhiago Merks",
          title: "Coordenador de Risco de Crédito",
          company: "Banco ABC Brasil",
          text: "Sempre disponível, atua com honestidade e transparência[cite: 7]. Consegue ser claro e objetivo na comunicação, sempre buscando conciliação e foco na resolução dos problemas[cite: 7]."
        },
        {
          name: "Luiz Antonio Mendes de Gois Junior",
          title: "Coordenador de Segurança da Informação",
          company: "Banco ABC Brasil",
          text: "Senso de urgência impecável em demandas complexas[cite: 7]. No projeto de gestão de identidades, entrou em cenário super desgastado e rapidamente afastou a crise com o fornecedor[cite: 7]."
        },
        {
          name: "Devilim Peterson",
          title: "Tech Lead Core Banking",
          company: "Ex-ABC Brasil / Atual ASA Banking",
          text: "Conseguiu de forma sucinta e objetiva orientar correções sutis nos processos de agilidade, fazendo o time aderir rapidamente[cite: 8]. Demonstra forte espírito de liderança e organização impecável[cite: 8]."
        },
        {
          name: "Eduardo Xavier",
          title: "Tech Lead Core Banking",
          company: "Banco ABC Brasil",
          text: "Organização nas pautas e cumprimento de entregas[cite: 8]. Excelente gestão de conflitos, conseguindo mapear e adequar prioridades quando uma tarefa afeta múltiplas áreas[cite: 8]."
        },
        {
          name: "Pamela Coelho do Nascimento",
          title: "Analista Sr. de Projetos e Sistemas",
          company: "Banco ABC Brasil",
          text: "Mediador e pacificador excepcional[cite: 9]. Durante uma maratona de 13h de war room do SBS V5, manteve-se calmo, centrado e instaurou um clima leve focado na solução[cite: 9]."
        },
        {
          name: "Rodrigo Croci",
          title: "Tech Lead Core Banking",
          company: "Banco ABC Brasil",
          text: "Um profissional muito responsável, facilitador dedicado e prestativo, sabe conduzir os projetos com maestria e manter o time engajado do início ao fim[cite: 9]."
        },
        {
          name: "Lucas dal Rovere",
          title: "Governança de T.I",
          company: "Ex-Banco ABC Brasil / Atual Bradesco",
          text: "Destaco sua notável empatia e clareza na comunicação com stakeholders[cite: 9]. Sua resiliência e determinação diante de desafios têm sido verdadeiramente inspiradoras[cite: 9]."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      {/* Dynamic Background Gradients inspirado no Hover.dev / The Startup */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Header Estilo Hover.dev / The Startup */}
      <header className="sticky top-0 z-50 bg-[#080B11]/80 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setActiveTab('sobre')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#080B11] rounded-[11px] flex items-center justify-center font-extrabold text-cyan-400 text-xs tracking-wider">
                AL
              </div>
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight block text-white group-hover:text-cyan-400 transition-colors">Aislan Longhini</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">IT Executive</span>
            </div>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-1.5 text-xs font-semibold">
            {[
              { id: 'sobre', label: 'Sobre' },
              { id: 'competencias', label: 'Competências' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'certificacoes', label: 'Certificações' },
              { id: 'recomendacoes', label: 'Recomendações' },
              { id: 'contato', label: 'Contato' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)} 
                className={`px-3.5 py-2 rounded-xl transition-all duration-200 relative ${
                  activeTab === tab.id 
                    ? 'text-white bg-white/10 border border-white/20 shadow-md shadow-cyan-500/10' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section Hover.dev - The Startup Style */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 text-xs font-mono tracking-wide uppercase mb-8 backdrop-blur-xl">
            <CpuIcon />
            <span>MIT Certified • Business & Tech Integration • SAFe 6.0 RTE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]">
            Conectando visão de negócios <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">à tecnologia e dados.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Executivo de tecnologia com sólida experiência em liderança estratégica, expansão de mercado e transformação digital guiada por inovação e IA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/aislan-longhini/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:brightness-110 transition-all shadow-xl shadow-cyan-500/20 flex items-center space-x-2 text-sm">
              <LinkedinIcon />
              <span className="text-slate-950">Perfil LinkedIn</span>
            </a>
            <button onClick={() => setActiveTab('contato')} className="px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-semibold hover:bg-white/[0.1] hover:border-white/20 transition-all text-sm backdrop-blur-xl">
              Falar Conosco
            </button>
          </div>
        </div>
      </section>

      {/* Conteúdo Dinâmico */}
      <main className="py-12 relative z-10">
        {/* ABA SOBRE */}
        {activeTab === 'sobre' && (
          <div className="max-w-5xl mx-auto px-6 space-y-16">
            <div className="p-8 sm:p-12 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden hover:border-cyan-500/30 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-6">Resumo Executivo</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  Executivo de tecnologia com mais de 10 anos de experiência em áreas comerciais, liderando equipes de alta performance, acelerando crescimento de mercado e desenvolvendo relacionamentos estratégicos com clientes e parceiros.
                </p>
                <p>
                  Nos últimos 8 anos, direcionei minha carreira para os ecossistemas de tecnologia, dados e gestão de projetos, ampliando minha capacidade de transformar desafios de negócio em soluções orientadas por inovação e IA.
                </p>
                <p>
                  Minha atuação combina visão estratégica nexialista, orientação a resultados e capacidade de conectar pessoas, processos e tecnologia para gerar valor sustentável e impulsionar a transformação digital das organizações.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-8 text-center">Principais Conquistas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mainAchievements.map((item, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all shadow-xl flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                        <CheckCircleIcon />
                      </div>
                      <h4 className="font-bold text-white text-base mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABA COMPETÊNCIAS */}
        {activeTab === 'competencias' && (
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Competências & Expertise</h2>
              <p className="text-slate-400 text-sm">Domínios organizados para máxima clareza e impacto estratégico.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-500/30 transition-all">
                  <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-white/10">{cat.title}</h3>
                  <ul className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-sm text-slate-300 flex items-start space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA TIMELINE */}
        {activeTab === 'timeline' && (
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Linha do Tempo</h2>
              <p className="text-slate-400 text-sm">Transição fluida entre a liderança comercial e a gestão executiva de tecnologia.</p>
            </div>

            <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
              {careerTimeline.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-4 ring-[#080B11] shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-125 transition-transform"></div>
                  <div className="md:absolute md:-left-32 md:top-1 text-xs font-mono text-cyan-400 font-semibold mb-1 md:mb-0">
                    {item.period}
                  </div>
                  <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-500/30 transition-all">
                    <h3 className="text-lg font-bold text-white mb-1">{item.role}</h3>
                    <p className="text-xs font-medium text-cyan-300/80 mb-3">{item.company}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA CERTIFICAÇÕES */}
        {activeTab === 'certificacoes' && (
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Certificações & Educação</h2>
              <p className="text-slate-400 text-sm">Credenciais obtidas nas principais instituições mundiais.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((group, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                    <GraduationCapIcon />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{group.category}</h3>
                  <p className="text-xs text-cyan-400 font-medium mb-6">{group.institution}</p>
                  <ul className="space-y-3">
                    {group.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-300 leading-relaxed flex items-start space-x-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA RECOMENDAÇÕES */}
        {activeTab === 'recomendacoes' && (
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Recomendações Profissionais</h2>
              <p className="text-slate-400 text-sm">Depoimentos corporativos rigorosamente estruturados por nível hierárquico.</p>
            </div>

            {recommendationsHierarchy.map((group, gIdx) => (
              <div key={gIdx} className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-cyan-400 tracking-tight">{group.level}</h3>
                  <p className="text-xs text-slate-400 mt-1">{group.desc}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((rec, idx) => (
                    <div key={idx} className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-xl hover:border-cyan-500/30 transition-all flex flex-col justify-between group">
                      <div>
                        <QuoteIcon />
                        <p className="text-sm text-slate-300 italic leading-relaxed mb-6 font-normal">
                          "{rec.text}"
                        </p>
                      </div>
                      <div className="border-t border-white/10 pt-4">
                        <h4 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">{rec.name}</h4>
                        <p className="text-[11px] text-cyan-400 font-medium">{rec.title}</p>
                        <p className="text-[10px] text-slate-500">{rec.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* NOVA ABA DE CONTATO */}
        {activeTab === 'contato' && (
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-white mb-3">Canais de Contato Direto</h2>
              <p className="text-slate-400 text-sm">Entre em contato diretamente para parcerias, posições executivas ou consultoria estratégica.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* E-mail Card */}
              <a 
                href="mailto:aislanlonghini30@gmail.com" 
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MailIcon />
                  </div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-cyan-400 mb-1">E-mail Profissional</h3>
                  <p className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">aislanlonghini30@gmail.com</p>
                </div>
                <p className="text-xs text-slate-400 mt-6 flex items-center space-x-1">
                  <span>Clique para enviar e-mail</span>
                  <span>→</span>
                </p>
              </a>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/5511959251055" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl shadow-xl transition-all group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <WhatsappIcon />
                  </div>
                  <h3 className="text-xs uppercase font-mono tracking-widest text-emerald-400 mb-1">WhatsApp Direct</h3>
                  <p className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">(11) 95925-1055</p>
                </div>
                <p className="text-xs text-slate-400 mt-6 flex items-center space-x-1">
                  <span>Iniciar conversa no WhatsApp</span>
                  <span>→</span>
                </p>
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Footer Estilo Hover.dev */}
      <footer className="py-16 border-t border-white/10 bg-[#080B11]/90 backdrop-blur-xl text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-3">Vamos conectar?</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Disponível para novos desafios executivos em Delivery Management, Inovação e Integração entre Negócios e Tecnologia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/aislan-longhini/" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:brightness-110 transition-all text-sm shadow-lg shadow-cyan-500/20 flex items-center space-x-2">
              <LinkedinIcon />
              <span className="text-slate-950">Perfil LinkedIn</span>
            </a>
            <button onClick={() => setActiveTab('contato')} className="px-7 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white font-semibold hover:bg-white/[0.1] transition-all text-sm backdrop-blur-xl">
              Ver Contatos
            </button>
          </div>
          <p className="mt-12 text-xs text-slate-500">© {new Date().getFullYear()} Aislan Longhini. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

