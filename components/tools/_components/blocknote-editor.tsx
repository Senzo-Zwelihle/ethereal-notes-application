"use client";

import { useTheme } from "next-themes";
import { PartialBlock } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import { useEdgeStore } from "@/components/providers/_components/edgestore";


interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean; 
}

const BlockNoteEditor = ({
  onChange,
  initialContent,
  editable = true, 
}: EditorProps) => {
  const { resolvedTheme } = useTheme();
  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const response = await edgestore.publicFiles.upload({
      file,
    });
    return response.url;
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: handleUpload,
  });

  return (
    <div>
      <BlockNoteView
        editor={editor}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={() => {
          // Only trigger onChange if the editor is editable
          if (editable) {
            onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
          }
        }}
        editable={editable} 
      />
    </div>
  );
};

export default BlockNoteEditor;