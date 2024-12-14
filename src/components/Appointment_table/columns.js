"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "doctor.name",
    header: "Doctor Name ",
  },
  {
      accessorKey: "user.name",
      header: "Paitent Name ",
    },
    {
        accessorKey: "appointmentDate",
        header: "Appointment Date",
    },
    {
        accessorKey: "appointmentTime",
        header: "Appointment Time",
    },
    {
      accessorKey: "doctor.hospital",
      header: "Hospital Name ",
    },
  {
    accessorKey: "status",
    header: "Status",
  },
]
