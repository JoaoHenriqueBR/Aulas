import { useState } from "react";

export default function QuestItem(props) {
  // recebe e define o título da missão
  const [title, setTitle] = useState(props.quest.title);
  // recebe e define se a missão foi concluída
  const [checked, setChecked] = useState(false);
  // chama o estado de edição da missão no componente
  const [editMode, setEditMode] = useState(false);
  // define o visual da missão na lista
  const concluded = props.quest.status === "concluído";

  return (
    <div
      className="flex gap-4 flex-col md:flex-row items-center"
      // id para o teste do componente
      data-testid="questItem"
    >
      <div className="flex gap-4 items-center w-full sm:w-[80%]">
        {/* Padrão */}
        <input
          disabled={concluded}
          type="checkbox"
          checked={checked}
          className="checkbox rounded-full border"
          onChange={() => {
            if (concluded) return;
            else {
              setChecked(!checked);
              props.saveConcludedQuest(props.quest);
            }
          }}
        />

        {/* Modo de edição */}
        {editMode && !concluded ? (
          <input
            placeholder="quest"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-full bg-secondary pl-2 w-full input-sm flex focus:outline-none"
            // id para o teste do input
            data-testid="input"
          />
        ) : (
          <p
            className={`break-words ${concluded ? "line-through" : ""}`}
            // id para o teste do parágrafo
            data-testid="title"
          >
            {props.quest.title}
          </p>
        )}
      </div>
      {!concluded && (
        <div
          className="flex gap-4 w-full sm:w-fit justify-center"
          // id da div de edição
          data-testid="buttons"
        >
          <button
            // id do botão de edição
            data-testid="editButton"
            onClick={() => {
              if (editMode) props.saveEditQuest(props.quest, title);
              setEditMode(!editMode);
            }}
          >
            Editar
          </button>
          <button
            onClick={() => {
              if (concluded) return;
              else props.saveDeleteQuest(props.quest);
            }}
          >
            Excluir
          </button>
        </div>
      )}
    </div>
  );
}
