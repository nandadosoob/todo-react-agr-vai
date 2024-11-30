import { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

export default function CriaTarefa() {
  const [addTarefa, setAddTarefa] = useState("");
  const { adicionarNovaTarefa } = useContext(TodoContext);
  return (
    <div className="flex justify-between items-center gap-2 -translate-y-2/4">
      <input type="text"value={addTarefa} onChange={(e) => setAddTarefa(e.target.value)} placeholder="Adicionar tarefa" className=" bg-cinza-500 text-cinza-100 border-[1px] border-cinza-700 rounded-md h-12 p-4 leading-normal outline-none w-full"/>
      <button onClick={() => {
          if (addTarefa.trim() === "") {
            return;
          }
          adicionarNovaTarefa(addTarefa);
          setAddTarefa("");}}
        className="flex justify-center items-center h-12 p-4 bg-azul-dark text-cinza-100 border-0 rounded-md font-bold text-sm">
        Criar
      </button>
    </div>
  );
}