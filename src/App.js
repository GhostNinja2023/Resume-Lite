import Navbar from "./Componets/Navbar";
import AboutMe from "./Componets/AboutMe";
// import Section from "./Componets/Section";
// import CallSection from "./Componets/CallSection"; 
import  CallSection from    "./Componets/CallSection" 

//  ./ and ../ => relative urls


const App = () => {

    return (
        <div>
            <Navbar />
            <AboutMe />
            <CallSection />
            
            
        </div>
    );
}

export default App;