const OutputArea = ({ photoUrl, color, spacing, blur }) => {
  return (
    <section className={`flex w-full flex-col items-center`}>
      <div
        style={{ padding: `${spacing}px`, background: color }}
        className={`bg-blue-800  `}
      >
        <img
          style={{ filter: blur === 0 ? 'blur(0px)' : `blur(${blur / 20}px)` }}
          src={photoUrl}
          alt=''
          className={`max-h-[60vh]`}
        />
      </div>
    </section>
  );
};
export default OutputArea;
