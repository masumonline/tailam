import loadBlocks from "./blocks"; // Your custom blocks

export default (editor) => {
  editor.on("load", () => {
    // Inject Tailwind CSS once canvas is ready
    const canvasHead = editor.Canvas.getDocument().head;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
    canvasHead.appendChild(script);

    // Now safe to load your custom blocks
    loadBlocks(editor);
    // editor.BlockManager.getCategories().forEach((category) => {
    //   category.set("open", false);
    // });

    editor.BlockManager.getCategories().forEach((category) => {
      const isMain = category.get("id") === "Tailwind Sidebar";
      category.set("open", isMain);
    });
  });
};
