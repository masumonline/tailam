export default function addLoginFormWithIcons(bm) {
    bm.add("Login Form With Icons", {
        label: "Login Form With Icons",
        category: "Tailwind Form",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Login Form With Icons</div>`,
        content: `<form class="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

      <!-- Email Field -->
      <div class="relative mb-4">
        <span
          class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 12H8m0 0l4-4m-4 4l4 4"
            ></path>
          </svg>
        </span>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <!-- Password Field -->
      <div class="relative mb-6">
        <span
          class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 11c.828 0 1.5.672 1.5 1.5S12.828 14 12 14s-1.5-.672-1.5-1.5S11.172 11 12 11z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.657 16.657A8 8 0 008.343 7.343"
            />
          </svg>
        </span>
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition"
      >
        Log In
      </button>
    </form>`,
    })
}
