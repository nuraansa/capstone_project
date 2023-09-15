<template>
  <div class="contact p-4">
    <div class="container mx-auto">
      <div class="card inf1 mx-auto" style="background-color: #F7D0AB;">
        <div class="row no-gutters">
          <div class="col-md-6">
            <img src="https://i.ibb.co/0JxYxft/lilyjewelss.webp" class="card-img" alt="Image">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h2 class="card-title cu display-4">Reach out to us!</h2>
              <hr>
              <p class="card-text">
                <i class="bi bi-telephone"> </i>+27 12 345 6789
              </p>
              <p class="card-text"><i class="bi bi-envelope"> </i>lilyjewels@gmail.com</p>
              <p class="card-text"><i class="bi bi-house"> </i>Cape Town, South Africa</p>
              <p class="card-text"><i class="social bi bi-instagram"></i><a
                  href="https://instagram.com/lilyjewels_?igshid=MzRlODBiNWFlZA==">Instagram: @lilyjewels_</a></p>
              <p class="card-text"><i class="social bi bi-tiktok"></i><a
                  href="https://www.tiktok.com/@lilyjewelss?_t=8fi40VmESzV&_r=1">TikTok: @lilyjewelss</a></p>
              <p class="card-text"><i class="social bi bi-facebook"></i><a
                  href="https://m.facebook.com/login/?locale=en_GB">Facebook: @lilyjewelss</a></p>
              <div class="container socials">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card card1 mx-auto">
        <h1 class="card-title cu">Send us a message!</h1>
        <div class="card-body mx-auto">
          <form class="form" action="https://formspree.io/f/mjvdnbjp" method="POST">
            <div class="group">
              <input placeholder="" type="text" required
                oninvalid="this.setCustomValidity('Oops! Please Enter Your Name')" oninput="this.setCustomValidity('')">
              <label for="name">Name</label>
            </div>
            <div class="group">
              <input placeholder="" type="email" id="email" name="email" required
                oninvalid="this.setCustomValidity('Oops! Please Enter Your Email')" oninput="this.setCustomValidity('')">
              <label for="email">Email</label>
            </div>
            <div class="group">
              <textarea placeholder="" id="comment" name="comment" rows="5" required
                oninvalid="this.setCustomValidity('Oops! Please Enter Your Comment')"
                oninput="this.setCustomValidity('')"></textarea>
              <label for="comment">Comment</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <!-- old -->
    <!-- <div class="container">
      <div class="row justify-content-center">
        <div class="col">
          <div class="card card1 mx-auto p-4">
            <span class="title" style="color: #92700f;">Leave a Comment</span>
            <form class="form" action="https://formspree.io/f/xeqbgzzq" method="POST">
              <div class="group">
                <input placeholder="" type="text" required
                  oninvalid="this.setCustomValidity('Oops! Please Enter Your Name')" oninput="this.setCustomValidity('')">
                <label for="name">Name</label>
              </div>
              <div class="group">
                <input placeholder="" type="email" id="email" name="email" required
                  oninvalid="this.setCustomValidity('Oops! Please Enter Your Email')"
                  oninput="this.setCustomValidity('')">
                <label for="email">Email</label>
              </div>
              <div class="group">
                <textarea placeholder="" id="comment" name="comment" rows="5" required
                  oninvalid="this.setCustomValidity('Oops! Please Enter Your Comment')"
                  oninput="this.setCustomValidity('')"></textarea>
                <label for="comment">Comment</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div class="col col-sm d-flex justify-content-center">
          <div class="card inf1">
            <div class="container inf">
              <div class="vstack gap-2">
                <div class="p-1"><i class="bi bi-telephone inf2">+27 12 345 6789</i></div>
                <div class="p-1"><i class="bi bi-envelope inf2">lilyjewels@gmail.com</i></div>
                <div class="p-1"><i class="bi bi-house inf2">Cape Town, <br> South Africa</i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
    
<style scoped>
.card1 {
  background-color: #F7D0AB;
  border-radius: 10px;
  padding: 20px;
  width: 40%;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
  /* background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #f5f4f1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF; */
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
  margin: 2rem;
}

.card1:hover {
  transform: scale(1.05);
}

.cu {
  color: #92700f;
  text-shadow: 3px 2px 3px rgb(118, 112, 112);
}

.inf1 {
  height: auto;
  width: 85%;
  /* width: 80%;
  height: 400px; */
  /* background: radial-gradient(178.94% 106.41% at 26.42% 106.41%, #f5f4f1 0%, rgba(255, 255, 255, 0) 71.88%), #FFFFFF; */
  box-shadow: 0px 155px 62px rgba(0, 0, 0, 0.01), 0px 87px 52px rgba(0, 0, 0, 0.05), 0px 39px 39px rgba(0, 0, 0, 0.09), 0px 10px 21px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 23px;
  transition: all 0.8s cubic-bezier(0.15, 0.83, 0.66, 1);
  cursor: pointer;
}

.inf1:hover {
  transform: scale(1.05);
}

.inf2 {
  font-size: 1rem;
  color: #92700f;
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: #92700f;
}

a:hover {
  color: white;
}

.bi:hover {
  color: #92700f;
}

.bi {
  font-size: 2rem;
  margin: 1rem;
  color: #92700f;
}

.bi-instagram,
.bi-tiktok,
.bi-facebook {
  color: #92700f;
}

.inf {
  /* width: 250px;
    height: 250px;
    right: -35px;
    top: -50px; */
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.7);
}

.title {
  font-size: 27px;
  font-weight: 600;
  text-align: center;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.group {
  position: relative;
}

.form .group label {
  font-size: 16px;
  color: #92700f;
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all .3s ease;
}

.form .group input,
.form .group textarea {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid rgba#92700f;
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
}

.form .group input:placeholder-shown+label,
.form .group textarea:placeholder-shown+label {
  top: 10px;
  background-color: transparent !important;
}

.form .group input:focus,
.form .group textarea:focus {
  border-color: #92700f;
}

input {
  border-color: #92700f;
}

.form .group input:focus+label,
.form .group textarea:focus+label {
  top: -10px;
  left: 10px;
  background-color: #fff;
  color: #92700f;
  font-weight: 600;
  font-size: 14px;
}

.form .group textarea {
  resize: none;
  height: 100px;
}

.form button {
  background-color: #92700f;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form button:hover {
  background-color: #ffffff;
  color: #92700f;
  border: #92700f 1px solid;
}

.card-text {
  text-align: left;
  font-size: 1.5rem;
  color: #92700f;
}

.socials {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

/* media queries */
@media(max-width: 770px) {
  .card1 {
    width: 90%;
  }

  .form .group input,
  .form .group textarea {
    width: 100%;
    padding: 8px;
  }

  .form .group label {
    font-size: 14px;
    top: -6px;
    left: 6px;
  }

  .bi {
    font-size: 1.5rem;
    margin: 0.5rem;
  }

  .card-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .form .group label {
    font-size: 12px;
  }

  .bi {
    font-size: 1.2rem;
    margin: 0.3rem;
  }

  .card-text {
    font-size: 0.9rem;
  }
}

@media(max-width: 300px) {
  .form .group label {
    font-size: 10px;
  }

  .bi {
    font-size: 1rem;
    margin: 0.2rem;
  }

  .card-text {
    font-size: 0.8rem;
  }
}
</style>