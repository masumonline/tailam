import loadBlocks from "./blocks"; // Your custom blocks

export default (editor) => {
    editor.on("load", () => {
        const canvasHead = editor.Canvas.getDocument().head;
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
        canvasHead.appendChild(script);

        loadBlocks(editor);
        editor.BlockManager.getCategories().forEach((category) => {
            category.set("open", false);
        });
    });
};
