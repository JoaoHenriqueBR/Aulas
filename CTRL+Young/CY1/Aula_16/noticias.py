import requests as r
from bs4 import BeautifulSoup

url = "https://www.uol.com.br/start/esport/"
page = r.get(url)

soup = BeautifulSoup(page.content, 'html.parser')

lista = ['valorant', 'brawl stars', 'free-fire', 'fifa']

for paragrafo in soup.find_all('body'):
    for palavra in lista:
        for paragrafo_str in paragrafo.stripped_strings:
            if palavra.upper() in str(paragrafo_str).upper():
                print('NOTICIA SOBRE: ', palavra.upper(), '\n', paragrafo_str,'\n')
                break
