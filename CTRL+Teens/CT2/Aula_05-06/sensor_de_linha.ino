// Sensores de linha
#define SENSOR_ESQUERDO A4 // Define o pino analógico para o sensor esquerdo
#define SENSOR_DIREITO A5  // Define o pino analógico para o sensor direito

// Threshold para detectar preto/branco
#define LIMIAR_PRETO 50 // Define o valor de limiar para distinguir preto de branco

void setup() {
  // Configuração dos sensores como entradas
  pinMode(SENSOR_ESQUERDO, INPUT); // Configura o pino do sensor esquerdo como entrada
  pinMode(SENSOR_DIREITO, INPUT);  // Configura o pino do sensor direito como entrada
  
  // Inicialização do Serial Monitor para depuração
  Serial.begin(9600); // Inicia a comunicação serial a 9600 bps
  Serial.println("Sistema iniciado. Monitorando os sensores...");
}

void loop() {
  // Leitura analógica dos sensores
  int leituraEsquerda = analogRead(SENSOR_ESQUERDO); // Lê o valor do sensor esquerdo
  int leituraDireita = analogRead(SENSOR_DIREITO);   // Lê o valor do sensor direito

  // Exibe os valores brutos lidos no Serial Monitor
  Serial.print("Sensor Esquerdo: ");
  Serial.print(leituraEsquerda); // Exibe o valor do sensor esquerdo
  Serial.print(" | Sensor Direito: ");
  Serial.println(leituraDireita); // Exibe o valor do sensor direito
  delay(50); // Pequeno atraso para estabilidade
}
