/// @description Insert description here
// You can write your code in this editor

if keyboard_check(ord("W")){
	speed = 5;
	instance_create_layer(x,y,"Instances", obj_particula);
} else {
	speed = 0;
}

if keyboard_check(ord("A")){
	direction += 3;	
}
if keyboard_check(ord("D")){
	direction -= 3;
}


image_angle = direction
move_wrap(true, true, 0);



if keyboard_check_pressed(vk_space){
	var inst = instance_create_layer(x,y,"Instances", obj_tiro);
	
	inst.direction = image_angle;
	inst.speed = 10;
	audio_play_sound(snd_tiro,1,false)
}