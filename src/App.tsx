import { ReactIcon } from './assets/icons';

function App() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center">
      <h1 className="flex items-center gap-2 text-4xl font-bold">
        dhoonjang{' '}
        <a
          href="https://react.dev"
          target="_blank"
          className="group inline-flex items-center gap-1 text-cyan-500 transition-all hover:text-cyan-300 [&>*]:transition-all"
          rel="noreferrer"
        >
          <ReactIcon className="fill-cyan-500 group-hover:fill-cyan-300" />
          React
        </a>{' '}
        template
      </h1>
    </div>
  );
}

export default App;
