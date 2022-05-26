import React, { useEffect } from "react";

import { cvpdfTemplate } from "Src/template/cvpdf";

export function cvpdf({ chagePath, setLoader }) {
   chagePath();

   useEffect(() => {
      setLoader(true);
   }, []);
   
   return <>{cvpdfTemplate()}</>;
}
