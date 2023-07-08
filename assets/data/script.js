document.getElementById('download-pdf').addEventListener('click', function() {
    var printContent = document.documentElement.innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    
    window.print();
    
    document.body.innerHTML = originalContent;
});