export default function addBlog7(bm) {
    bm.add("blog7", {
        label: "Single Post",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 7</div>`,
        content: `<div class="max-w-3xl mx-auto px-4 py-10">
      <!-- Post Header -->
      <div class="mb-8">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400"
          alt="Blog Banner"
          class="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
      <!-- Post Title -->
      <h1 class="text-4xl font-bold mb-4">How to Write a Great Blog Post</h1>
      <!-- Post Meta -->
      <div class="flex items-center space-x-4 text-sm text-gray-500 mb-6">
        <div class="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Author"
            class="w-8 h-8 rounded-full"
          />
          <span>By <span class="font-medium text-gray-700">Alin</span></span>
        </div>
        <span>•</span>
        <span>July 19, 2025</span>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <!-- Post Content -->
      <div
        class="prose max-w-none prose-lg prose-img:rounded-lg prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800"
      >
        <p>
          Writing a blog post can be both exciting and overwhelming. Whether
          you're a beginner or an experienced writer, having a clear structure
          can help convey your message effectively.
        </p>
        <h2>1. Know Your Audience</h2>
        <p>
          Before you start writing, understand who your readers are. Are they
          beginners or experts? What are they expecting from your content?
        </p>
        <h2>2. Use a Catchy Title</h2>
        <p>
          A good title grabs attention and makes people want to click. It should
          be specific, intriguing, and relevant to the content.
        </p>
        <blockquote>
          “Writing is the painting of the voice.” — Voltaire
        </blockquote>
        <h2>3. Structure Your Content</h2>
        <ul>
          <li>Introduction</li>
          <li>Main Body (with subheadings)</li>
          <li>Conclusion</li>
        </ul>
        <p>
          For more tips, visit <a href="https://blogging.com">this site</a>.
        </p>
      </div>
      <!-- Tags -->
      <div class="mt-10">
        <h3 class="text-sm uppercase font-semibold text-gray-600 mb-2">Tags</h3>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >#blogging</span
          >
          <span
            class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
            >#writing</span
          >
          <span
            class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
            >#tips</span
          >
        </div>
      </div>
    </div>`,
    })
}
