export default function addCompactSignupForm(bm) {
    bm.add("Compact Signup Form", {
        label: "Compact Signup Form",
        category: "Tailwind Form",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Compact Signup Form</div>`,
        content: `<form class="bg-white rounded-lg shadow-md p-8 max-w-sm w-full">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">
        Create Account
      </h2>

      <!-- Username -->
      <label for="username" class="block text-gray-700 font-medium mb-1"
        >Username</label
      >
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Choose a username"
        class="w-full px-3 py-2 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        required
      />
      <p class="text-xs text-gray-500 mb-4">
        Username must be 4-12 characters.
      </p>

      <!-- Email -->
      <label for="email" class="block text-gray-700 font-medium mb-1"
        >Email Address</label
      >
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        class="w-full px-3 py-2 mb-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        required
      />
      <p class="text-xs text-gray-500 mb-4">We'll never share your email.</p>

      <!-- Password -->
      <label for="password" class="block text-gray-700 font-medium mb-1"
        >Password</label
      >
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter a strong password"
        class="w-full px-3 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        required
      />

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>`,
    })
}
