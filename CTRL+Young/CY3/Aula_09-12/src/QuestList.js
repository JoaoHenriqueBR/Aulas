import QuestItem from "./QuestItem";

export default function QuestList(props) {
    return (
        <div className="flex flex-col overflow-y-auto scrollbar-thin gap-6 w-[80%]">
            {props.quests.map((quest) => {
                return (
                    <QuestItem
                     key={quest.id}
                     quest={quest}
                     saveEditQuest={props.saveEditQuest}
                     saveConcludedQuest={props.saveConcludedQuest}
                     saveDeleteQuest={props.saveDeleteQuest}
                    />
                );
            })}
        </div>
    );
}