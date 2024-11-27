import { Check, Trash } from "@phosphor-icons/react";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
import CapaInicio from "../CapaInicio/indexInicio";

export default function Tarefas() {
  const { tarefas, concluirTarefa, excluirTarefa, contadorTarefa, contadorTarefaConc } = useContext(TodoContext);

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-1 justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-azul">
          <p className="text-sm">Tarefas criadas</p>
          <span 
            className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
            {contadorTarefa}
          </span>
        </div>
        <div className="flex items-center gap-2 font-bold text-roxo">
          <p className="text-sm">Concluídas</p>
          <span 
            className="px-2 py-1 rounded-2xl text-xs bg-cinza-400 text-cinza-200">
            {contadorTarefaConc} de {contadorTarefa}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        {tarefas.length === 0 ? (
          <CapaInicio /> // Exibe o card inicial caso não tenha tarefas
        ) : (
          tarefas.map((tarefa) => (
            <div
              key={tarefa.id}
              className="flex flex-1 justify-between items-center gap-3 p-4 rounded-lg bg-cinza-500 border-[1px] border-cinza-400"
            >
              <div className="flex">
                <label
                  htmlFor="checkbox"
                  className="flex items-center gap-3 p-1"
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    value={tarefa.status}
                  />
                  <span
                    className={`
                      rounded-full w-4 h-4 flex items-center justify-center 
                      border-2 ${
                        tarefa.status
                          ? "border-roxo-dark bg-roxo-dark"
                          : "border-cinza-400"
                      }`}
                    onClick={() => concluirTarefa(tarefa)}
                  >
                    {tarefa.status && <Check />}
                  </span>
                  <p
                    className={`${
                      tarefa.status && "text-cinza-300 line-through"
                    }`}
                  >
                    {tarefa.texto}
                  </p>
                </label>
              </div>
              <button onClick={() => excluirTarefa(tarefa)}>
                <Trash className="text-cinza-300 hover:text-danger" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
