import React, {useState} from 'react';
import './Works.scss';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "React Web App",
            desc:
              "Amazon clone website. Add cart, cart total, remove fom cart, process paymet and store payment and buying history. ",
            img:
              "https://cdn.vox-cdn.com/thumbor/o6rdvEq_4wlltk5Sp9taNpMS1H0=/0x0:1010x673/920x613/filters:focal(0x0:1010x673):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/45176182/Screen_Shot_2015-01-07_at_11.05.22_PM.0.0.png",
          },
          {
            id: "2",
            icon: "./assets/globe.png",
            title: "Netflix Clone",
            desc:
              "Netflix clone web page using TMDB Api.",
            img:
              "https://i.pcmag.com/imagery/articles/06DXdZyIU3yVY6UcFq3geED-3.fit_lim.size_1600x900.v1647536961.png",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "SpotifyClone",
            desc:
              "Spotify clone using spotify api.",
            img:
              "https://www.musicianwave.com/wp-content/uploads/2020/09/Spotify-web-player-788x462.jpg",
          },
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
        setCurrentSlide(currentSlide<data.length -1 ?currentSlide+1 : 0)
    };
    return (
        <div className='works' id='works'>
            <div className="slider" style={{ transform: `translateX( -${currentSlide * 100}vw)` }}>
               { data.map((d) => ( <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imageContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>
                                    {d.desc}
                                </p>
                                <span>Project</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />

                        </div>
                    </div>
                </div>)) }
            </div>
            <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick("left")} />
            <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick("right")} />
        </div>
    )
}
