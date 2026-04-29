CREATE TABLE receitas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    ingredientes TEXT,
    materiais TEXT,
    modo_de_preparo TEXT
)

INSERT INTO receitas (nome, ingredientes, materiais, modo_de_preparo)
VALUES ('Pudim de Chocolate', '1 xícara  de chocolate 55% cacau picado, 5 ovos, ⅓ de xícara (chá) de açúcar, 2½ xícaras (chá) de leite, 1 pitada de sal', 'forno', 'Preaqueça o forno a 160 ºC (temperatura baixa).
Numa tigela pequena, quebre um ovo de cada vez e transfira para uma tigela maior. Mexa com o batedor de arame para misturar as claras com as gemas. Junte o açúcar, o sal e misture bem.
Coloque o chocolate numa tigela média e leve ao micro-ondas para rodar em potência média, em sessões de 30 segundos, mexendo a cada etapa, até derreter.
Junte o chocolate aos ovos e misture delicadamente com o batedor de arame.
Coloque o leite numa panela média e leve ao fogo alto para ferver. Transfira o leite quente, de concha em concha, para a tigela com chocolate, misturando delicadamente com o batedor a cada adição — evite fazer movimentos bruscos para não incorporar ar.
Despeje a massa do pudim na fôrma caramelizada, também pelo cone central, passando por uma peneira. Coloque a fôrma dentro de uma assadeira, leve ao forno e, só então, adicione a água fervente, até cobrir metade da fôrma do pudim para assar em banho-maria.
Deixe assar por cerca de 40 minutos. Atenção ao ponto: a superfície deve estar firme, mas o interior ainda cremoso — o pudim termina de firmar na geladeira. Evite assar demais para não ressecar nem endurecer.
Retire o pudim do forno e deixe amornar. Leve à geladeira para esfriar por pelo menos 3 horas antes de servir (se preferir, prepare com antecedência; o pudim pode ser mantido na geladeira por até 5 dias).
Para desenformar: passe a base da fôrma sobre a chama do fogão, apenas para soltar a calda. Cubra a fôrma com um prato de borda alta (para evitar que a calda escorra) e vire de uma só vez. Deixe a calda escorrer sobre o pudim e sirva a seguir.'),
('Ovo frito', 'Ovo', 'Panela','Frite o Ovo')

DELETE FROM receitas
WHERE ID >= 3;

DROP TABLE receitas;

DELETE DATABASE;