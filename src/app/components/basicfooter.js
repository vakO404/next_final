import React from "react";

function BasicFooter() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
      <div className="flex justify-center mt-2 space-x-4">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </footer>
  );
}

export default BasicFooter;