/// @description Insert description here
// You can write your code in this editor

sprite_index = choose(spr_fantasma_p, spr_fantasma_m, spr_fantasma_g, spr_fantasma_mini);

direction = irandom_range(0, 359);

image_angle = irandom_range(0, 359);

speed = 2;

switch(room){
	case rm_modohard:
		speed += 1
		sprite_index = choose(spr_fantasma_mini_hard, spr_fantasma_p_hard, spr_fantasma_m_hard, spr_fantasma_g_hard)
}
