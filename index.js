function addTotal(){
    let num1 = parseInt(document.getElementById("inspectioncharge").value);
    let num2 = parseInt(document.getElementById("servicecharge").value);
    let num3 = parseInt(document.getElementById("parts").value);
    let num4 = parseInt(document.getElementById("labour").value);
    document.getElementById("total").innerHTML = num1 + num2 + num3 + num4;
}