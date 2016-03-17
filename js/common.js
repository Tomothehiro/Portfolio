$( document ).ready(function() {
  var lang = getCookie("lang");
  if (lang=="en") {
    showLanguage('en');
  } else {
    showLanguage('jp');
  }
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function showLanguage(lang) {
    var langSet = ["jp", "en"];     // 切り替え対象の locale リスト
    for (var i = 0, len = langSet.length; i < len; i++) {
        if (lang === langSet[i]) {
            $('.' + langSet[i]).show();
        } else {
            $('.' + langSet[i]).hide();
        }
    }
    document.cookie = "lang=" + lang;  // クッキー保持
}
