export default function addBlog11(bm) {
    bm.add("blog11", {
        label: "Blog 11",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 11</div>`,
        content: `<div class="max-w-3xl py-16 px-4">
      <h1 class="text-4xl font-bold text-center mb-12">My Creative Journey</h1>

      <div class="border-l-4 border-blue-500 pl-6 space-y-16">
        <!-- Entry 1 -->
        <div class="relative">
          <span
            class="absolute -left-[0.95rem] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
          ></span>
          <h2 class="text-xl font-semibold mb-1">
            🌿 Started Sketching Nature
          </h2>
          <p class="text-sm text-gray-500 mb-3">January 2023</p>
          <img
            src="https://picsum.photos/id/1018/800/400"
            alt="Nature Sketch"
            class="rounded-lg shadow-md mb-3"
          />
          <p>
            I began drawing trees and mountains after morning walks. It helped
            me connect more with the environment and my inner calm.
          </p>
        </div>

        <!-- Entry 2 -->
        <div class="relative">
          <span
            class="absolute -left-[0.95rem] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
          ></span>
          <h2 class="text-xl font-semibold mb-1">🎨 Painted My First Canvas</h2>
          <p class="text-sm text-gray-500 mb-3">June 2023</p>
          <img
            src="https://picsum.photos/id/1025/800/400"
            alt="Canvas Painting"
            class="rounded-lg shadow-md mb-3"
          />
          <p>
            Using acrylic colors, I created a seaside landscape that still hangs
            on my studio wall today.
          </p>
        </div>

        <!-- Entry 3 -->
        <div class="relative">
          <span
            class="absolute -left-[0.95rem] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
          ></span>
          <h2 class="text-xl font-semibold mb-1">✍️ Started Writing Poems</h2>
          <p class="text-sm text-gray-500 mb-3">November 2023</p>
          <img
            src="https://picsum.photos/id/1035/800/400"
            alt="Poem Writing"
            class="rounded-lg shadow-md mb-3"
          />
          <p>
            Each line felt like a brushstroke of thought. I explored emotions
            through simple, minimal verses.
          </p>
        </div>
      </div>
    </div>`,
    })
}
