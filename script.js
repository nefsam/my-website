document.getElementById('generateTextQR').addEventListener('click', function() {
    let qrText = document.getElementById('qrText').value;
    if (qrText) {
        generateQRCode(qrText);
    } else {
        alert("Please enter text or URL");
    }
});

document.getElementById('generateFileQR').addEventListener('click', function() {
    let fileInput = document.getElementById('fileInput').files[0];
    
    if (fileInput) {
        let fileURL = URL.createObjectURL(fileInput);
        console. log("Generate Object URL:");
        generateQRCode(fileURL);
    } else {
        alert("Please select a file to generate a QR code.");
    }
});

function generateQRCode(data) {
    document.getElementById('qrcode').innerHTML = ""; // Clear previous QR code
    new QRCode(document.getElementById('qrcode'), {
        text: data,
        width: 200,
        height: 200
    });
}
