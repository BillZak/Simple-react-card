import "./App.css";
import profilePic from "./npic.jpg";

function App() {
  return (
    <div className="card">
      <div className="profile-pic">
        <div className="white-circle">
          <img src={profilePic} alt="pic" />
        </div>
      </div>
      <img
        src="https://e7.pngegg.com/pngimages/223/187/png-clipart-computer-icons-check-mark-symbol-symbol-miscellaneous-blue-thumbnail.png"
        className="check"
        alt="check"
      />
      <div className="card-info">
        <h3>Bilal Zakari</h3>
        <p>
          I am a software engineer from Ghana Studying at Codetrain.I am 18
          years Old. Thank you
        </p>
        <div className="card-icons">
          <a href="https://www.facebook.com/bill.zak.589/">
            <img
              className="icons"
              src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png"
              alt="icons"
            />
          </a>
          <a href="https://twitter.com/BillZak3">
            <img
              className="icons"
              src="https://i2-prod.birminghammail.co.uk/incoming/article18471307.ece/ALTERNATES/s1200c/1_Twitter-new-icon-mobile-app.jpg"
              alt="icons"
            />
          </a>
          <a href="https://www.instagram.com/champ_gobain/">
            <img
              className="icons"
              src="https://w7.pngwing.com/pngs/128/399/png-transparent-social-media-iphone-youtube-google-instagram-blue-text-photography.png"
              alt="icons"
            />
          </a>
          <a href="https://github.com/BillZak">
            <img
              className="icons"
              src="https://www.pinclipart.com/picdir/middle/50-506896_resume-behance-github-linkedin-email-education-logo-png.png"
              alt="icons"
            />
          </a>
          <a href="https://www.linkedin.com/in/bilal-zakari-9399a0220/">
            <img
              className="icons"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"
              alt="icons"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
