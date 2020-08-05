import React from "react";
import "./ImageGallary.scss";
import imgPopup from "../imgPopup/imgPopup";

const ImageGallary = ({ mainImage, img1, img2, img3, img4 }) => {
  const SmallBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // left: 1300,
    // top: 670,
  };
  const SmallBoxIndeve1 = {
    // left: 1300,
  };
  const SmallBoxIndeve2 = {
    // left: 1500,
  };
  return (
    <>
      <div className="image-gallary-container">
        <img className="image-gallary-main" src={mainImage} alt="main-image" />
        <div className="image-gallary-box--container">
          <div
            className="image-gallary-box1"
            style={{ SmallBox, SmallBoxIndeve1 }}
          >
            <img src={img1} alt="image" />
            <img src={img2} alt="image" />
          </div>
          <div
            className="image-gallary-box2"
            style={{ SmallBox, SmallBoxIndeve2 }}
          >
            <img src={img3} alt="image" />
            <img
              src={img4}
              alt="image"
              className="popup-button"
              // onChange={<imgPopup />}
            />
          </div>
        </div>
      </div>

      {/* <div className="modal" id="modal">
        <div className="modal-body"> */}
      {/* <button className="popup-close-button">&times;</button> */}
      {/* Hellow */}
      <ul class="slides">
        <input type="radio" name="radio-btn" id="img-1" checked />
        <li class="slide-container">
          <div class="slide">
            <img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" />
          </div>
          <div class="navv">
            <label for="img-6" class="prev">
              &#x2039;
            </label>
            <label for="img-2" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-2" />
        <li class="slide-container">
          <div class="slide">
            <img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" />
          </div>
          <div class="navv">
            <label for="img-1" class="prev">
              &#x2039;
            </label>
            <label for="img-3" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-3" />
        <li class="slide-container">
          <div class="slide">
            <img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" />
          </div>
          <div class="navv">
            <label for="img-2" class="prev">
              &#x2039;
            </label>
            <label for="img-4" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-4" />
        <li class="slide-container">
          <div class="slide">
            <img src="http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg" />
          </div>
          <div class="navv">
            <label for="img-3" class="prev">
              &#x2039;
            </label>
            <label for="img-5" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-5" />
        <li class="slide-container">
          <div class="slide">
            <img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" />
          </div>
          <div class="navv">
            <label for="img-4" class="prev">
              &#x2039;
            </label>
            <label for="img-6" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <input type="radio" name="radio-btn" id="img-6" />
        <li class="slide-container">
          <div class="slide">
            <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" />
          </div>
          <div class="navv">
            <label for="img-5" class="prev">
              &#x2039;
            </label>
            <label for="img-1" class="next">
              &#x203a;
            </label>
          </div>
        </li>

        <li class="nav-dots">
          <label for="img-1" class="nav-dot" id="img-dot-1"></label>
          <label for="img-2" class="nav-dot" id="img-dot-2"></label>
          <label for="img-3" class="nav-dot" id="img-dot-3"></label>
          <label for="img-4" class="nav-dot" id="img-dot-4"></label>
          <label for="img-5" class="nav-dot" id="img-dot-5"></label>
          <label for="img-6" class="nav-dot" id="img-dot-6"></label>
        </li>
      </ul>
      {/* </div>
      </div> */}
      {/* <div id="overlay"></div> */}
    </>
  );
};

export default ImageGallary;
