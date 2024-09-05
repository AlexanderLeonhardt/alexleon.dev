'use client'

import { FloatingMenu, BubbleMenu, useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CodeBlockShiki from 'tiptap-extension-code-block-shiki';
const Tiptap = () => {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CodeBlockShiki.configure({
        defaultTheme: 'dark-plus'
      }),
    ],
    content: `<h2>Heading</h2><p>Some text</p><pre><code class="language-js"><span style="color: rgb(106, 153, 85);">// here is some code</span>

<span style="color: rgb(156, 220, 254);">console</span><span style="color: rgb(212, 212, 212);">.</span><span style="color: rgb(220, 220, 170);">log</span><span style="color: rgb(212, 212, 212);">(</span><span style="color: rgb(206, 145, 120);">'Hello World!'</span><span style="color: rgb(212, 212, 212);">);</span></code></pre>`,
  });

  const handleClick = () => {
    if (editor) {
      const editorElement = document.querySelector('.tiptap');
      if (editorElement) {
        const html = editorElement.innerHTML;
        console.log(html);
      }
    }
  }

  return (
    <>
      <div>
        <div>
          {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="bubble-menu">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            >
              Strike
            </button>
            <button
              onClick={() => editor.chain().focus().toggleCode().run()}
              className={editor.isActive('code') ? 'is-active' : ''}
            >
              Code
            </button>
          </div>
          </BubbleMenu>}
          {editor && <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="floating-menu">
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
            >
              H2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
              Bullet list
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
              Ordered list
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={editor.isActive('blockquote') ? 'is-active' : ''}
            >
              Toggle blockquote
            </button>
          </div>
          </FloatingMenu>}
        </div>
        <EditorContent editor={editor} />
      </div>
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default Tiptap