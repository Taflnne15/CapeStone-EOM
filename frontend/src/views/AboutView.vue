<template>
  <div class="about">
    <div class="container text-center">
      <div class="row align-items-center">
        <div class="col">
          <h3>What we do ?</h3>
          <h6>
            Discover the ultimate musical playground at our esteemed music
            school, where a world of melodies awaits your exploration. Offering
            comprehensive instruction in guitar, bass guitar, keyboard, drums,
            and songwriting, our school is a vibrant hub for aspiring musicians
            to embark on an enriching journey. Our seasoned instructors bring
            years of expertise to the classroom, fostering technical prowess and
            unleashing creative potential. Whether you're strumming chords on a
            guitar, laying down grooves on a bass, creating captivating tunes on
            a keyboard, or setting rhythms alive on drums, our diverse
            curriculum caters to all musical passions. Immerse yourself in an
            environment that resonates with the joy of learning and the thrill
            of crafting your own musical narratives. Let your musical
            aspirations take flight within our supportive community, where
            innovation and artistry harmonize in perfect cadence
          </h6>
        </div>
        <div class="col"></div>
        <!-- <div class="col">
      One of three columns
    </div> -->
      </div>
    </div>
  </div>
  <div class="page">
    <div class="performance">
      <h1>Build confidence to performance</h1>
      <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <div class="card" style="width: 18rem">
              <img
                src="https://i.postimg.cc/Gt2PwDkW/wallpaperflare-com-wallpaper-11.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                  Building Performance <br />
                  Confidence
                </p>
                <p class="card-text">
                  Building confidence in playing an instrument is a journey
                  worth embarking on. It starts with practice, patience, and a
                  belief in your abilities. Each note played is a step closer to
                  mastering your instrument.
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card" style="width: 18rem">
              <img
                src="https://i.postimg.cc/y8Xk9Mvf/wallpaperflare-com-wallpaper-12.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">
                  Growing talent <br />
                  is the goal <br />
                </p>
                <p class="card-text">
                  When it comes to playing an instrument, the true goal lies in
                  nurturing and growing your talent. It's not about instant
                  virtuosity but rather the beautiful journey of continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="width: 18rem">
              <img
                src="https://i.postimg.cc/pX7N2C8q/wallpaperflare-com-wallpaper-13.jpg"
                class="card-img-top"
                alt=""
              />
              <div class="card-body">
                <p class="card-text">Be who you are<br />with your skill</p>
                <p class="card-text">
                  Playing an instrument is an extension of who you are. Embrace
                  your unique style and let your personality shine through your
                  music. Whether you're passionate about classical, jazz, or
                  rock, your individuality adds depth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="partners">
      <h1 class="h1P">Our Partners</h1>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://i.postimg.cc/Vvs84SfJ/ibanez-removebg-preview.png"
              class="d-block w-60"
              alt="..."
              width="500px"
            />
          </div>
          <div class="carousel-item">
            <img src="h" class="d-block w-60" alt="..." width="500px" />
          </div>
          <div class="carousel-item">
            <img src="" class="d-block w-60" alt="..." width="500px" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style>
.about {
  width: 100%;
  height: 100vh;
  /* background: red; */
  background-image: url(https://i.postimg.cc/wjJb15Dg/Screenshot-2023-03-11-150129.png);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  color: #c5202d;
  font-family: "Oswald", sans-serif;
}
h6 {
  font-family: "Oswald", sans-serif;
  color: white;
}
h1 {
  color: #c5202d;
}
.performance {
  /* margin-top: 90px;
  margin-bottom: 90px; */
  height: 100vh;
}

.card {
  display: flex;
  justify-content: center;
}
.partners {
  margin-top: 90px;
  margin-bottom: 90px;
  background-color: black;
}
.h1P {
  color: black;
}
.card-text {
  color: black;
}
/* .page{
  background-image: url();
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
} */
.col {
  margin-right: 90px;
}
</style>