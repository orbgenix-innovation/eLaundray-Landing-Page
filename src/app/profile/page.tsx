"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import OrderForm from "@/components/shared/OrderForm";
import Footer from "@/components/shared/Footer";
import Link from "next/link";

// Sample user data and orders
const userData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+880123456789",
  address: "123 Main Street, Dhaka, Bangladesh",
};

const ordersData = [
  { id: 1, service: "Wash & Fold", status: "Completed", date: "2025-12-01" },
  { id: 2, service: "Dry Clean", status: "In Progress", date: "2025-12-05" },
  { id: 3, service: "Ironing", status: "Pending", date: "2025-12-08" },
];

export default function ProfilePage() {
  const [orders] = useState<typeof ordersData>(ordersData);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-blue-100 text-blue-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className=" bg-linear-to-br from-blue-100 via-white to-orange-100 p-6">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-4 backdrop-blur-xl bg-white/60 rounded-xl shadow-md">
        <Link
          href={"/"}
          className="text-2xl font-bold flex items-center gap-2 text-blue-900"
        >
          E-Londri <span className="text-3xl">🌀</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <span className="hover:text-black cursor-pointer">Services</span>
          <span className="hover:text-black cursor-pointer">Help</span>
          <span className="hover:text-black cursor-pointer">Pricing</span>
          <span className="hover:text-black cursor-pointer">Recyclers</span>
        </div>

        <Button className="rounded-full px-6 py-5 shadow bg-blue-600 text-white hover:bg-blue-700">
          Get the App ▶️
        </Button>
      </nav>

      {/* Page Content */}
      <div className="w-full max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile */}
        <section className="backdrop-blur-xl bg-white/60 shadow-lg rounded-2xl p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full bg-blue-200 border-4 border-white shadow-md flex items-center justify-center text-4xl font-bold text-blue-700">
              {userData.name.charAt(0)}
            </div>

            <h2 className="text-2xl mt-4 font-semibold">{userData.name}</h2>
            <p className="text-gray-600">{userData.email}</p>
          </div>

          <div className="mt-6 space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Phone:</span> {userData.phone}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {userData.address}
            </p>
          </div>

          <Button className="mt-6 w-full" variant="outline">
            Edit Profile
          </Button>
        </section>

        {/* Orders */}
        <section className="md:col-span-2 backdrop-blur-xl bg-white/60 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-100/70">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Service
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">{order.id}</td>
                    <td className="px-4 py-3">{order.service}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{order.date}</td>
                    <td className="px-4 py-3">
                      <Button
                        size="sm"
                        className="rounded-full"
                        variant="outline"
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
