function _L(m,s,p,e)
{
	var _u = "https://www.ytn.co.kr/_comm/ylog.php?m="+m+"&s="+s+"&u="+escape(document.URL)+"&r="+escape(document.referrer)+"&p="+p+"&e="+e;
	document.write('<iframe id="ifrylog" name="ifrylog" width="0" height="0" frameborder="0" src="'+_u+'" style="display:none;" title="데이터 집계를 위한 아이프레임"></iframe>');
}

//ASP 로그
function aspLog(m)
{
	var _u2 = "/_comm/asplog.php?m="+m;
	document.write('<iframe id="ifrasplog" name="ifrasplog" width="0" height="0" frameborder="0" src="'+_u2+'" style="display:none;" title="데이터 집계를 위한 아이프레임"></iframe>');
}

//크로 브라우저 체크
function browserChk(){
	var agent=navigator.userAgent.toLowerCase();
	if(agent.indexOf("chrome")!=-1){	//Chrome
		if(agent.indexOf("samsungbrowser")!=-1 || agent.indexOf("opr")!=-1 || agent.indexOf("edg")!=-1 || agent.indexOf("vivaldi")!=-1 || agent.indexOf("whale")!=-1 || agent.indexOf("brave")!=-1 || agent.indexOf("yabrowser")!=-1 || agent.indexOf("swing")!=-1){	//Chrome 기반 브라우저는 노출
			return true;
		}
	}else return true;
}

//하루용 쿠키생성
function setDayCookie(cookiename, value, expiredays){
	// 오늘만 이 창을 열지 않음
	// expiredays 의 새벽  00:00:00 까지 쿠키 설정  
	var todayDate = new Date();
    todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
    if( todayDate > new Date() )
    {  
		expiredays = expiredays - 1;
    }  
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = cookiename + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

//쿠키 가져오기
function get_cookie(name)
{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while(i< clen)
	{
		var j = i + alen;
		if(document.cookie.substring(i,j)==arg){
			var end = document.cookie.indexOf(";",j);
			if(end == -1)
				end = document.cookie.length;
			return unescape(document.cookie.substring(j,end));
		}
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) break;
	}
	return null;
}

function print_swf(file,width,height,id)
{
	if(!id) id = "swf_"+width;
	var str = '';
	str += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+width+'" height="'+height+'" id="'+id+'" align="middle">';
	str += '<param name="allowScriptAccess" value="sameDomain" />';
	str += '<param name="movie" value="'+file+'" />';
	str += '<param name="quality" value="high" />';
	str += '<param name=wmode value=transparent>';
	str += '<embed src="'+file+'" quality="high" bgcolor="#000000" width="'+width+'" height="'+height+'"  name="'+id+'" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	str += '</object>';
	document.write(str);
}

//동영상 재생
function vodChange(m,c,i,j)
{
	var Eid="YTN_Player"; var height='100%'; var etc=""; var zum=""; var vodurl="";
	if (typeof j != 'undefined' && j.length>2) etc = "&ytb="+j+"";
	else if (typeof j != 'undefined' && j>=1) Eid = Eid+"_"+j;
	ga('send', 'event', 'VOD_'+c, 'play');		//구글 이벤트로그 
	vodurl="vod_frame_n2_hls.php";
	
	document.getElementById(Eid).innerHTML = "<iframe name='vodFrame' src='/_comm/"+vodurl+"?key="+m+"&cd="+c+"&img="+i+etc+"' width='100%' height='"+height+"' frameborder='0' scrolling='no' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>";
}

//프린트하기
function popPrint(k)
{
	url = "/_comm/pop_print.php?key="+k;
	window.open(url,'print','status=1,scrollbars=yes,resizable=yes,width=690,height=800');
}

//SNS공유
function sendSNS(num){
	var host = $("meta[property='og:url']").attr('content');
	var title = $("meta[property='og:title']").attr('content');
	var txt = $("meta[property='og:description']").attr('content');
	var pic = $("meta[property='og:image']").attr('content');

	if(num==1){ //url복사
		var succeed;
		try{
			$('#copy_text_input').select();
			succeed = document.execCommand("copy");
		}catch(e) {
			succeed = false;
		}
		if(succeed) alert('URL이 클립보드에 복사되었습니다.');
		else prompt("이 기사의 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요", host);		
	}
	else if(num==2){	//페이스북
		var url= "https://www.facebook.com/dialog/feed?app_id=1162611037094071&display=popup&picture="+encodeURIComponent(pic.toString())+"&link="+encodeURIComponent(host.toString())+"&name="+ encodeURIComponent(title.toString())+"&description="+ encodeURIComponent(txt.toString())+"&redirect_uri=https://www.ytn.co.kr/close.html";
		window.open(url, 'facebook', "width="+550+", height="+350+", scrollbars=yes, resizable=yes");
	}
	else if(num==3){	//트위터
		var url= "https://twitter.com/intent/tweet?text="+ encodeURIComponent(title.toString())+"&url="+encodeURIComponent(host.toString())+"&source=webclient";
		window.open(url, 'twitter', "width="+600+", height="+500+", scrollbars=yes, resizable=yes");
	}
	else if(num==4){	//밴드
		var url= "http://www.band.us/plugin/share?body="+encodeURIComponent(title.toString()+' '+host.toString())+"&route="+encodeURIComponent(host.toString());
		window.open(url, 'band', "width="+500+", height="+700+", scrollbars=yes, resizable=yes");
	}
	else if(num==5){	//카카오
		try{
			if(Kakao.Auth.getAppKey()){
			}else{
				Kakao.init('621ca044b60b3105891950d826264fd4');
			}
		}catch(e){
			Kakao.init('621ca044b60b3105891950d826264fd4');
		}
		Kakao.Link.sendDefault({
			objectType: 'feed',
			content: {
				title:title,
				imageUrl : pic,
				link:{
					mobileWebUrl : host
				},
				imageWidth : 320,
				imageHeight : 170
			},
			installTalk:true
		});
	}
}