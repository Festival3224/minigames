(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24%2012.2727C24%2011.4218%2023.9221%2010.6036%2023.7774%209.81818H12.2449V14.4655H18.8349C18.5455%2015.96%2017.6772%2017.2255%2016.3748%2018.0764V21.0982H20.3488C22.6642%2019.0036%2024%2015.9273%2024%2012.2727Z'%20fill='%234285F4'/%3e%3cpath%20d='M12.2449%2024C15.551%2024%2018.3228%2022.9309%2020.3488%2021.0982L16.3748%2018.0764C15.2839%2018.7964%2013.8924%2019.2327%2012.2449%2019.2327C9.06122%2019.2327%206.35622%2017.1273%205.38776%2014.2909H1.31354V17.3891C3.32839%2021.3055%207.45826%2024%2012.2449%2024Z'%20fill='%2334A853'/%3e%3cpath%20d='M5.38776%2014.28C5.14286%2013.56%204.99814%2012.7964%204.99814%2012C4.99814%2011.2036%205.14286%2010.44%205.38776%209.72V6.62182H1.31354C0.478664%208.23636%200%2010.0582%200%2012C0%2013.9418%200.478664%2015.7636%201.31354%2017.3782L4.48609%2014.9564L5.38776%2014.28Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12.2449%204.77818C14.0482%204.77818%2015.6512%205.38909%2016.9314%206.56727L20.4379%203.13091C18.3117%201.18909%2015.551%200%2012.2449%200C7.45826%200%203.32839%202.69455%201.31354%206.62182L5.38776%209.72C6.35622%206.88364%209.06122%204.77818%2012.2449%204.77818Z'%20fill='%23EA4335'/%3e%3c/svg%3e`;function t(e){let t=new URLSearchParams(location.search);if(t.get(`auth`)===e)return;t.set(`auth`,e);let n=t.toString(),r=n?`${location.pathname}?${n}`:location.pathname;history.replaceState({},``,r)}function n(n=`login`,r){let i=document.createElement(`div`);i.className=`auth-overlay`,i.innerHTML=`
            <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Authentication">
              <div class="auth-dialog__tabs">
                <button
                  class="auth-dialog__tab auth-dialog__tab--active"
                  type="button"
                  data-auth-tab="login"
                >
                  Login
                </button>

                <button
                  class="auth-dialog__tab"
                  type="button"
                  data-auth-tab="register"
                >
                  Register
                </button>
              </div>

        <div class="auth-dialog__login">
          <div class="auth-dialog__heading">
            <h2 class="auth-dialog__title">Welcome Back!</h2>
            <p class="auth-dialog__subtitle">
              Sign in to resume your games and progress.
            </p>
          </div>

          <form class="auth-dialog__form">
            <div class="auth-dialog__form-fields">
                <label class="auth-dialog__field">
                  <span class="auth-dialog__label">Email Address</span>

                  <div class="auth-dialog__input-wrapper">
                    <span
                      class="material-symbols-outlined auth-dialog__input-icon"
                      aria-hidden="true"
                    >
                      mail
                    </span>

                    <input
                      class="auth-dialog__input"
                      type="email"
                      name="email"
                      placeholder="e.g. alex@minigames.com"
                      autocomplete="email"
                    />
                  </div>
                </label>

                <label class="auth-dialog__field">
                  <span class="auth-dialog__label">Password</span>

                  <div class="auth-dialog__input-wrapper">
                    <span
                      class="material-symbols-outlined auth-dialog__input-icon"
                      aria-hidden="true"
                    >
                      lock
                    </span>

                    <input
                        class="auth-dialog__input"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        autocomplete="current-password"
                    />

                    <button
                        class="auth-dialog__password-toggle"
                        type="button"
                        aria-label="Show password"
                    >
                    <span class="material-symbols-outlined" aria-hidden="true">
                        visibility_off
                    </span>
                    </button>
                  </div>
                </label>

                <button class="auth-dialog__forgot" type="button">
                   Forgot Password?
                </button>
            </div>


            <div class="auth-dialog__actions">
                <button class="auth-dialog__submit" type="submit">
                  Login
                </button>

                <div class="auth-dialog__divider">
                    <span class="auth-dialog__divider-line"></span>
                    <span class="auth-dialog__divider-text">OR</span>
                    <span class="auth-dialog__divider-line"></span>
                </div>

                <button class="auth-dialog__google" type="button">
                    <img
                        class="auth-dialog__google-icon"
                        src="${e}"
                        alt=""
                        aria-hidden="true"
                    />
                    Continue with Google
                </button>
            </div>
          </form>

          <p class="auth-dialog__switch">
            Don’t have an account?
            <button
               class="auth-dialog__switch-button"
               type="button"
               data-auth-switch="register"
            >
              Register
            </button>
          </p>
  
        </div>

        <div class="auth-dialog__register" hidden>
      <div class="auth-dialog__heading">
        <h2 class="auth-dialog__title">Create Account</h2>
        <p class="auth-dialog__subtitle">
          Join MiniGames to track your score & streak.
        </p>
      </div>

      <form class="auth-dialog__form">
        <div class="auth-dialog__form-fields">
          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Username</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                person
              </span>

              <input
                class="auth-dialog__input"
                type="text"
                name="username"
                placeholder="e.g. CozyGamer_99"
                autocomplete="username"
              />
            </div>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Email Address</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                mail
              </span>

              <input
                class="auth-dialog__input"
                type="email"
                name="email"
                placeholder="your.email@domain.com"
                autocomplete="email"
              />
            </div>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Password</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                lock
              </span>

              <input
                class="auth-dialog__input"
                type="password"
                name="password"
                placeholder="Min. 8 characters"
                autocomplete="new-password"
              />
            </div>
          </label>

          <label class="auth-dialog__field">
            <span class="auth-dialog__label">Confirm Password</span>

            <div class="auth-dialog__input-wrapper">
              <span
                class="material-symbols-outlined auth-dialog__input-icon"
                aria-hidden="true"
              >
                lock
              </span>

              <input
                class="auth-dialog__input"
                type="password"
                name="confirmPassword"
                placeholder="Repeat your password"
                autocomplete="new-password"
              />
            </div>
          </label>
        </div>

        <div class="auth-dialog__actions">
          <button class="auth-dialog__submit" type="submit">
            Create Account
          </button>

          <div class="auth-dialog__divider">
            <span class="auth-dialog__divider-line"></span>
            <span class="auth-dialog__divider-text">OR</span>
            <span class="auth-dialog__divider-line"></span>
          </div>

          <button class="auth-dialog__google" type="button">
            <img
              class="auth-dialog__google-icon"
              src="${e}"
              alt=""
              aria-hidden="true"
            />
            Sign up with Google
          </button>
        </div>
      </form>

      <p class="auth-dialog__switch">
        Already have an account?
        <button
          class="auth-dialog__switch-button"
          type="button"
          data-auth-switch="login"
        >
          Login
        </button>
      </p>
    </div>
    </div>
  `;let a=i.querySelector(`.auth-dialog__login`),o=i.querySelector(`.auth-dialog__register`),s=i.querySelector(`[data-auth-tab="login"]`),c=i.querySelector(`[data-auth-tab="register"]`),l=i.querySelectorAll(`.auth-dialog__switch-button`),u=i.querySelector(`.auth-dialog__password-toggle`),d=u?.closest(`.auth-dialog__input-wrapper`)?.querySelector(`.auth-dialog__input`),f=i.querySelectorAll(`.auth-dialog__form`);u?.addEventListener(`click`,()=>{if(!d)return;let e=d.type===`password`;d.type=e?`text`:`password`;let t=u.querySelector(`.material-symbols-outlined`);t&&(t.textContent=e?`visibility`:`visibility_off`),u.setAttribute(`aria-label`,e?`Hide password`:`Show password`)});for(let e of f)e.addEventListener(`submit`,e=>{e.preventDefault()});let p=i.querySelector(`.auth-dialog`);function m(e){if(!p){e();return}let t=p.getBoundingClientRect().height;p.style.height=`${t}px`,e(),p.style.height=`auto`;let n=p.getBoundingClientRect().height;p.style.height=`${t}px`,requestAnimationFrame(()=>{p.style.height=`${n}px`});let r=e=>{e.propertyName===`height`&&(p.style.height=`auto`,p.removeEventListener(`transitionend`,r))};p.addEventListener(`transitionend`,r)}function h(){m(()=>{a?.removeAttribute(`hidden`),o?.setAttribute(`hidden`,``),s?.classList.add(`auth-dialog__tab--active`),c?.classList.remove(`auth-dialog__tab--active`)})}function g(){m(()=>{o?.removeAttribute(`hidden`),a?.setAttribute(`hidden`,``),c?.classList.add(`auth-dialog__tab--active`),s?.classList.remove(`auth-dialog__tab--active`)})}n===`register`&&(o?.removeAttribute(`hidden`),a?.setAttribute(`hidden`,``),c?.classList.add(`auth-dialog__tab--active`),s?.classList.remove(`auth-dialog__tab--active`)),s?.addEventListener(`click`,()=>{h(),t(`login`)}),c?.addEventListener(`click`,()=>{g(),t(`register`)});function _(){r?.(),i.classList.remove(`auth-overlay--open`),setTimeout(()=>{i.remove(),document.removeEventListener(`keydown`,v)},360)}function v(e){e.key===`Escape`&&_()}i.addEventListener(`click`,e=>{e.target===i&&_()});for(let e of l)e.addEventListener(`click`,()=>{if(e.dataset.authSwitch===`register`){g(),t(`register`);return}h(),t(`login`)});return document.addEventListener(`keydown`,v),requestAnimationFrame(()=>{i.classList.add(`auth-overlay--open`)}),i}function r(){let e=new URLSearchParams(location.search).get(`auth`);if(e!==`login`&&e!==`register`||document.querySelector(`.auth-overlay`))return;let t=n(e,()=>{history.back()});document.body.append(t)}var i=`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M26%201H6C3.23858%201%201%203.23858%201%206V26C1%2028.7614%203.23858%2031%206%2031H26C28.7614%2031%2031%2028.7614%2031%2026V6C31%203.23858%2028.7614%201%2026%201Z'%20fill='url(%23pattern0_1_259)'%20stroke='%23242145'%20stroke-width='2'/%3e%3cdefs%3e%3cpattern%20id='pattern0_1_259'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1_259'%20transform='scale(0.03125)'/%3e%3c/pattern%3e%3cimage%20id='image0_1_259'%20width='32'%20height='32'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABCNJREFUeAG1V91rXEUU/83szeazNj5YTRVJQWoEg1YqKD6of4KKL2KxD4qPPuiLltpabKlatUIefFFEQQT7KAhFSAVfRKFSQQShXbWUZrMJCdm0m9175/TM1/3YvR9J0x52mLkzc875na+ZHcAREU1yO6KI5rnRbWrnQ6KDSJFwyqcJmOfhNMqIPMe2qcFinhVCNIw4RnapUvmtR6SV76uRdcnBm5Mryhn8dP7yJE9vCB0X/ngUt4y25JVzGgBtT8b2MMjcWVEhnTGTUuh2Q9PrJtKsWwAvsSUi81OK8MHps9j/9EnMPnEcn8z9pBM5DvdWKD8EfjEWmPKpViQE9swexq5dO3mW0Gyu4eKfx7JQDUt1LEo9QBko2WGnG9k9/N3rRYM8pbGgzQHwm3u9EKFWYtxshX564gV4BB+ffD7ZrXOD96soyYvBuCTASkNgmQkX/rqMA699g4iFs1yjZGJiGEGtZmSFoUK73UEgJfjH8xJfff4yHpm9vzIngirlmu69507U6wFqtRyHkVU4uXMsmWKUU1OTsa2UsptSfHqiPATOU2NjdWNlpr6LeqZeFOGOidFYT1pnv+xyAI5jZDiwNS98dts1kTbJR5Lnuhuh8ZjZg/I6CNKAKFaqjDwpLT5ddpGiRJDKyStfdowy5L1SJmqV+87LB5nmt9p0nUu8+fYZ7H3sKO6bOYSvv/sVE+PDzgNkeo2GPPI+C3aMj+DbM79h94Pv4IF9R/DWoe8NiDzKVoEbdrnkHn/mFEZHAqNM5PGKxGg9ZkFQukdiqYQGKzgkEX45+wbGR0cs+BQFGR+6oJIWpnTMa1ZgfKWm71fbKQeQZAqM26EMC7FBG2xMPTcZZMYk19frNbx64Ek0F9Zx+f8lzH34ojmMtALhDiPh8Eple0HJUa2T8PSJ53D1ygoWFtt4/ZWnjNy8g7nwINKHjU9CTXv3H+Nat6VllPHSUusaJ2eEu+/aYYSTuSeA1dXr+Pv3d2NepW9LmVOvKClDwcpNwhGZBBoyh5CznIcPz+zGP+cP49KF9/DQzFRGrD4RtVJjiJNVVJCDAHL80dnoYWgoMO7XMpoLbXwx95IpT01f8ri1vB6fCwGHsNMJE4HWPcijQQA5ibKyeg31wGcbIRjqY2HNxmIX5HpQQ3u9k5VZcBrJEr2uKoB//1vG4lKbLV9Ds7XGNx3h+Ec/WPsY0PunfuRkgllb5P8GreU2LjZaiRwq1LCJ27AAILlw+NX+deX+uFSRzKIsIB/GuFHsHX+ymIRN7ckop2IdGsA5WCOKSRSggj8mU4DK+Ae3/CGZ9edc2aXks4pQfd8VE6fNZ8I8SgH9OJmuYkjfvv3z6FsTJd9u3JBC7OEmVvRDkecaqCDa5Foe0L4/Jg2ns28TvxP1U+02Ps/nI6Kj2ute5w08AKp+H2eCQgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e`;function a(e){let t=new URLSearchParams(location.search);e?t.set(`auth`,e):t.delete(`auth`);let n=t.toString(),r=n?`${location.pathname}?${n}`:location.pathname;history.pushState({},``,r)}function o(){let e=document.createElement(`header`);e.className=`header`,e.innerHTML=`
      <div class="header__container">
        <a class="header__logo" href="/" aria-label="MiniGames home">
          <img
              class="header__logo-icon"
              src="${i}"
              alt=""
              aria-hidden="true"
          />
          <span>MiniGames</span>
        </a>

        <div class="header__actions">
          <nav class="header__nav" aria-label="Main navigation">
            <a class="header__nav-link" href="/" data-route="home">Home</a>
            <a class="header__nav-link" href="/library" data-route="library">Library</a>
            <a class="header__nav-link" href="/">Tournaments</a>
            <a class="header__nav-link" href="/">Community</a>
          </nav>

          <div class="header__user-actions">
            <button class="header__login" type="button">
              Log In
            </button>

            <button class="header__signup" type="button">
              Sign Up
            </button>

            <button
              class="header__menu"
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </div>

      <div class="header__mobile-menu" aria-hidden="true">
        <div class="header__mobile-menu-top">
          <a class="header__mobile-logo" href="#" aria-label="MiniGames home">
            <img
              class="header__mobile-logo-icon"
              src="${i}"
              alt=""
              aria-hidden="true"
            />
            <span>MiniGames</span>
          </a>

          <button
            class="header__mobile-close"
            type="button"
            aria-label="Close menu"
          >
            <span class="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
      </div>

      <nav class="header__mobile-nav" aria-label="Mobile navigation">
        <a class="header__mobile-link" href="/" data-route="home">Home</a>
        <a class="header__mobile-link" href="/library" data-route="library">Library</a>
        <a class="header__mobile-link" href="/">Tournaments</a>
        <a class="header__mobile-link" href="/">Community</a>
      </nav>

      <div class="header__mobile-actions">
        <button class="header__mobile-login" type="button">Log In</button>
        <button class="header__mobile-signup" type="button">Sign Up</button>
      </div>
    </div>

    <div class="header__backdrop"></div>

  `;let t=e.querySelector(`.header__menu`),r=e.querySelector(`.header__mobile-close`),o=e.querySelector(`.header__mobile-menu`),s=e.querySelector(`.header__backdrop`),c=e.querySelector(`.header__login`),l=e.querySelector(`.header__signup`),u=e.querySelector(`.header__mobile-login`),d=e.querySelector(`.header__mobile-signup`),f=(location.pathname.replace(`/minigames/`,`/`)||`/`)===`/library`?`library`:`home`,p=e.querySelectorAll(`[data-route]`);for(let e of p)e.dataset.route===f&&(e.classList.contains(`header__nav-link`)&&e.classList.add(`header__nav-link--active`),e.classList.contains(`header__mobile-link`)&&e.classList.add(`header__mobile-link--active`));for(let e of p)e.addEventListener(`click`,t=>{if(t.preventDefault(),e.dataset.route===`library`){$(`/library`);return}$(`/`)});let m=e.querySelectorAll(`.header__logo, .header__mobile-logo`);for(let e of m)e.addEventListener(`click`,e=>{e.preventDefault(),$(`/`)});c?.addEventListener(`click`,()=>{document.querySelector(`.auth-overlay`)||(a(`login`),document.body.append(n(`login`,()=>{history.back()})))}),l?.addEventListener(`click`,()=>{document.querySelector(`.auth-overlay`)||(a(`register`),document.body.append(n(`register`,()=>{history.back()})))});function h(){o?.classList.add(`header__mobile-menu--open`),s?.classList.add(`header__backdrop--visible`),t?.setAttribute(`aria-expanded`,`true`),o?.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`menu-open`)}function g(){o?.classList.remove(`header__mobile-menu--open`),s?.classList.remove(`header__backdrop--visible`),t?.setAttribute(`aria-expanded`,`false`),o?.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`menu-open`)}u?.addEventListener(`click`,()=>{g(),!document.querySelector(`.auth-overlay`)&&(a(`login`),document.body.append(n(`login`,()=>{history.back()})))}),d?.addEventListener(`click`,()=>{g(),!document.querySelector(`.auth-overlay`)&&(a(`register`),document.body.append(n(`register`,()=>{history.back()})))}),t?.addEventListener(`click`,h),r?.addEventListener(`click`,g),s?.addEventListener(`click`,g);let _=e.querySelectorAll(`.header__mobile-link`);for(let e of _)e.addEventListener(`click`,t=>{g(),!e.dataset.route&&(t.preventDefault(),$(`/`))});return e}function s(){let e=document.createElement(`section`);return e.className=`hero`,e.innerHTML=`
    <div class="hero__container">
      <div class="hero__card">
        <h1 class="hero__title">
          Take a Short Break<br />
          & Have Fun
        </h1>

        <p class="hero__text hero__text--desktop">
           Discover hundreds of curated casual mini-games. Play instantly in your browser —
           puzzle, match 3, farm, and board classics.
        </p>

        <p class="hero__text hero__text--mobile">
            Discover hundreds of curated casual mini-games right in your browser.
        </p>

        <button class="hero__button" type="button">
          Browse Library
        </button>
      </div>
    </div>
  `,e}var c=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,l=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,u=`/minigames/assets/islanders-card-DljrohUL.jpg`,d=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,f=`/minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg`,p=`/minigames/assets/tailside-cozy-cafe-sim-card-C7B0rePC.jpg`,m=`/minigames/assets/tiny-glade-card-CS2XLEzK.jpg`,h=`/minigames/assets/vacation-cafe-card-Bzcyczbo.jpg`,g=`/minigames/assets/winter-burrow-card-KbzzF82b.jpg`,_=`https://faxb76kxra.execute-api.eu-central-1.amazonaws.com/api`;async function v(){let e=await fetch(`${_}/games?featured=true`);if(!e.ok)throw Error(`Failed to load featured games: ${e.status}`);return(await e.json()).data}var y=class extends Error{constructor(e){super(e),this.name=`GameNotFoundError`}},b=class extends Error{constructor(e){super(e),this.name=`LibraryDataNotFoundError`}};async function x(e=1,t=`all`,n=`rating-desc`){let r=await fetch(`${_}/games?category=${t}&sort=${n}&page=${e}&limit=6
  `);if(r.status===400)throw new b(`Library data not found`);if(!r.ok)throw Error(`Failed to load library games: ${r.status}`);return await r.json()}async function S(){let e=await fetch(`${_}/categories`);if(!e.ok)throw Error(`Failed to load categories: ${e.status}`);return(await e.json()).data}async function C(e){let t=await fetch(`${_}/games/${e}`);if(t.status===404)throw new y(`Game not found: ${e}`);if(!t.ok)throw Error(`Failed to load game details: ${t.status}`);return(await t.json()).data}async function w(e){let t=await fetch(`${_}/games/${e}/comments?limit=3&sort=newest`);if(!t.ok)throw Error(`Failed to load game comments: ${t.status}`);return await t.json()}async function T(){let e=await fetch(`${_}/leaderboard`);if(!e.ok)throw Error(`Failed to load leaderboard: ${e.status}`);return(await e.json()).data}var E=`data:image/svg+xml,%3csvg%20width='24'%20height='29'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.825%209L9.425%2014.6L8%2016L1.19209e-07%208L8%20-9.53674e-07L9.425%201.4L3.825%207H16V9H3.825Z'%20fill='%23242145'/%3e%3c/svg%3e`,D=`data:image/svg+xml,%3csvg%20width='24'%20height='29'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.175%209H1.19209e-07V7H12.175L6.575%201.4L8%20-9.53674e-07L16%208L8%2016L6.575%2014.6L12.175%209Z'%20fill='%23242145'/%3e%3c/svg%3e`,O=`data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.85%2014.825L10%2012.925L13.15%2014.85L12.325%2011.25L15.1%208.85L11.45%208.525L10%205.125L8.55%208.5L4.9%208.825L7.675%2011.25L6.85%2014.825ZM3.825%2019L5.45%2011.975L0%207.25L7.2%206.625L10%200L12.8%206.625L20%207.25L14.55%2011.975L16.175%2019L10%2015.275L3.825%2019Z'%20fill='%23FFD02B'/%3e%3c/svg%3e`,k=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2021L10.55%2019.7C8.86667%2018.1834%207.475%2016.875%206.375%2015.775C5.275%2014.675%204.4%2013.6917%203.75%2012.825C3.1%2011.9417%202.64167%2011.1334%202.375%2010.4C2.125%209.66669%202%208.91669%202%208.15002C2%206.58336%202.525%205.27502%203.575%204.22502C4.625%203.17502%205.93333%202.65002%207.5%202.65002C8.36667%202.65002%209.19167%202.83336%209.975%203.20002C10.7583%203.56669%2011.4333%204.08336%2012%204.75003C12.5667%204.08336%2013.2417%203.56669%2014.025%203.20002C14.8083%202.83336%2015.6333%202.65002%2016.5%202.65002C18.0667%202.65002%2019.375%203.17502%2020.425%204.22502C21.475%205.27502%2022%206.58336%2022%208.15002C22%208.91669%2021.8667%209.66669%2021.6%2010.4C21.35%2011.1334%2020.9%2011.9417%2020.25%2012.825C19.6%2013.6917%2018.725%2014.675%2017.625%2015.775C16.525%2016.875%2015.1333%2018.1834%2013.45%2019.7L12%2021ZM12%2018.3C13.6%2016.8667%2014.9167%2015.6417%2015.95%2014.625C16.9833%2013.5917%2017.8%2012.7%2018.4%2011.95C19%2011.1834%2019.4167%2010.5084%2019.65%209.92503C19.8833%209.32503%2020%208.73336%2020%208.15002C20%207.15002%2019.6667%206.31669%2019%205.65003C18.3333%204.98336%2017.5%204.65003%2016.5%204.65003C15.7167%204.65003%2014.9917%204.87503%2014.325%205.32503C13.6583%205.75836%2013.2%206.31669%2012.95%207.00003H11.05C10.8%206.31669%2010.3417%205.75836%209.675%205.32503C9.00833%204.87503%208.28333%204.65003%207.5%204.65003C6.5%204.65003%205.66667%204.98336%205%205.65003C4.33333%206.31669%204%207.15002%204%208.15002C4%208.73336%204.11667%209.32503%204.35%209.92503C4.58333%2010.5084%205%2011.1834%205.6%2011.95C6.2%2012.7%207.01667%2013.5917%208.05%2014.625C9.08333%2015.6417%2010.4%2016.8667%2012%2018.3Z'%20fill='%23FF4B4B'/%3e%3c/svg%3e`;function A({slug:e,title:t,imageSrc:n,rating:r,likes:i,className:a=``}){let o=document.createElement(`article`);o.className=`game-card ${a}`.trim(),o.dataset.slug=e;let s=r&&i?`
        <div class="game-card__meta">
          <span class="game-card__rating">
            <img
              class="game-card__rating-icon"
              src="${O}"
              alt=""
              aria-hidden="true"
            />
            ${r}
          </span>

          <span class="game-card__likes">
            <img
              class="game-card__likes-icon"
              src="${k}"
              alt=""
              aria-hidden="true"
            />
            ${i}
          </span>
        </div>
      `:``;return o.innerHTML=`
    <img class="game-card__image" src="${n}" alt="" draggable="false"/>

    ${`
    <div class="game-card__overlay">
      ${t?`<h3 class="game-card__title">${t}</h3>`:``}
      ${s}
    </div>
  `}
  `,o}var j=`/minigames/assets/camper-van-make-it-home-hero-pwfm3znw.jpg`,M=`/minigames/assets/cast-n-chill-hero-8veDqaQs.jpg`,N=`/minigames/assets/cat-chess-hero-BHbuGtch.jpg`,P=`/minigames/assets/cat-mail-co-hero-DbYEE9Th.jpg`,F=`/minigames/assets/cozy-solitaire-hero-BRbaEfNe.jpg`,I=`/minigames/assets/cozy-sudoku-hero-C3SdMet6.jpg`,L=`/minigames/assets/grimshire-hero-T4rzibu3.jpg`,R=`/minigames/assets/heartopia-hero-CMAZ-f6E.jpg`,z=`/minigames/assets/islanders-new-shores-hero-De9RnJZj.jpg`,ee=`/minigames/assets/koroneko-hero-VMaYEKgL.jpg`,te=`/minigames/assets/leaf-it-alone-hero-CV390ovr.jpg`,ne=`/minigames/assets/leafy-corner-hero-CZzWvrUG.jpg`,re=`/minigames/assets/little-corners-hero-B0OQFWAJ.jpg`,ie=`/minigames/assets/organized-inside-hero-FV62oWy5.jpg`,ae=`/minigames/assets/palia-hero-CCZCUrCw.jpg`,oe=`/minigames/assets/shelve-the-potions-hero-Cm4UQOCB.jpg`,se=`/minigames/assets/tailside-cozy-cafe-sim-hero-CxkZW35G.jpg`,ce=`/minigames/assets/the-wild-at-heart-hero-C48oeLv2.jpg`,le=`/minigames/assets/tiny-glade-hero-u35s1BKW.jpg`,ue=`/minigames/assets/tukoni-forest-keepers-hero-D-UQTA7d.jpg`,de=`/minigames/assets/vacation-cafe-simulator-hero-DHuU6sOY.jpg`,fe=`/minigames/assets/whisper-of-the-house-hero-ciSQ2ovS.jpg`,pe=`/minigames/assets/winter-burrow-hero-oJn7juUA.jpg`,me=`/minigames/assets/wytchwood-hero-DzdPASTa.jpg`;function B(e){return e<1e3?String(e):`${Math.floor(e/100)/10}K`}function V(e){return e.toFixed(1)}function H(e){let t=new Date(e),n=Math.floor((new Date().getTime()-t.getTime())/864e5);if(n<1)return`today`;if(n<7)return`${n} day${n===1?``:`s`} ago`;let r=Math.floor(n/7);return`${r} week${r===1?``:`s`} ago`}function U({message:e,variant:t,duration:n=4e3}){document.querySelector(`.snackbar`)?.remove();let r=document.createElement(`div`);r.className=`snackbar snackbar--${t}`,r.setAttribute(`role`,`status`),r.innerHTML=`
    <span class="snackbar__message">${e}</span>

    <button
      class="snackbar__close"
      type="button"
      aria-label="Close notification"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        close
      </span>
    </button>
  `;let i=r.querySelector(`.snackbar__close`),a=()=>{r.remove()};i?.addEventListener(`click`,a),document.body.append(r),setTimeout(a,n)}function W(){document.querySelector(`.snackbar`)?.remove()}var G=Object.assign({"../assets/library/camper-van-make-it-home-hero.jpg":j,"../assets/library/cast-n-chill-hero.jpg":M,"../assets/library/cat-chess-hero.jpg":N,"../assets/library/cat-mail-co-hero.jpg":P,"../assets/library/cozy-solitaire-hero.jpg":F,"../assets/library/cozy-sudoku-hero.jpg":I,"../assets/library/grimshire-hero.jpg":L,"../assets/library/heartopia-hero.jpg":R,"../assets/library/islanders-new-shores-hero.jpg":z,"../assets/library/koroneko-hero.jpg":ee,"../assets/library/leaf-it-alone-hero.jpg":te,"../assets/library/leafy-corner-hero.jpg":ne,"../assets/library/little-corners-hero.jpg":re,"../assets/library/organized-inside-hero.jpg":ie,"../assets/library/palia-hero.jpg":ae,"../assets/library/shelve-the-potions-hero.jpg":oe,"../assets/library/tailside-cozy-cafe-sim-hero.jpg":se,"../assets/library/the-wild-at-heart-hero.jpg":ce,"../assets/library/tiny-glade-hero.jpg":le,"../assets/library/tukoni-forest-keepers-hero.jpg":ue,"../assets/library/vacation-cafe-simulator-hero.jpg":de,"../assets/library/whisper-of-the-house-hero.jpg":fe,"../assets/library/winter-burrow-hero.jpg":pe,"../assets/library/wytchwood-hero.jpg":me});function he(e){let t=e.split(`/`).pop();if(!t)return``;let n=Object.keys(G).find(e=>e.endsWith(`/${t}`));return n?G[n]:``}var ge={1:`🥇`,2:`🥈`,3:`🥉`};function _e(e){return e.map(e=>`
        <div class="game-details-dialog__record">
          <div class="game-details-dialog__record-player-group">
            <span class="game-details-dialog__record-medal" aria-hidden="true">
              ${ge[e.position]??``}
            </span>

            <span class="game-details-dialog__record-player">
              ${e.playerName}
            </span>
          </div>

          <div class="game-details-dialog__record-result-group">
            <span class="game-details-dialog__record-score">
              ${e.score.toLocaleString()} pts
            </span>

            <span class="game-details-dialog__record-time">
              ${H(e.achievedAt)}
            </span>
          </div>
        </div>
      `).join(``)}function ve(e){return e.map((e,t)=>{let n=e.isLikedByCurrentUser?` game-details-dialog__comment-likes-group--active`:``;return`
        <article class="game-details-dialog__comment">
          <div class="game-details-dialog__comment-header">
            <div class="game-details-dialog__comment-author-group">
              <span
                class="game-details-dialog__comment-avatar game-details-dialog__comment-avatar--${t+1}"
              >
                ${e.authorName.charAt(0)}
              </span>

              <span class="game-details-dialog__comment-author">
                ${e.authorName}
              </span>
            </div>

            <span class="game-details-dialog__comment-time">
              ${H(e.createdAt)}
            </span>
          </div>

          <p class="game-details-dialog__comment-text">
            ${e.text}
          </p>

          <div class="game-details-dialog__comment-likes">
            <div class="game-details-dialog__comment-likes-group${n}">
              <span class="material-symbols-outlined" aria-hidden="true">
                favorite
              </span>

              <span>${e.likesCount}</span>
            </div>
          </div>
        </article>
      `}).join(``)}function K(e,t){let n=document.createElement(`div`);n.className=`game-details-backdrop`,document.body.classList.add(`dialog-open`);let r=document.createElement(`section`);r.className=`game-details-dialog`,r.setAttribute(`role`,`dialog`),r.setAttribute(`aria-modal`,`true`),r.setAttribute(`aria-label`,`Game details`);let i=()=>{r.querySelector(`.game-details-dialog__error`)?.remove();let e=document.createElement(`div`);e.className=`game-details-dialog__error`,e.innerHTML=`
      <p class="game-details-dialog__error-title">
        Failed to load game details.
      </p>

      <button
        class="game-details-dialog__retry"
        type="button"
      >
        Retry
      </button>
    `,e.querySelector(`.game-details-dialog__retry`)?.addEventListener(`click`,()=>{e.remove(),o()}),r.prepend(e);let t=r.querySelector(`.game-details-dialog__title`),n=r.querySelector(`.game-details-dialog__description`);t&&(t.textContent=`Game details unavailable`),n&&(n.textContent=`Please try again.`)},a=()=>{let e=r.querySelector(`.game-details-dialog__content`);e&&(e.innerHTML=`
      <div class="game-details-dialog__empty">
        <p class="game-details-dialog__empty-title">
          Game not found.
        </p>

        <p class="game-details-dialog__empty-text">
          Please try another game.
        </p>
      </div>
    `)},o=async()=>{try{let t=await C(e);if(!t){a();return}let n=r.querySelector(`.game-details-dialog__hero-image`),i=r.querySelector(`.game-details-dialog__title`),o=r.querySelector(`.game-details-dialog__rating`),s=r.querySelector(`.game-details-dialog__likes`),c=r.querySelector(`.game-details-dialog__description`),l=r.querySelectorAll(`.game-details-dialog__info-value`),u=r.querySelector(`.game-details-dialog__records-list`);n&&(n.src=he(t.heroImage)),i&&(i.textContent=t.name),o&&(o.innerHTML=`
        <img src="${O}" alt="" aria-hidden="true" />
        ${V(t.rating)}
      `),s&&(s.innerHTML=`
        <img src="${k}" alt="" aria-hidden="true" />
        ${B(t.likesCount)}
      `),c&&(c.textContent=t.fullDescription);let d=[t.specs.genre,t.specs.players,t.specs.duration,t.specs.price];for(let[e,t]of d.entries()){let n=l[e];n&&(n.textContent=t)}u&&(u.innerHTML=_e(t.topRecords))}catch(e){if(e instanceof y){a();return}i(),U({message:`Failed to load game details.`,variant:`error`})}};r.innerHTML=`
  <div class="game-details-dialog__hero">
    <img
      class="game-details-dialog__hero-image"
      src=""
      alt=""
    />

    <button
      class="game-details-dialog__close"
      type="button"
      aria-label="Close game details"
    >
      <span class="material-symbols-outlined" aria-hidden="true">
        close
      </span>
    </button>
  </div>

  <div class="game-details-dialog__content">
    <div class="game-details-dialog__title-row">  
      <h2 class="game-details-dialog__title">
        Loading...
      </h2>  

      <div class="game-details-dialog__ratings">
        <span class="game-details-dialog__rating">
          <img src="${O}" alt="" aria-hidden="true" />
          -
        </span>

        <span class="game-details-dialog__likes">
          <img src="${k}" alt="" aria-hidden="true" />
          -
        </span>
      </div>
    </div>

    <p class="game-details-dialog__description">
      Loading game details... <!-- description -->
    </p>

    <div class="game-details-dialog__info">
      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Genre</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Players</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Duration</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Price</span>
        <span class="game-details-dialog__info-value">-</span>
      </div>
    </div>

   <div class="game-details-dialog__actions">
      <button class="game-details-dialog__play" type="button">
        Play Now
      </button>

      <button
        class="game-details-dialog__favorite"
        type="button"
        aria-label="Add to Favorites"
        aria-pressed="false"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          favorite
        </span>

        <span class="game-details-dialog__favorite-text">
          Add to Favorites
        </span>
      </button>
    </div>

    <section class="game-details-dialog__records">
      <div class="game-details-dialog__records-title">
        <span aria-hidden="true">🏆</span>
        <h3>Top Records</h3>
      </div>

      <div class="game-details-dialog__records-list"></div>
    </section>

    <section class="game-details-dialog__comments">
      <h3 class="game-details-dialog__comments-title">
        Comments (0)
      </h3>

    <div class="game-details-dialog__comment-form">
      <div class="game-details-dialog__user-avatar" aria-hidden="true">
        U
      </div>

      <textarea
        class="game-details-dialog__comment-input"
        placeholder="Write a comment..."
        aria-label="Write a comment"
      ></textarea>

      <button
        class="game-details-dialog__send"
        type="button"
        aria-label="Send comment"
      >
        <span class="material-symbols-outlined" aria-hidden="true">
          send
        </span>
      </button>
    </div>

      <div class="game-details-dialog__comments-list">
        <div class="game-details-dialog__comments-list">
          <div class="game-details-dialog__comments-loading">
            Loading comments...
          </div>
        </div>
      </div>
    </section>
  </div>
`,o(),(async()=>{try{let t=await w(e);if(t.data.length===0){let e=r.querySelector(`.game-details-dialog__comments-title`),n=r.querySelector(`.game-details-dialog__comments-list`);e&&(e.textContent=`Comments (${t.meta.totalComments})`),n&&(n.innerHTML=`
            <div class="game-details-dialog__comments-empty">
              No comments yet.
            </div>
          `);return}let n=r.querySelector(`.game-details-dialog__comments-title`),i=r.querySelector(`.game-details-dialog__comments-list`);n&&(n.textContent=`Comments (${t.meta.totalComments})`),i&&(i.innerHTML=ve(t.data))}catch{let e=r.querySelector(`.game-details-dialog__comments-list`);e&&(e.innerHTML=`
          <div class="game-details-dialog__comments-error">
            Failed to load comments.
          </div>
        `),U({message:`Failed to load comments.`,variant:`error`})}})();let s=r.querySelector(`.game-details-dialog__favorite`);s?.addEventListener(`click`,()=>{let e=s.classList.toggle(`game-details-dialog__favorite--active`),t=s.querySelector(`.game-details-dialog__favorite-text`);t&&(t.textContent=e?`Remove from Favorites`:`Add to Favorites`),s.setAttribute(`aria-pressed`,String(e))}),n.append(r);let c=r.querySelector(`.game-details-dialog__comment-input`),l=r.querySelector(`.game-details-dialog__send`),u=()=>{c&&l&&(l.disabled=c.value.trim().length===0)};c?.addEventListener(`input`,u),u();let d=r.querySelector(`.game-details-dialog__close`);function f(){n.classList.contains(`game-details-backdrop--closing`)||(document.removeEventListener(`keydown`,p),n.classList.add(`game-details-backdrop--closing`),n.addEventListener(`animationend`,e=>{e.target===n&&(document.body.classList.remove(`dialog-open`),n.remove(),t?.())}))}function p(e){e.key===`Escape`&&f()}return d?.addEventListener(`click`,f),n.addEventListener(`click`,e=>{e.target===n&&f()}),document.addEventListener(`keydown`,p),n}function ye(e){let t=new URLSearchParams(location.search);e?t.set(`game`,e):t.delete(`game`);let n=`/minigames/`,r=t.toString(),i=r?`${n}?${r}`:n;history.pushState({},``,i)}var be=Object.assign({"../assets/home/cat-mail-co-card.jpg":c,"../assets/home/heartopia-card.jpg":l,"../assets/home/islanders-new-shores-card.jpg":u,"../assets/home/palia-card.jpg":d,"../assets/home/shelve-the-potions-card.jpg":f,"../assets/home/tailside-cozy-cafe-sim-card.jpg":p,"../assets/home/tiny-glade-card.jpg":m,"../assets/home/vacation-cafe-simulator-card.jpg":h,"../assets/home/winter-burrow-card.jpg":g});function xe(e){let t=e.split(`/`).pop();return t?be[`../assets/home/${t}`]??``:``}var q=[`game-card--edge`,`game-card--regular`,`game-card--featured`,`game-card--regular`,`game-card--edge`];function Se(){let e=document.createElement(`section`);e.className=`new-games`,e.innerHTML=`
    <div class="new-games__header">
      <h2 class="new-games__title">New Games</h2>

      <div class="new-games__controls">
        <button
          class="new-games__control"
          type="button"
          aria-label="Previous games"
        >
          <img src="${E}" alt="" aria-hidden="true" />
        </button>

        <button
          class="new-games__control new-games__control--next"
          type="button"
          aria-label="Next games"
        >
          <img src="${D}" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="new-games__viewport">
      <div class="new-games__track">
        <!-- game cards will go here -->
      </div>
    </div>
  `;let t=e.querySelector(`.new-games__track`);if(!t)throw Error(`New games track not found`);let n=[],r=e.querySelector(`.new-games__control:not(.new-games__control--next)`),i=e.querySelector(`.new-games__control--next`),a=e=>{r&&(r.disabled=e),i&&(i.disabled=e)},o=0;function s(){return Array.from({length:5},(e,t)=>{let r=(o+t)%n.length;return n[r]})}let c=()=>{t.replaceChildren();for(let e=0;e<5;e+=1){let n=document.createElement(`div`);n.className=`game-card game-card--skeleton ${q[e]}`,t.append(n)}},l=()=>{t.replaceChildren();let e=document.createElement(`div`);e.className=`new-games__empty`,e.innerHTML=`
      <p class="new-games__empty-title">No featured games available.</p>
      <p class="new-games__empty-text">Please check back later.</p>
    `,t.append(e)},u=()=>{t.replaceChildren();let e=s();for(let[n,r]of e.entries())t.append(A({...r,className:q[n]}))},d=async()=>{W(),a(!0),c();try{let e=await v();if(e.length===0){l();return}n=e.map(e=>({slug:e.slug,title:e.name,imageSrc:xe(e.cardImage),rating:e.rating.toFixed(1),likes:`${(e.likesCount/1e3).toFixed(1)}K`})),a(!1),u(),x()}catch{f(),U({message:`Failed to load featured games.`,variant:`error`})}},f=()=>{t.replaceChildren();let e=document.createElement(`div`);e.className=`new-games__error`,e.innerHTML=`
      <p class="new-games__error-title">Failed to load featured games.</p>
      <button class="new-games__retry" type="button">
        Retry
      </button>
    `,e.querySelector(`.new-games__retry`)?.addEventListener(`click`,()=>{d()}),t.append(e)};d();function p(e){for(let[t,n]of e.entries()){n.classList.remove(`game-card--edge`,`game-card--regular`,`game-card--featured`);let e=q[t];e&&n.classList.add(e)}}let m=()=>{if(n.length===0)return;let e=[...t.children][0];if(!e)return;o=(o+1)%n.length;let r=(o+4)%n.length,i=n[r],a=A({...i,className:`game-card--edge`});e.remove(),t.append(a),p([...t.children])},h=()=>{if(n.length===0)return;let e=[...t.children].at(-1);if(!e)return;o=(o-1+n.length)%n.length;let r=n[o],i=A({...r,className:`game-card--edge`});e.remove(),t.prepend(i),p([...t.children])},g=4e3,_,y=0,b=g,x=(e=g)=>{clearTimeout(_),b=e,y=Date.now(),_=setTimeout(()=>{m(),x()},e)},S=()=>{if(_===void 0)return;let e=Date.now()-y;b=Math.max(0,b-e),clearTimeout(_),_=void 0},C=()=>{x(b)},w=()=>{x()},T=0,O=0,k=!1,j;t.addEventListener(`pointerdown`,e=>{let n=e.target;n instanceof HTMLElement&&n.closest(`.new-games__retry`)||(k=!0,T=e.clientX,O=e.clientX,j=n instanceof HTMLElement?n.closest(`.game-card`)??void 0:void 0,t.setPointerCapture(e.pointerId),e.preventDefault(),S())}),t.addEventListener(`pointermove`,e=>{k&&(O=e.clientX)}),t.addEventListener(`pointerup`,e=>{if(!k)return;k=!1,t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId);let n=O-T;if(Math.abs(n)>=50){n<0?m():h(),j=void 0,w();return}if(!j){C();return}let r=j.dataset.slug;if(!r){C(),j=void 0;return}S(),ye(r);let i=K(r,()=>{history.back(),w()});document.body.append(i),j=void 0}),t.addEventListener(`pointercancel`,e=>{k=!1,t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),C()}),r?.addEventListener(`click`,()=>{h(),w()}),i?.addEventListener(`click`,()=>{m(),w()});let M=new URLSearchParams(location.search).get(`game`);if(M&&(S(),!document.querySelector(`.game-details-backdrop`))){let e=K(M,()=>{history.back(),w()});document.body.append(e)}return e}function Ce(e){return{Alex_Pro99:`AP`,CozyGamer_x:`CG`,MatchMaster:`MM`,BubblePop:`BP`,SudokuGod:`SG`}[e]??e.slice(0,2).toUpperCase()}function we(e){return e.map(e=>`
        <tr>
          <td class="leaderboard__rank">#${e.rank}</td>
          <td class="leaderboard__player">
            <span class="leaderboard__avatar">${Ce(e.playerName)}</span>
            <span class="leaderboard__player-name">${e.playerName}</span>
          </td>
          <td class="leaderboard__games">${e.gamesPlayed}</td>

          <td class="leaderboard__score">
            <span class="leaderboard__score-desktop">
              ${e.totalScore.toLocaleString(`en-US`)}
            </span>
            <span class="leaderboard__score-mobile">
              ${(e.totalScore/1e3).toFixed(1)}K
            </span>
          </td>

          <td class="leaderboard__streak">
            🔥
            <span class="leaderboard__streak-desktop">${e.streakDays} days</span>
            <span class="leaderboard__streak-tablet">${e.streakDays}d</span>
          </td>

          <td>
            <span class="leaderboard__game">${e.favoriteGameName}</span>
          </td>
        </tr>
      `).join(``)}function Te(){let e=document.createElement(`section`);e.className=`leaderboard`,e.innerHTML=`
    <h2 class="leaderboard__title">
        <span class="leaderboard__title-desktop">Top Players This Week</span>
        <span class="leaderboard__title-mobile">Top Players</span>
    </h2>

    <div class="leaderboard__table-wrapper">
      <table class="leaderboard__table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th class="leaderboard__games">
                <span class="leaderboard__heading-desktop">Games Played</span>
                <span class="leaderboard__heading-tablet">Games</span>
            </th>
            <th>
                <span class="leaderboard__heading-desktop">Total Score</span>
                <span class="leaderboard__heading-tablet">Score</span>
            </th>
            <th>Streak</th>
            <th>Favorite Game</th>
          </tr>
        </thead>

        <tbody class="leaderboard__body"></tbody>
      </table>
    </div>
  `;let t=e.querySelector(`.leaderboard__body`);if(!t)return e;let n=async()=>{W(),t.innerHTML=`
      <tr>
        <td colspan="6" class="leaderboard__loading">
          Loading leaderboard...
        </td>
      </tr>
    `;try{let e=await T();if(e.length===0){t.innerHTML=`
          <tr>
            <td colspan="6" class="leaderboard__empty">
              No leaderboard data available.
            </td>
          </tr>
        `;return}t.innerHTML=we(e)}catch{t.innerHTML=`
        <tr>
          <td colspan="6" class="leaderboard__error">
            <div class="leaderboard__error-content">
              <span>Failed to load leaderboard.</span>

              <button
                class="leaderboard__retry"
                type="button"
              >
                Retry
              </button>
            </div>
          </td>
        </tr>
      `,t.querySelector(`.leaderboard__retry`)?.addEventListener(`click`,()=>{n()}),U({message:`Failed to load leaderboard.`,variant:`error`})}};return n(),e}var Ee=`/minigames/assets/illustration-side-DsQZrXDY.png`,De=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%203V15M7%208L12%203L17%208M21%2015V19C21%2019.5304%2020.7893%2020.0391%2020.4142%2020.4142C20.0391%2020.7893%2019.5304%2021%2019%2021H5C4.46957%2021%203.96086%2020.7893%203.58579%2020.4142C3.21071%2020.0391%203%2019.5304%203%2019V15'%20stroke='%23242145'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e`;function Oe(){let e=document.createElement(`section`);return e.className=`developer-cta`,e.innerHTML=`
    <img
      class="developer-cta__image"
      src="${Ee}"
      alt=""
      aria-hidden="true"
    />

    <div class="developer-cta__card">
      <h2 class="developer-cta__title">Are You a Game Developer?</h2>

      <p class="developer-cta__text">
        Want to see your game on MiniGames? We’re always looking for fun,<br>
        engaging mini games to add to our platform. Submit your game<br>
        and reach thousands of players!
      </p>

      <button class="developer-cta__button" type="button">
        <img
           class="developer-cta__button-icon"
           src="${De}"
           alt=""
           aria-hidden="true"
        />
        Submit Form
      </button>

      <p class="developer-cta__contact">
        or contact us at developers@minigames.com
      </p>
    </div>
  `,e}var ke=`data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='10'%20fill='%23242145'/%3e%3cpath%20d='M5.00568%2013V7.18182H7.30114C7.74053%207.18182%208.11553%207.26042%208.42614%207.41761C8.73864%207.57292%208.97633%207.79356%209.1392%208.07955C9.30398%208.36364%209.38636%208.69792%209.38636%209.08239C9.38636%209.46875%209.30303%209.80114%209.13636%2010.0795C8.9697%2010.3561%208.72822%2010.5682%208.41193%2010.7159C8.09754%2010.8636%207.71686%2010.9375%207.26989%2010.9375H5.73295V9.94886H7.07102C7.30587%209.94886%207.50095%209.91667%207.65625%209.85227C7.81155%209.78788%207.92708%209.69129%208.00284%209.5625C8.08049%209.43371%208.11932%209.27367%208.11932%209.08239C8.11932%208.8892%208.08049%208.72633%208.00284%208.59375C7.92708%208.46117%207.81061%208.3608%207.65341%208.29261C7.49811%208.22254%207.30208%208.1875%207.06534%208.1875H6.2358V13H5.00568ZM8.14773%2010.3523L9.59375%2013H8.2358L6.82102%2010.3523H8.14773ZM13.1119%208.85511C13.0892%208.62595%2012.9917%208.44792%2012.8193%208.32102C12.647%208.19413%2012.4131%208.13068%2012.1176%208.13068C11.9169%208.13068%2011.7473%208.15909%2011.6091%208.21591C11.4708%208.27083%2011.3648%208.34754%2011.2909%208.44602C11.2189%208.54451%2011.183%208.65625%2011.183%208.78125C11.1792%208.88542%2011.2009%208.97633%2011.2483%209.05398C11.2975%209.13163%2011.3648%209.19886%2011.45%209.25568C11.5352%209.31061%2011.6337%209.3589%2011.7455%209.40057C11.8572%209.44034%2011.9765%209.47443%2012.1034%209.50284L12.6261%209.62784C12.8799%209.68466%2013.1129%209.76042%2013.325%209.85511C13.5371%209.94981%2013.7208%2010.0663%2013.8761%2010.2045C14.0314%2010.3428%2014.1517%2010.5057%2014.2369%2010.6932C14.3241%2010.8807%2014.3686%2011.0956%2014.3705%2011.3381C14.3686%2011.6941%2014.2777%2012.0028%2014.0977%2012.2642C13.9197%2012.5237%2013.6621%2012.7254%2013.325%2012.8693C12.9898%2013.0114%2012.5854%2013.0824%2012.1119%2013.0824C11.6422%2013.0824%2011.2331%2013.0104%2010.8847%2012.8665C10.5381%2012.7225%2010.2672%2012.5095%2010.0722%2012.2273C9.87898%2011.9432%209.77765%2011.5919%209.76818%2011.1733H10.9585C10.9718%2011.3684%2011.0277%2011.5312%2011.1261%2011.6619C11.2265%2011.7907%2011.36%2011.8883%2011.5267%2011.9545C11.6953%2012.0189%2011.8856%2012.0511%2012.0977%2012.0511C12.3061%2012.0511%2012.4869%2012.0208%2012.6403%2011.9602C12.7956%2011.8996%2012.9159%2011.8153%2013.0011%2011.7074C13.0864%2011.5994%2013.129%2011.4754%2013.129%2011.3352C13.129%2011.2045%2013.0902%2011.0947%2013.0125%2011.0057C12.9367%2010.9167%2012.825%2010.8409%2012.6773%2010.7784C12.5314%2010.7159%2012.3525%2010.6591%2012.1403%2010.608L11.5068%2010.4489C11.0163%2010.3295%2010.629%2010.143%2010.3449%209.8892C10.0608%209.63542%209.9197%209.29356%209.92159%208.86364C9.9197%208.51136%2010.0134%208.2036%2010.2028%207.94034C10.3941%207.67708%2010.6564%207.47159%2010.9898%207.32386C11.3231%207.17614%2011.7019%207.10227%2012.1261%207.10227C12.558%207.10227%2012.9348%207.17614%2013.2568%207.32386C13.5807%207.47159%2013.8326%207.67708%2014.0125%207.94034C14.1924%208.2036%2014.2852%208.50852%2014.2909%208.85511H13.1119Z'%20fill='%23FFD02B'/%3e%3c/svg%3e`,Ae=`data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='10'%20fill='white'/%3e%3cpath%20d='M7.9%2014L4.4%2010.5L7.9%207L8.64375%207.74375L5.8875%2010.5L8.64375%2013.2562L7.9%2014ZM12.1%2014L11.3563%2013.2562L14.1125%2010.5L11.3563%207.74375L12.1%207L15.6%2010.5L12.1%2014Z'%20fill='%23242145'/%3e%3c/svg%3e`;function J(){let e=document.createElement(`footer`);return e.className=`footer`,e.innerHTML=`
    <div class="footer__top">
      <div class="footer__brand">
        <div class="footer__logo">
          <img
            class="footer__logo-icon"
            src="${i}"
            alt=""
            aria-hidden="true"
          />
          <span>MiniGames</span>
        </div>

        <p class="footer__description">
          Take a short break and have fun. Hundreds of curated casual
          mini-games right in your web browser. No download required.
        </p>
      </div>

      <div class="footer__links">
        <nav class="footer__column" aria-label="Explore">
          <h3 class="footer__title">Explore</h3>
          <a href="#">Home</a>
          <a href="#">Library</a>
          <a href="#">Categories</a>
          <a href="#">Tournaments</a>
        </nav>

        <nav class="footer__column" aria-label="Company">
          <h3 class="footer__title">Company</h3>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>

        <div class="footer__community">
          <h3 class="footer__title">Community</h3>

          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Share">
                <span class="material-symbols-outlined">share</span>
            </a>

            <a href="#" class="footer__social" aria-label="Chat">
                <span class="material-symbols-outlined">chat</span>
            </a>

            <a href="#" class="footer__social" aria-label="RSS">
                <span class="material-symbols-outlined">rss_feed</span>
            </a>
          </div>

        </div>
      </div>
    </div>

    <div class="footer__divider"></div>

    <div class="footer__bottom">
      <span class="footer__copyright">
        © 2026 MiniGames. All rights reserved.
      </span>

      <div class="footer__meta">
        <a
          href="https://rs.school/courses/short-track"
          class="footer__meta-link footer__rsschool"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="footer__rs-logo"
            src="${ke}"
            alt=""
            aria-hidden="true"
          />
          <span>RS School</span>
        </a>

        <a
          href="https://github.com/Festival3224"
          target="_blank"
          rel="noopener noreferrer"
          class="footer__meta-link footer__student"
        >
          <img
            class="footer__github-icon"
            src="${Ae}"
            alt=""
            aria-hidden="true"
          />
          <span>@Festival3224</span>
        </a>
      </div>

      <span class="footer__love">Designed with love</span>
    </div>
  `,e}function je(){let e=document.createElement(`div`);e.append(o());let t=document.createElement(`main`);return t.append(s()),t.append(Se()),t.append(Te()),t.append(Oe()),t.append(J()),e.append(t),r(),e}var Me=`/minigames/assets/camper-van-make-it-home-card-61XprhL7.jpg`,Ne=`/minigames/assets/cast-n-chill-card-CRLWRuq0.jpg`,Pe=`/minigames/assets/cat-chess-card-BkETDAfr.jpg`,Fe=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,Ie=`/minigames/assets/cozy-solitaire-card-CSczvhq9.jpg`,Le=`/minigames/assets/cozy-sudoku-card-CyAOOis5.jpg`,Re=`/minigames/assets/grimshire-card-D1QcLtZT.jpg`,ze=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,Be=`/minigames/assets/islanders-card-DljrohUL.jpg`,Ve=`/minigames/assets/leaf-it-alone-card-CGXXB8uI.jpg`,He=`/minigames/assets/leafy-corner-card-CAdJaXNI.jpg`,Ue=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`,We=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,Ge=`/minigames/assets/koroneko-card-BXvG49TG.jpg`,Ke=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,qe=`/minigames/assets/tukoni-forest-keepers-card-CkPF-Hda.jpg`,Je=`/minigames/assets/little-corners-card-BzTzTJLT.jpg`,Ye=`/minigames/assets/organized-inside-card-CyWIV6Rk.jpg`,Xe=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,Ze=`/minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg`,Qe=`/minigames/assets/the-wild-at-heart-card-DfO3UIaM.jpg`,$e=`/minigames/assets/tiny-glade-card-CS2XLEzK.jpg`,et=`/minigames/assets/vacation-cafe-card-Bzcyczbo.jpg`,tt=`/minigames/assets/vacation-cafe-card-Bzcyczbo.jpg`,nt=`/minigames/assets/whisper-of-the-house-card-BE7Dq45b.jpg`,rt=`/minigames/assets/winter-burrow-card-KbzzF82b.jpg`,it=`/minigames/assets/wytchwood-card-XvNmJ299.jpg`;function Y(e,t,n){let r=document.createElement(`nav`);r.className=`pagination`,r.setAttribute(`aria-label`,`Library pagination`);let i=n=>{if(e<=n)return Array.from({length:e},(e,t)=>t+1);let r=Math.max(1,t-Math.floor(n/2)),i=r+n-1;return i>e&&(i=e,r=i-n+1),Array.from({length:i-r+1},(e,t)=>r+t)},a=()=>{r.replaceChildren();let a=document.createElement(`button`);a.className=`pagination__arrow`,a.type=`button`,a.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_left
      </span>
    `,a.disabled=t===1,a.addEventListener(`click`,()=>{t<=1||n(t-1)}),r.append(a);let o=matchMedia(`(max-width: 499px)`).matches?3:4,s=i(o);for(let e of s){let i=document.createElement(`button`);i.className=`pagination__page`,i.type=`button`,i.textContent=String(e),i.dataset.page=String(e),e===t&&(i.classList.add(`pagination__page--active`),i.setAttribute(`aria-current`,`page`)),i.addEventListener(`click`,()=>{n(e)}),r.append(i)}let c=document.createElement(`button`);c.className=`pagination__arrow`,c.type=`button`,c.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_right
      </span>
    `,c.disabled=t===e,c.addEventListener(`click`,()=>{t>=e||n(t+1)}),r.append(c)};return a(),addEventListener(`resize`,a),r}function at({slug:e,title:t,imageSrc:n,category:r,description:i,rating:a,likes:o,price:s}){let c=document.createElement(`article`);return c.className=`library-game-card`,c.dataset.slug=e,c.innerHTML=`
    <img
      class="library-game-card__image"
      src="${n}"
      alt=""
    />

    <div class="library-game-card__content">
      <div class="library-game-card__heading">
        <h2 class="library-game-card__title">${t}</h2>
        <span class="library-game-card__tag">${r}</span>
      </div>

      <span class="library-game-card__price">${s}</span>

      <p class="library-game-card__description">
        ${i}
      </p>

      <div class="library-game-card__meta">
        <span class="library-game-card__rating">
          <img src="${O}" alt="" aria-hidden="true" />
          ${a}
        </span>

        <span class="library-game-card__likes">
          <img src="${k}" alt="" aria-hidden="true" />
          ${o}
        </span>
      </div>

      <button class="library-game-card__details" type="button">
        Details
      </button>
    </div>
  `,c}function ot(e){let t=new URLSearchParams(location.search);e?t.set(`game`,e):t.delete(`game`);let n=`/minigames/library?${t.toString()}`;history.pushState({},``,n)}function X(e){let t=new URLSearchParams;t.set(`category`,e.category),t.set(`sort`,e.sort),t.set(`page`,String(e.page));let n=`/minigames/library?${t.toString()}`;history.pushState({},``,n)}function st(){let e=new URLSearchParams(location.search),t=e.get(`category`)??`all`,n=e.get(`sort`),r=n&&[`rating-desc`,`rating-asc`,`name-asc`,`name-desc`].includes(n)?n:`rating-desc`,i=Number(e.get(`page`));return{category:t,sort:r,page:Number.isSafeInteger(i)&&i>0?i:1}}var Z=Object.assign({"../assets/camper-van-make-it-home-card.jpg":Me,"../assets/cast-n-chill-card.jpg":Ne,"../assets/cat-chess-card.jpg":Pe,"../assets/cat-mail-co-card.jpg":Fe,"../assets/cozy-solitaire-card.jpg":Ie,"../assets/cozy-sudoku-card.jpg":Le,"../assets/grimshire-card.jpg":Re,"../assets/heartopia-card.jpg":ze,"../assets/home/cat-mail-co-card.jpg":c,"../assets/home/heartopia-card.jpg":l,"../assets/home/islanders-new-shores-card.jpg":u,"../assets/home/palia-card.jpg":d,"../assets/home/shelve-the-potions-card.jpg":f,"../assets/home/tailside-cozy-cafe-sim-card.jpg":p,"../assets/home/tiny-glade-card.jpg":m,"../assets/home/vacation-cafe-simulator-card.jpg":h,"../assets/home/winter-burrow-card.jpg":g,"../assets/islanders-card.jpg":Be,"../assets/leaf-it-alone-card.jpg":Ve,"../assets/leafy-corner-card.jpg":He,"../assets/library/cat-mail-co-card.jpg":Ue,"../assets/library/heartopia-card.jpg":We,"../assets/library/koroneko-card.jpg":Ge,"../assets/library/palia-card.jpg":Ke,"../assets/library/tukoni-forest-keepers-card.jpg":qe,"../assets/little-corners-card.jpg":Je,"../assets/organized-inside-card.jpg":Ye,"../assets/palia-card.jpg":Xe,"../assets/shelve-the-potions-card.jpg":Ze,"../assets/the-wild-at-heart-card.jpg":Qe,"../assets/tiny-glade-card.jpg":$e,"../assets/vacation-cafe-card.jpg":et,"../assets/vacation-cafe-simulator-card.jpg":tt,"../assets/whisper-of-the-house-card.jpg":nt,"../assets/winter-burrow-card.jpg":rt,"../assets/wytchwood-card.jpg":it});function ct(e){let t=e.split(`/`).pop();if(!t)return``;let n=Object.keys(Z).find(e=>e.endsWith(`/${t}`));return n?Z[n]:``}function lt(){let e=st(),t=document.createElement(`div`);t.className=`page`,t.append(o());let n=document.createElement(`main`);n.className=`library`;let i=document.createElement(`section`);i.className=`library__title-section`;let a=document.createElement(`h1`);a.className=`library__title`,a.textContent=`Game Library`;let s=document.createElement(`p`);s.className=`library__subtitle`,s.textContent=`Browse our collection of casual mini-games`,i.append(a,s);let c=document.createElement(`div`);c.className=`library__controls`;let l=document.createElement(`div`);l.className=`library__filters`;let u=e.category,d=e.sort,f=()=>{l.replaceChildren();let e=document.createElement(`span`);e.className=`library__filters-loading`,e.textContent=`Loading categories...`,l.append(e)},p=()=>{l.replaceChildren();let e=document.createElement(`span`);e.className=`library__filters-empty`,e.textContent=`No categories available.`,l.append(e)},m=()=>{l.replaceChildren();let e=document.createElement(`div`);e.className=`library__filters-error`,e.innerHTML=`
      <span>Failed to load categories.</span>
      <button class="library__filters-retry" type="button">
        Retry
      </button>
    `,e.querySelector(`.library__filters-retry`)?.addEventListener(`click`,()=>{h()}),l.append(e)},h=async()=>{f();try{let e=await S();if(e.length===0){p();return}l.replaceChildren();for(let t of e){let e=document.createElement(`button`);e.className=`library__filter`,e.type=`button`,e.textContent=t.label,e.dataset.category=t.slug;let n=t.slug===u;e.setAttribute(`aria-pressed`,String(n)),n&&e.classList.add(`library__filter--active`),l.append(e)}}catch{m(),U({message:`Failed to load categories.`,variant:`error`})}};h();let g=!1,_=!1,v=0,y=0,C=0;l.addEventListener(`pointerdown`,e=>{g=!0,_=!1,v=e.clientX,y=l.scrollLeft,C=0}),l.addEventListener(`pointermove`,e=>{if(!g)return;let t=e.clientX-v;C=Math.abs(t),!(C<=5)&&(_||(_=!0,l.setPointerCapture(e.pointerId)),l.scrollLeft=y-t)}),l.addEventListener(`pointerup`,e=>{g=!1,_&&l.hasPointerCapture(e.pointerId)&&l.releasePointerCapture(e.pointerId),_=!1}),l.addEventListener(`pointercancel`,()=>{g=!1,_=!1}),l.addEventListener(`click`,e=>{if(C>5)return;let t=e.target;if(!(t instanceof HTMLElement))return;let n=t.closest(`.library__filter`);if(!n)return;let r=n.dataset.category;if(r){for(let e of l.querySelectorAll(`.library__filter`))e.classList.remove(`library__filter--active`),e.setAttribute(`aria-pressed`,`false`);n.classList.add(`library__filter--active`),n.setAttribute(`aria-pressed`,`true`),u=r,P=1,X({category:u,sort:d,page:P}),R(1)}});let w=document.createElement(`div`);w.className=`library__sort-wrapper`;let T=document.createElement(`button`);T.className=`library__sort`,T.type=`button`,T.setAttribute(`aria-expanded`,`false`),T.setAttribute(`aria-haspopup`,`listbox`);let E=document.createElement(`div`);E.className=`library__sort-menu`,E.setAttribute(`role`,`listbox`),E.hidden=!0;let D=[{label:`Rating ↓`,value:`rating-desc`},{label:`Rating ↑`,value:`rating-asc`},{label:`Name A→Z`,value:`name-asc`},{label:`Name Z→A`,value:`name-desc`}],O=D.find(e=>e.value===d),k=document.createElement(`span`);k.textContent=`Sort by: ${O?.label??`Rating ↓`}`;let A=document.createElement(`span`);A.className=`material-symbols-outlined`,A.setAttribute(`aria-hidden`,`true`),A.textContent=`arrow_drop_down`,T.append(k,A);for(let e of D){let t=document.createElement(`button`);t.className=`library__sort-option`,t.type=`button`,t.setAttribute(`role`,`option`),t.textContent=e.label,t.dataset.sort=e.value,e.value===d?(t.classList.add(`library__sort-option--active`),t.setAttribute(`aria-selected`,`true`)):t.setAttribute(`aria-selected`,`false`),E.append(t)}T.addEventListener(`click`,()=>{let e=!E.hidden;E.hidden=e,T.setAttribute(`aria-expanded`,String(!e))});let j=E.querySelectorAll(`.library__sort-option`);for(let e of j)e.addEventListener(`click`,()=>{for(let e of j)e.classList.remove(`library__sort-option--active`),e.setAttribute(`aria-selected`,`false`);e.classList.add(`library__sort-option--active`),e.setAttribute(`aria-selected`,`true`),k.textContent=`Sort by: ${e.textContent}`;let t=e.dataset.sort;t&&(d=t,P=1,X({category:u,sort:d,page:P}),R(1),E.hidden=!0,T.setAttribute(`aria-expanded`,`false`))});w.append(T,E);let M=document.createElement(`div`);M.className=`library__games`;let N=document.createElement(`div`),P=e.page,F=()=>{M.replaceChildren();for(let e=0;e<6;e+=1){let e=document.createElement(`article`);e.className=`library-game-card library-game-card--skeleton`,M.append(e)}},I=()=>{M.replaceChildren();let e=document.createElement(`div`);e.className=`library__empty`,e.innerHTML=`
      <p class="library__empty-title">No games available.</p>
      <p class="library__empty-text">Please check back later.</p>
    `,M.append(e)},L=()=>{M.replaceChildren();let e=document.createElement(`div`);e.className=`library__error`,e.innerHTML=`
      <p class="library__error-title">Failed to load games.</p>
      <button class="library__retry" type="button">
        Retry
      </button>
    `,e.querySelector(`.library__retry`)?.addEventListener(`click`,()=>{R()}),M.append(e)},R=async(e=1)=>{W(),F();try{let t=await x(e,u,d);if(P=t.meta.page,t.data.length===0){I(),N.replaceChildren(Y(1,1,()=>{}));return}M.replaceChildren();for(let e of t.data)M.append(at({slug:e.slug,title:e.name,imageSrc:ct(e.cardImage),category:e.category,description:e.shortDescription,rating:V(e.rating),likes:B(e.likesCount),price:e.price}));N.replaceChildren(Y(t.meta.totalPages,P,e=>{P=e,X({category:u,sort:d,page:P}),R(P)}))}catch(e){if(e instanceof b){M.replaceChildren();let e=document.createElement(`div`);e.className=`library__not-found`,e.innerHTML=`
          <p class="library__not-found-title">Data Not Found</p>
          <p class="library__not-found-text">
            No library data matches the current URL parameters.
          </p>
        `,M.append(e),N.replaceChildren();return}L(),U({message:`Failed to load games.`,variant:`error`})}};R(P);let z=new URLSearchParams(location.search).get(`game`);if(z&&!document.querySelector(`.game-details-backdrop`)){let e=K(z,()=>{history.back()});document.body.append(e)}return M.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof HTMLElement))return;let n=t.closest(`.library-game-card__details`);if(!n)return;let r=n.closest(`.library-game-card`)?.dataset.slug;if(!r)return;ot(r);let i=K(r,()=>{history.back()});document.body.append(i)}),c.append(l,w),n.append(i,c,M,N),t.append(n),t.append(J()),r(),t}function ut(){let e=document.createElement(`div`);e.className=`page`,e.append(o());let t=document.createElement(`main`);return t.className=`not-found`,t.innerHTML=`
    <section class="not-found__content">
      <p class="not-found__code">404</p>

      <h1 class="not-found__title">
        Page not found
      </h1>

      <p class="not-found__text">
        The page you’re looking for doesn’t exist.
      </p>

      <button
        class="not-found__home"
        type="button"
      >
        Return to Home Page
      </button>
    </section>
  `,t.querySelector(`.not-found__home`)?.addEventListener(`click`,()=>{$(`/`)}),e.append(t),e.append(J()),e}function Q(){let e=location.pathname.replace(`/minigames/`,`/`)||`/`;return e===`/`||e===`/home`?`home`:e===`/library`?`library`:`not-found`}function dt(e){let t=document.querySelector(`#app`);if(t){if(t.replaceChildren(),e===`library`){t.append(lt());return}if(e===`home`){t.append(je());return}t.append(ut())}}function $(e){let t=`/minigames/`,n=e===`/`?t:`${t}${e.slice(1)}`;history.pushState({},``,n),dt(Q())}var ft=document.createElement(`div`);ft.id=`app`,document.body.append(ft);function pt(){document.querySelector(`.game-details-backdrop`)?.remove(),document.querySelector(`.auth-overlay`)?.remove(),document.body.classList.remove(`dialog-open`),dt(Q())}addEventListener(`popstate`,pt),pt();