export default (editor) => {
    const bm = editor.BlockManager;

    bm.add("MY-BLOCK", {
        label: "My block",
        content: `<h3 class="text-center text-4xl">My block</h3>`,
        media: `<svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
      </svg>`,
    });

    bm.add("tailwind-button", {
        label: "Tailwind Button",
        category: "Tailwind",
        content: `
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>
    `,
    });
};
