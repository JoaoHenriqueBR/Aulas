def sobrenomeNaOrdem(nome, sobrenome1, sobrenome2):
  if len(sobrenome2) > len(sobrenome1):
    return nome + ' ' + sobrenome1 + ' ' + sobrenome2
  else:
    return nome + ' ' + sobrenome2 + ' ' + sobrenome1

print(sobrenomeNaOrdem("Jose", "Dias", "Saraiva"))
print(sobrenomeNaOrdem("Joao", "Madureira", "Silva"))