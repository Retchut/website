import Footer from '../Footer/Footer.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Home from '../../Sections/Home/Home.jsx';
import Projects from '../../Sections/Projects/Projects.jsx';

function App() {
  return (
    <>
      <Navbar />
      <section className="pb-10">
        <Home />
      </section>
      <section className="pb-10">
        <Projects />
      </section>
      <Footer />
    </>
  );
}

export default App;
