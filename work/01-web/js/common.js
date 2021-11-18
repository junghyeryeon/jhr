//로그
function _L(m,s){
	var _u = "/_comm/wlog_m.php?m="+m+"&s="+s+"&u="+escape(document.URL)+"&r="+escape(document.referrer);
	document.write('<iframe id="ifrwlog" name="ifrwlog" width="0" height="0" frameborder="0" src="'+_u+'" style="display:none;"></iframe>');
}