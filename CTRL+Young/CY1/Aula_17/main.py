import bot

nome_maquina = "Jorge"
bot.saudacoes(nome_maquina)

while True:
    texto = bot.recebeTexto()
    resposta = bot.buscaResposta(nome_maquina, texto)
    if bot.exibaResposta(resposta, nome_maquina) == "fim":
        break