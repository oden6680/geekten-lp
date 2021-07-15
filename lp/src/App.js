import './App.css';
import 'bulma/css/bulma.min.css';

import TITLE from './images/title-logo.png'
import Phone from './images/Google Pixel 4 XL Clearly White.png'
import QR from './images/geek-qr.png'
import MIDI from './images/MIDI2.png'
import CONVERT from './images/convert.png'
import LISTEN from './images/temp-icon.png'

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-head">
          <nav className="navbar">
            <img src={TITLE} alt="title" width="13%"></img>
          </nav>
        </div>
      </section>

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
                <a href="https://zettai-onkan.netlify.app/" target="blank">Do Remixを試してみる</a>
              </div>
              <img src={QR} alt="QRcode"></img>
            </div>
            <div className="column">
              <div className="has-text-centered">
                <img src={Phone} alt ="Phone" width="40%" height="40%"></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="howtouse has-background-primary-light is-bold">
        <p className="pt-4 title has-text-centered"><u>使い方</u></p>
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <p className="title has-text-centered">STEP1</p>
            <img src={MIDI} alt ="MIDI" width="40%" height="40%"></img>
            <p className="pt-3 subtitle">聴きたい音のMIDIファイルを準備</p>
            <p className="px-6 has-text-left">音階で聞いてみたい気になる音をMIDIファイルで準備しましょう。</p>
          </div>

          <div className="column is-one-third has-text-centered">
            <p className="title has-text-centered">STEP2</p>
            <img src={CONVERT} alt="logo" width="48%" height="40%"></img>
            <p className="pt-5 subtitle">音階に変換する</p>
            <p className="px-6 has-text-left">用意したMIDIファイルを選択し音階に変換しましょう。</p>
          </div>

          <div className="column is-one-third has-text-centered">
            <p className="title has-text-centered">STEP3</p>
            <img src={LISTEN} alt="logo" width="48%" height="40%"></img>
            <p className="pt-3 subtitle">完成した音を聞いてみる</p>
            <p className="px-6 has-text-left">音階に変換した音を聞いてみましょう。気に入った音はwavファイルとしてその場で保存することができます。</p>
          </div>
        </div>
      </section>
      <footer className='footer'>
          <div className='has-text-centered'>
            <hr></hr>
            <p>&copy; 2021 teamわざそだてん <a href = "mailto:oden6680@gmail.com">oden6680@gmail.com</a> </p>
          </div>
      </footer>
    </div>
  );
}

export default App;