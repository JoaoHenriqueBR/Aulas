/// @description Insert description here
// You can write your code in this editor

if (room == rm_jogo){
	audio_play_sound(snd_musica, 2, true);

repeat(6){
	instance_create_layer(0, 0, "Instances", obj_fantasma);
}

alarm[0] = 60;
}
