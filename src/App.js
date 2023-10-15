import "./App.css";
import Nav from "./Components/Nav";
import SuccessStory from "./Components/SuccessStory";
import Acceptance from "./Components/Accpetance";
import Stories from "./Components/Stories";
import Growth from "./Components/Growth";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
    <Nav />
    <div className="h-screen w-screen bg-slate-100 flex flex-col gap-2">
    
      
         <SuccessStory />
        <Acceptance />
        <Stories />
        <Growth />
        <NewsLetter />
        <Footer /> 
  
    </div>
    </>
  );
};

export default App;
