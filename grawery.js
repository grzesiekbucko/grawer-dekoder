
// licznik zanków
function charcounts(startfrom, charend) {
    var len = document.getElementById(startfrom).value.length;
    document.getElementById(charend).innerHTML = len;
}


//id pola wariantu grawer
$(document).ready(function () {
	$('#buttonZ_DK').on('click', function () {
		var grawer_DK =	document.getElementById('placeholder_DK').value;
		document.getElementById('option_129').value = grawer_DK;
		$('#option_127_608').click();
		$('#buttonW_DK').parent().find('.mx_text_on_save').remove();
		$('<div class="mx_text_on_save" style="clear: both; font-weight: 700; padding-top: 5px;">Personalizacja zapisana. Teraz dodaj produkt do koszyka</div>').insertAfter('#buttonW_DK').delay(5000).queue(function(){$(this).remove().dequeue()});
	});
});


//	 wybór kategorii szablonów (bierzmowanie, komunia, chrzest)
//$(document).ready(function () {
//	$('.mx_headen').hide();
//	$('#select-template').on('click', 'input', function () {
//		$('#szblon_list_DK li').css('display', 'none');
//		$('.' + $(this).attr('value')).css('display', 'block');
//		if($(this).attr('value') == 'komunia'){
//			$('#B2_KM_01').click();
//		}else if($(this).attr('value') == 'chrzest'){
//			$('#B2_CH_01').click();
//		}else if($(this).attr('value') == 'bierzmowanie'){
//			$('#B2_BM_01').click();
//		}
//		$('.mx_headen').show();
//    });
//});


// ------------------------------------------------------  Dewocjonalia Szablon ----------------------------------------------------------->

