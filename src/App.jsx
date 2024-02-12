import Image from './components/Image';
import Content from './components/Content';
import Avatar from './components/Avatar';

export default function App() {
  return (
    <main>
      <section className='max-w-[328px] bg-very-dark-blue-card my-24 mx-auto p-6 rounded-2xl'>
        <Image />
        <Content />
        <Avatar />
      </section>
    </main>
  );
}
