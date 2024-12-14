import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faDollarSign,  faPlus,  faUser } from '@fortawesome/free-solid-svg-icons';

import { categories, doctorDetails } from "@/lib/Doctordata";
import { Button } from "./ui/button"; 
import Link from 'next/link';
import Doctordetail from "@/app/doctors/[id]/page";


export default function Doctorsection({isHome}) {
  const filtered = isHome ? doctorDetails.splice(0,9) : doctorDetails ;
  return (
      <div className="container mx-auto">
      <div className="container mx-auto flex justify-between">
          <h1 className="text-3xl ">Doctors You Need</h1>
          {
            isHome?(
              <Link href="/doctors">
              <Button>See All</Button>
            </Link>
            ):
            (
          <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    {
      categories.map((categary)=> 
        <SelectItem key= {categary} value={categary}>{categary}</SelectItem>)
    }
  </SelectContent>
</Select>
          )}
      </div> 
      <div className=" grid my-3 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
      
        filtered.map((doctor)=><Card key={doctor.name  }>
          <CardHeader className="flex flex-col items-center space-y-2">
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <div className="text-center">
    <CardTitle className="text-lg font-bold">{doctor.name}</CardTitle>
    <CardDescription className="text-sm text-gray-500">
      {doctor.category}
    </CardDescription>
  </div>
</CardHeader>
{
  !isHome &&
<CardContent>
  <div className="flex justify-between my-2">
    <div className="flex items-center space-x-2 ">
  <FontAwesomeIcon icon={faPlus} className="h-4 w-4"  />
    <h1 className="font-semibold">Hospital</h1>
    </div>
    <h1>{doctor.hospital}</h1>
  </div>
  <div className="flex justify-between my-2">
  <div className="flex items-center space-x-2 ">
  <FontAwesomeIcon icon={faUser } className="h-4 w-4"  />
    <h1 className="font-semibold">Gender</h1>
    </div>
    <h1>{doctor.gender}</h1>
  </div>
  <div className="flex justify-between my-2">
  <div className="flex items-center space-x-2 ">
    
  <FontAwesomeIcon icon={faClock} className="h-4 w-4"  />
    <h1 className="font-semibold">Appointment_Time</h1>
    </div>
    <h1>{doctor.appointment_time}</h1>
  </div>
  <div className="flex justify-between my-2">
  <div className="flex items-center space-x-2 ">

  <FontAwesomeIcon icon={faDollarSign} className="h-4 w-4"  />
    <h1 className="font-semibold">Fees</h1>
    </div>
    <h1>{doctor.fees }</h1>
  </div>
</CardContent>
}

<CardFooter >
  <Link href={`/doctors/${doctor.id}`} className="w-full">
  <Button variant="outline" className="w-full">
    See Details
  </Button>
  </Link>
</CardFooter>
      </Card>
      )
        }
      </div>
      </div>
  );
}
