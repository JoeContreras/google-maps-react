import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet } from 'react-helmet'

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <GoogleMap />
      <Helmet>
              <script defer data-key="8444070d-010b-4fc7-83bb-96b0479895a6" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;
