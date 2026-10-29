/// @description Insert description here
// You can write your code in this editor

switch(room)
{
case rm_jogo:
	draw_set_halign(fa_left)

	draw_text(20, 20, "Pontos: " + string(score));

	draw_text(20, 40, "Vidas: " + string(lives));
	break;
	
case rm_modohard:
	draw_set_halign(fa_left)
	var c = c_red;
	
	draw_text_transformed_color(20, 20, "MODO HARD...", 3, 3, 0, c, c, c, c, 1);
	break;
	

case rm_inicio:
	var c = c_yellow;
	draw_set_halign(fa_center);
	draw_text_transformed_color(room_width/2, room_height/5, "Pac-Man: Ghost Escape", 3, 3, 0, c, c, c, c, 1);
	draw_text(room_width/2, room_height/5+200,
	@"Reach 2.000 points to win
	
W: Move
A/S: Turn
SPACE: Shoot

>>Press ENTER to start<<");
	break;

case rm_derrota:
	draw_set_halign(fa_center);
	var c = c_red;
	draw_text_transformed_color(room_width/2, room_height/5, "GAME OVER", 3, 3, 0, c, c, c, c, 1);
	draw_text(room_width/2, room_height/5 + 150, "Press ENTER to Restart");
	break;
	
case rm_vitoria:
	draw_set_halign(fa_center);
	var c = c_lime;
	draw_text_transformed_color(room_width/2, room_height/5, "Victory!", 3, 3, 0, c, c, c, c, 1);
	draw_text(room_width/2, room_height/5 + 150, "Press ENTER to Restart");
	break;
}