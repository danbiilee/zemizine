import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Bold,
  DecoupledEditor,
  Essentials,
  Italic,
  Paragraph,
} from "ckeditor5";
import { useRef, useState, useEffect } from "react";

import "ckeditor5/ckeditor5.css";

export default function Editor() {
  const editorToolbarRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div>
      {/* Action Buttons */}
      <div>
        <button>등록하기</button>
      </div>
      {/* Editor */}
      <div>
        <div ref={editorToolbarRef}></div>
        <div>
          {isMounted && (
            <CKEditor
              editor={DecoupledEditor}
              data="<div class='cke5-editor-types-demo-document__content-container'>
                <div class='cke5-editor-types-demo-document__content'>
                    <h1 style='text-align: center'>The Flavorful Tuscany Meetup</h1>
                    <p>Hello from CKEditor 5 decoupled editor!</p>
                </div>
            </div>"
              config={{
                licenseKey: "GPL",
                plugins: [Bold, Italic, Paragraph, Essentials],
                toolbar: ["undo", "redo", "|", "bold", "italic"],
              }}
              onReady={(editor) => {
                if (editorToolbarRef.current) {
                  editorToolbarRef.current.appendChild(
                    editor.ui.view.toolbar.element
                  );
                }
              }}
              onAfterDestroy={(editor) => {
                if (editorToolbarRef.current) {
                  Array.from(editorToolbarRef.current.children).forEach(
                    (child) => child.remove()
                  );
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
