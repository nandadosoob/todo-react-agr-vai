import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export default function CriaTarefa() {
  const [tarefaNova, setTarefaNova] = useState("");
  const { adicionarTarefa } = useContext(TodoContext);
  return (
    <div className="flex justify-between items-center gap-2 -translate-y-2/4">
      <input
        type="text"
        value={tarefaNova}
        onChange={(e) => setTarefaNova(e.target.value)}
        placeholder="Adicionar tarefa"
        className="
            bg-cinza-500 text-cinza-100
              border-[1px] border-cinza-700 rounded-md
              h-12 p-4 leading-normal outline-none
              w-full

            "
      />
      <button
        onClick={() => {
          if (tarefaNova.trim() === "") {
            return;
          }
          adicionarTarefa(tarefaNova);
          setTarefaNova("");
        }}
        className="
              flex justify-center items-center
              h-12 p-4
              bg-azul-dark text-cinza-100
              hover:bg-azul
              border-0 rounded-md
              font-bold text-sm
              transition-all
            "
      >
        Criar
      </button>
    </div>
  );
}
