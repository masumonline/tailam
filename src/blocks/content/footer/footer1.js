export default function addFooter1(bm) {
    bm.add("Footer 1", {
        label: "Footer 1",
        category: "Tailwind Footer",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Footer 1</div>`,
        content: `<!-- Page content here -->
    <main class="flex-grow">
      <!-- your content -->
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300">
      <div
        class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        <div>
          <h2 class="text-2xl font-bold text-white mb-4">ComCityBD</h2>
          <p class="text-gray-400 max-w-xs">
            Delivering quality web solutions with passion and innovation.
          </p>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Useful Links</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-white transition">Home</a></li>
            <li>
              <a href="#" class="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="#" class="hover:text-white transition">Services</a>
            </li>
            <li><a href="#" class="hover:text-white transition">Blog</a></li>
            <li><a href="#" class="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Contact</h3>
          <p>Email: info@comcitybd.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Follow Us</h3>
          <div class="flex space-x-4 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              class="hover:text-white transition"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" aria-label="Twitter" class="hover:text-white transition"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              href="#"
              aria-label="Instagram"
              class="hover:text-white transition"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="#"
              aria-label="LinkedIn"
              class="hover:text-white transition"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 mt-8 py-4 text-center text-sm text-gray-500"
      >
        © 2025 ComCityBD. All rights reserved.
      </div>
    </footer>`,
    })
}
