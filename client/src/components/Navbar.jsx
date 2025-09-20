// client/src/components/Navbar.jsx
import React from "react";
import { auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-gray-200">
      <span className="font-bold text-xl">🚀 CloudTasker</span>
      <div>
        {user ? (
          <>
            <span className="mr-4">Hi, {user.email}</span>
            <button
              onClick={() => auth.signOut()}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;