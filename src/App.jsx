import Image from './components/Image';
import Content from './components/Content';
import Avatar from './components/Avatar';

export default function App() {
  return (
    <main>
      <section className='max-w-sm bg-very-dark-blue-card my-24 mx-auto p-10 rounded-2xl'>
        <Image />
        <Content />
        <Avatar />
      </section>
    </main>
  );
}
