import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Pastevent from "../components/pastevent";

function Events() {
    return (
      <>
      <Navbar />

<section className=" container-70  bg-[#f6b112]">
      
      
      <div className="my-16 w-full text-center">
     
<Pastevent />
</div>
<Footer />
</section>
</>
);
 
}

export default Events;