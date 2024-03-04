import Mini from "../../Mini/lib";
import _image from "./img/001.jpg";

function Header() {
  return (
    <div className="Header">
      <div className="myImg">
        <img src={_image} />
      </div>
      <div className="Info">
        <h1>Hrima Mohammed</h1>
        <h1>
          <i className="fa-brands fa-react"></i> React Developper
        </h1>
        <h1>
          <i className="fa-solid fa-envelope"></i> mohammedxhrima@gmail.com
        </h1>
        <h1>
          <i className="fa-solid fa-phone"></i> 065780424
        </h1>
      </div>
    </div>
  );
}

export default Header;
