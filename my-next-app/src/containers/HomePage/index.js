"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header */}
      <div className="bg-blue-600 text-white py-3 text-center font-bold text-lg">
        Bundelkhand University, Jhansi
        <div className="text-sm">ADMISSION-2025-26</div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-800 text-white flex justify-between items-center px-6 py-2">
        <div className="flex gap-6 text-sm">
          <Link href="#">Home</Link>
          <Link href="#">Public Notice</Link>
          <Link href="#">Programme Schedule</Link>
          <Link href="#">University Website</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="flex gap-3">
          <button className="bg-green-600 px-3 py-1 rounded text-sm">
            New Registration
          </button>
          <button className="bg-white text-black px-3 py-1 rounded text-sm">
            Login
          </button>
        </div>
      </div>

      {/* Announcement Bar */}
      <div className="bg-blue-500 text-white py-2 text-center font-medium mt-2 rounded">
        University entrance result declared : Please log in to the portal to
        view results
      </div>

      {/* Content Section */}
      <div className="flex justify-center mt-6 px-6">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Notifications Box */}
          <div className="bg-white rounded shadow-md p-4 h-[400px] overflow-y-auto">
            <h3 className="font-semibold mb-3">Notifications</h3>

            <ul className="space-y-4 text-sm">
              <li className="border-b pb-2">
                <span className="block text-gray-500">13 Aug 2025</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  The Entrance form will be open after 1st round allotment
                  2025-26
                </Link>
              </li>
              <li className="border-b pb-2">
                <span className="block text-gray-500">12 Aug 2025</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Another notification sample text goes here
                </Link>
              </li>
              <li>
                <span className="block text-gray-500">10 Aug 2025</span>
                <Link
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  Previous update details displayed here
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
