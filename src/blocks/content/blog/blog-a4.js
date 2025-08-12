export default function addBlog4(bm) {
    bm.add("blog4", {
        label: "Blog-4",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 4</div>`,
        content: `<div class="max-w-4xl">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">Blog Post Summary</h1>
      <div class="overflow-x-auto rounded-lg shadow">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th
                class="py-3 px-6 bg-blue-600 text-white text-left text-sm uppercase font-semibold"
              >
                Title
              </th>
              <th
                class="py-3 px-6 bg-blue-600 text-white text-left text-sm uppercase font-semibold"
              >
                Category
              </th>
              <th
                class="py-3 px-6 bg-blue-600 text-white text-left text-sm uppercase font-semibold"
              >
                Date
              </th>
              <th
                class="py-3 px-6 bg-blue-600 text-white text-left text-sm uppercase font-semibold"
              >
                Writer
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td
                class="py-4 px-6 text-gray-700 font-medium cursor-pointer hover:text-blue-600"
              >
                Rivers of Bangladesh
              </td>
              <td class="py-4 px-6 text-gray-600">Geography</td>
              <td class="py-4 px-6 text-gray-600">12 July, 2025</td>
              <td class="py-4 px-6 text-gray-600">Md. Golam Rabbani</td>
            </tr>
            <tr>
              <td
                class="py-4 px-6 text-gray-700 font-medium cursor-pointer hover:text-blue-600"
              >
                Health and Nutrition
              </td>
              <td class="py-4 px-6 text-gray-600">Health</td>
              <td class="py-4 px-6 text-gray-600">8 July, 2025</td>
              <td class="py-4 px-6 text-gray-600">Sabrina Hasan</td>
            </tr>
            <tr>
              <td
                class="py-4 px-6 text-gray-700 font-medium cursor-pointer hover:text-blue-600"
              >
                Introduction to Bangla Literature
              </td>
              <td class="py-4 px-6 text-gray-600">Literature</td>
              <td class="py-4 px-6 text-gray-600">5 July, 2025</td>
              <td class="py-4 px-6 text-gray-600">Mohammad Ali</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`,
    })
}
