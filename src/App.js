import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from './components/Hero';
import Readbox from './components/Readbox';
import Input from './components/Input';
import Rightknowledge from './components/Rightknowledge';
import Author from './components/Author';
import Avoid from './components/Avoid';

function App() {
  return (
    <div>
      <Hero />
      <Readbox />
      <Input />
      <Rightknowledge />
      <Author />
      <Avoid/>
    </div>
  );
}
export default App;
