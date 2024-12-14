// // "use client";
// import { doctorDetails } from "@/lib/Doctordata"
// import Image from "next/image"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faDollarSign,  faPlus,  faUser } from '@fortawesome/free-solid-svg-icons';
// import { Button } from "@/components/ui/button";


// export default function DoctorDetail({params}){
//   const doctorinfo = doctorDetails.find((doctor) => doctor.id == params.id);
//   return(
    
//         <div>
//             <section className="text-gray-600 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//     <div className="lg:w-1/2 relative w-400 w-400 lg:h-auto h-64 object-cover object-center rounded">
//       <Image
//         alt="ecommerce"
//         fill={true}
//         src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8"
//       />
//     </div>
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">
//           {doctorinfo.category}
//         </h2>
//         <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//           {doctorinfo.name}
//         </h1>
//         <div className="flex mb-4">
//           <span className="flex items-center">
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="currentColor"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <svg
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-4 h-4 text-indigo-500"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//             </svg>
//             <span className="text-gray-600 ml-3">4 Reviews</span>
//           </span>
//           <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//               </svg>
//             </a>
//             <a className="text-gray-500">
//               <svg
//                 fill="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 className="w-5 h-5"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//               </svg>
//             </a>
//           </span>
//         </div>
//         <p className="leading-relaxed">
//           Fam locavore kickstarter distillery. Mixtape chillwave tumeric
//           sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
//           cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
//           tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
//           shorts keytar banjo tattooed umami cardigan.
//         </p>
        
//   <div className="flex justify-between my-2">
//     <div className="flex items-center space-x-2 ">
//   <FontAwesomeIcon icon={faPlus} className="h-4 w-4"  />
//     <h1 className="font-semibold">Hospital</h1>
//     </div>
//     <h1>{doctorinfo.hospital}</h1>
//   </div>
//   <div className="flex justify-between my-2">
//   <div className="flex items-center space-x-2 ">
//   <FontAwesomeIcon icon={faUser } className="h-4 w-4"  />
//     <h1 className="font-semibold">Gender</h1>
//     </div>
//     <h1>{doctorinfo.gender}</h1>
//   </div>
//   <div className="flex justify-between my-2">
//   <div className="flex items-center space-x-2 ">
    
//   <FontAwesomeIcon icon={faClock} className="h-4 w-4"  />
//     <h1 className="font-semibold">Appointment_Time</h1>
//     </div>
//     <h1>{doctorinfo.appointment_time}</h1>
//   </div>
//   <div className="flex justify-between my-2">
//   <div className="flex items-center space-x-2 ">

//   <FontAwesomeIcon icon={faDollarSign} className="h-4 w-4"  />
//     <h1 className="font-semibold">Fees</h1>
//     </div>
//     <h1>{doctorinfo.fees }</h1>
//   </div>
//   <Button className="w-full my-2">Book Your Appointment</Button>
//       </div>
//     </div>
//   </div>
// </section>

//         </div>
//     )
// }



// "use client";
import { doctorDetails } from "@/lib/Doctordata";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDollarSign, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/datepicker";

export default function DoctorDetail({ params }) {
  const { id } = params; // Extract the dynamic route parameter
  const doctorinfo = doctorDetails.find((doctor) => doctor.id == id);



  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 relative w-400 lg:h-auto h-64 object-cover object-center rounded">
              <Image
                alt="doctor image"
                fill={true}
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {doctorinfo.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {doctorinfo.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY.
              </p>

              <div className="flex justify-between my-2">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                  <h1 className="font-semibold">Hospital</h1>
                </div>
                <h1>{doctorinfo.hospital}</h1>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faUser} className="h-4 w-4" />
                  <h1 className="font-semibold">Gender</h1>
                </div>
                <h1>{doctorinfo.gender}</h1>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faClock} className="h-4 w-4" />
                  <h1 className="font-semibold">Appointment Time</h1>
                </div>
                <h1>{doctorinfo.appointment_time}</h1>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faDollarSign} className="h-4 w-4" />
                  <h1 className="font-semibold">Fees</h1>
                </div>
                <h1>{doctorinfo.fees}</h1>
              </div>
              <DatePicker/>
              <Button className="w-full my-2">Book Your Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
