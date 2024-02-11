export default function Image() {
  return (
    <div className='rounded-2xl overflow-hidden hover:cursor-pointer hover:transition-all relative bg-cyan group'>
      <div>
        <img
          src='/images/image-equilibrium.jpg'
          alt='equilibrium'
          className='object-cover hover:opacity-60'
        />
      </div>
      <div className='hidden group-hover:block'>
        <img
          src='/images/icon-view.svg'
          alt='icon-view'
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
    </div>
  );
}
