import { columns } from "@/components/Appointment_table/columns";
import { AppointmentTable } from "@/components/Appointment_table/data-table";
import { appointments } from "@/lib/Doctordata";

export default function Appointments(){
    return(
        <div className="container mx-auto">
            <h1 className="text-4xl text-center my-4">My Appointment</h1>
            <AppointmentTable columns={columns} data={appointments}/>
        </div>
    );
}