import Card from './Card';
import MemoAppPNG from './assets/memoapp.png';
import OneCanvasPNG from './assets/onecanvas.png';

function App() {
  return (
    <section className="bg-white py-4 font-sans">
      <div className="container m-auto flex max-w-2xl flex-col flex-wrap items-center justify-start md:flex-row">
        <Card title="Memo App" url="memo-app" imgURL={MemoAppPNG} />
        <Card title="One Canvas" url="one-canvas" imgURL={OneCanvasPNG} />
      </div>
    </section>
  );
}

export default App;
