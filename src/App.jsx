import TarefasLista from "./TarefasLista/indexTarefas";
import Header from "./Header/indexHeader";
// import Tarefas from "./TarefasLista/indexTarefas";
// import { TarefasProvider } from "./todoContext";
import { TarefasProvider } from "./TodoContext";
import CriaTarefa from "./CriaTarefa";

function App() {
  return (
    <div
      className="
        min-h-screen w-screen
        bg-cinza-600 text-cinza-100 antialiased
      "
    >
      <Header />
      <section className="w-full max-w-3xl m-auto ">
        <TarefasProvider>
          <CriaTarefa />
          <TarefasLista />
          {/* <Tarefas /> */}
        </TarefasProvider>
      </section>
    </div>
  );
}

export default App;