$(document).ready(function () {

	$('#szblon_list_DK').on('click', 'li', function () {
		var	selected_szablon = $(this).attr('name');
            var selected_szablon_name = $('#' + selected_szablon +'_p').attr('name', selected_szablon);

            var text_Path_L1 = $('#text_Path_' + selected_szablon + '_L1');
            var text_Path_L2 = $('#text_Path_' + selected_szablon + '_L2');
            var text_Path_L3 = $('#text_Path_' + selected_szablon + '_L3');
            var text_Path_L4 = $('#text_Path_' + selected_szablon + '_L4');

			var B2_BM_01_L1 = "Kochanej Zuzi";
			var B2_BM_01_L2 = "Dziadkowie";
			var B2_BM_01_L3 = "Kowalscy";
			var B2_BM_01_L4 = "Warszawa 19 maja 2020";

			var B2_BM_02_L1 = "Rodzice";
			var B2_BM_02_L2 = "Chrzestni";
			var B2_BM_02_L3 = "";
			var B2_BM_02_L4 = "Zamość 14 kwietnia 2020";

			var B2_CH_01_L1 = "Dominice";
			var B2_CH_01_L2 = "Rodzice Chrzestni";
			var B2_CH_01_L3 = "z rodziną";
			var B2_CH_01_L4 = "Gdynia 19 maja 2020";

			var B2_CH_02_L1 = "Karolinie";
			var B2_CH_02_L2 = "Dziadkowie";
			var B2_CH_02_L3 = "";
			var B2_CH_02_L4 = "Płock 17 lipca 2020";

			var B2_CH_03_L1 = "Kochanej Kasi";
			var B2_CH_03_L2 = "Rodzina";
			var B2_CH_03_L3 = "Kozłowskich";
			var B2_CH_03_L4 = "Opole 19 Maj 2020";

			var B2_CH_04_L1 = "Dominice";
			var B2_CH_04_L2 = "Rodzice Chrzestni";
			var B2_CH_04_L3 = "";
			var B2_CH_04_L4 = "Olecko 11.09.2020";

			var B2_KM_01_L1 = "Patrycji";
			var B2_KM_01_L2 = "Dziadkowie";
			var B2_KM_01_L3 = "";
			var B2_KM_01_L4 = "Płock 17 Lipca 2020";

			var B2_KM_02_L1 = "Dominikowi";
			var B2_KM_02_L2 = "Rodzice";
			var B2_KM_02_L3 = "Chrzestni";
			var B2_KM_02_L4 = "Katowice 2020r.";

			var B2_KM_03_L1 = "Kochanej Kasi";
			var B2_KM_03_L2 = "Rodzina";
			var B2_KM_03_L3 = "Kozłowskich";
			var B2_KM_03_L4 = "Opole 11 Maj 2020";

			var B2_KM_04_L1 = "Dominice";
			var B2_KM_04_L2 = "Rodzice Chrzestni";
			var B2_KM_04_L3 = "";
			var B2_KM_04_L4 = "Olecko 11.09.2020";

			$('.podglad-graweru-blaszka_DK').attr('name', '');
			$('.podglad-graweru-blaszka_DK').css('display', 'none');

			$('#' + selected_szablon +'_p').css('display', 'block');
			$('.podglad-graweru-blaszka_DK').attr('name', selected_szablon);

			$('#szblon_list_DK li button').removeClass("active_button");
			$('#' + selected_szablon).addClass("active_button");

			if(selected_szablon == 'B2_BM_01'){
			$('#inp_line_1').val(B2_BM_01_L1);
			$('#inp_line_2').val(B2_BM_01_L2);
			$('#inp_line_3').val(B2_BM_01_L3);
			$('#inp_line_4').val(B2_BM_01_L4);
			$(text_Path_L1).html(B2_BM_01_L1);
			$(text_Path_L2).html(B2_BM_01_L2);
			$(text_Path_L3).html(B2_BM_01_L3);
			$(text_Path_L4).html(B2_BM_01_L4);
			$('.line3').css('display', '');
			var fontsize_L1 = 50;
			var fontsize_max_L1 = 50;
			var fontsize_L2 = 40;
			var fontsize_max_L2 = 40;
			var fontsize_L3 = 40;
			var fontsize_max_L3 = 40;
			var fontsize_L4 = 20;
			var fontsize_max_L4 = 20;
			}

			if(selected_szablon == 'B2_BM_02'){
			$('#inp_line_1').val(B2_BM_02_L1);
			$('#inp_line_2').val(B2_BM_02_L2);
			$('#inp_line_3').val(B2_BM_02_L3);
			$('#inp_line_4').val(B2_BM_02_L4);
			$(text_Path_L1).html(B2_BM_02_L1);
			$(text_Path_L2).html(B2_BM_02_L2);
			$(text_Path_L3).html(B2_BM_02_L3);
			$(text_Path_L4).html(B2_BM_02_L4);
			$('.line3').css('display', 'none');
			var fontsize_L1 = 35;
			var fontsize_max_L1 = 35;
			var fontsize_L2 = 35;
			var fontsize_max_L2 = 35;
			var fontsize_L3 = 40;
			var fontsize_max_L3 = 40;
			var fontsize_L4 = 20;
			var fontsize_max_L4 = 20;
			}

			if(selected_szablon == 'B2_CH_01'){
			$('#inp_line_1').val(B2_CH_01_L1);
			$('#inp_line_2').val(B2_CH_01_L2);
			$('#inp_line_3').val(B2_CH_01_L3);
			$('#inp_line_4').val(B2_CH_01_L4);
			$(text_Path_L1).html(B2_CH_01_L1);
			$(text_Path_L2).html(B2_CH_01_L2);
			$(text_Path_L3).html(B2_CH_01_L3);
			$(text_Path_L4).html(B2_CH_01_L4);
			$('.line3').css('display', '');
			var fontsize_L1 = 40;
			var fontsize_max_L1 = 40;
			var fontsize_L2 = 30;
			var fontsize_max_L2 = 30;
			var fontsize_L3 = 30;
			var fontsize_max_L3 = 30;
			var fontsize_L4 = 20;
			var fontsize_max_L4 = 20;
			}

			if(selected_szablon == 'B2_CH_02'){
			$('#inp_line_1').val(B2_CH_02_L1);
			$('#inp_line_2').val(B2_CH_02_L2);
			$('#inp_line_3').val(B2_CH_02_L3);
			$('#inp_line_4').val(B2_CH_02_L4);
			$(text_Path_L1).html(B2_CH_02_L1);
			$(text_Path_L2).html(B2_CH_02_L2);
			$(text_Path_L3).html(B2_CH_02_L3);
			$(text_Path_L4).html(B2_CH_02_L4);
			$('.line3').css('display', 'none');
			var fontsize_L1 = 50;
			var fontsize_max_L1 = 50;
			var fontsize_L2 = 35;
			var fontsize_max_L2 = 35;
			var fontsize_L3 = 30;
			var fontsize_max_L3 = 30;
			var fontsize_L4 = 18;
			var fontsize_max_L4 = 18;
			}

			if(selected_szablon == 'B2_CH_03'){
			$('#inp_line_1').val(B2_CH_03_L1);
			$('#inp_line_2').val(B2_CH_03_L2);
			$('#inp_line_3').val(B2_CH_03_L3);
			$('#inp_line_4').val(B2_CH_03_L4);
			$(text_Path_L1).html(B2_CH_03_L1);
			$(text_Path_L2).html(B2_CH_03_L2);
			$(text_Path_L3).html(B2_CH_03_L3);
			$(text_Path_L4).html(B2_CH_03_L4);
			$('.line3').css('display', '');
			var fontsize_L1 = 45;
			var fontsize_max_L1 = 45;
			var fontsize_L2 = 28;
			var fontsize_max_L2 = 28;
			var fontsize_L3 = 28;
			var fontsize_max_L3 = 28;
			var fontsize_L4 = 20;
			var fontsize_max_L4 = 20;
			}

			if(selected_szablon == 'B2_CH_04'){
			$('#inp_line_1').val(B2_CH_04_L1);
			$('#inp_line_2').val(B2_CH_04_L2);
			$('#inp_line_3').val(B2_CH_04_L3);
			$('#inp_line_4').val(B2_CH_04_L4);
			$(text_Path_L1).html(B2_CH_04_L1);
			$(text_Path_L2).html(B2_CH_04_L2);
			$(text_Path_L3).html(B2_CH_04_L3);
			$(text_Path_L4).html(B2_CH_04_L4);
			$('.line3').css('display', 'none');
			var fontsize_L1 = 50;
			var fontsize_max_L1 = 50;
			var fontsize_L2 = 25;
			var fontsize_max_L2 = 25;
			var fontsize_L3 = 28;
			var fontsize_max_L3 = 28;
			var fontsize_L4 = 18;
			var fontsize_max_L4 = 18;
			}

			if(selected_szablon == 'B2_KM_01'){
			$('#inp_line_1').val(B2_KM_01_L1);
			$('#inp_line_2').val(B2_KM_01_L2);
			$('#inp_line_3').val(B2_KM_01_L3);
			$('#inp_line_4').val(B2_KM_01_L4);
			$(text_Path_L1).html(B2_KM_01_L1);
			$(text_Path_L2).html(B2_KM_01_L2);
			$(text_Path_L3).html(B2_KM_01_L3);
			$(text_Path_L4).html(B2_KM_01_L4);
			$('.line3').css('display', 'none');
			var fontsize_L1 = 50;
			var fontsize_max_L1 = 50;
			var fontsize_L2 = 35;
			var fontsize_max_L2 = 35;
			var fontsize_L3 = 30;
			var fontsize_max_L3 = 30;
			var fontsize_L4 = 18;
			var fontsize_max_L4 = 18;
			}

			if(selected_szablon == 'B2_KM_02'){
			$('#inp_line_1').val(B2_KM_02_L1);
			$('#inp_line_2').val(B2_KM_02_L2);
			$('#inp_line_3').val(B2_KM_02_L3);
			$('#inp_line_4').val(B2_KM_02_L4);
			$(text_Path_L1).html(B2_KM_02_L1);
			$(text_Path_L2).html(B2_KM_02_L2);
			$(text_Path_L3).html(B2_KM_02_L3);
			$(text_Path_L4).html(B2_KM_02_L4);
			$('.line3').css('display', '');
			var fontsize_L1 = 50;
			var fontsize_max_L1 = 50;
			var fontsize_L2 = 35;
			var fontsize_max_L2 = 35;
			var fontsize_L3 = 30;
			var fontsize_max_L3 = 30;
			var fontsize_L4 = 18;
			var fontsize_max_L4 = 18;
			}

			if(selected_szablon == 'B2_KM_03'){
			$('#inp_line_1').val(B2_KM_03_L1);
			$('#inp_line_2').val(B2_KM_03_L2);
			$('#inp_line_3').val(B2_KM_03_L3);
			$('#inp_line_4').val(B2_KM_03_L4);
			$(text_Path_L1).html(B2_KM_03_L1);
			$(text_Path_L2).html(B2_KM_03_L2);
			$(text_Path_L3).html(B2_KM_03_L3);
			$(text_Path_L4).html(B2_KM_03_L4);
			$('.line3').css('display', '');
			var fontsize_L1 = 45;
			var fontsize_max_L1 = 45;
			var fontsize_L2 = 28;
			var fontsize_max_L2 = 28;
			var fontsize_L3 = 28;
			var fontsize_max_L3 = 28;
			var fontsize_L4 = 20;
			var fontsize_max_L4 = 20;
			}

			if(selected_szablon == 'B2_KM_04'){
			$('#inp_line_1').val(B2_KM_04_L1);
			$('#inp_line_2').val(B2_KM_04_L2);
			$('#inp_line_3').val(B2_KM_04_L3);
			$('#inp_line_4').val(B2_KM_04_L4);
			$(text_Path_L1).html(B2_KM_04_L1);
			$(text_Path_L2).html(B2_KM_04_L2);
			$(text_Path_L3).html(B2_KM_04_L3);
			$(text_Path_L4).html(B2_KM_04_L4);
			$('.line3').css('display', 'none');
			var fontsize_L1 = 50;
			var fontsize_max_L1 = 50;
			var fontsize_L2 = 25;
			var fontsize_max_L2 = 25;
			var fontsize_L3 = 28;
			var fontsize_max_L3 = 28;
			var fontsize_L4 = 18;
			var fontsize_max_L4 = 18;
			}

            $("#buttonZ_DK").removeClass('button-clicked');
            $("#buttonZ_DK").html("Zapisz");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");

			$("#buttonBG_DK").removeClass('button-clicked');
            $("#buttonBG_DK").html("Bez graweru");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");

	// ustawia wprowadzony tekst na podgląd line 1
			var textpath_line1 = document.getElementById("text_Path_" + selected_szablon + "_L1");
			var path_line1 = document.getElementById("textPath_" + selected_szablon + "_L1");
			textpath_line1.setAttribute("font-size", fontsize_L1);

            $('#inp_line_1').on("keyup click change input propertychange copy paste cut", function () {
            $(text_Path_L1).html($(this).val());

			// zmniejsza rozmiar czcionki line 1
			if(textpath_line1.getComputedTextLength()+10 > path_line1.getTotalLength()){
				fontsize_L1 -= 3;
				textpath_line1.setAttribute("font-size", fontsize_L1);
			}else if (textpath_line1.getComputedTextLength()+40 < path_line1.getTotalLength()-40 && fontsize_L1 < fontsize_max_L1 ){
				fontsize_L1 += 3;
				textpath_line1.setAttribute("font-size", fontsize_L1);
			}

			charcounts('inp_line_1','countchar_line_1');
            podsumowanieDK();
				});




	// ustawia wprowadzony tekst na podgląd line 2
			var textpath_line2 = document.getElementById("text_Path_" + selected_szablon + "_L2");
			var path_line2 = document.getElementById("textPath_" + selected_szablon + "_L2");
			textpath_line2.setAttribute("font-size", fontsize_L2);

			$('#inp_line_2').on("keyup click change input propertychange", function () {
            $(text_Path_L2).html($(this).val());

			// zmniejsza rozmiar czcionki line 2
			if(textpath_line2.getComputedTextLength()+10 > path_line2.getTotalLength()){
				fontsize_L2 -= 3;
				textpath_line2.setAttribute("font-size", fontsize_L2);
			}else if (textpath_line2.getComputedTextLength()+30 < path_line2.getTotalLength()-30 && fontsize_L2 < fontsize_max_L2 ){
				fontsize_L2 += 3;
				textpath_line2.setAttribute("font-size", fontsize_L2);
			}

			charcounts('inp_line_2','countchar_line_2');
            podsumowanieDK();
				});

	// ustawia wprowadzony tekst na podgląd line 3
			var textpath_line3 = document.getElementById("text_Path_" + selected_szablon + "_L3");
			var path_line3 = document.getElementById("textPath_" + selected_szablon + "_L3");

			textpath_line3.setAttribute("font-size", fontsize_L3);

			$('#inp_line_3').on("keyup click change input propertychange", function () {
            $(text_Path_L3).html($(this).val());

			// zmniejsza rozmiar czcionki line 3
			if(textpath_line3.getComputedTextLength()+10 > path_line3.getTotalLength()){
				fontsize_L3 -= 3;
				textpath_line3.setAttribute("font-size", fontsize_L3);
			}else if (textpath_line3.getComputedTextLength()+30 < path_line3.getTotalLength()-30 && fontsize_L3 < fontsize_max_L3 ){
				fontsize_L3 += 3;
				textpath_line3.setAttribute("font-size", fontsize_L3);
			}

			charcounts('inp_line_3','countchar_line_3');
            podsumowanieDK();
				});


	// ustawia wprowadzony tekst na podgląd line 4
			var textpath_line4 = document.getElementById("text_Path_" + selected_szablon + "_L4");
			var path_line4 = document.getElementById("textPath_" + selected_szablon + "_L4");
			textpath_line4.setAttribute("font-size", fontsize_L4);

			$('#inp_line_4').on("keyup click change input propertychange", function () {
            $(text_Path_L4).html($(this).val());

			// zmniejsza rozmiar czcionki line 4
			if(textpath_line4.getComputedTextLength()+10 > path_line4.getTotalLength()){
				fontsize_L4 -= 3;
				textpath_line4.setAttribute("font-size", fontsize_L4);
			}else if (textpath_line4.getComputedTextLength()+30 < path_line4.getTotalLength()-30 && fontsize_L4 < fontsize_max_L4 ){
				fontsize_L4 += 3;
				textpath_line4.setAttribute("font-size", fontsize_L4);
			}

			charcounts('inp_line_4','countchar_line_4');
            podsumowanieDK();
				});

			charcounts('inp_line_1','countchar_line_1');
			charcounts('inp_line_2','countchar_line_2');
			charcounts('inp_line_3','countchar_line_3');
			charcounts('inp_line_4','countchar_line_4');

			podsumowanieDK();
			$('.unicodeButton').removeAttr('disabled');
    });

});


