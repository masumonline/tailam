export default function addFeedbackFormWithDropdown(bm) {
    bm.add("Feedback Form With Dropdown", {
        label: "Feedback Form With Dropdown",
        category: "Tailwind Form",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Feedback Form With Dropdown</div>`,
        content: `<form class="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        Give Us Your Feedback
      </h2>

      <!-- Name Field -->
      <label for="name" class="block text-gray-700 font-medium mb-1"
        >Name</label
      >
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your name"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />

      <!-- Email Field -->
      <label for="email" class="block text-gray-700 font-medium mb-1"
        >Email</label
      >
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      />

      <!-- Rating Dropdown -->
      <label for="rating" class="block text-gray-700 font-medium mb-1"
        >Rating</label
      >
      <select
        id="rating"
        name="rating"
        class="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        required
      >
        <option value="">Select a rating</option>
        <option value="excellent">Excellent</option>
        <option value="good">Good</option>
        <option value="average">Average</option>
        <option value="poor">Poor</option>
      </select>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition"
      >
        Submit Feedback
      </button>
    </form>`,
    })
}
