"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
// import { z } from "zod"
import React from "react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  name: z.string().min(2,{
    message: "Username must be at least 2 characters.",
  }).max(50),
  bio: z.string().min(2).max(120),
  hospital: z.string().min(2).max(50),
  days: z.string(),
  fees: z.string(),
  gender : z.string(),
  appointmentTime: z.string(),
  appointmentDate: z.date(),
  spaialization: z.string(),
  experience: z.string(),
  profileImg: z.string(),
  number: z.string(),
  email: z.string().email(),
  address: z.string(),
})

// const form = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     },
//   })

//   function onSubmit(values) {
//     console.log(values)
//   }





const DoctorAppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-8 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto border border-gray-200"
>
  <h2 className="text-xl font-semibold text-gray-800 text-center">Doctor Registration Form</h2>

  <div className="grid grid-cols-2 gap-6">
    {/* Name Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your name"
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700">Email</label>
      <input
        {...register("email")}
        type="email"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Email address"
      />
    </div>

    {/* Hospital Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Hospital</label>
      <input
        {...register("hospital")}
        type="text"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Hospital name"
      />
    </div>

    {/* Specialization */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Specialization</label>
      <input
        {...register("specialization")}
        type="text"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="e.g., Cardiologist"
      />
    </div>

    {/* Appointment Date */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
      <input
        {...register("appointmentDate")}
        type="date"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    


    {/* Appointment Time */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Appointment Time</label>
      <input
        {...register("appointmentTime")}
        type="time"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>


    {/* Gender Field */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Gender</label>
      <select
        {...register("gender")}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>

    {/* Fees */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Fees</label>
      <input
        {...register("fees")}
        type="number"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter consultation fees"
      />
    </div>


    {/* Experience */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Experience</label>
      <input
        {...register("experience")}
        type="number"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Years of experience"
      />
    </div>

    {/* Contact Details */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Phone Number</label>
      <input
        {...register("number")}
        type="tel"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Phone number"
      />
    </div>

    {/* Available Days */}
    <div>
  <label className="block text-sm font-medium text-gray-700">Appointment Day</label>
  <select
    {...register("appointmentDay", { required: "Please select a day" })}
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
  >
    <option value="" disabled selected>
      Select a day
    </option>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
  </select>
  {errors.appointmentDay && (
    <p className="text-sm text-red-600 mt-1">{errors.appointmentDay.message}</p>
  )}
</div>



    {/* Profile Image Upload */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Profile Image</label>
      <input
        {...register("profileImg")}
        type="file"
        accept="image/*"
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    {/* Bio Field */}
    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-700">Bio</label>
      <textarea
        {...register("bio")}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write a short bio"
      ></textarea>
    </div>

    <div className="col-span-2">
      <label className="block text-sm font-medium text-gray-700">Address</label>
      <textarea
        {...register("address")}
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Complete address"
      ></textarea>
    </div>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <Button className="w-full">submit</Button>
  </div>
</form>

  );
};

export default DoctorAppointmentForm;
