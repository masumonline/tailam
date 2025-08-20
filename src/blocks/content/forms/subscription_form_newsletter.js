export default function addSubscriptionFormNewsletter(bm) {
    bm.add("Subscription Form Newsletter", {
        label: "Subscription Form Newsletter",
        category: "Tailwind Form",
        media: `<div style="font-size: 18px; font-weight: bold; color: #f97316;">Subscription Form Mewsletter</div>`,
        content: `<div class="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">
        Subscribe to our Newsletter
      </h2>
      <p class="text-gray-500 text-sm mb-6">
        Get weekly updates and news straight to your inbox.
      </p>

      <form class="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          class="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
    </div>`,
    })
}
