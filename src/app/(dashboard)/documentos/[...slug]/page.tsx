import { TopBar } from "@/components/TopBar";
import { notFound } from "next/navigation";

/**
 * Dados estruturados do documento "Informações sobre a greve"
 * Extraídos do .txt original completo para renderização nativa com o design do HUB.
 */
const INFORMACOES_GREVE = {
  title: "Informações sobre a greve",
  sumario: [
    { label: "1. Greves anteriores", anchor: "greves-anteriores" },
    { label: "1.1 Greve (2023)", anchor: "greve-2023", indent: true },
    { label: "1.2 Paralisação (2019)", anchor: "paralisacao-2019", indent: true },
    { label: "1.3 Greve (2016)", anchor: "greve-2016", indent: true },
    { label: "2. Sobre essa greve o que temos de informação", anchor: "sobre-essa-greve" },
    { label: "2.1 Pautas da greve", anchor: "pautas-da-greve", indent: true },
    { label: "2.2 Lutas da greve", anchor: "lutas-da-greve", indent: true },
    { label: "2.3 Informações úteis", anchor: "informacoes-uteis", indent: true },
    { label: "2.4 Funcionamento da greve", anchor: "funcionamento-da-greve", indent: true },
    { label: "2.5 Como ajudar", anchor: "como-ajudar", indent: true },
    { label: "2.6 Reuniões e atividades até agora", anchor: "reunioes-atividades", indent: true },
    { label: "2.7 Reunião com a diretoria do IF e professores", anchor: "reuniao-diretoria", indent: true },
  ],
};

/**
 * Mapeamento de slugs para documentos.
 * Quando novos documentos forem adicionados, basta adicionar a entrada aqui.
 */
const DOCUMENT_MAP: Record<string, { key: string; title: string }> = {
  "ifusp/comando-de-greve/informacoes-sobre-a-greve": {
    key: "informacoes-sobre-a-greve",
    title: "Informações sobre a greve",
  },
};

function SectionDivider() {
  return <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8" />;
}

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-20 flex items-center gap-3">
      <span className="w-1 h-7 bg-secondary rounded-full inline-block" />
      {children}
    </h2>
  );
}

function SubSectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3 id={id} className="text-xl font-semibold text-gray-200 mt-8 mb-3 scroll-mt-20">
      {children}
    </h3>
  );
}

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-primary/20 text-primary border border-primary/30 rounded-full px-3 py-1 text-sm font-semibold mb-3 mt-4">
      {children}
    </span>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-gray-300 leading-relaxed pl-1">
      {children}
    </li>
  );
}

