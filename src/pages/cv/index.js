import React, { useEffect } from 'react';

import { cvtemplate } from '../../template/cv/';

export function CV({ setLoader, chagePath }) {
    useEffect(() => {
        chagePath('cv');
    }, []);

    return <>{cvtemplate({setLoader})}</>;
}