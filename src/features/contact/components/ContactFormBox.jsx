"use client";

import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

import Button from "@/shared/components/Button";
import { sendContactMessage } from "../actions/contact.action";

const categories = [
  { value: "reservations", label: "Room Booking & Reservations" },
  { value: "payments", label: "Payment & Currency Assistance" },
  { value: "corporate", label: "Corporate Stay Accounts" },
  { value: "events", label: "Special Event Request" },
  { value: "others", label: "Others" },
];

const initialState = {
  success: false,
  message: "",
};

const ContactFormBox = () => {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message, { position: "bottom-left" });
    } else {
      toast.error(state.message, { position: "bottom-left" });
    }
  }, [state]);

  return (
    <div className="h-full rounded-2xl border border-muted bg-white p-8 shadow-lg sm:p-10">
      <h2 className="mb-2 text-2xl font-luxury text-primary">Send a Message</h2>

      <p className="mb-8 text-xs text-primary/60 font-secondary">
        Expect a response from our concierge team within 2 business hours.
      </p>

      <form action={formAction} className="space-y-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <InputCard
            label="Full Name"
            placeholder="John Doe"
            type="text"
            name="full_name"
          />

          <InputCard
            label="Email Address"
            placeholder="john@example.com"
            type="email"
            name="email"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            Inquiry Category
          </label>

          <select
            name="category"
            className="w-full cursor-pointer appearance-none rounded-xl border border-muted bg-light px-4 py-3 text-sm text-primary transition-colors focus:border-secondary focus:outline-none"
          >
            {categories.map((category) => (
              <option
                key={category.value}
                value={category.value}
                className="bg-dark text-light"
              >
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            Your Message
          </label>

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Tell us about your upcoming travel requirements..."
            className="w-full resize-none rounded-xl border border-muted bg-light px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={pending}
          className="w-full rounded-full bg-primary px-8 py-3.5 text-sm text-light shadow-sm transition-all duration-200 hover:bg-secondary active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {pending ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  );
};

export default ContactFormBox;

/* ================= SUB COMPONENT ================= */

const InputCard = ({ label, placeholder, type, name, required = true }) => {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-primary/70">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-muted bg-light px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none"
      />
    </div>
  );
};