function InformacoesGreveContent() {
  return (
    <>
      {/* Sumário */}
      <div className="bg-[#1a1f2e] border border-gray-700/50 rounded-xl p-6 mb-10">
        <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Sumário
        </h2>
        <nav className="space-y-1.5">
          {INFORMACOES_GREVE.sumario.map((item) => (
            <a
              key={item.anchor}
              href={`#${item.anchor}`}
              className={`block text-sm transition-colors hover:text-secondary ${
                item.indent ? "pl-6 text-gray-400 hover:text-gray-200" : "font-semibold text-gray-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* 1. Greves anteriores */}
      <SectionTitle id="greves-anteriores">1. Greves anteriores</SectionTitle>
      <p className="text-gray-300 leading-relaxed mb-4">
        Podemos obter algumas informações com base em greves anteriores, elas foram:
      </p>

      <SubSectionTitle id="greve-2023">1.1 Greve (2023)</SubSectionTitle>
      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Conquistas:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-2 mb-6">
        <BulletItem>GT de dados descobriu o parâmetro sustentabilidade da reitoria</BulletItem>
        <BulletItem>Contratação de professores</BulletItem>
        <BulletItem>PPP bacharel</BulletItem>
        <BulletItem>Mudança de responsáveis pelo Física 1 — Founchau e companhia eram responsáveis</BulletItem>
      </ul>

      <SubSectionTitle id="paralisacao-2019">1.2 Paralisação (2019)</SubSectionTitle>
      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Conquistas:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-2 mb-6">
        <BulletItem>Evitou alguns cortes?</BulletItem>
        <BulletItem>União dos cientistas em uma luta nacional</BulletItem>
        <BulletItem>Chamou atenção para falta de professores</BulletItem>
      </ul>

      <SubSectionTitle id="greve-2016">1.3 Greve (2016)</SubSectionTitle>
      <p className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Conquistas:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-2 mb-6">
        <BulletItem>Cotas</BulletItem>
        <BulletItem>ENEM-USP</BulletItem>
      </ul>

      <SectionDivider />

      {/* 2. Sobre essa greve */}
      <SectionTitle id="sobre-essa-greve">2. Sobre essa greve o que temos de informação</SectionTitle>

      <SubSectionTitle id="pautas-da-greve">2.1 Pautas da greve</SubSectionTitle>
      <p className="text-gray-300 leading-relaxed mb-3">
        As pautas foram divididas em 4 eixos, sendo eles o de permanência, espaços de vivência, acesso e orçamento. As mesmas já compõe a carta de reivindicações do IFUSP e foram enviadas ao DCE para que tenha um debate analisando as cartas de cada instituto e suas pautas e compor a pauta geral da USP como um todo.
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
        Para facilitar o entendimento neste documento vamos dividir em pautas para a USP como um todo puxar e pautas do nosso instituto.
      </p>

      {/* Pautas USP Geral */}
      <h4 className="text-lg font-semibold text-gray-100 mb-4 border-l-2 border-secondary/50 pl-3">
        Pautas da carta de reivindicações feitas para a USP (geral)
      </h4>

      {/* Permanência */}
      <CategoryBadge>Permanência</CategoryBadge>

      <p className="text-sm font-semibold text-white mt-3 mb-2">1. Melhoras no Bandejão:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4">
        <BulletItem>Construção de bandejão poli/p3 (alunos da ver/fofito não tem tempo de bandejão)</BulletItem>
        <BulletItem>Desprivatização dos bandejões e equipe sem terceirizados</BulletItem>
        <BulletItem>Café da manhã em todos os bandecos das 6h as 9h</BulletItem>
        <BulletItem>Janta no domingo</BulletItem>
        <BulletItem>Funcionar nos feriados</BulletItem>
        <BulletItem>Dois pães na prefeitura e na química</BulletItem>
        <BulletItem>Vigilância sanitária constante</BulletItem>
      </ul>

      <p className="text-sm font-semibold text-white mt-3 mb-2">2. Por melhoras e garantias para os funcionários:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4">
        <BulletItem>BUSP para o funcionário terceirizado</BulletItem>
        <BulletItem>Intérprete de libras para os alunos que precisam (atualmente são funcionários temporários contratos de um ano ou semestre, quando o funcionário acaba o professor(a) fica impedido de dar aulas ou o aluno de entender) temos inclusive uma professora surda da CRUSP que dá aulas para todas as licenciaturas</BulletItem>
        <BulletItem>Contratação de pessoal estatizado para o HU</BulletItem>
      </ul>

      <p className="text-sm font-semibold text-white mt-3 mb-2">3. Políticas de permanência efetivas:</p>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4">
        <BulletItem>BUSP entre campos Butantã e med, um circular entre os campos</BulletItem>
        <BulletItem>Passe livre para CRUSP (meia passagem)</BulletItem>
        <BulletItem>Formação continuada para dar aula o professor ter um currículo atualizado para dar aulas</BulletItem>
        <BulletItem>Mais roteadores na USP</BulletItem>
        <BulletItem>USP aceitar medidas protetivas</BulletItem>
        <BulletItem>Maior oferecimento da disciplina de libras e ser de um semestre para cada curso não sendo o de saúde para todos</BulletItem>
        <BulletItem>Maior oferta de PUBs e prioridades nas PUB para alunos baixa</BulletItem>
        <BulletItem>Porcentagem de alunos do PAPFE atrelado porcentagem de alunos abaixo da renda mínima na faculdade, ter no mínimo uma bolsa, aumento do PAPFE para um salário mínimo e meio salário</BulletItem>
        <BulletItem>Aumento da frota de ônibus, aumento da frequência no fim de semana</BulletItem>
        <BulletItem>Física 0 e bases matemáticas</BulletItem>
        <BulletItem>Discussão dos PPPs (ênfase na lic e quererem por educação financeira e não divulgação científica) (o do bach foi refeito e o da LIC não, estando muito defasado), refazer o PPP e discutir ele e os manuais dos cursos</BulletItem>
        <BulletItem>Bolsa de suporte a pessoas com deficiência (profissionais e não bolsistas)</BulletItem>
      </ul>

      {/* Espaços */}
      <CategoryBadge>Espaços</CategoryBadge>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 mt-2">
        <BulletItem>Salas lilás na USP (espaço de acolhimento para mulheres em situações de violência)</BulletItem>
        <BulletItem>Pisos táteis e políticas de inclusão e segurança (garantir elevadores, incêndio, sala de descompressão)</BulletItem>
        <BulletItem>HU ser capaz de realizar pronto atendimentos</BulletItem>
        <BulletItem>Restabelecimento/revitalização da oca e vincular ela a creche oeste</BulletItem>
      </ul>

      {/* Acesso */}
      <CategoryBadge>Acesso</CategoryBadge>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 mt-2">
        <BulletItem>Cotas para pós, cotas trans/indígena</BulletItem>
        <BulletItem>Auxílio mudança, PAPFE a um salário mínimo paulista e meio pro CRUSP</BulletItem>
        <BulletItem>Cota de escola pública ampliada para 90%</BulletItem>
      </ul>

      {/* Orçamento */}
      <CategoryBadge>Orçamento</CategoryBadge>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 mt-2">
        <BulletItem>Fim do teto de gastos que ocorre em todas as etapas sendo 15% em ações da reitoria que mandam dinheiro para os institutos que tomam ações que tem que ter 15% guardado também e essas ações também devem ter os 15% (sendo na prática mais que 15% da verba de todas as ações financeiras da USP investidas em um fundo privado) (só a USP tem teto de gastos, Unesp e Unicamp não tem)</BulletItem>
        <BulletItem>Isonomia universitária — direitos iguais a todos os funcionários voto (já deve ser 20% e nem isso é cumprido) ganhos benefícios iguais</BulletItem>
        <BulletItem>GT de dados fiscalizar dados de renda/PAPFE, mapear o que é permanência</BulletItem>
        <BulletItem>ICMS vai acabar progressivamente e ser substituído pelo IBS e o orçamento da USP é vinculado ao ICMS, o financiamento da USP não pode ir junto e ser entregue à iniciativa privada</BulletItem>
        <BulletItem>GT de dados ver os fundos de investimento e se tem corrupção</BulletItem>
      </ul>

      <SectionDivider />

      {/* Pautas IFUSP */}
      <h4 className="text-lg font-semibold text-gray-100 mb-4 border-l-2 border-secondary/50 pl-3">
        Pautas da carta de reivindicações feitas para o IFUSP
      </h4>

      <CategoryBadge>Permanência</CategoryBadge>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 mt-2">
        <BulletItem>Exaustores/ar/ventilador no bandeco da física</BulletItem>
        <BulletItem>GT anti assédio (psicólogas, professores, alunos e funcionários) ter treinamento da PRIP (já se dispôs e fez esse treinamento a vigilantes inclusive)</BulletItem>
        <BulletItem>Efetivação do Física Acolhe para que a equipe de psicólogos sejam funcionárias e não pagas pelo dinheiro do Show da Física e aumento da equipe. Ampliação do Física Acolhe para a prevenção também</BulletItem>
        <BulletItem>Formulação de GT jurídico para elaborar uma contra proposta para a minuta atual e que aceite a minuta de 2018 que já foi mediada e elaborar um respaldo jurídico para as reivindicações</BulletItem>
      </ul>

      <CategoryBadge>Espaços</CategoryBadge>
      <ul className="list-disc list-inside space-y-1.5 ml-4 mb-4 mt-2">
        <BulletItem>Abertura da biblioteca e espaços de estudo (Méson Pi) (ao lado da biblioteca) (antes da biblioteca ficar pronta)</BulletItem>
        <BulletItem>Conforto térmico — agora que não tem as árvores o espaço do instituto está muito quente</BulletItem>
      </ul>

      <CategoryBadge>Acesso</CategoryBadge>
      <p className="text-gray-500 italic text-sm ml-4 mt-2 mb-2">(em elaboração)</p>

      <CategoryBadge>Orçamento</CategoryBadge>
      <p className="text-gray-500 italic text-sm ml-4 mt-2 mb-4">(em elaboração)</p>

      <SectionDivider />

      {/* 2.2 Lutas da greve */}
      <SubSectionTitle id="lutas-da-greve">2.2 Lutas da greve</SubSectionTitle>
      <ul className="list-disc list-inside space-y-1.5 ml-2 mb-6">
        <BulletItem>Contra tomada dos CAs</BulletItem>
        <BulletItem>Contra a falta de concursos para professores</BulletItem>
        <BulletItem>Contra a privatização e precarização dos bandejões</BulletItem>
        <BulletItem>Por uma mudança na forma do repasse de verba estadual das universidades estaduais</BulletItem>
        <BulletItem>Por uma defesa a isonomia e direitos dos funcionários</BulletItem>
      </ul>

      <SectionDivider />

      {/* 2.3 Informações úteis */}
      <SubSectionTitle id="informacoes-uteis">2.3 Informações úteis</SubSectionTitle>
      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-3 bg-[#1a1f2e] rounded-lg p-4 border border-gray-700/40">
          <span className="text-secondary text-lg mt-0.5">⚠</span>
          <p className="text-gray-300 text-sm leading-relaxed">
            Aulas online não pode (lei da reitoria) (para pós até 20%)
          </p>
        </div>
        <div className="flex items-start gap-3 bg-[#1a1f2e] rounded-lg p-4 border border-gray-700/40">
          <span className="text-secondary text-lg mt-0.5">⚠</span>
          <p className="text-gray-300 text-sm leading-relaxed">
            Avaliação não pode
          </p>
        </div>
        <div className="flex items-start gap-3 bg-[#1a1f2e] rounded-lg p-4 border border-gray-700/40">
          <span className="text-primary text-lg mt-0.5">✓</span>
          <p className="text-gray-300 text-sm leading-relaxed">
            Professores em sua maioria apoiam a greve e entendem que não é adequado dar aulas
          </p>
        </div>
      </div>

      <SectionDivider />

      {/* 2.4 Funcionamento da greve */}
      <SubSectionTitle id="funcionamento-da-greve">2.4 Funcionamento da greve</SubSectionTitle>
      <p className="text-gray-400 italic mb-6">
        Como funciona o Cefisma, comando de greve, assembleias…
      </p>

      {/* 2.5 Como ajudar */}
      <SubSectionTitle id="como-ajudar">2.5 Como ajudar</SubSectionTitle>
      <p className="text-gray-400 italic mb-6">
        Formas de se somar as lutas sendo feitas
      </p>

      <SectionDivider />

      {/* 2.6 Reuniões e atividades */}
      <SubSectionTitle id="reunioes-atividades">2.6 Reuniões e atividades até agora</SubSectionTitle>
      <p className="text-gray-400 italic mb-6">
        O que teve até agora
      </p>

      {/* 2.7 Reunião com a diretoria */}
      <SubSectionTitle id="reuniao-diretoria">2.7 Reunião com a diretoria do IF e professores</SubSectionTitle>
      <p className="text-gray-300 leading-relaxed mb-6">
        Ameaça de dar aulas como dada (falta a todos), calendário imutável sendo que é mutável e já o foi, incentivo aos alunos contrários irem contra a decisão do CA
      </p>
    </>
  );
}

export default function DocumentoPage({ params }: { params: { slug: string[] } }) {
  const slugKey = params.slug.join("/");
  const entry = DOCUMENT_MAP[slugKey];

  if (!entry) {
    notFound();
  }

  const context = params.slug.slice(0, -1).join(" / ").toUpperCase();

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />

      <div className="flex flex-1 overflow-hidden px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex-1 overflow-y-auto pr-4 sm:pr-8 pb-32 pt-4 max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-4 text-xs font-semibold text-gray-500 tracking-wider">
            DOCUMENTOS DO HUB &gt; {context}
          </div>

          {/* Título do documento */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                DOC
              </span>
              <span className="text-xs text-gray-500">Comando de Greve — IFUSP</span>
            </div>
            <h1 className="text-primary font-bold text-3xl sm:text-4xl">
              {entry.title}
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-3" />
          </div>

          {/* Conteúdo do documento */}
          {entry.key === "informacoes-sobre-a-greve" && <InformacoesGreveContent />}
        </div>
      </div>
    </div>
  );
}
