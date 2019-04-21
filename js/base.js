//baseIP="http://23.106.137.37:8088";
baseIP = "http://192.168.13.185:8088";
// baseIP = "http:/127.0.0.1:8088";

//var param = {
//	"token":sessionStorage.getItem("login_token")
//}
window.onload=function(){
    var domain = window.location.pathname.split("/");
    if(domain[domain.length-1]!="login.html"){
        panduan();
    }
}

function panduan() {
    var user_name = sessionStorage.getItem("user_name");
    if(user_name==null || user_name=="" || user_name==undefined){
        window.location.href= "login.html";
    }
}

//退出
function logOut(){
    window.location.href = "login.html";
    sessionStorage.clear();
}