import DoctorAppointmentForm from "@/components/Appointment_table/applyform";

export default function ApplyDoctor(){
    return(
        <div className="container mx-auto mt-4  ">
            <h1 className=" font-bold text-xl">Apply as a Doctor</h1>
            <p className="mt-4">Patients using our doctor appointment system must provide accurate personal and contact details during registration. Appointments are scheduled on a first-come first-served basis subject to the doctor`s availability. Patients are expected to arrive on time and notify us at least 24 hours in advance if they need to cancel or reschedule. Repeated no-shows or late cancellations may result in restricted access to the system. All patient information is handled confidentially and users must refrain from sharing their accounts or engaging in inappropriate behavior within the system.</p>
            <DoctorAppointmentForm/>
        </div>
    )
}