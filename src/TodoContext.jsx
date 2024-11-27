// src/TarefasContext.jsx
import { createContext, useState } from "react";

// Criação do contexto para o tema
export const TodoContext = createContext();


export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [contadorTarefa,setContador] = useState(0);



  
  const [contadorTarefaConc, setContadorConc] = useState(0)

  const adicionarTarefa = (tarefa) => {
    const novaTarefa = {
      id: Date.now(),
      texto: tarefa, 
      status: false,
    };
    
    setTarefas([...tarefas, novaTarefa]);
    setContador(contadorTarefa + 1)
    
  };
  const excluirTarefa = ({id, status}) => {
    
    
    
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    setContador(contadorTarefa - 1)
    
    if(status) setContadorConc(contadorTarefaConc - 1)
  };

  
  const concluirTarefa = ({id, status}) => {

    if (status){ // desmarcar a tarefa
      setContadorConc(contadorTarefaConc - 1)
      
    } else { // marcar a tarefa como concluída
      setContadorConc(contadorTarefaConc + 1)
      
    }

    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: !tarefa.status } : tarefa
        
      ),
    );

    
  };

  return (
    <TodoContext.Provider
      value={{ tarefas, adicionarTarefa, excluirTarefa, concluirTarefa, contadorTarefa, contadorTarefaConc}}
    >
      {children}
    </TodoContext.Provider>
  );
}
