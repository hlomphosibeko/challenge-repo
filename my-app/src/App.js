import css from './App.module.css';
// import Content from './components/Content';
// import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';
// import ContentHooks from './components/ContentHooks';
// import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className={css.App}>
      {/* <Content /> */}
      {/* <ContentAPI /> */}
      <ContentAPIHooks />
      {/* <ContentHooks /> */}
      <NavBarForm />
      {/* <NavBarSimple /> */}
      <Sidebar />
    </div>
  );
}

export default App;