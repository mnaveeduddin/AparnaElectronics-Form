function addTotal(){
    let num1 = parseInt(document.getElementById("inspectioncharge").value);
    let num2 = parseInt(document.getElementById("servicecharge").value);
    let num3 = parseInt(document.getElementById("parts").value);
    let num4 = parseInt(document.getElementById("labour").value);
    document.getElementById("total").innerHTML = num1 + num2 + num3 + num4;
}

function downloadPDF(){
    var element = document.getElementById('exportToPDF');
    var opt = {
        margin:       0.2,
        filename:     'FormData.pdf',
        image:        { type: 'jpg', quality: 1 },
        html2canvas:  { scale: 1 },
        jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
      }; 

      html2pdf().set(opt).from(element).save();
}