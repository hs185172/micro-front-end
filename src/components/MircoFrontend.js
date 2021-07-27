import React from 'react';

const MicroFrontend = (props) => {

    const iframeId = `${props.name}-container`;

    renderMicroFrontend(iframeId,props.host)

    // if(document.getElementById(iframeId)) {
    //     renderMicroFrontend(iframeId,props.route);
    // }

    return (
        <>
            <iframe id={`${props.name}-container`}  title={`${props.name}-container`}></iframe>
        </>
    )
}

const renderMicroFrontend = (iframeId,host) => {
    let iframe = document.getElementById(iframeId);
    if(iframe && host) {
        iframe.src = `${host}`
        iframe.id = iframeId;
        iframe.crossorigin = '';
        iframe.frameborder = '0';
    }
    return;
}

export default MicroFrontend;