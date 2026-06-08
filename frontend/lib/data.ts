import {
  Bike,
  BookOpen,
  Coffee,
  GraduationCap,
  Headphones,
  Laptop,
  PenTool,
  Shirt,
  Sofa,
  Sparkles
} from "lucide-react";

export const products = [
  {
    id: 1,
    title: "MacBook Air M2",
    category: "Electronics",
    price: "$730",
    condition: "Like new",
    campus: "North Library",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    seller: "Maya Chen",
    badge: "Verified"
  },
  {
    id: 2,
    title: "Organic Chemistry Set",
    category: "Textbooks",
    price: "$48",
    condition: "Good",
    campus: "Science Hall",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    seller: "Jordan Lee",
    badge: "Deal"
  },
  {
    id: 3,
    title: "Dorm Lounge Chair",
    category: "Furniture",
    price: "$35",
    condition: "Fair",
    campus: "Maple Dorms",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=80",
    seller: "Nora Ali",
    badge: "Pickup"
  },
  {
    id: 4,
    title: "City Bike",
    category: "Transport",
    price: "$120",
    condition: "Good",
    campus: "Main Quad",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    seller: "Sam Rivera",
    badge: "Popular"
  }
];

export const services = [
  {
    title: "Calculus Tutoring",
    provider: "Amir Hassan",
    price: "$18/hr",
    rating: "4.9",
    location: "Online or library",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    tags: ["Math", "Exam prep"]
  },
  {
    title: "Resume Review",
    provider: "Priya Patel",
    price: "$12",
    rating: "4.8",
    location: "Career center",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    tags: ["Career", "Fast"]
  },
  {
    title: "Event Photography",
    provider: "Leo Martins",
    price: "$55/session",
    rating: "5.0",
    location: "Campus-wide",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    tags: ["Creative", "Clubs"]
  }
];

export const categories = [
  { name: "Textbooks", icon: BookOpen, count: "186" },
  { name: "Electronics", icon: Laptop, count: "94" },
  { name: "Furniture", icon: Sofa, count: "61" },
  { name: "Transport", icon: Bike, count: "28" },
  { name: "Clothing", icon: Shirt, count: "73" },
  { name: "Tutoring", icon: GraduationCap, count: "44" },
  { name: "Creative", icon: PenTool, count: "39" },
  { name: "Cafe Deals", icon: Coffee, count: "22" },
  { name: "Audio", icon: Headphones, count: "31" },
  { name: "Free Finds", icon: Sparkles, count: "17" }
];

export const conversations = [
  {
    name: "Maya Chen",
    item: "MacBook Air M2",
    message: "I can meet after data structures at 4:30.",
    time: "2m",
    active: true
  },
  {
    name: "Jordan Lee",
    item: "Organic Chemistry Set",
    message: "Still available. It includes the lab manual too.",
    time: "18m",
    active: false
  },
  {
    name: "Priya Patel",
    item: "Resume Review",
    message: "Send me the role and I will tailor the notes.",
    time: "1h",
    active: false
  }
];

export const dashboardStats = [
  { label: "Active listings", value: "12", change: "+3 this week" },
  { label: "Unread chats", value: "7", change: "4 need replies" },
  { label: "Saved items", value: "28", change: "6 price drops" },
  { label: "Campus rating", value: "4.9", change: "32 reviews" }
];
