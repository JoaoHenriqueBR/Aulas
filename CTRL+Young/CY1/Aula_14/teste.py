import unittest
from exame import Prova

class ProvaTest(unittest.TestCase):

    def setUp(self):
        self.questao = "O que aprendem os alunos da Ctrl+Play?"
        self.resposta = "Programação, Robótica e muito mais"
        self.p = Prova()
        self.p.armazena_Questao_Resposta(self.questao, self.resposta)

    def test_armazenaQuestao(self):
        self.assertIn("O que aprendem os alunos da Ctrl+Play?", self.p.questoes)

    def test_armazenaResposta(self):
        self.assertIn("Programação, Robótica e muito mais", self.p.respostas)

unittest.main(argv=[''], exit=False)
