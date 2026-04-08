export const BOOKED_RANGES = [
  { start: new Date(2026, 2, 10), end: new Date(2026, 2, 15) },
  { start: new Date(2026, 2, 20), end: new Date(2026, 2, 25) },
  { start: new Date(2026, 3, 20), end: new Date(2026, 3, 25) },
];

// Sample Data based on your Schema
export const BOOKING_DATA = [
  {
    _id: "69c413be84ed74c47022519c",
    checkIn: "2026-04-10",
    checkOut: "2026-04-12",
    totalPrice: 560,
    discount: 20,
    status: "pending",
    isPaid: false,
    room: {
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80",
      category: "Luxury Suite",
      title: "Royal Ocean Penthouse",
      rating: 4.9,
      capacity: 2,
      size: 850,
    },
    payment: null,
  },
  {
    _id: "69c413be84ed74c47022519d",
    checkIn: "2026-04-15",
    checkOut: "2026-04-18",
    totalPrice: 720,
    discount: 30,
    status: "confirmed",
    isPaid: false,
    room: {
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
      category: "Luxury Suite",
      title: "Royal Ocean Penthouse",
      rating: 4.8,
      capacity: 2,
      size: 900,
    },
    payment: {
      _id: "69ce63a33b60100a6774e9ff",
      status: "success",
      amount: 360,
      paymentPercentage: 50,
      method: "stripe",
      currency: "USD",
      tran_id: "pi_3P4x...",
    },
  },
  {
    _id: "69c413be84ed74c47022519e",
    checkIn: "2026-04-20",
    checkOut: "2026-04-23",
    totalPrice: 560,
    discount: 20,
    status: "confirmed",
    isPaid: true,
    room: {
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
      category: "Luxury Suite",
      title: "Royal Ocean Penthouse",
      rating: 4.9,
      capacity: 2,
      size: 850,
    },
    payment: {
      _id: "69ce63a33b60100a6774e9fa",
      status: "success",
      amount: 560,
      paymentPercentage: 100,
      method: "stripe",
      currency: "USD",
      tran_id: "cs_test_a1w3...",
    },
  },

  // NEW OBJECT 4
  {
    _id: "69c413be84ed74c47022519f",
    checkIn: "2026-04-25",
    checkOut: "2026-04-27",
    totalPrice: 420,
    discount: 10,
    status: "canceled",
    isPaid: false,
    room: {
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80",
      category: "Deluxe Room",
      title: "City View Deluxe",
      rating: 4.6,
      capacity: 2,
      size: 650,
    },
    payment: null,
  },

  // NEW OBJECT 5
  {
    _id: "69c413be84ed74c4702251a0",
    checkIn: "2026-05-01",
    checkOut: "2026-05-05",
    totalPrice: 980,
    discount: 50,
    status: "confirmed",
    isPaid: false,
    room: {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      category: "Presidential Suite",
      title: "Grand Presidential Suite",
      rating: 5.0,
      capacity: 4,
      size: 1200,
    },
    payment: {
      _id: "69ce63a33b60100a6774e9fb",
      status: "success",
      amount: 490,
      paymentPercentage: 50,
      method: "stripe",
      currency: "USD",
      tran_id: "pi_9x83kd...",
    },
  },
];
