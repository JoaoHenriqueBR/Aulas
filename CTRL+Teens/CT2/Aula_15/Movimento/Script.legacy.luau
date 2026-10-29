local bloco = script.Parent
bloco.Anchored = true
local velocidade = 5

while true do
	-- Andar para frente
	for i = 1, 30 do
		bloco.Position = bloco.Position + Vector3.new(0, 0, 1 * velocidade)
		wait(0.05)
	end

	-- Andar para trás
	for i = 1, 30 do
		bloco.Position = bloco.Position + Vector3.new(0, 0, -1 * velocidade)
		wait(0.05)
	end

	for i = 1, 30 do
		bloco.Position = bloco.Position + Vector3.new(1, 0, 0 * velocidade)
		wait(0.05)
	end

	for i = 1, 30 do
		bloco.Position = bloco.Position + Vector3.new(-1, 0, 0 * velocidade)
		wait(0.05)
	end

end