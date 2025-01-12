  <div>
        <label for="email" className="text-xl font-medium text-gray-700">
          Email Address :
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your Email"
          className=" w-full rounded-lg px-4 py-2 border border-gray-300  shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label for="email" className="text-sm font-medium text-gray-700">
          Password :
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter your Password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
        />
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
            <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
              workcation.com/
            </div>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="janesmith"
              className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <button className="text-red-400" disabled={!email || !password} type="submit">
        Kayıt Ol
      </button>
