local ponte = script.Parent
local posInicial = ponte.Position
local rotInicial = ponte.Rotation
local corInicial = ponte.Color

ponte.Anchored = true

function pisouSeFerrou(obj)
	local player = obj.Parent:FindFirstChild("Humanoid")
	if player then
		ponte.Color = Color3.new(0, 1, 0)
		wait(0.01)
		ponte.Color = Color3.new(0.682353, 1, 0)
		wait(0.01)
		ponte.Color = Color3.new(1, 0.933333, 0)
		wait(0.01)
		ponte.Color = Color3.new(1, 0.333333, 0)
		wait(0.01)
		ponte.Color = Color3.new(1, 0, 0.0156863)
		wait(0.01)
		
		ponte.Anchored = false
		wait(2)
		
		ponte.Rotation = rotInicial
		ponte.Position = posInicial
		
		ponte.Anchored = true
		ponte.AssemblyLinearVelocity = Vector3.zero
		ponte.AssemblyAngularVelocity = Vector3.zero
		ponte.Color = corInicial
	end
end

ponte.Touched:Connect(pisouSeFerrou)
