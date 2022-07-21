function addTotal() {
  let num1 = parseInt(document.getElementById("inspectioncharge").value);
  let num2 = parseInt(document.getElementById("servicecharge").value);
  let num3 = parseInt(document.getElementById("parts").value);
  let num4 = parseInt(document.getElementById("labour").value);
  document.getElementById("total").innerHTML = num1 + num2 + num3 + num4;
}

function downloadPDF() {
  var name = document.getElementById("contact-name").value;

  // For current date;
  Date.prototype.today = function () {
    return (
      (this.getDate() < 10 ? "0" : "") +
      this.getDate() +
      "-" +
      (this.getMonth() + 1 < 10 ? "0" : "") +
      (this.getMonth() + 1) +
      "-" +
      this.getFullYear()
    );
  };

  // For current time;
  Date.prototype.timeNow = function () {
    return (
      (this.getHours() < 10 ? "0" : "") +
      this.getHours() +
      "-" +
      (this.getMinutes() < 10 ? "0" : "") +
      this.getMinutes()
    );
  };

  var newDate = new Date();
  var datetime = newDate.today() + " - " + newDate.timeNow();

  var element = document.getElementById("exportToPDF");
  var opt = {
    margin: 0.2,
    filename: name + "-" + datetime,
    image: { type: "jpg", quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "ledger", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
}

function printScreen(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}
