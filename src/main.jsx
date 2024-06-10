
// import { createRoot } from "react-dom/client";
// import App from "./App";

// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

// const root = createRoot(document.getElementById("root"));

// root.render(<App />);
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)