/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
	"use strict";
	
	/* Text hover animation on portfolio images */
	$("#tic_tac_toe").attr("data-content", "Tic Tac Toe");
	$("#omnifood").attr("data-content", "Omnifood");
	$("#user_experience").attr("data-content", "User Experience");
	$("#color_guessing_game").attr("data-content", "Color Guessing Game");
	$("#todo_list").attr("data-content", "To-Do List");
	
	/* Navigation Scroll */
	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
	
	/* Animation on Scroll */
	$('.js--wp-1').waypoint(function (direction) {
		$('.js--wp-1').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	
});