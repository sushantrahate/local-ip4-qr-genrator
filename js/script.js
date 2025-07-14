document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const resultDiv = document.getElementById('result');
  const qrCodeDiv = document.getElementById('qrcode');

  generateBtn.addEventListener('click', () => {
    const ipSegment1 = document.getElementById('ipSegment1').value;
    const ipSegment2 = document.getElementById('ipSegment2').value;
    const ipSegment3 = document.getElementById('ipSegment3').value;
    const ipSegment4 = document.getElementById('ipSegment4').value;
    const port = document.getElementById('port').value;
    const baseUrl = 'http://192.168.';

    if (ipSegment1 && ipSegment2 && ipSegment3 && ipSegment4 && port) {
      const url = `http://${ipSegment1}.${ipSegment2}.${ipSegment3}.${ipSegment4}:${port}`;

      // Display the URL as a clickable link
      resultDiv.innerHTML = `<a href="${url}" target="_blank" class="text-blue-300 font-bold underline">${url}</a>`;

      // Generate the QR code
      const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: url,
        dotsOptions: {
          color: '#000',
          type: 'rounded',
        },
        backgroundOptions: {
          color: '#fff',
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 20,
        },
      });

      qrCodeDiv.innerHTML = '';
      qrCode.append(qrCodeDiv);
    } else {
      qrCodeDiv.innerHTML = '';
      resultDiv.innerHTML =
        '<p class="text-red-500">Please enter both IP segment and port.</p>';
    }
  });
});
