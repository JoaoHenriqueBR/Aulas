def saudacoes(nome):
    import random
    # frases = ["frase1", "frase2"]
    frases = [f"Bom dia! Meu nome é {nome}. Como vai você?", "Olá!", "Oi, tudo bem?", "Some daqui."]
    print(frases[random.randint(0,len(frases)-1)])

def recebeTexto():
    texto = "Cliente: " + input("Cliente: ")
    palavraProibida = ["bocó", "bananão", "catapimbas", "carambolas"]
    for p in palavraProibida:
        if p in texto:
            print(f"Não vem não! Me respeite! Tu acha que é quem pra me chamar de {p}")
            return recebeTexto()

    return texto

def buscaResposta(nome, texto):
    with open("contexto.txt", "a+") as conhecimento:
        conhecimento.seek(0)
        while True:
            viu = conhecimento.readline()
            if viu != "":
                if texto.replace("Cliente: ", "") == "Tchau":
                    print(f"{nome}: volte sempre!")
                    return "fim"
                elif viu.strip() == texto.strip():
                    proximalinha = conhecimento.readline()
                    if "Chatbot: " in proximalinha:
                        return proximalinha
            else:
                print("Me desculpa, eu sou burro!")
                conhecimento.write(f"\n{texto}")
                resposta_user = input("O que esperava?\n")
                conhecimento.write(f"\nChatbot: "+resposta_user)
                return "Hum..."

def exibaResposta(resposta, nome):
    print(resposta.replace("Chatbot",nome))
    if resposta == "fim":
        return "fim"
    return "continua"
