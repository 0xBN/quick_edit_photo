import { useState } from 'react';
import Settings from './components/Settings';
import OutputArea from './components/OutputArea';

function App() {
  const [photoUrl, setPhotoUrl] = useState('');
  const [color, setColor] = useState('');
  const [spacing, setSpacing] = useState(25);
  const [blur, setBlur] = useState(0);

  return (
    <div className={`min-h-screen bg-black text-white`}>
      <header className={``}>
        <h1
          className={`fixed w-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 p-4 text-center text-3xl`}
        >
          Quick Pic ⚡
        </h1>
      </header>
      <hr className={`bg-green-500`} />
      <main className={`mt-[108px] flex flex-col gap-8`}>
        <Settings
          setPhotoUrl={setPhotoUrl}
          setColor={setColor}
          setSpacing={setSpacing}
          setBlur={setBlur}
          photoUrl={photoUrl}
          color={color}
          spacing={spacing}
          blur={blur}
        />
        <OutputArea
          photoUrl={photoUrl}
          color={color}
          spacing={spacing}
          blur={blur}
        />
      </main>
      <footer className={`mt-22 p-8 text-center`}>
        created by{' '}
        <a
          className={`text-red-500 hover:text-white`}
          href='https://0xbn.github.com/'
        >
          Brian
        </a>
      </footer>
    </div>
  );
}

export default App;
