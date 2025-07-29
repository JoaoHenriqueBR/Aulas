using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Camera : MonoBehaviour
{
    public float mouseSensitivity = 100f;   // Sensibilidade do mouse
    public Transform playerBody;           // Referência ao corpo do jogador (para girar horizontalmente)

    float xRotation = 0f; // Armazena a rotação vertical da câmera (pra cima/baixo)

    void Start()
    {
        // Trava o cursor no meio da tela e esconde ele (padrão para jogos em 1ª pessoa)
        Cursor.lockState = CursorLockMode.Locked;
    }

    void Update()
    {
        // Captura movimento do mouse no eixo X e Y
        float mouseX = Input.GetAxis("Mouse X") * mouseSensitivity * Time.deltaTime;
        float mouseY = Input.GetAxis("Mouse Y") * mouseSensitivity * Time.deltaTime;

        // Calcula rotação vertical (inverter para ficar natural)
        xRotation -= mouseY;
        xRotation = Mathf.Clamp(xRotation, -90f, 90f); // Limita o giro vertical (evita girar 360°)

        // Aplica a rotação vertical à câmera (só eixo X)
        transform.localRotation = Quaternion.Euler(xRotation, 0f, 0f);

        // Aplica rotação horizontal ao corpo do jogador (eixo Y)
        playerBody.Rotate(Vector3.up * mouseX);
    }
}

