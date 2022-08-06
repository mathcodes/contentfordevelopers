import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="img">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          🛠🛠🛠 Under constructon 🛠🛠🛠.</p>
        <p>🙏🙏🙏 Thank you for your patience. 🙏🙏🙏</p>
        <p>👇👇👇 You can still access our codes with guides using the links provided in the meantime. 👇👇👇
        </p>
        <table>
          <thead>
            <tr>
              <a
                className="App-link"
                href="https://github.com/mathcodes/lc_hr_cw"
                target="_blank"
                rel="noopener noreferrer"
              >Github Repository</a>

            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <a
                  className="App-link"
                  href="https://github.com/mathcodes/lc_hr_cw/tree/main/LeetCode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
                </td>
              <td>
                <a
                  className="App-link"
                  href="https://github.com/mathcodes/lc_hr_cw/tree/main/HackerRank"
                  target="_blank"
                  rel="noopener noreferrer"
                >HackerRank</a></td>
            </tr>
            <tr>
              <td>
                <a
                  className="App-link"
                  href="https://github.com/mathcodes/lc_hr_cw/tree/main/CodeWars"
                  target="_blank"
                  rel="noopener noreferrer"
                >CodeWars</a>
</td>
              <td>
                <a
                  className="App-link"
                  href="https://github.com/mathcodes/lc_hr_cw/tree/main/Algorithms"
                  target="_blank"
                  rel="noopener noreferrer"
                >Algorithms</a>
              </td>
            </tr>
            <tr>
              <td>
                <a
                  className="App-link"
                  href=" https://github.com/mathcodes/lc_hr_cw/tree/main/Notes%20and%20Resources"
                  target="_blank"
                  rel="noopener noreferrer"
                >Notes & Resources</a>
              </td>
              <td>
              <a
                  className="App-link"
                  href="https:www.jonchristie.net"
                  target="_blank"
                  rel="noopener noreferrer"
                >Portfolio</a>
              </td>
            </tr>

          </tbody>

        </table>




      </header>


    </div>

  );
}

export default App;
