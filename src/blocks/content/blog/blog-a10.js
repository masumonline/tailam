export default function addBlog10(bm) {
    bm.add("blog10", {
        label: "Blog 10 - Single Post",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 10</div>`,
        content: `<div class="max-w-3xl">
      <!-- Post Header -->
      <div class="mb-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-2 leading-tight">
          Discovering the Serenity of the Mountains
        </h1>
        <p class="text-sm text-gray-500">
          By <span class="text-gray-700 font-medium">Alin</span> • July 19, 2025
        </p>
      </div>

      <!-- Featured Image -->
      <div class="mb-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Mountain Travel"
          class="w-full rounded-lg shadow-lg"
        />
      </div>

      <!-- Blog Content -->
      <div class="prose prose-lg prose-gray max-w-none">
        <p>
          The mountains have a way of making us feel small, yet incredibly
          grounded. On this trip, I found myself lost in the beauty of towering
          peaks, crisp air, and the peaceful silence only nature can offer.
        </p>

        <h2>Getting There</h2>
        <p>
          The journey started from the base village and slowly ascended through
          winding roads, pine forests, and breathtaking valleys. Every turn
          revealed a new landscape that was more stunning than the last.
        </p>

        <h2>What to Expect</h2>
        <ul>
          <li>Chilly mornings with misty clouds</li>
          <li>Local food cooked over wood fire</li>
          <li>Incredible sunrise views above the clouds</li>
        </ul>

        <blockquote>
          “Climb the mountain not to plant your flag, but to embrace the
          challenge, enjoy the air and behold the view.” — Unknown
        </blockquote>

        <p>
          Whether you're an adventurer or a peace seeker, the mountains have
          something magical to offer. Plan your trip, pack light, and let nature
          do the rest.
        </p>
      </div>

      <!-- Tags -->
      <div class="mt-10 flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >#travel</span
        >
        <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
          >#mountains</span
        >
        <span
          class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full"
          >#adventure</span
        >
      </div>
    </div>`,
    })
}
