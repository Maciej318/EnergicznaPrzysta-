import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero,} from '../sections';

const Page = () => (
  <div className='bg-white overflow-hidden'>
    <Navbar />
    <Hero />
      <div className='relative'>
        <About />
          <div className='gradient-03 z-0' />
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
          <div className='gradient-04 z-0' />
      </div>
      <div className='relative'>
        <Feedback/>
          <div className='gradient-05 z-0' />
        <Footer />
      </div>
  </div>
);

export default Page;
