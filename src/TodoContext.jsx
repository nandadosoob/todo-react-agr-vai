import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TarefasProvider({ children }) {
  const [listaTarefas, setListaTarefas] = useState([]);
  const [totalTarefas, setTotalTarefas] = useState(0);
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0);

  const adicionarNovaTarefa = (textoTarefa) => {
    const novaTarefa = { id: Date.now(), texto: textoTarefa, status: false };
    setListaTarefas([...listaTarefas, novaTarefa]);
    setTotalTarefas(totalTarefas + 1);
  };

  const removerTarefa = ({ id, status }) => {
    setListaTarefas(listaTarefas.filter((tarefa) => tarefa.id !== id));
    setTotalTarefas(totalTarefas - 1);
    if (status) setTarefasConcluidas(tarefasConcluidas - 1);
  };

  const marcarConcluida = ({ id, status }) => {
    setListaTarefas(
      listaTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: !status } : tarefa
      )
    );
    setTarefasConcluidas(status ? tarefasConcluidas - 1 : tarefasConcluidas + 1);
  };

  return (
    <TodoContext.Provider value={{ listaTarefas, adicionarNovaTarefa, removerTarefa, marcarConcluida, totalTarefas, tarefasConcluidas }}>
      {children}
    </TodoContext.Provider>
  );
}
