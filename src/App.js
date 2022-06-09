// import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentiemntAnalysis from "./components/SentiemntAnalysis";
import WebsiteVisitors from "./components/WebsiteVisitors"

function App() {
  return (
    <div className="container">
    
    {/* SIDEBAR */}
    <div className="sidebar"> 
      <Sidebar />
    </div>   
      
      <br />
      <hr/>
      
      {/* REVIEWS */}
      <div className="reviews">
        <Reviews />
        <AverageRating />
        <SentiemntAnalysis />
      </div>
      
      <br />
      <hr/>
      {/* VISITORS */}
      <div className="visitors">
      <WebsiteVisitors />
      </div>
    </div>
  );
}

export default App;
