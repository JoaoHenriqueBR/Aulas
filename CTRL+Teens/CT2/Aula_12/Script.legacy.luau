local Outdoor = script.Parent

local cor1 = "Gold"
local cor2 = "Lapis"
local valorCor1 = BrickColor.new(cor1) 
local valorCor2 = BrickColor.new(cor2)

while true do
	Outdoor.BrickColor = valorCor1
	-- print("A cor agora é: " .. cor1)
	Outdoor.SurfaceGui.TextBox.Text = "A cor agora é:\n" .. cor1 
	wait(1)

	Outdoor.BrickColor = valorCor2
	-- print("A cor agora é: " .. cor2)
	Outdoor.SurfaceGui.TextBox.Text = "A cor agora é:\n" .. cor2
	wait(1)
end
