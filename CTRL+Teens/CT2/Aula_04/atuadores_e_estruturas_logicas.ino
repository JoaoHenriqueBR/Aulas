#include <Servo.h>

// C++ code
//

int pos = 0;

Servo servo_9;


void setup()
{
  servo_9.attach(9, 500, 2500);
}

void loop()
{
  // Move o servo de 0 a 180 graus
  // incrementando a variável pos
  for (pos = 0; pos <= 180; pos += 1) { 
    // muda a posição em graus através do
    //incremento da variável 'pos'
    servo_9.write(pos);
    // Espera 15 milissegundos para que
    //o servo se mova
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) { 
    // Move o servo como anteriormente, mas
    //no sentido inverso.
    servo_9.write(pos);
    // Espera 15 milissegundos para que
    //o servo se mova
    delay(15);
	}
}
