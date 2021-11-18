// 공유버튼 클릭시, 레이어팝업 노출
function toggleMoreShare(val){
	if(val == "N"){
		document.getElementById('share_box').style.display='none';
	} else if(val == "Y"){
		document.getElementById('share_box').style.display='';
	}
}

// 기사뷰 : 더보기 클릭 시, 'more_pr', 'program_txt'에 각각 [show] 클래스 추가/삭제
function foldMoreContent(){
	var tmp = document.getElementById('fold_more');
	var tmpClass = tmp.className;

	if(tmpClass.indexOf("show") != -1) {
		document.getElementById('fold_more').classList.remove('show');
		document.getElementById('fold_more_txt').classList.remove('show');

		$("#content_txt").css(
			{"text-overflow":"ellipsis","display":"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"}
		);
	} else { // 숨기기		
		document.getElementById('fold_more').classList.add('show');
		document.getElementById('fold_more_txt').classList.add('show');

		$("#content_txt").css(
			{"white-space":"unset","text-overflow":"unset","display":"block","-webkit-line-clamp":"unset","-webkit-box-orient":"unset"}
		);
	}

	//	document.getElementById('fold_more').classList.toggle('show');
	//	document.getElementById('fold_more_txt').classList.toggle('show');
}

// 프로그램 정보 페이지 : 더보기 클릭 시, 'program_txt'에 [show] 클래스 추가
function foldMoreProgramContent(){
	document.getElementById('fold_more').style.display='none';
	document.getElementById('fold_more_txt').classList.toggle('show');

	$("#content_txt").css(
		{"white-space":"unset","text-overflow":"unset","display":"block","-webkit-line-clamp":"unset","-webkit-box-orient":"unset"}
	);
}

//더보기 클릭 시, 'more_s'에 [show] 클래스 추가/삭제
function foldMoreAgreeContent(){
	var tmp = document.getElementById('more_agree');
	var tmpClass = tmp.className;

	if(tmpClass.indexOf("show") != -1) {
		document.getElementById('more_agree').classList.remove('show');
		document.getElementById('more_agree_txt').style.display='none';
	} else { // 숨기기		
		document.getElementById('more_agree').classList.add('show');
		document.getElementById('more_agree_txt').style.display='block';
	}
}

//플레이어 실행시, 'program_player'에 [play] 클래스 추가/삭제
function fixPlayerTop(val){
	if(val == "N"){
		document.getElementById('program_player').classList.remove('play');
	} else if(val == "Y"){
		document.getElementById('program_player').classList.add('play');
	}
}

// 쿠키 저장
function setCookie(cookie_name, value, days) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + days);

	var cookie_value = escape(value) + ((days == null) ? '' : '; expires=' + exdate.toUTCString());
	document.cookie = cookie_name + '=' + cookie_value;
}

// 쿠키 불러오기
function getCookie(key) {
    var result = null;
    var cookie = document.cookie.split(';');
    cookie.some(function (item) {
        item = item.replace(' ', '');
        var dic = item.split('=');
        if (key === dic[0]) {
            result = dic[1];
            return true;
        }
    });
    return result;
}

// 편성표 설명 팝업창 노출여부
function toggleMoreSchedule(val){
	if(val == "N"){
		document.getElementById('schedule_box').style.display='none';
	} else if(val == "Y"){
		document.getElementById('schedule_box').style.display='block';
	}
}