// zbiera informacje o czcionce i tekscie
function podsumowanieDK() {
	 var podsumowanieDK = $('#placeholder_DK');//ID pola, ktore ma przechwytywac informacje o grawerze
     var selected_font = $('.selected_font').attr('id');
     var selected_font_name = $('#' + selected_font).attr('font');
	 var szablon = $('.podglad-graweru-blaszka_DK').attr('name');
     podsumowanieDK.val('Szablon: '+ szablon + '; L1: ' + $('#inp_line_1').val() + '; L2: ' + $('#inp_line_2').val()+ '; L3: ' + $('#inp_line_3').val()+ '; LD: ' + $('#inp_line_4').val());
};


// przycisk wyczyść
$(function () {
    $("#buttonW_DK").click(function () {
        $("#buttonZ_DK").removeClass('button-clicked');
        $("#buttonZ_DK").html("Zapisz");
        $("#buttonW_DK").addClass('button-clicked');
        $("#buttonW_DK").html("Wyczyść");
        $("#buttonBG_DK").addClass('button-clicked');

		$('#inp_line_1').val('').click();
		$('#inp_line_2').val('').click();
		$('#inp_line_3').val('').click();
		$('#inp_line_4').val('').click();
		$('#placeholder_DK').val('');

        $('.unicodeButton').removeAttr('disabled');

		charcounts('inp_line_1','countchar_line_1');
		charcounts('inp_line_2','countchar_line_2');
		charcounts('inp_line_3','countchar_line_3');
		charcounts('inp_line_4','countchar_line_4');
    });
});


