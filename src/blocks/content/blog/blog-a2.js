export default function addBlog2(bm) {
    bm.add("blog2", {
        label: "Blog-2",
        category: "Tailwind Blog",
        media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Blog 2</div>`,
        content: `<div class="max-w-6xl">
      <h1 class="text-3xl font-bold mb-8 text-gray-800">আমার ব্লগ পোস্টসমূহ</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Card 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="প্রকৃতি"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-xs text-green-600 uppercase font-bold"
              >প্রকৃতি</span
            >
            <h2 class="text-xl font-semibold text-gray-800 mt-2 mb-2">
              পাহাড়ের শীতল হাওয়া ও ছায়া
            </h2>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              পাহাড়ের শান্ত পরিবেশ এবং প্রকৃতির সৌন্দর্য উপভোগ করুন।
            </p>
            <div class="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/50.jpg"
                alt="লেখক"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-gray-700 text-sm font-medium"
                >রাহুল চৌধুরী</span
              >
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="শিক্ষা"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-xs text-blue-600 uppercase font-bold"
              >শিক্ষা</span
            >
            <h2 class="text-xl font-semibold text-gray-800 mt-2 mb-2">
              শিক্ষার আধুনিকীকরণ
            </h2>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              নতুন প্রযুক্তি ব্যবহার করে শিক্ষার মান উন্নত করা হচ্ছে।
            </p>
            <div class="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="লেখক"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-gray-700 text-sm font-medium">সুমি রহমান</span>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="শিক্ষা"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <span class="text-xs text-blue-600 uppercase font-bold"
              >শিক্ষা</span
            >
            <h2 class="text-xl font-semibold text-gray-800 mt-2 mb-2">
              শিক্ষার আধুনিকীকরণ
            </h2>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              নতুন প্রযুক্তি ব্যবহার করে শিক্ষার মান উন্নত করা হচ্ছে।
            </p>
            <div class="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="লেখক"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span class="text-gray-700 text-sm font-medium">সুমি রহমান</span>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    })
}
