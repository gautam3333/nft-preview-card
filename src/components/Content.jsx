export default function Content() {
  return (
    <div className='py-3 border-b border-very-dark-blue-line space-y-3'>
      <h1 className='text-white font-bold text-xl mt-4 font-sans hover:text-cyan hover:cursor-pointer hover:transition-all'>
        Equilibrium #3429
      </h1>
      <p className='text-base text-soft-blue font-thin'>
        Our Equilibrium collection promotes balanace and calm.
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3'>
          <img src='/images/icon-ethereum.svg' alt='ethereum' />
          <h2 className='font-bold text-cyan text-sm'>0.041 ETH</h2>
        </div>
        <div className='flex items-center gap-3'>
          <img src='/images/icon-clock.svg' alt='ethereum' />
          <h2 className='text-sm text-soft-blue'>3 days left</h2>
        </div>
      </div>
    </div>
  );
}
