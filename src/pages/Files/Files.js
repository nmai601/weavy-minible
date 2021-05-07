import { Component } from 'react';

import Weavy from '../../weavy/Weavy';
import WeavyApp from '../../weavy/WeavyApp';

export default class App extends Component {
  async getJwt() {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRGF2ZSIsImlzcyI6ImNsaWVudGlkIiwiZXhwIjoyMTIyMTIyMjIzLCJlbWFpbCI6ImRhdmUwQHdlYXZ5LmNvbSIsInN1YiI6ImRhdmUwQHdlYXZ5LmNvbSIsImNsaWVudF9pZCI6ImNsaWVudGlkIn0.q1ecHw6ORxpj9PIYG3FtHv_QLSQ-U7OxZ9-_D-ykpKU";
    return token;
  }
  

  render() {
    return (
      <Weavy jwt={this.getJwt}>
        <div className="App" style={{marginTop: "70px"}}>
          <WeavyApp
            spaceKey="react-space"
            spaceName="React Space"
            appKey="react-files"
            appName="React Files"
            appType="files"
            height="870px"
            />
        </div>
      </Weavy>
    );
  }
}