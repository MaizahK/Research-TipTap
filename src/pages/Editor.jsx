import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello Tiptap ✨</p>",
  });

  return (
    <div style={{ border: "1px solid #ddd", padding: 16 }}>
      <EditorContent editor={editor} />
    </div>
  );
}
