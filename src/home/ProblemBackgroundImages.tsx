// Optimized WebP images - reduced from ~35MB total to ~3-4MB (65-97% reduction)
// Original images: 539KB-6.4MB each, optimized: 46KB-641KB each
import image1 from '../assets/problem/optimized/image1.webp';
import image2 from '../assets/problem/optimized/image2.webp';
import image3 from '../assets/problem/optimized/image3.webp';
import image4 from '../assets/problem/optimized/image4.webp';
import image5 from '../assets/problem/optimized/image5.webp';
import image6 from '../assets/problem/optimized/image6.webp';
import image7 from '../assets/problem/optimized/image7.webp';
import image9 from '../assets/problem/optimized/image9.webp';
import image10 from '../assets/problem/optimized/image10.webp';
import image11 from '../assets/problem/optimized/image11.webp';
import image12 from '../assets/problem/optimized/image12.webp';
import image13 from '../assets/problem/optimized/image13.webp';
import image14 from '../assets/problem/optimized/image14.webp';
import image15 from '../assets/problem/optimized/image15.webp';
import image16 from '../assets/problem/optimized/image16.webp';
import image17 from '../assets/problem/optimized/image17.webp';
import image18 from '../assets/problem/optimized/image18.webp';
import image19 from '../assets/problem/optimized/image19.webp';
import image20 from '../assets/problem/optimized/image20.webp';

type BackgroundImage = {
  src: string;
  speed: number;
  className: string;
};

const backgroundImages: BackgroundImage[] = [
  {
    src: image1,
    speed: 0.5,
    className: 'absolute top-[6%] left-[5%] w-36 md:w-44 lg:w-56 opacity-100 rotate-[-2deg]',
  },
  {
    src: image2,
    speed: 5,
    className: 'absolute top-[18%] right-[6%] w-40 md:w-48 lg:w-60 opacity-100 rotate-3',
  },
  {
    src: image3,
    speed: 6,
    className: 'absolute top-[33%] left-[20%] w-44 md:w-52 lg:w-64 opacity-100 rotate-1',
  },
  {
    src: image4,
    speed: 0.3,
    className: 'absolute top-[46%] right-[18%] w-36 md:w-44 lg:w-56 opacity-100 -rotate-1',
  },
  {
    src: image5,
    speed: 7,
    className: 'absolute top-[58%] left-[8%] w-40 md:w-48 lg:w-60 opacity-100 rotate-2',
  },
  {
    src: image6,
    speed: 1.5,
    className: 'absolute top-[70%] right-[10%] w-44 md:w-56 lg:w-72 opacity-100 -rotate-3',
  },
  {
    src: image7,
    speed: 5.5,
    className: 'absolute top-[78%] left-[32%] w-36 md:w-48 lg:w-60 opacity-100 rotate-1',
  },
  {
    src: image9,
    speed: 0.4,
    className: 'absolute top-[12%] right-[35%] w-32 md:w-40 lg:w-52 opacity-100 rotate-12',
  },
  {
    src: image10,
    speed: 6.5,
    className: 'absolute top-[52%] left-[50%] w-40 md:w-52 lg:w-64 opacity-100 -rotate-6',
  },
  {
    src: image11,
    speed: 1.2,
    className: 'absolute top-[84%] right-[32%] w-32 md:w-40 lg:w-52 opacity-100 rotate-4',
  },
  {
    src: image12,
    speed: 4.5,
    className: 'absolute top-[8%] left-[45%] w-36 md:w-44 lg:w-56 opacity-100 -rotate-5',
  },
  {
    src: image13,
    speed: 0.6,
    className: 'absolute top-[25%] right-[25%] w-40 md:w-48 lg:w-60 opacity-100 rotate-7',
  },
  {
    src: image14,
    speed: 7.5,
    className: 'absolute top-[40%] left-[15%] w-32 md:w-40 lg:w-52 opacity-100 -rotate-2',
  },
  {
    src: image15,
    speed: 2.5,
    className: 'absolute top-[50%] right-[45%] w-44 md:w-52 lg:w-64 opacity-100 rotate-5',
  },
  {
    src: image16,
    speed: 0.7,
    className: 'absolute top-[62%] left-[60%] w-36 md:w-44 lg:w-56 opacity-100 -rotate-8',
  },
  {
    src: image17,
    speed: 5,
    className: 'absolute top-[75%] right-[20%] w-40 md:w-48 lg:w-60 opacity-100 rotate-3',
  },
  {
    src: image18,
    speed: 1.8,
    className: 'absolute top-[15%] left-[20%] w-32 md:w-40 lg:w-52 opacity-100 -rotate-4',
  },
  {
    src: image19,
    speed: 6,
    className: 'absolute top-[65%] left-[25%] w-36 md:w-44 lg:w-56 opacity-100 rotate-6',
  },
  {
    src: image20,
    speed: 0.5,
    className: 'absolute top-[88%] left-[55%] w-40 md:w-48 lg:w-60 opacity-100 -rotate-3',
  },
];

const ProblemBackgroundImages = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {backgroundImages.map(({ src, speed, className }, index) => (
        <img
          key={index}
          data-scroll
          data-scroll-speed={speed.toString()}
          src={src}
          alt=""
          loading="lazy"
          className={`select-none rounded-3xl object-cover ${className}`}
        />
      ))}
    </div>
  );
};

export default ProblemBackgroundImages;