// przycisk zapisz
$(function () {
    $("#buttonZ_DK").click(function () {
        $("#buttonZ_DK").addClass('button-clicked');
        $("#buttonZ_DK").html("Zapisano");
    });
});


// przycisk bez graweru
$(function () {
    $("#buttonBG_DK").click(function () {
        $("#buttonBG_DK").addClass('button-clicked');
        $("#buttonBG_DK").html("Bez graweru");
        $("#buttonZ_DK").removeClass('button-clicked');
        $("#buttonZ_DK").html("Zapisz");
        $("#buttonW_DK").removeClass('button-clicked');
        $("#buttonW_DK").html("Wyczyść");

		$('#inp_line_1').val('').click();
		$('#inp_line_2').val('').click();
		$('#inp_line_3').val('').click();
		$('#inp_line_4').val('').click();

        $('.unicodeButton').removeAttr('disabled');

		charcounts('inp_line_1','countchar_line_1');
		charcounts('inp_line_2','countchar_line_2');
		charcounts('inp_line_3','countchar_line_3');
		charcounts('inp_line_4','countchar_line_4');
		$('#placeholder_DK').val('Bez graweru');
    });
});


// przyciski ze specjalnymi znakami
    $(function () {
        $('#heart_DK_1').on('click', function () {
            var text = $('#inp_line_1');
            text.val(text.val() + '♥').trigger('change');
        });
    });

    $(function () {
        $('#infinity_DK_1').on('click', function () {
            var text = $('#inp_line_1');
            text.val(text.val() + '∞').trigger('change');
        });
    });

    $(function () {
        $('#sun_DK_1').on('click', function () {
            var text = $('#inp_line_1');
            text.val(text.val() + '☺').trigger('change');
        });
    });
	$(function () {
        $('#heart_DK_2').on('click', function () {
            var text = $('#inp_line_2');
            text.val(text.val() + '♥').trigger('change');
        });
    });

    $(function () {
        $('#infinity_DK_2').on('click', function () {
            var text = $('#inp_line_2');
            text.val(text.val() + '∞').trigger('change');
        });
    });

    $(function () {
        $('#sun_DK_2').on('click', function () {
            var text = $('#inp_line_2');
            text.val(text.val() + '☺').trigger('change');
        });
    });
	$(function () {
        $('#heart_DK_3').on('click', function () {
            var text = $('#inp_line_3');
            text.val(text.val() + '♥').trigger('change');
        });
    });

    $(function () {
        $('#infinity_DK_3').on('click', function () {
            var text = $('#inp_line_3');
            text.val(text.val() + '∞').trigger('change');
        });
    });

    $(function () {
        $('#sun_DK_3').on('click', function () {
            var text = $('#inp_line_3');
            text.val(text.val() + '☺').trigger('change');
        });
    });
	$(function () {
        $('#heart_DK_4').on('click', function () {
            var text = $('#inp_line_4');
            text.val(text.val() + '♥').trigger('change');
        });
    });

    $(function () {
        $('#infinity_DK_4').on('click', function () {
            var text = $('#inp_line_4');
            text.val(text.val() + '∞').trigger('change');
        });
    });

    $(function () {
        $('#sun_DK_4').on('click', function () {
            var text = $('#inp_line_4');
            text.val(text.val() + '☺').trigger('change');
        });
    });


