import ListGroup from "./components/ListGroup";
import Navbar  from "./components/NavBar";
import Footer from "./components/Footer";
import UnOrdered from "./components/UnOrderedList";
function App() {
  return (
    <div>
      <Navbar/>
      <ListGroup />
      <Footer/>
      <UnOrdered/>
    </div>
  );
}
export default App;
