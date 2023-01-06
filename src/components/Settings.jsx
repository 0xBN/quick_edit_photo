const Settings = ({
  setPhotoUrl,
  setColor,
  setSpacing,
  setBlur,
  photoUrl,
  color,
  spacing,
  blur,
}) => {
  const handlePhotoUrl = (e) => setPhotoUrl(e.target.value);
  const handleColor = (e) => setColor(e.target.value);
  const handleSpacing = (e) => setSpacing(e.target.value);
  const handleBlur = (e) => setBlur(e.target.value);

  const inputStyles = `ml-4 rounded-md bg-blue-700 py-2  font-bold`;
  const labelStyles = `text-xl`;
  const formRowStyles = `p-4`;
  const url = 'https://bit.ly/3iirTpb';

  const handleGetImage = (e) => {
    e.preventDefault();
    setPhotoUrl(url);
  };

  return (
    <div className={`grid place-content-center `}>
      <form action='' className={`flex flex-wrap gap-4`}>
        <div className={formRowStyles}>
          <label className={labelStyles} htmlFor='photoUrl'>
            Photo Url
          </label>
          <input
            className={inputStyles}
            value={photoUrl}
            onChange={handlePhotoUrl}
            type='text'
            name='photoUrl'
            placeholder='photoUrl'
          />
        </div>
        <div className={formRowStyles}>
          <label className={labelStyles} htmlFor='color'>
            Base Color
          </label>
          <input
            className={inputStyles}
            value={color}
            onChange={handleColor}
            type='text'
            name='color'
            placeholder='color'
          />
        </div>
        <div className={formRowStyles}>
          <label className={labelStyles} htmlFor='spacing'>
            Spacing
          </label>
          <input
            className={inputStyles}
            value={spacing}
            onChange={handleSpacing}
            type='range'
            name='spacing'
          />
        </div>
        <div className={formRowStyles}>
          <label className={labelStyles} htmlFor='blur'>
            Blur
          </label>
          <input
            className={inputStyles}
            value={blur}
            onChange={handleBlur}
            type='range'
            name='blur'
          />
        </div>
        <button
          className={`rounded-md bg-green-800 px-4 font-bold`}
          onClick={handleGetImage}
        >
          🧪 Use test image
        </button>
      </form>
    </div>
  );
};
export default Settings;
