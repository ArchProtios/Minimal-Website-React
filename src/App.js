import bg from './assets/bg.png'
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo_container"></div>
          <div className="menu_container">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Why Us</a></li>
              <li><a href="#">Review</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="btn_container">
            <ul>
              <li><a href="#">Sign In</a></li>
            </ul>
            <button className="btn_register">Register</button>
          </div>
        </nav>
        <div className="content">
          <div className="hero-text">
            <h1>Deliver<span className="content_span">Your Food</span></h1>
            <h1>Easy and Fast</h1>
            <p className="content_alice">
              Vivamus vitae odio quam. Etiam non nibh luctus ligula tristique tristique.
            </p>
            <form>
              <input type="text" placeholder="Enter delivery address" />
              <button type="submit" className="btn_sec">Search</button>
            </form>
          </div>
          <div className="hero-image">
            <img className="image" src={bg} alt="Background" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
