function test(frm,event){
    var event=window.event?window.event:event;   
    if(event.keyCode==13){
        wordSearch();
    }
}
	function wordSearch() {
          var text=document.getElementById("input"); //取key值
          if (!text) {
              return; //key为空则退出
          }
          focusNext();
      }
function focusNext(){
	var text=document.getElementById("input");
	if(text.value == "模组浏览器" ){
		url = "https://mirror.sgkoi.dev/";
	}else if(text.value == "百度"){
		url = "https://www.baidu.com";
	}
	window.open(url);
}