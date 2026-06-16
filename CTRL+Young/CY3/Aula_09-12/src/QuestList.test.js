import QuestList from "./QuestList";
import { render, screen } from "@testing-library/react";
import { test, describe } from "@jest/globals";

// Desafio Aula 12
// Fazer um teste para o componente de lista que verifica se a quantidade de elementos equivale à quantidade de missões da lista.

const createdQuests = [
  {
    id: 1,
    title: "Fazer um gol",
    status: "aberto",
    created_at: new Date(Date.now()).toUTCString(),
  },
  {
    id: 2,
    title: "Passar para o Neymar",
    status: "aberto",
    created_at: new Date(Date.now()).toUTCString(),
  },
];

describe("Testando lista", () => {
  test("Ver se a quantidade é igual ao número de elementos na lista", () => {
    render(<QuestList quests={createdQuests} />);
    expect(screen.getAllByTestId("questItem").length).toBe(2);
  });
});
