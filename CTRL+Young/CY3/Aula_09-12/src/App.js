import { useState } from "react";
import AddQuest from "./AddQuest";
import QuestList from "./QuestList";

function App() {
  const localQuests = JSON.parse(window.localStorage.getItem("quests")) || [];
  // Guarda as quests numa constante
  const [quests, setQuests] = useState(localQuests); // Muda o estado da quest

  const concludedQuests = quests.filter(
    (quest) => quest.status === "concluído",
  );
  const notConcludedQuests = quests.filter(
    (quest) => quest.status === "aberto",
  );

  function saveDeleteQuest(quest) {
    let auxQuests = quests;

    const filterAuxQuests = auxQuests.filter(
      (auxQuest) => auxQuest.id !== quest.id,
    );

    localStorage.setItem("quests", JSON.stringify(filterAuxQuests));
    getQuests();
  }

  function saveEditQuest(quest, title) {
    let auxQuests = quests;

    // Objeto da Quest editada
    const editedQuest = {
      id: quest.id,
      title: title || quest.title,
      status: quest.status,
      created_at: quest.created_at,
    };

    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id,
    );

    auxQuests.splice(findQuestPosition, 1, editedQuest);

    localStorage.setItem("quests", JSON.stringify(auxQuests));

    getQuests();
  }

  function saveConcludedQuest(quest) {
    let auxQuests = quests;

    // Objeto da Quest editada
    const editedQuest = {
      id: quest.id,
      title: quest.title,
      status: "concluído",
      created_at: quest.created_at,
    };

    const findQuestPosition = auxQuests.findIndex(
      (quest) => quest.id === editedQuest.id,
    );

    auxQuests.splice(findQuestPosition, 1, editedQuest);

    localStorage.setItem("quests", JSON.stringify(auxQuests));

    getQuests();
  }

  function saveAddQuest(title) {
    let auxQuests = quests;
    let id = 0;
    if (auxQuests.length) {
      id = auxQuests[auxQuests.length - 1].id;
    }
    id++;

    const createdQuest = {
      id: id,
      title: title,
      status: "aberto",
      created_at: new Date(Date.now()).toUTCString(),
    };
    auxQuests.push(createdQuest);
    localStorage.setItem("quests", JSON.stringify(auxQuests));
    getQuests();
  }

  function getQuests() {
    setQuests(JSON.parse(window.localStorage.getItem("quests")));
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-[80%] lg:w-[50%] h-[70%] shadow-md rounded-sm transform ease-out duration-300 items-center p-10 gap-5">
        <h1 className="text-5xl font-work font-bold w-fit text-center">
          Quest To Do
        </h1>
        <AddQuest saveAddQuest={saveAddQuest} />

        <div className="flex flex-col gap-4 w-full items-center">
          <h2>Abertas</h2>
          <QuestList
            quests={notConcludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
            saveDeleteQuest={saveDeleteQuest}
          />
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          <h2>Concluídas</h2>
          <QuestList
            quests={concludedQuests}
            saveEditQuest={saveEditQuest}
            saveConcludedQuest={saveConcludedQuest}
            saveDeleteQuest={saveDeleteQuest}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
