import './App.css';
import 'bulma/css/bulma.min.css';

import Home from './images/home.png'
import Post from './images/post.png'
import QR from './images/geek-qr.png'
import Liblary from './images/liblary.png'
import Timeline from './images/timeline.png'

function App() {
  return (
    <div>

      <section class="hero is-medium is-grey">
        <div class="hero-body">
          <div className="columns">
          <div className="column is-1"></div>
            <div className="column is-6">
              <div>
                <p className="pt-6 title is-size-1">Do Remix</p>
                <p className="pt-4 subtitle is-size-3">気になるあの音をドレミで</p>
                <p className="py-3 is-size-5">日常の音が音階で聞こえる絶対音感を体験してみませんか？<br></br>
                Do Remixは絶対音感を手軽に体験ができるアプリです。
                </p>
                <a href="https://do-remix.vercel.app/" target="blank">Do Remixを試してみる</a>
              </div>
              <img src={QR} alt="QRcode"></img>
            </div>
            <div className="column">
              <div className="has-text-centered">
              <img src={Home} alt="QRcode"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-primary-light is-bold">
        <p className="pt-4 title has-text-centered"><u>Do Remixの特徴</u></p>
        <div className="columns is-vcentered">
          <div className="column is-half has-text-centered">
          <img src={Post} alt="postscreen"></img>
          </div>
          <div className="column has-text-centered">
            <p className="title">特徴１</p>
            <p className="pt-2 subtitle">絶対音感の擬似体験ができる！</p>
            <p>選ばれた者のみが持つ能力絶対音感。<br></br>
              MIDIファイルを用意すれば簡単に<br></br>
              絶対音感を擬似体験することができます。
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="columns is-vcentered">
          <div className="column has-text-centered">
            <p className="title">特徴2</p>
            <p className="pt-2 subtitle">変換した音を記録可能！</p>
            <p>自身が変換した音声の記録をするライブラリ機能<br></br>
              いつでもアプリを開けば今までの変換した<br></br>
              音声等をすぐに再び聞くことができます。
            </p>
          </div>
          <div className="column is-half has-text-centered">
          <img src={Liblary} alt="liblary screen"></img>
          </div>
        </div>
      </section>

      <section className="has-background-primary-light is-bold">
        <div className="columns is-vcentered">
          <div className="column is-half has-text-centered">
          <img src={Timeline} alt="timeline screen"></img>
          </div>
          <div className="column has-text-centered">
            <p className="title">特徴3</p>
            <p className="pt-2 subtitle">MIDIファイルがなくても楽しめる！</p>
            <p>音階で聞いてみたい音のMIDIファイルがなくても安心<br></br>
              タイムライン機能から他のユーザーが変換した音声を聞いてみましょう<br></br>
              もちろん自身の変換した音声を投稿することも可能です。
            </p>
          </div>
        </div>
      </section>

      <footer className='footer'>
          <div className='has-text-centered'>
            <hr></hr>
            <p>&copy; 技育展2021 無駄開発部門 DoRemixers <a href = "mailto:oden6680@gmail.com">oden6680@gmail.com</a> </p>
          </div>
      </footer>
    </div>
  );
}

export default App;