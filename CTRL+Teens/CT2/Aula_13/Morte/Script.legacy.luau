bloco = script.Parent

function encosta(personagem)
	local jogador = personagem.Parent:FindFirstChild("Humanoid")
	if jogador then
		jogador.Health -= 3
	end
end

bloco.Touched:Connect(encosta)