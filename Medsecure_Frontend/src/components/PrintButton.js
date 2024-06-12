import React, { useRef } from "react";
import { Button } from "@mui/material";
import ReactToPrint from "react-to-print";

export default function PrintButton() {
  let componentRef = useRef();

  return (
    <>
      <div>
        {/* Button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print</Button>}
          content={() => componentRef}
        />

        {/* Component to be printed */}
        <ComponentToPrint ref={(el) => (componentRef = el)} />
      </div>
    </>
  );
}

