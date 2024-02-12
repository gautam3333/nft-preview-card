export default function Avatar() {
  return (
    <div className='flex items-center gap-6 py-4'>
      <div className='w-8 border-2 border-white rounded-full overflow-hidden'>
        <img src='/images/image-avatar.png' alt='avatar' />
      </div>
      <h2 className='text-white text-lg font-thin'>
        <span className='text-soft-blue'>Creation of </span>
        <span className='hover:text-cyan hover:cursor-pointer hover:transition-all'>
          Jules Wyvern
        </span>
      </h2>
    </div>
  );
}
