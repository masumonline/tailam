export default function addFooter2(bm) {
    bm.add("Footer 2", {
        label: "Footer 2",
        category: "Tailwind Footer",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Footer 2</div>`,
        content: `<!-- Main content -->
    <main class="flex-grow">
      <!-- your page content -->
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-10 text-center">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">ComCityBD</h2>
        <p class="text-gray-600 mb-6 max-w-xl mx-auto">
          Creating innovative web experiences for a better tomorrow.
        </p>

        <nav class="mb-6">
          <ul class="flex justify-center space-x-6 text-gray-600">
            <li>
              <a href="#" class="hover:text-indigo-600 transition">Home</a>
            </li>
            <li>
              <a href="#" class="hover:text-indigo-600 transition">About</a>
            </li>
            <li>
              <a href="#" class="hover:text-indigo-600 transition">Services</a>
            </li>
            <li>
              <a href="#" class="hover:text-indigo-600 transition">Blog</a>
            </li>
            <li>
              <a href="#" class="hover:text-indigo-600 transition">Contact</a>
            </li>
          </ul>
        </nav>

        <div class="flex justify-center space-x-8 mb-6 text-gray-600">
          <!-- Facebook -->
          <a
            href="#"
            aria-label="Facebook"
            class="hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 12a10 10 0 10-11.54 9.86v-6.97h-2.1v-2.9h2.1V9.5c0-2.08 1.25-3.23 3.16-3.23.92 0 1.88.16 1.88.16v2.07h-1.06c-1.05 0-1.38.65-1.38 1.31v1.58h2.35l-.38 2.9h-1.97v6.97A10 10 0 0022 12z"
              />
            </svg>
          </a>
          <!-- Twitter -->
          <a
            href="#"
            aria-label="Twitter"
            class="hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 19c7.732 0 11.955-6.4 11.955-11.955 0-.182 0-.364-.012-.544A8.525 8.525 0 0022 5.92a8.272 8.272 0 01-2.357.646 4.118 4.118 0 001.805-2.27 8.207 8.207 0 01-2.605.996A4.106 4.106 0 0015.447 4c-2.27 0-4.11 1.843-4.11 4.115 0 .322.036.636.106.936-3.414-.17-6.44-1.8-8.467-4.28a4.101 4.101 0 00-.555 2.07c0 1.43.73 2.693 1.83 3.43a4.088 4.088 0 01-1.86-.512v.05c0 2.002 1.425 3.67 3.32 4.05a4.11 4.11 0 01-1.853.07 4.115 4.115 0 003.838 2.855A8.233 8.233 0 018 19z"
              />
            </svg>
          </a>
          <!-- Instagram -->
          <a
            href="#"
            aria-label="Instagram"
            class="hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z"
              />
            </svg>
          </a>
          <!-- LinkedIn -->
          <a
            href="#"
            aria-label="LinkedIn"
            class="hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-9 7v7H7v-7h3zm-1.5-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10.5 3v7h-3v-3.5a1.5 1.5 0 00-3 0V17H10v-7h3v1.1a4.54 4.54 0 015-2.5z"
              />
            </svg>
          </a>
        </div>

        <p class="text-sm text-gray-500">
          © 2025 ComCityBD. All rights reserved.
        </p>
      </div>
    </footer>`,
    })
}
