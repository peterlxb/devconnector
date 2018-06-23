import React, { Component } from "react";
import "./movie.css";

class SoundMovie extends Component {
  render() {
    return (
      <div>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most favorite movies</h2>
          </div>

          <div className="rows">
            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards__side cards__side--front">
                  <div className="cards__picture cards__picture--1">&nbsp;</div>
                  <h4 className="cards__heading">
                    <span className="cards_heading-span cards_heading-span--1">
                      Three Billboards
                    </span>
                  </h4>
                  <div className="cards__details">
                    <p>
                      情节似层层剥笋，露出的是七八个清晰、独特、复杂的人物，两个星给予出色的女主演及男配角；将视觉场面、音乐服化等手段与叙事有节奏的、完整地掌控融合起来，应是导演获得的一颗星；结尾高明的情节逆转和开
                    </p>
                  </div>
                </div>
                <div className="cards__side cards__side--back cards__side--back-1">
                  <div className="cards__cta">
                    <div className="cards__price-box">
                      <p className="cards__price-only">Only</p>
                      <p className="cards__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards__side cards__side--front">
                  <div className="cards__picture cards__picture--2">&nbsp;</div>
                  <h4 className="cards__heading">燃烧</h4>
                  <div className="cards__details">
                    <p>
                      存在与湮灭，记忆与遗忘，这是村上春树和福克纳的。社会批判主要是福克纳的。作为公共知识分子的李沧东，不可能为了拍得玄乎就忘记艺术创作的社会政治功能。他用福的现代性内核替代了村上的后现代哲学。视听语言无可挑剔。
                    </p>
                  </div>
                </div>
                <div className="cards__side cards__side--back cards__side--back-2">
                  <div className="cards__cta">
                    <div className="cards__price-box">
                      <p className="cards__price-only">Only</p>
                      <p className="cards__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="cards">
                <div className="cards__side cards__side--front">
                  <div className="cards__picture cards__picture--3">&nbsp;</div>
                  <h4 className="cards__heading">大佛普拉斯</h4>
                  <div className="cards__details">
                    <p>
                      你永远不会知道他人的皮囊之下，到底藏着什么样的秘密。就像你不会知道，万人朝拜的菩萨肚子里有一具死尸，也不会知道一个收垃圾的大叔，屋子里摆满了洋娃娃。
                    </p>
                  </div>
                </div>
                <div className="cards__side cards__side--back cards__side--back-3">
                  <div className="cards__cta">
                    <div className="cards__price-box">
                      <p className="cards__price-only">Only</p>
                      <p className="cards__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover all movies
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default SoundMovie;
