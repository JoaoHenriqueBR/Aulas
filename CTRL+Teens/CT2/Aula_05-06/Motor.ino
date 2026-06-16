#include <AFMotor.h>

AF_DCMotor esquerda(2); // Referência ao motor do lado esquerdo - Ele está ligado na porta M2 da shield
AF_DCMotor direita(3); // Referência ao motor do lado direito - Ele está ligado na porta M3 da shield

void setup() {
  esquerda.setSpeed(0); // Controle de Velocidade do motor da esquerda 
  direita.setSpeed(0);  // Controle de Velocidade do motor da direita
}

void loop() {
  // Motores vão para frente
  esquerda.setSpeed(220);   // Define a velocidade do motor esquerdo
  esquerda.run(FORWARD);    // Move o motor esquerdo para frente
  direita.setSpeed(200);    // Define a velocidade do motor direito
  direita.run(FORWARD);     // Move o motor direito para frente
  
  delay(3000);  // Mantém os motores em movimento para frente por 3 segundos
  
  // Motores param
  esquerda.run(RELEASE);
  direita.run(RELEASE);
  
  delay(1000);  // Pausa de 1 segundo antes de mudar para marcha à ré
  
  // Motores vão para trás
  esquerda.run(BACKWARD);   // Move o motor esquerdo para trás
  direita.run(BACKWARD);    // Move o motor direito para trás
  
  delay(3000);  // Mantém os motores em movimento para trás por 3 segundos
  
  // Motores param
  esquerda.run(RELEASE);
  direita.run(RELEASE);
  
  delay(1000);  // Pausa antes de repetir o ciclo
}
