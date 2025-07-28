export default function addBlog1(bm) {
    bm.add("blog1", {
        label: "Blog-1",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 1</div>`,
        content: ` <div class="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- Blog Image -->
      <img
        src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="বাংলা ব্লগ ছবি"
        class="w-full h-52 object-cover"
      />

      <!-- Blog Content -->
      <div class="p-6">
        <span class="text-xs text-red-600 uppercase font-bold">ভ্রমণ</span>
        <h2 class="text-2xl font-bold text-gray-800 mt-2 mb-3">
          সুন্দরবনের রোমাঞ্চকর ভ্রমণ অভিজ্ঞতা
        </h2>
        <p class="text-gray-600 text-sm mb-4 leading-relaxed">
          সুন্দরবন পৃথিবীর বৃহত্তম ম্যানগ্রোভ বন। এখানে বাঘের গর্জন, নদীর ঢেউ আর
          প্রকৃতির নিস্তব্ধতা এক অনন্য অভিজ্ঞতা দেয়। ভ্রমণপ্রেমীদের জন্য এটি এক
          অপরিসীম আকর্ষণ।
        </p>

        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center space-x-3">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="লেখক"
              class="w-10 h-10 rounded-full object-cover"
            />
            <span class="text-gray-700 text-sm font-medium">মোহাম্মদ আলী</span>
          </div>
          <span class="text-xs text-gray-400">১০ মার্চ, ২০২৫</span>
        </div>
      </div>
    </div>`,
    })
}
