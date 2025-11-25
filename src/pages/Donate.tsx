// "use client"

// import { useState, type FormEvent } from "react"
// import { Link } from "react-router-dom"
// import { ArrowLeft, Heart, Loader2 } from "lucide-react"

// export default function Donate() {
//   const [amount, setAmount] = useState("")
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)

//   const handleDonate = async (e: FormEvent) => {
//     e.preventDefault()

//     const donationAmount = Number.parseFloat(amount)
//     if (isNaN(donationAmount) || donationAmount < 1) {
//       setError("Please enter a valid amount (minimum $1)")
//       return
//     }

//     setLoading(true)
//     setError("")

//     try {
//       // Call your backend to create checkout session
//       const response = await fetch("https://willy-stripe.onrender.com/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ amount: donationAmount }),
//       })

//       const data = await response.json()

//       if (data.url) {
//         // Redirect to Stripe Checkout
//         window.location.href = data.url
//       } else {
//         setError("Failed to create checkout session")
//         setLoading(false)
//       }
//     } catch (err) {
//       console.error("Donation error:", err)
//       setError("An error occurred. Please try again.")
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url(/children-studying-in-classroom-ghana.jpg)",
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-800/90" />
//       </div>

//       {/* Back Button */}
//       <Link
//         to="/"
//         className="absolute left-4 top-4 z-10 flex items-center gap-2 text-white transition-opacity hover:opacity-80 md:left-8 md:top-8"
//       >
//         <ArrowLeft className="h-5 w-5" />
//         <span className="font-medium">Back to Home</span>
//       </Link>

//       {/* Donation Form */}
//       <div className="relative z-10 mx-4 w-full max-w-md">
//         <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
//           <div className="mb-8 text-center">
//             <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
//               <Heart className="h-8 w-8 text-orange-600" />
//             </div>
//             <h1 className="mb-2 text-3xl font-bold text-gray-900">Make a Donation</h1>
//             <p className="text-gray-600">Support our mission to build a brighter future for Ghana</p>
//           </div>

//           <form onSubmit={handleDonate} className="space-y-6">
//             <div>
//               <label htmlFor="amount" className="mb-2 block text-sm font-medium text-gray-700">
//                 Donation Amount (USD)
//               </label>
//               <div className="relative">
//                 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-600">$</span>
//                 <input
//                   id="amount"
//                   type="number"
//                   min="1"
//                   step="0.01"
//                   placeholder="50.00"
//                   value={amount}
//                   onChange={(e) => {
//                     setAmount(e.target.value)
//                     setError("")
//                   }}
//                   className="h-14 w-full rounded-xl border border-input bg-background pl-8 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
//                   required
//                   disabled={loading}
//                 />
//               </div>
//             </div>

//             {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>}

//             <button
//               type="submit"
//               disabled={!amount || Number.parseFloat(amount) < 1 || loading}
//               className="flex h-14 w-full items-center justify-center rounded-xl bg-orange-600 text-lg font-semibold text-white hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {loading ? (
//                 <>
//                   <Loader2 className="mr-2 h-5 w-5 animate-spin" />
//                   Processing...
//                 </>
//               ) : (
//                 "Donate Now"
//               )}
//             </button>

//             <p className="text-center text-xs text-gray-500">Secure payments powered by Stripe</p>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Loader2 } from "lucide-react";

export default function Donate() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  const presetAmounts = [10, 25, 50, 100, 250];

  const handlePresetClick = (preset: number) => {
    setAmount(preset.toString());
    setSelectedPreset(preset);
    setError("");
  };

  const handleCustomAmountChange = (value: string) => {
    setAmount(value);
    setSelectedPreset(null);
    setError("");
  };

  const handleDonate = async (e: FormEvent) => {
    e.preventDefault();

    const donationAmount = Number.parseFloat(amount);
    if (isNaN(donationAmount) || donationAmount < 1) {
      setError("Please enter a valid amount (minimum $1)");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://willy-stripe.onrender.com/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: donationAmount }),
        }
      );

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Failed to create checkout session");
        setLoading(false);
      }
    } catch (err) {
      console.error("Donation error:", err);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/children-studying-in-classroom-ghana.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/90 to-orange-800/90" />
      </div>

      <Link
        to="/"
        className="absolute left-4 top-4 z-10 flex items-center gap-2 text-white transition-opacity hover:opacity-80 md:left-8 md:top-8"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back to Home</span>
      </Link>

      <div className="relative z-10 mx-4 w-full max-w-md">
        <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              Make a Donation
            </h1>
            <p className="text-gray-600">
              Support our mission to build a brighter future for Ghana
            </p>
          </div>

          <form onSubmit={handleDonate} className="space-y-6">
            <div>
              <label className="mb-3 block text-sm font-medium text-gray-700">
                Select Amount
              </label>
              <div className="flex flex-wrap justify-center gap-3">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    className={`rounded-xl border-2 px-6 py-3 font-semibold transition-all ${
                      selectedPreset === preset
                        ? "border-orange-600 bg-orange-50 text-orange-600"
                        : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50"
                    }`}
                    disabled={loading}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">
                  or enter custom amount
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Custom Amount (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-600">
                  $
                </span>
                <input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="50.00"
                  value={amount}
                  onChange={(e) => handleCustomAmountChange(e.target.value)}
                  className="h-14 w-full rounded-xl border border-input bg-background pl-8 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!amount || Number.parseFloat(amount) < 1 || loading}
              className="flex h-14 w-full items-center justify-center rounded-xl bg-orange-600 text-lg font-semibold text-white hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                "Donate Now"
              )}
            </button>

            <p className="text-center text-xs text-gray-500">
              Secure payments powered by Stripe
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
