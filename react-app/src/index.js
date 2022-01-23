import { StrictMode } from "react";
import { render } from "react-dom";
import './index.css';
import App from './routes/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
