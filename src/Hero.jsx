import './Hero.scss';
import video from './assets/cover.mp4';

export default function Hero() {
    return (
        <div className="hero-background">
        <video className="hero-video" poster="./assets/cover.png" playsInline preload autoPlay muted loop>
            <source src={video} type="video/mp4" />
        </video>

        <div className="absolute z-10 flex items-center justify-center top-0 left-0 py-10 px-4 w-full h-full sm:px-6 lg:justify-start lg:max-w-4xl lg:px-16 xl:px-28">
            <div className="text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <div>Pixelf-Portraits</div>
                <div>The new NFT collection</div>
            </h1>
            <p className="mt-4 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            We've just released the first Set of Pixelf-Portraits - The Starter Pack, which contains 10 regular pixelfs and 1 Special Pixelf. Stay tuned, more Sets are coming to the collection!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                    <a href="https://opensea.io/collection/pixelf-portraits" 
                        target="_blank"  
                        rel="noreferrer"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10">
                        Get your pixelf
                    </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#details"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10">
                        Learn more
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div>   
      );
}