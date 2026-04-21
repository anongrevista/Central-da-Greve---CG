import { TopBar } from "@/components/TopBar";
import { InteractiveDirectory } from "@/components/InteractiveDirectory";

export default function DashboardHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      
      <div className="flex flex-1 overflow-hidden px-8 max-w-5xl mx-auto w-full pt-12">
        <div className="flex-1 overflow-y-auto pr-8 pb-32">
          
          <div className="mb-12 space-y-8">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-4 text-white">
                <span className="text-primary">HUB</span>
                <span className="text-gray-400 font-medium text-3xl"> da </span>
                <span className="text-secondary">Greve</span>
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Bem-vindo ao portal interativo de documentação.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-wider text-sm text-gray-500">
                Como Usar
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Selecione uma pasta abaixo ou na barra lateral para acessar as pautas, informações e atas formatadas e higienizadas.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2 uppercase tracking-wider text-sm text-gray-500">
                A Importância das Greves
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-4">
                A greve de 2016, que durou quase 3 meses, foi fundamental: graças a ela tivemos as cotas e o Enem-USP. Já a greve de 2023, que durou um mês e meio, teve como resultado a contratação de novos professores.
              </p>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                As greves são importantes e tentam se organizar para não atrapalhar os estudos, tendo mais informações sobre a greve atual nas pastas a seguir.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm text-gray-500">
            Navegar por Pastas
          </h2>

          <InteractiveDirectory />

        </div>
      </div>
    </div>
  );
}
