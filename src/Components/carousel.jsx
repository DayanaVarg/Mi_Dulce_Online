import { useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = document.querySelector('#carrusel-list');

    const end = () => {
      isDown = false;
      slider.classList.remove('active');
    };

    const start = (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
      const dist = x - startX;
      slider.scrollLeft = scrollLeft - dist;
    };

    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);

    // Limpieza de eventos al desmontar el componente
    return () => {
      slider.removeEventListener('mousedown', start);
      slider.removeEventListener('touchstart', start);

      slider.removeEventListener('mousemove', move);
      slider.removeEventListener('touchmove', move);

      slider.removeEventListener('mouseleave', end);
      slider.removeEventListener('mouseup', end);
      slider.removeEventListener('touchend', end);
    };
  }, []);
    return (
            <div class="carousel">
                <h2>Nuestros productos más vendidos</h2>
                <div className="carrusel-list" id="carrusel-list">

                    <div className="carrusel-track" id="track">

                        <div className="carrusel">
                            <div className="contendorCar">
                                <Link to={"/productos/descripcion"}>

                                    <picture>
                                        <img src="./dist/img/carousel/gomitas1.png" alt="imagen"/>
                                    </picture>
                                </Link>
                            </div>
                        </div>

                        <div className="carrusel">
                            <div className="contendorCar">
                                <Link to={"/productos/descripcion"}>
                                    <picture>
                                        <img src="./dist/img/carousel/gomitas2.png" alt="imagen"/>
                                    </picture>
                                </Link>
                            </div>
                        </div>

                        <div className="carrusel">
                            <div className="contendorCar">
                                <Link to={"/productos/descripcion"}>
                                    <picture>
                                        <img src="./dist/img/carousel/gomitas3.png" alt="imagen"/>
                                    </picture>
                                </Link>
                            </div>
                        </div>

                        <div className="carrusel">
                            <div className="contendorCar">
                                <Link to={"/productos/descripcion"}>
                                    <picture>
                                        <img src="./dist/img/carousel/gomitas1.png" alt="imagen"/>
                                    </picture>
                                </Link>
                            </div>
                        </div>

                        <div className="carrusel">
                            <div className="contendorCar">
                                <Link to={"/productos/descripcion"}>
                                    <picture>
                                        <img src="./dist/img/carousel/gomitas2.png" alt="imagen"/>
                                    </picture>
                                </Link>
                            </div>
                        </div>

                        <div className="carrusel">
                            <div className="contendorCar">
                                <Link to={"/productos/descripcion"}>
                                    <picture>
                                        <img src="./dist/img/carousel/gomitas1.png" alt="imagen"/>
                                    </picture>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

    );
};

export default Carousel;