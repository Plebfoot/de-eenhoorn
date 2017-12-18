let message="";

function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document||(document.getElementById&&!document.all)) {
    if (e.which==2||e.which==3) {return false;}}}
if (document)
{document.captureEvents;document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

document.oncontextmenu=new Function("return false")