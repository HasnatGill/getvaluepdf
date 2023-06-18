import React, { useEffect, useRef } from 'react'
import WebViewer from '@pdftron/webviewer';

export default function Hero() {

    // const viewer = useRef(null);

    // if using a class, equivalent of componentDidMount 
    // useEffect(() => {
    //   WebViewer(
    //     {
    //         path: '/node_modules/@pdftron/webviewer/lib',
    //         licenseKey: 'YOURT_LICENSE_KEY',
    //         initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
    //     },
    //     viewer.current,
    //   ).then((instance) => {
        // const { documentViewer, annotationManager, Annotations } = instance.Core;
  
        // documentViewer.addEventListener('documentLoaded', () => {
        //   const rectangleAnnot = new Annotations.RectangleAnnotation({
        //     PageNumber: 1,
        //     // values are in page coordinates with (0, 0) in the top left
        //     X: 100,
        //     Y: 150,
        //     Width: 200,
        //     Height: 50,
        //     Author: annotationManager.getCurrentUser()
        //   });
  
        //   annotationManager.addAnnotation(rectangleAnnot);
        //   // need to draw the annotation otherwise it won't show up until the page is refreshed
        //   annotationManager.redrawAnnotation(rectangleAnnot);
        // });
    //   });
    // }, []);
  

    return (
        <div>
            <div className="MyComponent">   
                <div className="header">React sample</div>
                {/* <div className="webviewerOne" ref={viewer} style={{minHeight:"100vh"}}></div> */}
            </div>
        </div>
    )
}
