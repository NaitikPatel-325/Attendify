import React,{useState} from 'react';
import QRCode from 'react-qr-code';

function QR() {

  const [value,setValue] = useState("Demo QR code");

  return (
    // <div style={{ background: 'white', padding: '16px' }}>
    //     <QRCode
    //         size={256}
    //         style={{ height: "auto", maxWidth: "100%", width: "200px" }}
    //         value={value}
    //         viewBox={`0 0 256 256`}
    //     />
    // </div>
    <div>
      
    </div>
  )
}

export default QR
