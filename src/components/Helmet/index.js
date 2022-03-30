import React from "react";
import { Helmet } from "react-helmet";

export function HelmetComponent({ title = "", description = "", image ="" }) {
   return (
      <Helmet>
         <title>{`${title} | Port-folio 2022`}</title>
         <meta name="description" content={description} />
         <meta name="image" content={image} />

         <meta property="og:title" content={`${title} | Port-folio 2022`} />
         <meta property="og:description" content={description} />
         <meta property="og:image" content={image} />

         <meta name="twitter:title" content={`${title} | Port-folio 2022`} />
         <meta name="twitter:description" content={description} />
         <meta name="twitter:image" content={image} />
      </Helmet>
   );
}
