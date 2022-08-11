import "./styles.css";
import logo from "./getsitelogo.png";
import whatsup from "./100x100_whatsup_d.png";
import ReactWhatsapp from "react-whatsapp";
import DocumentMeta from "react-document-meta";
//import RedisService from "./services/redis.service";
//import DirectLink from "./models/directLink.model";
import { Base64 } from "js-base64";
import useGeoLocation from "react-ipgeolocation";
import Flag from "react-world-flags";
import rrr from "./sf2";

const meta = {
  title: "Bio-Rad Support",
  description: "I am a description, and I can create multiple tags",
  viewport: "width=device-width,initial-scale=1",
  canonical: "http://example.com/path/to/page",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags"
    }
  }
};
const queryParams = new URLSearchParams(Base64.decode(window.location.search));

const it = queryParams.get("it");
const sn = queryParams.get("sn");

const message =
  "Dear Bio-Rad Customer,\n \nOur representative will be with you in a moment to assist with " +
  it +
  " instrument, Serial Number: \n" +
  sn +
  ".";

export default function App(props) {
  const location = useGeoLocation();
  console.log("country: " + location.country);
  //const service = new RedisService();

  const sentDirectLink = () => {
    window.open(
      "https://www.bricare.net/proactive/monitoring/monitoring.aspx?id=DT8I533601&category=5"
    );
    rrr.insertNewRequest(
      "https://www.bricare.net/proactive/monitoring/monitoring.aspx?id=DT8I533601&category=5"
    );
    /*
    service
      .post(
        new DirectLink(
          "https://www.bricare.net/proactive/monitoring/monitoring.aspx?id=DT8I533601&category=5"
        )
      )
      .then((data) => {
        console.log(data);
      });
      */
  };

  return (
    <div className="App">
      <DocumentMeta {...meta} />
      <header>
        <img className="logo" src={logo} alt="" />
        <span className="country">
          <Flag code={location.country} />
        </span>
      </header>
      <div className="container">
        <div className="img-container">
          <img className="whatsup" src={whatsup} alt="" />
        </div>
        <h1>Connect with Bio-Rad Support</h1>
        <div className="content">
          Click the 'Connect' button to get assistance for {it} instrument with
          Serial Number: {sn}
        </div>
        <div>
          <input type="checkbox" />
          <label>Connect without instrument identification</label>
        </div>

        <ReactWhatsapp
          onClick={sentDirectLink}
          className="contact-botton"
          number="972547453257"
          message={message}
        >
          Connect
        </ReactWhatsapp>
      </div>
      <div className="gap"></div>
      <footer className="footer">
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>&copy; 2022 Bio-Rad Laboratories, Inc.</li>
          </ul>
        </section>
      </footer>
    </div>
  );
}
