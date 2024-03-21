const videosDom = (() => {
    const multimediaAtributos = (elemento, url) => {
        elemento.setAttribute('src', url);
    };

    return {
        publico(id, url) {
            const elemento = document.querySelector(id);
            multimediaAtributos(elemento, url);
        }
    };
})();

const domMusica = "#musica";
const domPeliculas = "#peliculas";
const domSeries = "#series";

class Multimedia {
    #url;
    constructor(url) {
        this.#url = url;
    }

    get url() {
        return this.#url;
    }
    set url(newUrl) {
        this.#url = newUrl
    }

    setInicio() {
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

class Reproductor extends Multimedia {
    #id;
    constructor(id, url) {
        super(url);
        this.#id = id;
    }

    get id() {
        return this.#id
    }
    playMultimedia() {
        videosDom.publico(this.#id, this.url);
    }

    setInicio(tiempo = 0) {

        // console.log(this.url)
        this.url = this.url + `?start=${tiempo}`
        console.log(this.url)

    }
}

const musicaReproductor = new Reproductor(domMusica, "https://www.youtube.com/embed/iVRDKRlIcOc?si=AlAwdvAZ3eHcXzGI");
const peliculasReproductor = new Reproductor(domPeliculas, "https://www.youtube.com/embed/tdPqEeznNTY?si=zjmM2dwKiQN4n6jo");
const seriesReproductor = new Reproductor(domSeries, "https://www.youtube.com/embed/LxL1ew9kSrk?si=5oGIEzqx66xIYdKK");

musicaReproductor.setInicio(45)
musicaReproductor.playMultimedia();
peliculasReproductor.playMultimedia();
seriesReproductor.playMultimedia();