// blokowanie przycisków ze specjalnymi znakami po wprowadzeniu maksymalnej ilości znaków
	$(function () {
        $("#inp_line_1").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_1').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_1').removeAttr('disabled');
            }
        });

        $("#inp_line_1").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_1').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_1').removeAttr('disabled');
            }
        });

        $("#inp_line_1").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_1').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_1').removeAttr('disabled');
            }
        });
		$("#inp_line_2").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_2').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_2').removeAttr('disabled');
            }
        });

        $("#inp_line_2").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_2').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_2').removeAttr('disabled');
            }
        });

        $("#inp_line_2").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_2').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_2').removeAttr('disabled');
            }
        });
		$("#inp_line_3").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_3').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_3').removeAttr('disabled');
            }
        });

        $("#inp_line_3").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_3').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_3').removeAttr('disabled');
            }
        });

        $("#inp_line_3").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_3').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_3').removeAttr('disabled');
            }
        });
		$("#inp_line_4").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_4').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#heart_DK_4').removeAttr('disabled');
            }
        });

        $("#inp_line_4").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_4').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#infinity_DK_4').removeAttr('disabled');
            }
        });

        $("#inp_line_4").on('keyup onmouseout keydown keypress blur change', function (e) {
            if ($(this).val().length == parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_4').attr("disabled", true);
            }
            if ($(this).val().length < parseInt($(this).attr('maxlength'))) {
                $('#sun_DK_4').removeAttr('disabled');
            }
        });
	});


