<template>
  <div class="home">
    <div class="Image">
      <h1>
        THE MOST REVOLUTIONARY <br />
        SCHOOL OF MUSIC OUT HERE <br />
        SCHOOL OF MUSIC FOR OUR <br />
        ROCK AWSOME PEOPLE <br />
        USE OUR BOOKING SYSTEM TO BOOK A TOUR NOW
      </h1>
    </div>
  </div>
  <div class="Spansss">
    OUR RECORDED RESULT DRIVEN ACADEMY IN MUSICIANSHIP <br />
    OUR SKILLS ARE A COMBINATION OF <span class="span1">ONE ON ONE</span> AND
    <br />
    <span class="span2">GROUP BAND SESSIONS</span> FOR KIDS AND ADULTS
  </div>
  <div class="location">
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4 imga">
          <img
            src="https://i.postimg.cc/9MWbQYNr/wallpaperflare-com-wallpaper-9.jpg"
            class="img-fluid rounded-start"
            alt="..."
            height="100%
      "
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h2 class="card-title">Our Location Details</h2>
            <h4 class="card-text">Cape Town , Western Cape</h4>
            <p class="card-ptext">24 Muizenberg , Colin Street, 7945</p>
            <p class="card-ptext">
              Sure, here's a short paragraph describing the location at 24
              Muizenberg Colin Street: Nestled on a serene corner of
              Muizenberg's picturesque Colin Street, number 24 exudes a
              captivating charm that captures the essence of coastal living.
              This idyllic location offers a harmonious blend of natural beauty
              and urban convenience. With the soothing rhythm of the nearby
              waves complementing the gentle rustling of palm leaves, residents
              are treated to a symphony of tranquility. The vibrant local
              community, dotted with quaint cafes and boutiques, adds a touch of
              warmth to the area. Whether basking in the breathtaking ocean
              views or strolling along the pristine shoreline, 24 Muizenberg
              Colin Street presents an inviting haven for those seeking both a
              coastal retreat and a connection to a vibrant neighborhood.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
<style>
.home {
  width: 100%;
  height: 100vh;
  /* background: red; */
  background-image: url(https://i.postimg.cc/9M387XGK/wallpaperflare-com-wallpaper-5.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c5202d;
  background-attachment: fixed;
}
h1 {
  font-family: "Oswald", sans-serif;
}
.span1 {
  font-size: xx-large;
  font-family: "Oswald", sans-serif;
  color: #c5202d;
}
.Spansss {
  color: black;
  font-size: xx-large;
  font-family: "Oswald", sans-serif;
  margin-top: 100px;
}
.span2 {
  font-size: xx-large;
  font-family: "Oswald", sans-serif;
  color: #c5202d;
}
.card {

  margin-bottom: 100px;
  margin-top: 100px;
}
.card-title {
  font-family: "Oswald", sans-serif;
}
.card-text {
  font-family: "Oswald", sans-serif;
  color: #c5202d;
}
.card-ptext {
  font-family: "Oswald", sans-serif;
  color: black;
}
.card-body {
  margin-top: 30px;
}

.row{
  height: 25rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

.imga{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 
/* .homeImg-container {
  position: fixed;
  width: 100%;
  height: 70%;
} */

/* .Image {
  width: 100%;
} */

/* .overlay {


} */

/* .spansss{
background-attachment: fixed;
} */
/* span{
  font-size: xx-large;
  font-family: 'Oswald', sans-serif;
}
.span2{
  color:#c5202d;
  font-size: xx-large;
  font-family: 'Oswald', sans-serif;
}
.span3{
  color:#c5202d;
  font-size: xx-large;
  font-family: 'Oswald', sans-serif;
} */
</style>