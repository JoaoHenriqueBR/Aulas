// Bibliotecas do Unity
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movimento : MonoBehaviour
{
    // Variáveis
    public float speed = 5f;          // Velocidade do movimento lateral
    public float jumpForce = 5f;      // Força do pulo

    private Rigidbody rb;             // Referência ao Rigidbody (controla a física)
    private bool isGrounded = true;   // Verifica se o jogador está no chão

    void Start()
    {
        rb = GetComponent<Rigidbody>(); // Pega o Rigidbody do objeto para usar nos comandos
    }

    void Update()
    {
        Move(); // Chama a função de movimentação a cada frame
        Jump(); // Chama a função de pulo
    }

    void Move()
    {
        // Pega o input do teclado (Horizontal = A/D ou ←/→, Vertical = W/S ou ↑/↓)
        float x = Input.GetAxis("Horizontal");
        float z = Input.GetAxis("Vertical");

        // Calcula a direção baseada na rotação do personagem
        Vector3 moveDirection = transform.right * x + transform.forward * z;

        // Multiplica a direção pela velocidade e aplica no Rigidbody
        Vector3 velocity = moveDirection.normalized * speed;

        // Aplica o movimento mantendo a velocidade vertical (gravidade ou pulo)
        rb.velocity = new Vector3(velocity.x, rb.velocity.y, velocity.z);
    }

    void Jump()
    {
        // Se o jogador apertar espaço E estiver no chão...
        if (Input.GetKeyDown(KeyCode.Space) && isGrounded)
        {
            // Aplica força para cima usando impulso (impulso é mais imediato que força contínua)
            rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
            isGrounded = false; // Impede pulo duplo
        }
    }

    // Detecta quando o jogador colide com algo (ex: chão)
    void OnCollisionEnter(Collision collision)
    {
        isGrounded = true; // Permite pular novamente
    }
}
