// //   document.getElementById('download-pdf').addEventListener('click', function() {
// //     // Create a new jsPDF instance
// //     var doc = new jsPDF();
  
// //     // Generate the PDF from HTML
// //     doc.html(document.body, {
// //       callback: function(pdf) {
// //         // Save the PDF
// //         pdf.save('generated.pdf');
// //       }
// //     });
// //   });
  

// document.getElementById('download-pdf').addEventListener('click', function() {
//     // Create a new jsPDF instance
//     var doc = new jsPDF();
  
//     // Define the HTML element to capture
//     var element = document.body;
  
//     // Use html2canvas to capture the HTML element as an image
//     html2canvas(element).then(function(canvas) {
//       // Convert the canvas to an image URL
//       var imgData = canvas.toDataURL('image/png');
  
//       // Add the image to the PDF document
//       doc.addImage(imgData, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
//       // Save the PDF
//       doc.save('generated.pdf');
//     });
//   });
// Create a function to generate the PDF file.
function generatePdf() {
    // Create a new XMLHttpRequest object.
    var xhr = new XMLHttpRequest();
  
    // Set the request method to POST and the request URL to the HTML/CSS page.
    xhr.open("POST", "my-page.html", true);
  
    // Set the header to allow cross-origin requests.
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  
    // Set the onload event handler to the function that will be called when the request is complete.
    xhr.onload = function() {
      // Check if the request was successful.
      if (xhr.status === 200) {
        // Create a new Blob object from the response data.
        var blob = new Blob([xhr.response], { type: "application/pdf" });
  
        // Download the Blob object as a PDF file.
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "my-page.pdf";
        a.click();
      }
    };
  
    // Send the request.
    xhr.send();
  }
  
  // Attach the click event handler to the button.
  document.getElementById("download-pdf").onclick = generatePdf;