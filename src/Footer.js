import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="bd-footer p-3 p-md-5 mt-5 bg-light text-center text-sm-start">
        <div class="container">
          <ul class="bd-footer-links ps-0 mb-3">
            <li class="d-inline-block"><a href="https://github.com/lurafael">GitHub</a></li>
            <li class="d-inline-block ms-3"><a href="https://www.facebook.com/lucasrafaelricci/">Facebook</a></li>
          </ul>
          <p class="mb-0">Designed by <a href="https://www.linkedin.com/in/lucasrafaelricci/">Lucas Ricci</a></p>
          <p class="mb-0">Currently v5.0.0-beta1. Code licensed <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="license noopener">MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
