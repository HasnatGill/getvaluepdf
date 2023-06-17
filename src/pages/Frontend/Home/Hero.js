import React, { useEffect, useRef } from 'react'
import WebViewer from '@pdftron/webviewer'

export default function Hero() {

    const viewer = useRef(null);

    useEffect(() => {
        WebViewer(
            {
                path: '/lib',
                // licenseKey: 'YOUR_LICENSE_KEY',
                initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
            },
            viewer.current,
        ).then((instance) => {
            const { documentViewer } = instance.Core;
            // you can now call WebViewer APIs here...
        });
    }, []);

    return (
        <div>
            <div className="MyComponent">   
                <div className="header">React sample</div>
                <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
            </div>
        </div>
    )
}