// zmienia wyglad przycisków bez graweru, wyczysc i zapisz przy wprowadzaniu tekstu
	$(function () {
        $("#inp_line_1").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonZ_DK").removeClass('button-clicked');
            $("#buttonZ_DK").html("Zapisz");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

        $("#inp_line_1").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonBG_DK").removeClass('button-clicked');
            $("#buttonBG_DK").html("Bez graweru");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

		    $("#inp_line_2").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonZ_DK").removeClass('button-clicked');
            $("#buttonZ_DK").html("Zapisz");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

        $("#inp_line_2").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonBG_DK").removeClass('button-clicked');
            $("#buttonBG_DK").html("Bez graweru");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

        $("#inp_line_3").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonZ_DK").removeClass('button-clicked');
            $("#buttonZ_DK").html("Zapisz");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

        $("#inp_line_3").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonBG_DK").removeClass('button-clicked');
            $("#buttonBG_DK").html("Bez graweru");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

        $("#inp_line_4").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonZ_DK").removeClass('button-clicked');
            $("#buttonZ_DK").html("Zapisz");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });

        $("#inp_line_4").bind("keyup paste change input propertychange contextmenu", function () {
            $("#buttonBG_DK").removeClass('button-clicked');
            $("#buttonBG_DK").html("Bez graweru");
            $("#buttonW_DK").removeClass('button-clicked');
            $("#buttonW_DK").html("Wyczyść");
        });
	});
