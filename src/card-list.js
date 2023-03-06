import { LitElement, html, css } from 'lit';

import "sports-card-3/src/sports-card-3.js"
import "george-card2/src/george-card.js"

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  `;

  constructor() {
    super();
    
  }

  render() {
    return html`
    <sports-card-3>
    <p slot="info">Donald Arthur Mattingly is an American former professional baseball first baseman, coach, and manager in Major League Baseball.</p>
    <div class="stats-name">Don Mattingly</div>
      <div class="stats-birthday">Date of Birth:</div>
        <div class="stats-dob">April 20, 1961</div>
            <div class="stats-namePosition">Position:</div>
              <div class="stats-position">Infielder</div>
                <div class="career-stats">Career Stats:</div>
             <div class="career-avg">BA .307</div>
          <div class="career-hits">Hits 2,153</div>
        <div class="career-rbis">RBIs 1,099</div>
    <div class="career-hrs">HRs 222</div>
    </sports-card-3>
    
    <sports-card-3 name = "Custom Name 1" top = "The">
    <p slot="info">I can write custom text here</p>
    <div>For some reason I can write custom stats here!</div>
    </sports-card-3>

    <sports-card-3 name = "Custom Name 2" top = "New">
    <p slot="info">I can write custom text too!</p>
    <div>For some reason I can write custom stats too!</div>
    </sports-card-3>

    <sports-card-3 name = "Custom Name 3" top = "York">
    <p slot="info">I can write custom text three!</p>
    <div>For some reason I can write custom stats three!</div>
    </sports-card-3>

    <sports-card-3 name = "Custom Name 4" top = "Yankees">
    <p slot="info">I can write custom text four!</p>
    <div>For some reason I can write custom stats four!</div>
    </sports-card-3>

    <george-card player-name="George Pickens" position="Wide Receiver" image-url="https://tse1.mm.bing.net/th?id=OIP.zPK_w1eJ4HJOCkaFzQrS4wHaED&pid=Api&P=0" stat-one="Rookie for the Pittsburgh Steelers in 2022" stat-two="801 yards 9.5 yards per target 4 TD" top-text="NFL" bottom-text="Youngboy">
  </george-card>
    <george-card player-name="Jerry Rice" position="Wide Receiver" image-url="https://tse3.mm.bing.net/th?id=OIP.ZP9245h4iEKNoz4A_FGHpwHaE4&pid=Api&P=0" stat-one="Greatest Wide Receiver Of All Time" stat-two="22,895 yards 14.8 yards per target 197 TD" top-text="Flash" bottom-text="80">
  </george-card>
    <george-card player-name="Deion Sanders" position="Cornerback" image-url="https://tse2.mm.bing.net/th?id=OIP.XaT3CR2kLFEiuOxX7whG3gHaEt&pid=Api&P=0" stat-one="Greatest Cornerback Of All Time" stat-two="53 interceptions 22 touchdowns 10 forced fumbles" top-text="Prime" bottom-text="Time">
  </george-card>
    <george-card player-name="Tom Brady" position="Quarterback" image-url="https://tse3.mm.bing.net/th?id=OIP.avpdFtj1wsg24oDAC0eJ4AHaFS&pid=Api&P=0" stat-one="Greatest Player Of All Time" stat-two="89,214 yard 649 TD 7 Superbowls" top-text="The" bottom-text="goat">
  </george-card>
    <george-card player-name="Ray Lewis" position="Linebacker" image-url="https://tse4.mm.bing.net/th?id=OIP.Z-2DCFb2GZ42bZO5byY71gHaEM&pid=Api&P=0" stat-one="Baltimore Ravens Star Linebacker" stat-two="978 tackles 41.5 sacks 31 interceptions" top-text="Brick" bottom-text="Wall">
  </george-card>
    

    `;
  }
}

customElements.define('card-list', CardList);