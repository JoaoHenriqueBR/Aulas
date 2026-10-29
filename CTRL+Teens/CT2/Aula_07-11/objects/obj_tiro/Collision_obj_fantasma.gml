/// @description Insert description here
// You can write your code in this editor

instance_destroy();

switch(room){
	case rm_jogo:
		with(other){
			instance_destroy()
			score += 10;
			repeat(10){
				instance_create_layer(x,y,"Instances",obj_particula);	
			}
			audio_play_sound(snd_kabum,1,false);
			if (sprite_index == spr_fantasma_g){
				score += 40;
				repeat(2){
					var new_fantasma = instance_create_layer(x,y,"Instances",obj_fantasma);
					new_fantasma.sprite_index = spr_fantasma_m;
				}
			} else if (sprite_index == spr_fantasma_m) {
				score += 15;
				repeat(2){
					var new_fantasma = instance_create_layer(x,y,"Instances",obj_fantasma);
					new_fantasma.sprite_index = spr_fantasma_p;
				}
			} else if (sprite_index == spr_fantasma_p) {
				var i = choose(0,1,2);
				if (i == 1){
					repeat(2){
						var new_fantasma = instance_create_layer(x,y,"Instances",obj_fantasma)
						new_fantasma.sprite_index = spr_fantasma_mini;
					}
				}
			}
		}
		break;
	case rm_modohard:
		with(other){
			instance_destroy()
			score += 100;
			if (sprite_index == spr_fantasma_g_hard){
				score += 400;
				repeat(2){
					var new_fantasma = instance_create_layer(x,y,"Instances",obj_fantasma);
					new_fantasma.sprite_index = spr_fantasma_m_hard;
				}
			} else if (sprite_index == spr_fantasma_m_hard) {
				score += 150;
				repeat(2){
					var new_fantasma = instance_create_layer(x,y,"Instances",obj_fantasma);
					new_fantasma.sprite_index = spr_fantasma_p_hard;
				}
			} else if (sprite_index == spr_fantasma_p_hard) {
				repeat(2){
						var new_fantasma = instance_create_layer(x,y,"Instances",obj_fantasma)
						new_fantasma.sprite_index = spr_fantasma_mini_hard;
				}
			}
		}
				
}