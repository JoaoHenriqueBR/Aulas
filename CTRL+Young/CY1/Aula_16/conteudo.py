import requests as r
from bs4 import BeautifulSoup

try:
    resultado = r.get('https://www.uol.com.br/')
except Exception as erro:
    print('Erro: ', erro)
else:
    resposta = resultado.text
    soup = BeautifulSoup(resposta, 'html.parser')

    print(soup.find("h2", class_="kicker kicker--live headlineHorizontalLive__content__kicker").prettify())

    print(soup.find_all("h2"))
