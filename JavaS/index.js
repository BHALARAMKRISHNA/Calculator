let output = document.getElementById("output");
    function dis(num){
        output.value += num;
    }
    function equal(){
        output.value = eval(output.value)
    }
    function cler()
    {
        output.value = "";
    }
    function deletee(){
        output.value = output.value.slice(0,-1);
    }