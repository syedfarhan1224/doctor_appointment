export const categories = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Orthopedic Surgeon",
    "Pediatrician",
    "Gynecologist",
    "Psychiatrist",
    "Ophthalmologist",
    "Dentist",
    "Endocrinologist",
    "Gastroenterologist",
    "Urologist",
    "Oncologist",
    "Pulmonologist",
    "Rheumatologist",
    "General Physician",
    "Nephrologist",
    "ENT Specialist",
    "Allergist/Immunologist",
    "Plastic Surgeon"
  ];
  

  export const doctorDetails = [
    {
      id: 1,
      name: "Dr. John Doe",
      appointment_time: "10:00 AM to 11:00 AM",
      fees: 150,
      category: "Cardiologist",
      hospital: "Heart Care Hospital",
      gender: "Male"
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      appointment_time: "11:30 AM to 12:30 PM",
      fees: 120,
      category: "Dermatologist",
      hospital: "Skin Health Clinic",
      gender: "Female"
    },
    {
      id: 3,
      name: "Dr. Mark Lee",
      appointment_time: "2:00 PM to 3:00 PM",
      fees: 180,
      category: "Neurologist",
      hospital: "NeuroCare Center",
      gender: "Male"
    },
    {
      id: 4,
      name: "Dr. Emma Brown",
      appointment_time: "9:30 AM to 10:30 AM",
      fees: 200,
      category: "Orthopedic Surgeon",
      hospital: "Bone & Joint Clinic",
      gender: "Female"
    },
    {
      id: 5,
      name: "Dr. Michael Davis",
      appointment_time: "1:00 PM to 2:00 PM",
      fees: 130,
      category: "Pediatrician",
      hospital: "Kids Care Clinic",
      gender: "Male"
    },
    {
      id: 6,
      name: "Dr. Sarah White",
      appointment_time: "3:00 PM to 4:00 PM",
      fees: 160,
      category: "Gynecologist",
      hospital: "Women's Health Center",
      gender: "Female"
    },
    {
      id: 7,
      name: "Dr. William Clark",
      appointment_time: "4:30 PM to 5:30 PM",
      fees: 140,
      category: "Psychiatrist",
      hospital: "Mental Health Clinic",
      gender: "Male"
    },
    {
      id: 8,
      name: "Dr. Olivia Green",
      appointment_time: "8:00 AM to 9:00 AM",
      fees: 110,
      category: "Ophthalmologist",
      hospital: "Eye Care Hospital",
      gender: "Female"
    },
    {
      id: 9,
      name: "Dr. James Harris",
      appointment_time: "12:00 PM to 1:00 PM",
      fees: 90,
      category: "Dentist",
      hospital: "Bright Smile Dental",
      gender: "Male"
    },
    {
      id: 10,
      name: "Dr. Laura Allen",
      appointment_time: "10:00 AM to 11:00 AM",
      fees: 140,
      category: "Endocrinologist",
      hospital: "Hormone Health Center",
      gender: "Female"
    },
    {
      id: 11,
      name: "Dr. George King",
      appointment_time: "11:30 AM to 12:30 PM",
      fees: 160,
      category: "Gastroenterologist",
      hospital: "Digestive Health Clinic",
      gender: "Male"
    },
    {
      id: 12,
      name: "Dr. Jessica Lewis",
      appointment_time: "2:00 PM to 3:00 PM",
      fees: 150,
      category: "Urologist",
      hospital: "Urology Specialist Center",
      gender: "Female"
    },
    {
      id: 13,
      name: "Dr. Peter Young",
      appointment_time: "4:00 PM to 5:00 PM",
      fees: 170,
      category: "Oncologist",
      hospital: "Cancer Treatment Center",
      gender: "Male"
    },
    {
      id: 14,
      name: "Dr. Alice Scott",
      appointment_time: "10:00 AM to 11:00 AM",
      fees: 180,
      category: "Pulmonologist",
      hospital: "Lung Care Hospital",
      gender: "Female"
    },
    {
      id: 15,
      name: "Dr. Robert Hall",
      appointment_time: "12:00 PM to 1:00 PM",
      fees: 190,
      category: "Rheumatologist",
      hospital: "Arthritis Clinic",
      gender: "Male"
    },
    {
      id: 16,
      name: "Dr. Linda Martin",
      appointment_time: "2:00 PM to 3:00 PM",
      fees: 130,
      category: "General Physician",
      hospital: "Health First Clinic",
      gender: "Female"
    },
    {
      id: 17,
      name: "Dr. David Moore",
      appointment_time: "4:00 PM to 5:00 PM",
      fees: 110,
      category: "Nephrologist",
      hospital: "Kidney Care Clinic",
      gender: "Male"
    },
    {
      id: 18,
      name: "Dr. Karen Turner",
      appointment_time: "10:00 AM to 11:00 AM",
      fees: 100,
      category: "ENT Specialist",
      hospital: "Ear, Nose & Throat Clinic",
      gender: "Female"
    },
    {
      id: 19,
      name: "Dr. Steven Perez",
      appointment_time: "12:00 PM to 1:00 PM",
      fees: 160,
      category: "Allergist/Immunologist",
      hospital: "Allergy Relief Center",
      gender: "Male"
    },
    {
      id: 20,
      name: "Dr. Maria Evans",
      appointment_time: "9:00 AM to 10:00 AM",
      fees: 220,
      category: "Plastic Surgeon",
      hospital: "Aesthetic Surgery Clinic",
      gender: "Female"
    }
  ];
  

  export const currentuser = {
    name: "Farhan",
    email: "syedfarhan1224398@gmail.com",
    role: "doctor"
    
  }

  export const appointments = [
    {
      user: {
        name: "Ali Khan",
        email: "alikhan@gmail.com",
      },
      appointmentTime: "10:30 AM",
      status: "Confirmed",
      appointmentDate: "2024-11-22",
      doctor: {
        name: "Dr. Sarah Ahmed",
        hospital: "City General Hospital",
      },
    },
    {
      user: {
        name: "Zara Farooq",
        email: "zara.farooq@yahoo.com",
      },
      appointmentTime: "02:00 PM",
      status: "Pending",
      appointmentDate: "2024-11-23",
      doctor: {
        name: "Dr. Faisal Mahmood",
        hospital: "Hope Medical Center",
      },
    },
    {
      user: {
        name: "Bilal Sheikh",
        email: "bilal.sheikh@outlook.com",
      },
      appointmentTime: "09:00 AM",
      status: "Cancelled",
      appointmentDate: "2024-11-20",
      doctor: {
        name: "Dr. Ayesha Khan",
        hospital: "National Healthcare Clinic",
      },
    },
    {
      user: {
        name: "Maria Siddiqui",
        email: "maria.sid123@gmail.com",
      },
      appointmentTime: "03:15 PM",
      status: "Confirmed",
      appointmentDate: "2024-11-24",
      doctor: {
        name: "Dr. Omar Ali",
        hospital: "Wellness Hospital",
      },
    },
    {
      user: {
        name: "Hassan Tariq",
        email: "hassan.tariq123@gmail.com",
      },
      appointmentTime: "11:45 AM",
      status: "Completed",
      appointmentDate: "2024-11-18",
      doctor: {
        name: "Dr. Sana Rafiq",
        hospital: "Dow Medical Center",
      },
    },
  ];
  