import Button from "../button/Button";
import leftImage from "../../assets/ai-art-astronaut-spacesuit-space-science-fiction-hd-wallpaper-preview.jpg";
import rightImage from "../../assets/istockphoto-1364859722-612x612.jpg";
import video from "../../assets/34f50ded-1740-49e6-a0b9-aa0838d1379c.mp4";
import "./Main.css";
function Main() {
  return (
    <div>
      <div className="mainContentContainer">
        <div className="contentFirstContainer">
          <h1>Unlock the Future AI with Entropy</h1>
        </div>
        <div className="contentSecondContainer">
          <Button />
          <div className="learnMoreButton">Learn More</div>
        </div>
      </div>

      <div className="mainAssetsContainer">
        <div className="leftImageContainer">
          <img src={leftImage} alt="" />
        </div>
        <div>
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <div className="rightImageContainer">
          <img src={rightImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
