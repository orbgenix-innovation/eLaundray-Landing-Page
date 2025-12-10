"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, CheckCircle, Clock, Truck } from "lucide-react";
import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <nav className="flex items-center justify-between px-10 py-4 backdrop-blur-xl bg-white/60 rounded-xl shadow-md">
        <Link
          href={"/"}
          className="text-2xl font-bold flex items-center gap-2 text-blue-900"
        >
          eLaundry
        </Link>

        <div className="hidden md:flex items-center gap-8 text-gray-700">
          <span className="hover:text-black cursor-pointer">Services</span>
          <span className="hover:text-black cursor-pointer">Help</span>
          <span className="hover:text-black cursor-pointer">Pricing</span>
          <span className="hover:text-black cursor-pointer">Recyclers</span>
        </div>

        <Button className="rounded-full px-6 py-5 shadow bg-blue-600 text-white hover:bg-blue-700">
          Get the App
        </Button>
      </nav>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Professional Laundry & Dry Cleaning
        </h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Fast, affordable, and premium quality laundry service with free pickup
          & delivery.
        </p>

        <Button
          size="lg"
          className="mt-6 bg-white text-blue-600 hover:bg-gray-100"
        >
          Book a Service
        </Button>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mt-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Card
              key={service.title}
              className="shadow-md hover:shadow-lg transition"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <service.icon className="h-6 w-6 text-blue-600" />
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose E-Laundry?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES.map((item) => (
            <div key={item.title} className="flex gap-4">
              <item.icon className="h-8 w-8 text-green-600 shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((price) => (
            <Card
              key={price.title}
              className="shadow-md hover:shadow-lg transition"
            >
              <CardHeader>
                <CardTitle>{price.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {price.items.map((item) => (
                  <p
                    key={item}
                    className="text-gray-600 flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 text-blue-600" /> {item}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center mt-20 py-14 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Schedule a Pickup?</h2>
        <p className="opacity-90">
          Fast delivery, premium care, and affordable pricing.
        </p>

        <Button
          size="lg"
          className="mt-6 bg-white text-blue-700 hover:bg-gray-100"
        >
          Book Now
        </Button>
      </section>
    </div>
  );
}

const SERVICES = [
  {
    title: "Wash & Fold",
    description:
      "Perfect for everyday laundry. We wash, dry and neatly fold your clothes.",
    icon: BadgeCheck,
  },
  {
    title: "Dry Cleaning",
    description:
      "Premium dry cleaning for suits, sarees, coats, jackets, and delicate fabrics.",
    icon: Truck,
  },
  {
    title: "Ironing / Press",
    description: "Get perfectly pressed clothes with crisp finishing.",
    icon: Clock,
  },
];

const FEATURES = [
  {
    title: "Free Pickup & Delivery",
    description:
      "We collect your laundry from your doorstep and deliver it fresh.",
    icon: Truck,
  },
  {
    title: "Express Delivery",
    description:
      "Get your laundry delivered within 24 hours with our express option.",
    icon: Clock,
  },
  {
    title: "Affordable Pricing",
    description: "Best prices in town with premium quality service.",
    icon: CheckCircle,
  },
  {
    title: "Quality Guaranteed",
    description:
      "We use top-grade detergents & careful handling for every fabric.",
    icon: BadgeCheck,
  },
];

const PRICING = [
  {
    title: "Wash & Fold",
    items: ["Shirt – $2", "Pant – $2.5", "Kurti – $3", "Bedsheet – $4"],
  },
  {
    title: "Dry Cleaning",
    items: ["Suit – $10", "Saree – $8", "Jacket – $12", "Blazer – $15"],
  },
  {
    title: "Iron / Press",
    items: ["Shirt – $1", "Pant – $1.5", "Saree – $3", "Blouse – $1.2"],
  },
];
