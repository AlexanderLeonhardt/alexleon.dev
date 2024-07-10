import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className='main'>
      <div className='card'>
        <h1>This is a title</h1>
        <p>Here is a paragraph with some text inside of it just to fill out the page.</p>
        <p>Here is more <code>text</code> with some inline code.</p>
        <ul>
          <li><p>Here is a list</p></li>
          <li><p>With some text</p></li>
          <li><p>Just to fill it out</p></li>
        </ul>
        <h2>New section</h2>
        <p>Some more text talking about nothing.</p>
        <pre>
          <code>
{`
// Here is a code block
console.log('with some code inside');
`.trim()}
          </code>
        </pre>
      </div>
    </main>
  );
}
