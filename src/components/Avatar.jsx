export default function Avatar() {
  return (
    <div className='flex items-center gap-6'>
      <div className='w-14 border-2 border-white rounded-full overflow-hidden'>
        <img src='/images/image-avatar.png' alt='avatar' />
      </div>
      <h2 className='text-white text-lg'>
        <span className='text-soft-blue'>Creation of </span>
        <span className='hover:text-cyan hover:cursor-pointer hover:transition-all'>
          Jules Wyvern
        </span>
      </h2>
    </div>
  );
}
