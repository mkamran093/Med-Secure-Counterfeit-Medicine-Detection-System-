import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = (props) => {
  const [scannedData, setScannedData] = useState('');

  useEffect(() => {
    console.info(scannedData);
    props.passData(scannedData);
  }, [scannedData]);

  return (
    <>
      <QrReader
        onResult={(result, error) => {
          if (result) {
            setScannedData(result?.text);
          }

          // if (error) {
          //   console.info(error);
          // }
        }}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default QRScanner;

