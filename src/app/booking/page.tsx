"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

// Types
interface TimeSlot {
  time: string;
  available: boolean;
  spotsLeft: number;
}

interface BookingData {
  date: Date | null;
  timeSlot: string | null;
  players: number;
  name: string;
  email: string;
  phone: string;
  notes: string;
}

// Generate time slots for a given date (7:00 AM to 6:00 PM, 10-minute intervals)
const generateTimeSlots = (date: Date | null): TimeSlot[] => {
  if (!date) return [];

  const slots: TimeSlot[] = [];
  const startHour = 7;
  const endHour = 18;

  // Use date as seed for "random" availability (simulated)
  const dateString = date.toISOString().split("T")[0];
  const dateSeed = dateString.split("-").reduce((acc, num) => acc + parseInt(num), 0);

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 10) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      const slotSeed = dateSeed + hour * 60 + minute;

      // Simulate availability (some slots taken, some available)
      const isAvailable = slotSeed % 5 !== 0; // ~80% availability
      const spotsLeft = isAvailable ? (slotSeed % 4) + 1 : 0;

      slots.push({
        time: timeString,
        available: isAvailable,
        spotsLeft,
      });
    }
  }

  return slots;
};

// Format time for display
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHours}:${minutes.toString().padStart(2, "0")} ${period}`;
};

// Calendar Component
function Calendar({
  selectedDate,
  onSelectDate,
}: {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [currentMonth]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const isDateDisabled = (date: Date | null): boolean => {
    if (!date) return true;
    // Disable past dates
    if (date < today) return true;
    // Disable dates more than 30 days in the future
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + 30);
    if (date > maxDate) return true;
    return false;
  };

  const isDateSelected = (date: Date | null): boolean => {
    if (!date || !selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const isToday = (date: Date | null): boolean => {
    if (!date) return false;
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const monthYear = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-[var(--cream)] rounded-lg transition-colors"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-[var(--pine-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h3 className="text-lg font-semibold text-[var(--pine-green)]">{monthYear}</h3>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-[var(--cream)] rounded-lg transition-colors"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-[var(--pine-green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth.map((date, index) => (
          <button
            key={index}
            onClick={() => date && !isDateDisabled(date) && onSelectDate(date)}
            disabled={isDateDisabled(date)}
            className={`
              aspect-square flex items-center justify-center text-sm rounded-lg transition-all
              ${!date ? "invisible" : ""}
              ${isDateDisabled(date) ? "text-gray-300 cursor-not-allowed" : "hover:bg-[var(--accent)]/10 cursor-pointer"}
              ${isDateSelected(date) ? "bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-dark)]" : ""}
              ${isToday(date) && !isDateSelected(date) ? "border-2 border-[var(--accent)] font-semibold" : ""}
            `}
          >
            {date?.getDate()}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-[var(--accent)] rounded"></div>
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[var(--accent)] rounded"></div>
          <span>Selected</span>
        </div>
      </div>
    </div>
  );
}

// Time Slot Selector Component
function TimeSlotSelector({
  date,
  selectedTime,
  onSelectTime,
}: {
  date: Date | null;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}) {
  const timeSlots = useMemo(() => generateTimeSlots(date), [date]);

  const timeGroups = useMemo(() => {
    return {
      morning: timeSlots.filter((slot) => {
        const hour = parseInt(slot.time.split(":")[0]);
        return hour >= 7 && hour < 12;
      }),
      afternoon: timeSlots.filter((slot) => {
        const hour = parseInt(slot.time.split(":")[0]);
        return hour >= 12 && hour < 17;
      }),
      evening: timeSlots.filter((slot) => {
        const hour = parseInt(slot.time.split(":")[0]);
        return hour >= 17;
      }),
    };
  }, [timeSlots]);

  if (!date) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <div className="py-12">
          <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-gray-500">Select a date to see available tee times</p>
        </div>
      </div>
    );
  }

  const dateFormatted = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-[var(--pine-green)] mb-2">
        Available Tee Times
      </h3>
      <p className="text-sm text-gray-500 mb-6">{dateFormatted}</p>

      <div className="space-y-6">
        {/* Morning Slots */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h4 className="font-medium text-[var(--pine-green)]">Morning</h4>
            <span className="text-xs text-gray-400">7:00 AM - 12:00 PM</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {timeGroups.morning.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && onSelectTime(slot.time)}
                disabled={!slot.available}
                className={`
                  py-2 px-1 text-sm rounded-lg transition-all text-center
                  ${!slot.available ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through" : ""}
                  ${slot.available && selectedTime !== slot.time ? "bg-[var(--cream)] text-[var(--pine-green)] hover:bg-[var(--accent)]/20" : ""}
                  ${selectedTime === slot.time ? "bg-[var(--accent)] text-white font-semibold" : ""}
                `}
              >
                {formatTime(slot.time)}
              </button>
            ))}
          </div>
        </div>

        {/* Afternoon Slots */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h4 className="font-medium text-[var(--pine-green)]">Afternoon</h4>
            <span className="text-xs text-gray-400">12:00 PM - 5:00 PM</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {timeGroups.afternoon.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && onSelectTime(slot.time)}
                disabled={!slot.available}
                className={`
                  py-2 px-1 text-sm rounded-lg transition-all text-center
                  ${!slot.available ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through" : ""}
                  ${slot.available && selectedTime !== slot.time ? "bg-[var(--cream)] text-[var(--pine-green)] hover:bg-[var(--accent)]/20" : ""}
                  ${selectedTime === slot.time ? "bg-[var(--accent)] text-white font-semibold" : ""}
                `}
              >
                {formatTime(slot.time)}
              </button>
            ))}
          </div>
        </div>

        {/* Evening Slots */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <h4 className="font-medium text-[var(--pine-green)]">Evening</h4>
            <span className="text-xs text-gray-400">5:00 PM - 6:00 PM</span>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
            {timeGroups.evening.map((slot) => (
              <button
                key={slot.time}
                onClick={() => slot.available && onSelectTime(slot.time)}
                disabled={!slot.available}
                className={`
                  py-2 px-1 text-sm rounded-lg transition-all text-center
                  ${!slot.available ? "bg-gray-100 text-gray-400 cursor-not-allowed line-through" : ""}
                  ${slot.available && selectedTime !== slot.time ? "bg-[var(--cream)] text-[var(--pine-green)] hover:bg-[var(--accent)]/20" : ""}
                  ${selectedTime === slot.time ? "bg-[var(--accent)] text-white font-semibold" : ""}
                `}
              >
                {formatTime(slot.time)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[var(--cream)] rounded"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 rounded"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
}

// Booking Form Component
function BookingForm({
  booking,
  onUpdateBooking,
  onSubmit,
  onBack,
}: {
  booking: BookingData;
  onUpdateBooking: (data: Partial<BookingData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!booking.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!booking.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(booking.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!booking.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  const dateFormatted = booking.date?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-[var(--pine-green)] mb-6">
        Complete Your Reservation
      </h3>

      {/* Booking Summary */}
      <div className="bg-[var(--cream)] rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Selected Tee Time</p>
            <p className="font-semibold text-[var(--pine-green)]">
              {dateFormatted}
            </p>
            <p className="text-[var(--accent)] font-medium">
              {booking.timeSlot && formatTime(booking.timeSlot)}
            </p>
          </div>
          <button
            onClick={onBack}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            Change
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Number of Players */}
        <div>
          <label className="block text-sm font-medium text-[var(--pine-green)] mb-2">
            Number of Players
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => onUpdateBooking({ players: num })}
                className={`
                  flex-1 py-3 rounded-lg font-medium transition-all
                  ${booking.players === num
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--cream)] text-[var(--pine-green)] hover:bg-[var(--accent)]/20"
                  }
                `}
              >
                {num} {num === 1 ? "Player" : "Players"}
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[var(--pine-green)] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={booking.name}
            onChange={(e) => onUpdateBooking({ name: e.target.value })}
            className={`
              w-full px-4 py-3 rounded-lg border transition-colors
              ${errors.name ? "border-red-500" : "border-gray-200"}
              focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20
            `}
            placeholder="John Smith"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--pine-green)] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={booking.email}
            onChange={(e) => onUpdateBooking({ email: e.target.value })}
            className={`
              w-full px-4 py-3 rounded-lg border transition-colors
              ${errors.email ? "border-red-500" : "border-gray-200"}
              focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20
            `}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[var(--pine-green)] mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            value={booking.phone}
            onChange={(e) => onUpdateBooking({ phone: e.target.value })}
            className={`
              w-full px-4 py-3 rounded-lg border transition-colors
              ${errors.phone ? "border-red-500" : "border-gray-200"}
              focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20
            `}
            placeholder="(555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-[var(--pine-green)] mb-2">
            Special Requests (Optional)
          </label>
          <textarea
            id="notes"
            value={booking.notes}
            onChange={(e) => onUpdateBooking({ notes: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 resize-none"
            placeholder="Golf cart needed, accessibility requirements, etc."
          />
        </div>

        {/* Notice */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
          <p className="flex items-start gap-2">
            <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              No payment required today. We&apos;ll confirm your reservation via email
              and you can pay at the pro shop on the day of your round.
            </span>
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full btn-primary py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}

// Confirmation Component
function BookingConfirmation({
  booking,
  onNewBooking,
}: {
  booking: BookingData;
  onNewBooking: () => void;
}) {
  const dateFormatted = booking.date?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Generate a confirmation number
  const confirmationNumber = `WP${Date.now().toString().slice(-8)}`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-2">
          Reservation Confirmed!
        </h2>
        <p className="text-gray-500 mb-6">
          Your tee time has been reserved. We&apos;ve sent a confirmation email to {booking.email}
        </p>

        {/* Confirmation Details */}
        <div className="bg-[var(--cream)] rounded-xl p-6 text-left mb-6">
          <div className="grid gap-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Confirmation #</span>
              <span className="font-semibold text-[var(--pine-green)]">{confirmationNumber}</span>
            </div>
            <div className="border-t border-[var(--sand)] pt-4 flex justify-between">
              <span className="text-gray-500">Date</span>
              <span className="font-semibold text-[var(--pine-green)]">{dateFormatted}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tee Time</span>
              <span className="font-semibold text-[var(--accent)]">
                {booking.timeSlot && formatTime(booking.timeSlot)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Players</span>
              <span className="font-semibold text-[var(--pine-green)]">{booking.players}</span>
            </div>
            <div className="border-t border-[var(--sand)] pt-4 flex justify-between">
              <span className="text-gray-500">Name</span>
              <span className="font-semibold text-[var(--pine-green)]">{booking.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Phone</span>
              <span className="font-semibold text-[var(--pine-green)]">{booking.phone}</span>
            </div>
          </div>
        </div>

        {/* Important Info */}
        <div className="bg-[var(--pine-green)]/5 rounded-xl p-4 text-left mb-6">
          <h4 className="font-semibold text-[var(--pine-green)] mb-2">Important Information</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Please arrive 15-20 minutes before your tee time
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              To cancel or modify, call (715) 289-4653
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-[var(--accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Located at 24700 County Highway X, Cadott, WI 54727
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onNewBooking}
            className="flex-1 btn-secondary py-3 rounded-xl font-semibold"
          >
            Book Another Tee Time
          </button>
          <Link
            href="/"
            className="flex-1 bg-[var(--cream)] text-[var(--pine-green)] py-3 rounded-xl font-semibold hover:bg-[var(--sand)] transition-colors text-center"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

// Main Booking Page
export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [booking, setBooking] = useState<BookingData>({
    date: null,
    timeSlot: null,
    players: 2,
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);

  const updateBooking = (data: Partial<BookingData>) => {
    setBooking((prev) => ({ ...prev, ...data }));
  };

  const handleDateSelect = (date: Date) => {
    updateBooking({ date, timeSlot: null });
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    updateBooking({ timeSlot: time });
  };

  const handleContinueToForm = () => {
    if (booking.date && booking.timeSlot) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = () => {
    setIsConfirmed(true);
  };

  const handleNewBooking = () => {
    setBooking({
      date: null,
      timeSlot: null,
      players: 2,
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
    setCurrentStep(1);
    setIsConfirmed(false);
  };

  const steps = [
    { number: 1, label: "Select Date" },
    { number: 2, label: "Choose Time" },
    { number: 3, label: "Your Details" },
  ];

  if (isConfirmed) {
    return (
      <main className="min-h-screen bg-[var(--cream)]">
        {/* Header */}
        <div className="bg-[var(--pine-green)] pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
              Reservation Complete
            </h1>
          </div>
        </div>

        {/* Confirmation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <BookingConfirmation booking={booking} onNewBooking={handleNewBooking} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Header */}
      <div className="bg-[var(--pine-green)] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
            Book Your Tee Time
          </h1>
          <p className="text-white/80 text-center max-w-2xl mx-auto">
            Reserve your round at Whispering Pines Golf Course. Select your preferred date
            and time, and we&apos;ll hold your spot on the course.
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-4">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex items-center gap-3">
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all
                      ${currentStep >= step.number
                        ? "bg-[var(--accent)] text-white"
                        : "bg-gray-100 text-gray-400"
                      }
                    `}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`hidden sm:block text-sm font-medium ${
                      currentStep >= step.number ? "text-[var(--pine-green)]" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 ${
                      currentStep > step.number ? "bg-[var(--accent)]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentStep < 3 ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Calendar */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--pine-green)] mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[var(--accent)] text-white rounded-full flex items-center justify-center text-sm">
                  1
                </span>
                Select a Date
              </h2>
              <Calendar
                selectedDate={booking.date}
                onSelectDate={handleDateSelect}
              />
            </div>

            {/* Right Column - Time Slots */}
            <div>
              <h2 className="text-xl font-semibold text-[var(--pine-green)] mb-4 flex items-center gap-2">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  booking.date ? "bg-[var(--accent)] text-white" : "bg-gray-200 text-gray-400"
                }`}>
                  2
                </span>
                Choose a Tee Time
              </h2>
              <TimeSlotSelector
                date={booking.date}
                selectedTime={booking.timeSlot}
                onSelectTime={handleTimeSelect}
              />

              {/* Continue Button */}
              {booking.date && booking.timeSlot && (
                <button
                  onClick={handleContinueToForm}
                  className="w-full mt-6 btn-primary py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2"
                >
                  Continue to Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-semibold text-[var(--pine-green)] mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-[var(--accent)] text-white rounded-full flex items-center justify-center text-sm">
                3
              </span>
              Enter Your Details
            </h2>
            <BookingForm
              booking={booking}
              onUpdateBooking={updateBooking}
              onSubmit={handleSubmit}
              onBack={() => setCurrentStep(2)}
            />
          </div>
        )}
      </div>

      {/* Help Section */}
      <div className="bg-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--pine-green)] mb-2">
              Need Help Booking?
            </h2>
            <p className="text-gray-600">
              Our friendly staff is here to assist you with your reservation.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="tel:7152894653"
              className="flex flex-col items-center p-6 bg-[var(--cream)] rounded-xl hover:bg-[var(--sand)] transition-colors"
            >
              <svg className="w-8 h-8 text-[var(--accent)] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold text-[var(--pine-green)]">Call Us</span>
              <span className="text-sm text-gray-500">(715) 289-4653</span>
            </a>

            <a
              href="mailto:info@whisperingpinesgc.net"
              className="flex flex-col items-center p-6 bg-[var(--cream)] rounded-xl hover:bg-[var(--sand)] transition-colors"
            >
              <svg className="w-8 h-8 text-[var(--accent)] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-[var(--pine-green)]">Email Us</span>
              <span className="text-sm text-gray-500">info@whisperingpinesgc.net</span>
            </a>

            <Link
              href="/location"
              className="flex flex-col items-center p-6 bg-[var(--cream)] rounded-xl hover:bg-[var(--sand)] transition-colors"
            >
              <svg className="w-8 h-8 text-[var(--accent)] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-semibold text-[var(--pine-green)]">Visit Us</span>
              <span className="text-sm text-gray-500">Get Directions</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
