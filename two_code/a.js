window.onload = function(){
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 100,
        height : 100
    });

    var elText = document.getElementById("text");
    function makeCode () {		
        
        if (!elText.value) {
            alert("Input a text");
            elText.focus();
            return;
        }
        
        qrcode.makeCode(elText.value);
    }
    
    makeCode();
    

    //提示框输入地址jquery写法
    // $("#text").
    //     on("blur", function () {
    //         makeCode();
    //     }).
    //     on("keydown", function (e) {
    //         if (e.keyCode == 13) {
    //             makeCode();
    //         }
    //     });

     //提示框输入地址原生写法
     //失去焦点
     elText.onblur = function(){
        makeCode();
     };
     elText.onkeydown = function(e){
        if (e.keyCode == 13) {
            makeCode();
        }
     };
   
        
}
 