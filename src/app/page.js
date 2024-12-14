
import Herosection from "@/components/Herosection";
import Doctorsection from "@/components/Doctorsection";



export default function Home()  {
  return (
    <div className=" main-h-section">
      
      <Herosection/>
      
      <Doctorsection isHome={true}/>

    </div>
  );
}
