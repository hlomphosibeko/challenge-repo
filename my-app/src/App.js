import css from './App.module.css';
import Content from './components/Content';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      <Content />
      <NavBarForm />
      {/* <NavBarSimple /> */}
      <Sidebar />
    </div>
  );
}

export default App;