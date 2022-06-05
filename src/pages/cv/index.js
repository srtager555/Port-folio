import React, { useEffect } from 'react';

import { cvtemplate } from '../../template/cv/';

export function CV({ setLoader, chagePath }) {
    chagePath();

    useEffect(() => {
        setLoader(true);
    }, []);

    return <>{cvtemplate()}</>;
}