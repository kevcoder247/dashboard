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
    <div className="sidebar section"> 
      <Sidebar />
    </div>   
      
   
      
      {/* REVIEWS */}
      <div className="reviews section">
        <Reviews />
        <AverageRating />
        <SentiemntAnalysis />
      </div>
      
   
      {/* VISITORS */}
      <div className="visitors section">
      <WebsiteVisitors />
      </div>
      {/* end of container */}
    </div>
  );
}

export default App;
