import { Card, Button, Space } from "antd";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function EditorPage() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
  });

  if (!editor) return null;

  return (
    <Card title="Rich Text Editor">
      <Space style={{ marginBottom: 10 }}>
        <Button onClick={() => editor.chain().focus().toggleBold().run()}>
          Bold
        </Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()}>
          Italic
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </Button>
        <Button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </Button>
      </Space>

      <EditorContent editor={editor} />
    </Card>
  );
}
