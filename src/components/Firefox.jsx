import React from 'react';
import Images from './Images';
import InfoFirefox from './InfoFirefox';

const Firefox = () =>{
    return (
        <section className = 'Firefox Section'>
            <Images
            className = 'Firefox Logo'
            src = 'https://www.mozilla.org/media/protocol/img/logos/firefox/logo-word-hor.96f28a0f9ae6.svg'
            />
            <InfoFirefox/>
            <Images
            className = 'Desktop'
            src = 'https://www.mozilla.org/media/img/home/laptop.cad96eee9ddb.png'
            />
        </section>
    )
}

export default Firefox;