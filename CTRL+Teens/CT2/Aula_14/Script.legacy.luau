botao = script.Parent
click = botao.ClickDetector
barras = botao.Parent.Barras

function abrir()
	barras.CanCollide = false
	barras.Transparency = 1 -- 0, 0.1..., 1 (comentario brabo)
	wait(3)
	barras.CanCollide = true
	barras.Transparency = 0
end

click.MouseClick:Connect(abrir)