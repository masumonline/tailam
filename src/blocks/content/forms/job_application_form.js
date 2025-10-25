export default function addJobApplicationForm(bm) {
    bm.add("Job Application Form", {
        label: "Job Application Form",
        category: "Tailwind Form",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Job Application Form</div>`,
        content: `<form class="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
      <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
        Job Application
      </h2>

      <!-- Full Name -->
      <label for="full-name" class="block text-gray-700 font-medium mb-1"
        >Full Name</label
      >
      <input
        type="text"
        id="full-name"
        name="full-name"
        placeholder="Your full name"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      <!-- Email -->
      <label for="email" class="block text-gray-700 font-medium mb-1"
        >Email Address</label
      >
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      />

      <!-- Position Dropdown -->
      <label for="position" class="block text-gray-700 font-medium mb-1"
        >Position</label
      >
      <select
        id="position"
        name="position"
        class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      >
        <option value="">Select a position</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="designer">UI/UX Designer</option>
        <option value="manager">Project Manager</option>
      </select>

      <!-- Cover Letter -->
      <label for="message" class="block text-gray-700 font-medium mb-1"
        >Cover Letter</label
      >
      <textarea
        id="message"
        name="message"
        rows="4"
        placeholder="Tell us why you are a great fit..."
        class="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
        required
      ></textarea>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Submit Application
      </button>
    </form>`,
    })
}
