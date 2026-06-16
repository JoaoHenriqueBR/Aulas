#include <AFMotor.h>

// Motores
AF_DCMotor esquerda(2); // Motor esquerdo na porta M2
AF_DCMotor direita(3); // Motor direito na porta M3

// Sensores de linha
#define SENSOR_ESQUERDO A4 // Porta analógica para o sensor esquerdo
#define SENSOR_DIREITO A5 // Porta analógica para o sensor direito

// Limitador que detecta preto/branco
#define LIMIAR_PRETO 50 // Esse valor poder variar de acordo com sua pista, altura do senssor.
//Ou seja, deve-se calibrar e ajusta-lo para atender sua situação.

void setup() {
    // Configuração dos motores
    esquerda.setSpeed(0);
    direita.setSpeed(0);

    // Configuração dos sensores
    pinMode(SENSOR_ESQUERDO, INPUT);
    pinMode(SENSOR_DIREITO, INPUT);

    // Inicialização do Serial Monitor
    Serial.begin(9600);
    Serial.println("Sistema iniciado. Monitorando os sensores...");
}

void loop() {
    // Leitura analógica dos sensores
    int leituraEsquerda = analogRead(SENSOR_ESQUERDO);
    int leituraDireita = analogRead(SENSOR_DIREITO);

    // Exibe os valores brutos no Serial Monitor
    Serial.print("Sensor Esquerdo: ");
    Serial.print(leituraEsquerda);
    Serial.print(" | Sensor Direito: ");
    Serial.print(leituraDireita);

    // Determinar estado (preto ou branco) com base no limiar
    bool esquerdoPreto = leituraEsquerda > LIMIAR_PRETO;
    bool direitoPreto = leituraDireita > LIMIAR_PRETO;
    Serial.print(" -> Ação: ");

    // Lógica para manter alinhamento
    if (!esquerdoPreto && !direitoPreto) {
        // Ambos sensores na linha branca - ir para frente
        esquerda.setSpeed(110);
        esquerda.run(FORWARD);
        direita.setSpeed(115);
        direita.run(FORWARD);
        Serial.println("Movendo para frente");
        delay(100);
    } else if (esquerdoPreto && !direitoPreto) {
        // Sensor esquerdo detecta preto - corrigir para a direita
        esquerda.setSpeed(100);
        esquerda.run(BACKWARD);
        direita.setSpeed(110);
        direita.run(FORWARD);
        Serial.println("Corrigindo para a direita");
        delay(100);
    }
    else if (!esquerdoPreto && direitoPreto) {
        // Sensor direito detecta preto - corrigir para a esquerda
        esquerda.setSpeed(100);
        esquerda.run(FORWARD);
        direita.setSpeed(110);
        direita.run(BACKWARD);
        Serial.println("Corrigindo para a esquerda");
        delay(100);
    }
    else {
        // Ambos sensores fora da linha branca - parar
        esquerda.run(RELEASE);
        direita.run(RELEASE);
        Serial.println("Parado");
    }
    delay(50); // Pequeno atraso para estabilidade
}