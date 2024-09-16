import electricBkgr from '../assets/electric-bkgr.png';
import electricIntro from '../assets/electric.jpeg';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const HeroSection = () => {
    useEffect(() => {
        gsap.fromTo( ".electricIntro", { x: '-40vw' }, { x: '0vw', duration: 2.2, ease: "power1.out" });
    }, []);

    return (
        <div className='ele-cont'>
            <img src={electricBkgr} className="electric-image" alt="electric"/>
            <div className='overlay'>
                <div className='over-car'>
                    <img src={electricIntro} alt='ele' className="electricIntro"/>
                </div>
                <div className='over-scr'>
                    <h3>An evolution of electric luxury</h3>
                    <p>Pouring over a century of our knowledge into electric mobility, we're transforming the driving experience, delivering the luxury and performance you expect from Mercedes-Benz.</p>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
