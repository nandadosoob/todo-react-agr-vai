import TarefasLista from "./TarefasLista/indexTarefas";
import Header from "./Header/indexHeader";
import Tarefas from "./TarefasLista/indexTarefas";
import { TarefasProvider } from "./todoContext";
// import { TarefasProvider } from "./TodoContext";

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
          <TarefasLista />
          
          {/* <Tarefas /> */}
        </TarefasProvider>
      </section>
    </div>
  );
}

export default App;
