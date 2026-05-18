"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  // SEND OTP
  const sendOtp = async () => {

    const res = await fetch("/api/auth/send-otp", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    alert(data.message);

    if (data.success) {
      setStep(2);
    }
  };

  // VERIFY OTP
  const verifyOtp = async () => {

    const res = await fetch("/api/auth/verify-otp", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        otp,
      }),
    });

    const data = await res.json();

    alert(data.message);

    // ROLE BASED LOGIN
    if (data.success) {

      if (data.role === "admin") {
        router.push("/admin");
      }

      else {
        router.push("/dashboard");
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-center text-3xl font-bold">
          OTP Login
        </h1>

        {/* EMAIL STEP */}
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-full rounded-lg border p-3"
            />

            <button
              onClick={sendOtp}
              className="w-full rounded-lg bg-blue-600 p-3 text-white"
            >
              Send OTP
            </button>
          </>
        )}

        {/* OTP STEP */}
        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mb-4 w-full rounded-lg border p-3"
            />

            <button
              onClick={verifyOtp}
              className="w-full rounded-lg bg-green-600 p-3 text-white"
            >
              Verify OTP
            </button>
          </>
        )}

      </div>
    </div>
  );
}