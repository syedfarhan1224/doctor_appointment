import Image from "next/image";
import { Button } from "./ui/button";
import { LineHeightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Herosection(){
    return(
        <section className="text-gray-600 my-10 body-font">
  <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        height={500}
        width={500}
        src="https://images.unsplash.com/photo-1601841197690-6f0838bdb005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl b mb-4 font-medium text-gray-900">
        Doctor Appointment System
        
      </h1>
      <p className="mb-8 leading-relaxed">
      A Doctor Appointment System is a streamlined platform that allows patients to book, reschedule, or cancel appointments with healthcare providers effortlessly. It offers features like real-time availability, automated reminders, and secure patient data management, ensuring a seamless experience for both patients and doctors.

      </p>
      <div className="flex gap-5 justify-center ">
         
        <Button variant="outline">
        Find You Doctor You Need
        </Button>
        <Link href="/doctors/apply">
        <Button>
        Apply as Doctor
        </Button>
        </Link>
        
      </div>
    </div>
  </div>
</section>

    );
}

