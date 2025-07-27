export default function addContainer(bm) {
  bm.add("tailwind-container", {
    label: "Container",
    category: "Tailwind Containers",
    media: `<div style="font-size: 20px; font-weight: bold; color: #f97316;">Container</div>`,
    content: `<div class="container mx-auto p-4"></div>`,
  });
}
