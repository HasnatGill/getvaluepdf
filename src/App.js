import { useEffect, useRef } from 'react';
import './App.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import Routes from './pages/Frontend/Routes';
import WebViewer from '@pdftron/webviewer';

function App() {

  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        licenseKey: 'YOUR_LICENSE_KEY',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
      },
      viewer.current,
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <>
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div ref={viewer} style={{ height: "100vh" }}></div>
      </div>
    </>
  );
}

export default App;