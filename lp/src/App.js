import './App.css';
import 'bulma/css/bulma.min.css';
import Phopne from './images/Google Pixel 4 XL Clearly White.png'

function App() {
  return (
    <div class="hero is-primary is-large">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <p className="title">アプリ名</p>
            </div>
            <div class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item">
                  ◯◯とは
                </a>
                <a class="navbar-item">
                  特徴
                </a>
                <a class="navbar-item">
                  利用方法
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div className="columns">
          <div className="column is-half">
            <div className="has-text-centered">
              <img src={Phopne} alt ="Phone picture" width="40%" height="40%"></img>
            </div>
          </div>
          <div className="column is-half">
            <div className="has-text-centered">
              <p className="title">アプリ名</p>
              <p className="subtitle">アプリのキャッチコピー</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
