/// @description Insert description here
// You can write your code in this editor

switch (room){
	case rm_modohard:
		if (score > 10000){
			room_goto(rm_vitoria);
		}
		break;
	case rm_jogo:
		if (score > 2000){
			room_goto(rm_vitoria);
		}
		break;
}

if (lives <= 0){
	room_goto(rm_derrota);
}

if (keyboard_check_pressed(vk_enter))
{
	switch(room)
	{
		case rm_inicio:
			room_goto(rm_jogo);
			break;
		case rm_vitoria:
			game_restart();
			break;
		case rm_derrota:
			game_restart();
			break;
	}
} else if (keyboard_check_pressed(vk_shift))
{
	switch(room)
	{
		case rm_inicio:
			room_goto(rm_modohard);
			break;
	}
}

