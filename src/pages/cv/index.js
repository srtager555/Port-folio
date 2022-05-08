import React, { useEffect } from 'react';

import { CV as CVPage } from '../../template/cv/';

export function CV({ setLoader, chagePath }) {

    chagePath();

    useEffect(() => {
        setLoader(true);
    }, []);

    return <CVPage />;
}