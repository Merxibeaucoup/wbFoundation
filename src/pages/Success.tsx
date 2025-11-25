import { Link } from "react-router-dom"
import { CheckCircle, Heart } from "lucide-react"

export default function Success() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="relative z-10 mx-4 w-full max-w-md text-center">
        <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Thank You!</h1>
          <p className="mb-6 text-lg text-gray-600">
            Your generous donation has been received. Together, we're building a brighter future for Ghana.
          </p>
          <div className="mb-8 rounded-xl bg-orange-50 p-4">
            <Heart className="mx-auto mb-2 h-8 w-8 text-orange-600" />
            <p className="text-sm text-gray-700">You'll receive a confirmation email shortly with your tax receipt.</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-orange-600 px-6 py-3 text-base font-semibold text-white hover:bg-orange-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
