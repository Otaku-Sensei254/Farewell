import QRCode from 'qrcode';
import fs from 'fs';

async function generateQRCode() {
  try {
    // For local development - you can change this to your deployed URL
    const url = 'http://localhost:5174/';
    
    // Generate QR code
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#2c3e50',
        light: '#ffffff'
      }
    });
    
    // Save as PNG file
    await QRCode.toFile('./public/qrcode.png', url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#2c3e50',
        light: '#ffffff'
      }
    });
    
    // Also save an HTML file with the QR code for easy sharing
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>John Kuka - Digital Eulogy QR Code</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 1rem;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            text-align: center;
            overflow-x: hidden;
        }
        .container {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 2rem;
                margin: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            body {
                padding: 0.5rem;
            }
            .container {
                padding: 1.5rem;
                margin: 0.5rem;
            }
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 1rem;
            font-weight: 300;
        }
        .qr-code {
            margin: 2rem 0;
        }
        .qr-code img {
            max-width: 100%;
            height: auto;
        }
        .instructions {
            color: #7f8c8d;
            font-style: italic;
            margin-top: 1rem;
        }
        .url {
            color: #3498db;
            word-break: break-all;
            margin-top: 1rem;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>John 'Kuka' Nyikuli Shikanga</h1>
        <p>Digital Eulogy & Memorial</p>
        
        <div class="qr-code">
            <img src="${qrCodeDataUrl}" alt="QR Code for John Kuka's Digital Eulogy" />
        </div>
        
        <p class="instructions">
            Scan this QR code to visit the digital memorial webpage
        </p>
        
        <p class="url">
            ${url}
        </p>
    </div>
</body>
</html>
    `;
    
    fs.writeFileSync('./public/qr-code.html', htmlContent);
    
    console.log('✅ QR Code generated successfully!');
    console.log('📱 QR Code saved as: ./public/qrcode.png');
    console.log('🌐 QR Code page saved as: ./public/qr-code.html');
    console.log(`🔗 URL encoded: ${url}`);
    
  } catch (error) {
    console.error('❌ Error generating QR code:', error);
  }
}

generateQRCode();
