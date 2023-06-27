
function abc(){
    var x=10;
    window.alert(x);
}
abc();
//local; variable
var y=20;
    function a(){
        window.alert(y);
    }
    a();
    function b() {
        window.alert(y);
    }
    b();
//Global variable