import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h1 className="relative text-8xl md:text-9xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            404
          </h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page not found
        </h2>
        <p className="text-lg text-gray-400 mb-8 max-w-lg mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
        <p className="mt-12 text-sm text-gray-600">
          Need assistance? <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Contact support</Link>
        </p>
      </div>
    </main>
  );
}