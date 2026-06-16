// C++ code
//
void setup()
{
  pinMode(3, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(11, OUTPUT);
}

void loop()
{
  digitalWrite(3, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(11, LOW);
  delay(3000); // Wait for 3000 millisecond(s)
  digitalWrite(3, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(11, LOW);
  delay(3000); // Wait for 3000 millisecond(s)
  digitalWrite(3, HIGH);
  digitalWrite(7, LOW);
  digitalWrite(11, LOW);
  delay(3000); // Wait for 3000 millisecond(s)
}