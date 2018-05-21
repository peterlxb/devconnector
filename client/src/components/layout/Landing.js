import React, { Component } from "react";
import "./layout.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4 landing--header--animated">
                  Developer Connector
                </h1>
                <p className="lead landing--para--animated">
                  {" "}
                  创建开发者信息, 分享信息并从其他开发者获得帮助
                </p>
                <hr />
                <a
                  href="register.html"
                  className="btn btn-lg btn-info mr-2 btn--animated"
                >
                  注册
                </a>
                <a
                  href="login.html"
                  className="btn btn-lg btn-light btn--animated"
                >
                  登陆
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
