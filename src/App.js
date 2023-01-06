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
      <header className={`border text-center`}>
        <h1 className={`fixed w-full border bg-black p-4`}>Quick Pic ⚡</h1>
      </header>
      <main className={`mt-[58px]`}>
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
    </div>
  );
}

export default App;
