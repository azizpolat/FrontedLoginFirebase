import React from "react";
import { useState } from "react";
import { register } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <form className="max-w-xl mx-auto grid gap-y-4" onSubmit={handleSubmit}>
      <div className="mt-10 p-4 border border-gray-300 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium text-gray-700">E-posta</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-5">
          <label className="block text-sm font-medium text-gray-700">Parola</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mt-5">
          <button
            disabled={!email || !password}
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
          >
            Kayıt ol
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
