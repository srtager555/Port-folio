import React, { useEffect } from 'react';

import { cvtemplate } from '../../template/cv/';

export function CV({ setLoader, chagePath }) {
    chagePath('cv');

    useEffect(() => {
        setLoader(true);
    }, []);

    return <>{cvtemplate()}</>;
}