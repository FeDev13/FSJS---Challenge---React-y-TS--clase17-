import "bootstrap/dist/css/bootstrap.min.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Racquets } from "./racquets";

export function Main() {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Home">
          <Racquets />
        </Tab>
      </Tabs>
    </>
  );
}
