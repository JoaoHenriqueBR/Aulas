local bloco = script.Parent

function destruir(outro)
	local personagem = outro.Parent
	if personagem:FindFirstChild("Humanoid") then 
	
	personagem.Humanoid.Health = 0
	end	
end



bloco.Touched:Connect(destruir)


