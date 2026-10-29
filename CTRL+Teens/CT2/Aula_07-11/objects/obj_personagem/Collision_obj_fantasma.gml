/// @description Insert description here
// You can write your code in this editor

if (lives <= 0) {
	instance_destroy();
}

with(other){
	instance_destroy();	
	lives -= 1;	
	repeat(10){
		instance_create_layer(x,y,"Instances",obj_particula);	
	}
	audio_play_sound(snd_kabum,1,false);
}
