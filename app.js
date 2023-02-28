function compile(string) {

    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("javascript");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function(){
      code.open();
      code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
      code.close();
    };
};
