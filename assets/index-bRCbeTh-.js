(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24%2012.2727C24%2011.4218%2023.9221%2010.6036%2023.7774%209.81818H12.2449V14.4655H18.8349C18.5455%2015.96%2017.6772%2017.2255%2016.3748%2018.0764V21.0982H20.3488C22.6642%2019.0036%2024%2015.9273%2024%2012.2727Z'%20fill='%234285F4'/%3e%3cpath%20d='M12.2449%2024C15.551%2024%2018.3228%2022.9309%2020.3488%2021.0982L16.3748%2018.0764C15.2839%2018.7964%2013.8924%2019.2327%2012.2449%2019.2327C9.06122%2019.2327%206.35622%2017.1273%205.38776%2014.2909H1.31354V17.3891C3.32839%2021.3055%207.45826%2024%2012.2449%2024Z'%20fill='%2334A853'/%3e%3cpath%20d='M5.38776%2014.28C5.14286%2013.56%204.99814%2012.7964%204.99814%2012C4.99814%2011.2036%205.14286%2010.44%205.38776%209.72V6.62182H1.31354C0.478664%208.23636%200%2010.0582%200%2012C0%2013.9418%200.478664%2015.7636%201.31354%2017.3782L4.48609%2014.9564L5.38776%2014.28Z'%20fill='%23FBBC05'/%3e%3cpath%20d='M12.2449%204.77818C14.0482%204.77818%2015.6512%205.38909%2016.9314%206.56727L20.4379%203.13091C18.3117%201.18909%2015.551%200%2012.2449%200C7.45826%200%203.32839%202.69455%201.31354%206.62182L5.38776%209.72C6.35622%206.88364%209.06122%204.77818%2012.2449%204.77818Z'%20fill='%23EA4335'/%3e%3c/svg%3e`;function t(){let t=document.createElement(`div`);t.className=`auth-overlay`,t.innerHTML=`
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
  `;let n=t.querySelector(`.auth-dialog__login`),r=t.querySelector(`.auth-dialog__register`),i=t.querySelector(`[data-auth-tab="login"]`),a=t.querySelector(`[data-auth-tab="register"]`),o=t.querySelectorAll(`.auth-dialog__switch-button`),s=t.querySelector(`.auth-dialog__password-toggle`),c=s?.closest(`.auth-dialog__input-wrapper`)?.querySelector(`.auth-dialog__input`),l=t.querySelectorAll(`.auth-dialog__form`);s?.addEventListener(`click`,()=>{if(!c)return;let e=c.type===`password`;c.type=e?`text`:`password`;let t=s.querySelector(`.material-symbols-outlined`);t&&(t.textContent=e?`visibility`:`visibility_off`),s.setAttribute(`aria-label`,e?`Hide password`:`Show password`)});for(let e of l)e.addEventListener(`submit`,e=>{e.preventDefault()});let u=t.querySelector(`.auth-dialog`);function d(e){if(!u){e();return}let t=u.getBoundingClientRect().height;u.style.height=`${t}px`,e(),u.style.height=`auto`;let n=u.getBoundingClientRect().height;u.style.height=`${t}px`,requestAnimationFrame(()=>{u.style.height=`${n}px`});let r=e=>{e.propertyName===`height`&&(u.style.height=`auto`,u.removeEventListener(`transitionend`,r))};u.addEventListener(`transitionend`,r)}function f(){d(()=>{n?.removeAttribute(`hidden`),r?.setAttribute(`hidden`,``),i?.classList.add(`auth-dialog__tab--active`),a?.classList.remove(`auth-dialog__tab--active`)})}function p(){d(()=>{r?.removeAttribute(`hidden`),n?.setAttribute(`hidden`,``),a?.classList.add(`auth-dialog__tab--active`),i?.classList.remove(`auth-dialog__tab--active`)})}i?.addEventListener(`click`,f),a?.addEventListener(`click`,p);function m(){t.classList.remove(`auth-overlay--open`),setTimeout(()=>{t.remove(),document.removeEventListener(`keydown`,h)},360)}function h(e){e.key===`Escape`&&m()}t.addEventListener(`click`,e=>{e.target===t&&m()});for(let e of o)e.addEventListener(`click`,()=>{e.dataset.authSwitch===`register`?p():f()});return document.addEventListener(`keydown`,h),requestAnimationFrame(()=>{t.classList.add(`auth-overlay--open`)}),t}var n=`data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath%20d='M26%201H6C3.23858%201%201%203.23858%201%206V26C1%2028.7614%203.23858%2031%206%2031H26C28.7614%2031%2031%2028.7614%2031%2026V6C31%203.23858%2028.7614%201%2026%201Z'%20fill='url(%23pattern0_1_259)'%20stroke='%23242145'%20stroke-width='2'/%3e%3cdefs%3e%3cpattern%20id='pattern0_1_259'%20patternContentUnits='objectBoundingBox'%20width='1'%20height='1'%3e%3cuse%20xlink:href='%23image0_1_259'%20transform='scale(0.03125)'/%3e%3c/pattern%3e%3cimage%20id='image0_1_259'%20width='32'%20height='32'%20preserveAspectRatio='none'%20xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABCNJREFUeAG1V91rXEUU/83szeazNj5YTRVJQWoEg1YqKD6of4KKL2KxD4qPPuiLltpabKlatUIefFFEQQT7KAhFSAVfRKFSQQShXbWUZrMJCdm0m9175/TM1/3YvR9J0x52mLkzc875na+ZHcAREU1yO6KI5rnRbWrnQ6KDSJFwyqcJmOfhNMqIPMe2qcFinhVCNIw4RnapUvmtR6SV76uRdcnBm5Mryhn8dP7yJE9vCB0X/ngUt4y25JVzGgBtT8b2MMjcWVEhnTGTUuh2Q9PrJtKsWwAvsSUi81OK8MHps9j/9EnMPnEcn8z9pBM5DvdWKD8EfjEWmPKpViQE9swexq5dO3mW0Gyu4eKfx7JQDUt1LEo9QBko2WGnG9k9/N3rRYM8pbGgzQHwm3u9EKFWYtxshX564gV4BB+ffD7ZrXOD96soyYvBuCTASkNgmQkX/rqMA699g4iFs1yjZGJiGEGtZmSFoUK73UEgJfjH8xJfff4yHpm9vzIngirlmu69507U6wFqtRyHkVU4uXMsmWKUU1OTsa2UsptSfHqiPATOU2NjdWNlpr6LeqZeFOGOidFYT1pnv+xyAI5jZDiwNS98dts1kTbJR5Lnuhuh8ZjZg/I6CNKAKFaqjDwpLT5ddpGiRJDKyStfdowy5L1SJmqV+87LB5nmt9p0nUu8+fYZ7H3sKO6bOYSvv/sVE+PDzgNkeo2GPPI+C3aMj+DbM79h94Pv4IF9R/DWoe8NiDzKVoEbdrnkHn/mFEZHAqNM5PGKxGg9ZkFQukdiqYQGKzgkEX45+wbGR0cs+BQFGR+6oJIWpnTMa1ZgfKWm71fbKQeQZAqM26EMC7FBG2xMPTcZZMYk19frNbx64Ek0F9Zx+f8lzH34ojmMtALhDiPh8Eple0HJUa2T8PSJ53D1ygoWFtt4/ZWnjNy8g7nwINKHjU9CTXv3H+Nat6VllPHSUusaJ2eEu+/aYYSTuSeA1dXr+Pv3d2NepW9LmVOvKClDwcpNwhGZBBoyh5CznIcPz+zGP+cP49KF9/DQzFRGrD4RtVJjiJNVVJCDAHL80dnoYWgoMO7XMpoLbXwx95IpT01f8ri1vB6fCwGHsNMJE4HWPcijQQA5ibKyeg31wGcbIRjqY2HNxmIX5HpQQ3u9k5VZcBrJEr2uKoB//1vG4lKbLV9Ds7XGNx3h+Ec/WPsY0PunfuRkgllb5P8GreU2LjZaiRwq1LCJ27AAILlw+NX+deX+uFSRzKIsIB/GuFHsHX+ymIRN7ckop2IdGsA5WCOKSRSggj8mU4DK+Ae3/CGZ9edc2aXks4pQfd8VE6fNZ8I8SgH9OJmuYkjfvv3z6FsTJd9u3JBC7OEmVvRDkecaqCDa5Foe0L4/Jg2ns28TvxP1U+02Ps/nI6Kj2ute5w08AKp+H2eCQgAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e`;function r(){let e=document.createElement(`header`);e.className=`header`,e.innerHTML=`
      <div class="header__container">
        <a class="header__logo" href="#" aria-label="MiniGames home">
          <img
              class="header__logo-icon"
              src="${n}"
              alt=""
              aria-hidden="true"
          />
          <span>MiniGames</span>
        </a>

        <div class="header__actions">
          <nav class="header__nav" aria-label="Main navigation">
            <a class="header__nav-link" href="#home" data-route="home">Home</a>
            <a class="header__nav-link" href="#library" data-route="library">Library</a>
            <a class="header__nav-link" href="#home">Tournaments</a>
            <a class="header__nav-link" href="#home">Community</a>
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
              src="${n}"
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
        <a class="header__mobile-link" href="#home" data-route="home">Home</a>
        <a class="header__mobile-link" href="#library" data-route="library">Library</a>
        <a class="header__mobile-link" href="#home">Tournaments</a>
        <a class="header__mobile-link" href="#home">Community</a>
      </nav>

      <div class="header__mobile-actions">
        <button class="header__mobile-login" type="button">Log In</button>
        <button class="header__mobile-signup" type="button">Sign Up</button>
      </div>
    </div>

    <div class="header__backdrop"></div>

  `;let r=e.querySelector(`.header__menu`),i=e.querySelector(`.header__mobile-close`),a=e.querySelector(`.header__mobile-menu`),o=e.querySelector(`.header__backdrop`),s=e.querySelector(`.header__login`),c=e.querySelector(`.header__mobile-login`),l=e.querySelector(`.header__mobile-signup`),u=location.hash===`#library`?`library`:`home`,d=e.querySelectorAll(`[data-route]`);for(let e of d)e.dataset.route===u&&(e.classList.contains(`header__nav-link`)&&e.classList.add(`header__nav-link--active`),e.classList.contains(`header__mobile-link`)&&e.classList.add(`header__mobile-link--active`));s?.addEventListener(`click`,()=>{document.querySelector(`.auth-overlay`)||document.body.append(t())});function f(){a?.classList.add(`header__mobile-menu--open`),o?.classList.add(`header__backdrop--visible`),r?.setAttribute(`aria-expanded`,`true`),a?.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`menu-open`)}function p(){a?.classList.remove(`header__mobile-menu--open`),o?.classList.remove(`header__backdrop--visible`),r?.setAttribute(`aria-expanded`,`false`),a?.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`menu-open`)}c?.addEventListener(`click`,()=>{p(),!document.querySelector(`.auth-overlay`)&&document.body.append(t())}),l?.addEventListener(`click`,()=>{if(p(),document.querySelector(`.auth-overlay`))return;let e=t();document.body.append(e),e.querySelector(`[data-auth-tab="register"]`)?.click()}),r?.addEventListener(`click`,f),i?.addEventListener(`click`,p),o?.addEventListener(`click`,p);let m=e.querySelectorAll(`.header__mobile-link`);for(let e of m)e.addEventListener(`click`,p);return e}function i(){let e=document.createElement(`section`);return e.className=`hero`,e.innerHTML=`
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
  `,e}var a=`/minigames/assets/tailside-cozy-cafe-sim-card-C7B0rePC.jpg`,o=`/minigames/assets/islanders-new-shores-card-DljrohUL.jpg`,s=`/minigames/assets/vacation-cafe-simulator-card-Bzcyczbo.jpg`,c=`/minigames/assets/winter-burrow-card-KbzzF82b.jpg`,l=`/minigames/assets/shelve-the-potions-card-DTY_N_zq.jpg`,u=`data:image/svg+xml,%3csvg%20width='24'%20height='29'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3.825%209L9.425%2014.6L8%2016L1.19209e-07%208L8%20-9.53674e-07L9.425%201.4L3.825%207H16V9H3.825Z'%20fill='%23242145'/%3e%3c/svg%3e`,d=`data:image/svg+xml,%3csvg%20width='24'%20height='29'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.175%209H1.19209e-07V7H12.175L6.575%201.4L8%20-9.53674e-07L16%208L8%2016L6.575%2014.6L12.175%209Z'%20fill='%23242145'/%3e%3c/svg%3e`,f=`data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.85%2014.825L10%2012.925L13.15%2014.85L12.325%2011.25L15.1%208.85L11.45%208.525L10%205.125L8.55%208.5L4.9%208.825L7.675%2011.25L6.85%2014.825ZM3.825%2019L5.45%2011.975L0%207.25L7.2%206.625L10%200L12.8%206.625L20%207.25L14.55%2011.975L16.175%2019L10%2015.275L3.825%2019Z'%20fill='%23FFD02B'/%3e%3c/svg%3e`,p=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2021L10.55%2019.7C8.86667%2018.1834%207.475%2016.875%206.375%2015.775C5.275%2014.675%204.4%2013.6917%203.75%2012.825C3.1%2011.9417%202.64167%2011.1334%202.375%2010.4C2.125%209.66669%202%208.91669%202%208.15002C2%206.58336%202.525%205.27502%203.575%204.22502C4.625%203.17502%205.93333%202.65002%207.5%202.65002C8.36667%202.65002%209.19167%202.83336%209.975%203.20002C10.7583%203.56669%2011.4333%204.08336%2012%204.75003C12.5667%204.08336%2013.2417%203.56669%2014.025%203.20002C14.8083%202.83336%2015.6333%202.65002%2016.5%202.65002C18.0667%202.65002%2019.375%203.17502%2020.425%204.22502C21.475%205.27502%2022%206.58336%2022%208.15002C22%208.91669%2021.8667%209.66669%2021.6%2010.4C21.35%2011.1334%2020.9%2011.9417%2020.25%2012.825C19.6%2013.6917%2018.725%2014.675%2017.625%2015.775C16.525%2016.875%2015.1333%2018.1834%2013.45%2019.7L12%2021ZM12%2018.3C13.6%2016.8667%2014.9167%2015.6417%2015.95%2014.625C16.9833%2013.5917%2017.8%2012.7%2018.4%2011.95C19%2011.1834%2019.4167%2010.5084%2019.65%209.92503C19.8833%209.32503%2020%208.73336%2020%208.15002C20%207.15002%2019.6667%206.31669%2019%205.65003C18.3333%204.98336%2017.5%204.65003%2016.5%204.65003C15.7167%204.65003%2014.9917%204.87503%2014.325%205.32503C13.6583%205.75836%2013.2%206.31669%2012.95%207.00003H11.05C10.8%206.31669%2010.3417%205.75836%209.675%205.32503C9.00833%204.87503%208.28333%204.65003%207.5%204.65003C6.5%204.65003%205.66667%204.98336%205%205.65003C4.33333%206.31669%204%207.15002%204%208.15002C4%208.73336%204.11667%209.32503%204.35%209.92503C4.58333%2010.5084%205%2011.1834%205.6%2011.95C6.2%2012.7%207.01667%2013.5917%208.05%2014.625C9.08333%2015.6417%2010.4%2016.8667%2012%2018.3Z'%20fill='%23FF4B4B'/%3e%3c/svg%3e`;function m({title:e,imageSrc:t,rating:n,likes:r,className:i=``}){let a=document.createElement(`article`);a.className=`game-card ${i}`.trim();let o=n&&r?`
        <div class="game-card__meta">
          <span class="game-card__rating">
            <img
              class="game-card__rating-icon"
              src="${f}"
              alt=""
              aria-hidden="true"
            />
            ${n}
          </span>

          <span class="game-card__likes">
            <img
              class="game-card__likes-icon"
              src="${p}"
              alt=""
              aria-hidden="true"
            />
            ${r}
          </span>
        </div>
      `:``;return a.innerHTML=`
    <img class="game-card__image" src="${t}" alt="" />

    ${`
    <div class="game-card__overlay">
      ${e?`<h3 class="game-card__title">${e}</h3>`:``}
      ${o}
    </div>
  `}
  `,a}var h=[{title:`Tailside: Cozy Cafe Sim`,imageSrc:a,rating:`4.8`,likes:`35.6K`,className:`game-card--edge`},{title:`ISLANDERS: New Shores`,imageSrc:o,rating:`4.9`,likes:`54.2K`,className:`game-card--regular`},{title:`Vacation Cafe Simulator`,imageSrc:s,rating:`4.8`,likes:`28.7K`,className:`game-card--featured`},{title:`Winter Burrow`,imageSrc:c,rating:`4.9`,likes:`32.4K`,className:`game-card--regular`},{title:`Shelve the Potions!`,imageSrc:l,rating:`4.7`,likes:`21.3K`,className:`game-card--edge`}];function g(){let e=document.createElement(`section`);e.className=`new-games`,e.innerHTML=`
    <div class="new-games__header">
      <h2 class="new-games__title">New Games</h2>

      <div class="new-games__controls">
        <button
          class="new-games__control"
          type="button"
          aria-label="Previous games"
        >
          <img src="${u}" alt="" aria-hidden="true" />
        </button>

        <button
          class="new-games__control new-games__control--next"
          type="button"
          aria-label="Next games"
        >
          <img src="${d}" alt="" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div class="new-games__viewport">
      <div class="new-games__track">
        <!-- game cards will go here -->
      </div>
    </div>
  `;let t=e.querySelector(`.new-games__track`);if(!t)throw Error(`New games track not found`);for(let e of h)t.append(m(e));return e}var _=[{rank:1,playerName:`Alex_Pro99`,gamesPlayed:142,totalScore:94250,streakDays:12,favoriteGameSlug:`heartopia`,favoriteGameName:`Heartopia`},{rank:2,playerName:`CozyGamer_x`,gamesPlayed:118,totalScore:81400,streakDays:8,favoriteGameSlug:`cat-mail-co`,favoriteGameName:`Cat Mail Co.`},{rank:3,playerName:`MatchMaster`,gamesPlayed:98,totalScore:72110,streakDays:5,favoriteGameSlug:`tiny-glade`,favoriteGameName:`Tiny Glade`},{rank:4,playerName:`BubblePop`,gamesPlayed:87,totalScore:65900,streakDays:3,favoriteGameSlug:`whisper-of-the-house`,favoriteGameName:`Whisper of the House`},{rank:5,playerName:`SudokuGod`,gamesPlayed:74,totalScore:59320,streakDays:2,favoriteGameSlug:`cat-chess`,favoriteGameName:`Cat Chess`}];function v(e){return{Alex_Pro99:`AP`,CozyGamer_x:`CG`,MatchMaster:`MM`,BubblePop:`BP`,SudokuGod:`SG`}[e]??e.slice(0,2).toUpperCase()}function y(){let e=document.createElement(`section`);return e.className=`leaderboard`,e.innerHTML=`
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

        <tbody>
          ${_.map(e=>`
        <tr>
          <td class="leaderboard__rank">#${e.rank}</td>
          <td class="leaderboard__player">
            <span class="leaderboard__avatar">${v(e.playerName)}</span>
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
      `).join(``)}
        </tbody>
      </table>
    </div>
  `,e}var b=`/minigames/assets/illustration-side-DsQZrXDY.png`,x=`data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%203V15M7%208L12%203L17%208M21%2015V19C21%2019.5304%2020.7893%2020.0391%2020.4142%2020.4142C20.0391%2020.7893%2019.5304%2021%2019%2021H5C4.46957%2021%203.96086%2020.7893%203.58579%2020.4142C3.21071%2020.0391%203%2019.5304%203%2019V15'%20stroke='%23242145'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e`;function S(){let e=document.createElement(`section`);return e.className=`developer-cta`,e.innerHTML=`
    <img
      class="developer-cta__image"
      src="${b}"
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
           src="${x}"
           alt=""
           aria-hidden="true"
        />
        Submit Form
      </button>

      <p class="developer-cta__contact">
        or contact us at developers@minigames.com
      </p>
    </div>
  `,e}var C=`data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='10'%20fill='%23242145'/%3e%3cpath%20d='M5.00568%2013V7.18182H7.30114C7.74053%207.18182%208.11553%207.26042%208.42614%207.41761C8.73864%207.57292%208.97633%207.79356%209.1392%208.07955C9.30398%208.36364%209.38636%208.69792%209.38636%209.08239C9.38636%209.46875%209.30303%209.80114%209.13636%2010.0795C8.9697%2010.3561%208.72822%2010.5682%208.41193%2010.7159C8.09754%2010.8636%207.71686%2010.9375%207.26989%2010.9375H5.73295V9.94886H7.07102C7.30587%209.94886%207.50095%209.91667%207.65625%209.85227C7.81155%209.78788%207.92708%209.69129%208.00284%209.5625C8.08049%209.43371%208.11932%209.27367%208.11932%209.08239C8.11932%208.8892%208.08049%208.72633%208.00284%208.59375C7.92708%208.46117%207.81061%208.3608%207.65341%208.29261C7.49811%208.22254%207.30208%208.1875%207.06534%208.1875H6.2358V13H5.00568ZM8.14773%2010.3523L9.59375%2013H8.2358L6.82102%2010.3523H8.14773ZM13.1119%208.85511C13.0892%208.62595%2012.9917%208.44792%2012.8193%208.32102C12.647%208.19413%2012.4131%208.13068%2012.1176%208.13068C11.9169%208.13068%2011.7473%208.15909%2011.6091%208.21591C11.4708%208.27083%2011.3648%208.34754%2011.2909%208.44602C11.2189%208.54451%2011.183%208.65625%2011.183%208.78125C11.1792%208.88542%2011.2009%208.97633%2011.2483%209.05398C11.2975%209.13163%2011.3648%209.19886%2011.45%209.25568C11.5352%209.31061%2011.6337%209.3589%2011.7455%209.40057C11.8572%209.44034%2011.9765%209.47443%2012.1034%209.50284L12.6261%209.62784C12.8799%209.68466%2013.1129%209.76042%2013.325%209.85511C13.5371%209.94981%2013.7208%2010.0663%2013.8761%2010.2045C14.0314%2010.3428%2014.1517%2010.5057%2014.2369%2010.6932C14.3241%2010.8807%2014.3686%2011.0956%2014.3705%2011.3381C14.3686%2011.6941%2014.2777%2012.0028%2014.0977%2012.2642C13.9197%2012.5237%2013.6621%2012.7254%2013.325%2012.8693C12.9898%2013.0114%2012.5854%2013.0824%2012.1119%2013.0824C11.6422%2013.0824%2011.2331%2013.0104%2010.8847%2012.8665C10.5381%2012.7225%2010.2672%2012.5095%2010.0722%2012.2273C9.87898%2011.9432%209.77765%2011.5919%209.76818%2011.1733H10.9585C10.9718%2011.3684%2011.0277%2011.5312%2011.1261%2011.6619C11.2265%2011.7907%2011.36%2011.8883%2011.5267%2011.9545C11.6953%2012.0189%2011.8856%2012.0511%2012.0977%2012.0511C12.3061%2012.0511%2012.4869%2012.0208%2012.6403%2011.9602C12.7956%2011.8996%2012.9159%2011.8153%2013.0011%2011.7074C13.0864%2011.5994%2013.129%2011.4754%2013.129%2011.3352C13.129%2011.2045%2013.0902%2011.0947%2013.0125%2011.0057C12.9367%2010.9167%2012.825%2010.8409%2012.6773%2010.7784C12.5314%2010.7159%2012.3525%2010.6591%2012.1403%2010.608L11.5068%2010.4489C11.0163%2010.3295%2010.629%2010.143%2010.3449%209.8892C10.0608%209.63542%209.9197%209.29356%209.92159%208.86364C9.9197%208.51136%2010.0134%208.2036%2010.2028%207.94034C10.3941%207.67708%2010.6564%207.47159%2010.9898%207.32386C11.3231%207.17614%2011.7019%207.10227%2012.1261%207.10227C12.558%207.10227%2012.9348%207.17614%2013.2568%207.32386C13.5807%207.47159%2013.8326%207.67708%2014.0125%207.94034C14.1924%208.2036%2014.2852%208.50852%2014.2909%208.85511H13.1119Z'%20fill='%23FFD02B'/%3e%3c/svg%3e`,w=`data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='20'%20height='20'%20rx='10'%20fill='white'/%3e%3cpath%20d='M7.9%2014L4.4%2010.5L7.9%207L8.64375%207.74375L5.8875%2010.5L8.64375%2013.2562L7.9%2014ZM12.1%2014L11.3563%2013.2562L14.1125%2010.5L11.3563%207.74375L12.1%207L15.6%2010.5L12.1%2014Z'%20fill='%23242145'/%3e%3c/svg%3e`;function T(){let e=document.createElement(`footer`);return e.className=`footer`,e.innerHTML=`
    <div class="footer__top">
      <div class="footer__brand">
        <div class="footer__logo">
          <img
            class="footer__logo-icon"
            src="${n}"
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
        <a href="#" class="footer__meta-link footer__rsschool">
          <img
            class="footer__rs-logo"
            src="${C}"
            alt=""
            aria-hidden="true"
          />
          <span>RS School</span>
        </a>

        <a href="#" class="footer__meta-link footer__student">
          <img
            class="footer__github-icon"
            src="${w}"
            alt=""
            aria-hidden="true"
          />
          <span>@Festival3224</span>
        </a>
      </div>

      <span class="footer__love">Designed with love</span>
    </div>
  `,e}function E(){let e=document.createElement(`div`);e.append(r());let t=document.createElement(`main`);return t.append(i()),t.append(g()),t.append(y()),t.append(S()),t.append(T()),e.append(t),e}function D(e){let t=document.createElement(`nav`);t.className=`pagination`,t.setAttribute(`aria-label`,`Library pagination`);let n=1,r=t=>{if(e<=t)return Array.from({length:e},(e,t)=>t+1);let r=Math.max(1,n-Math.floor(t/2)),i=r+t-1;return i>e&&(i=e,r=i-t+1),Array.from({length:i-r+1},(e,t)=>r+t)},i=()=>{t.replaceChildren();let a=document.createElement(`button`);a.className=`pagination__arrow`,a.type=`button`,a.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_left
      </span>
    `,a.disabled=n===1,a.addEventListener(`click`,()=>{n<=1||(--n,i())}),t.append(a);let o=matchMedia(`(max-width: 499px)`).matches?3:4,s=r(o);for(let e of s){let r=document.createElement(`button`);r.className=`pagination__page`,r.type=`button`,r.textContent=String(e),r.dataset.page=String(e),e===n&&(r.classList.add(`pagination__page--active`),r.setAttribute(`aria-current`,`page`)),r.addEventListener(`click`,()=>{n=e,i()}),t.append(r)}let c=document.createElement(`button`);c.className=`pagination__arrow`,c.type=`button`,c.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">
        chevron_right
      </span>
    `,c.disabled=n===e,c.addEventListener(`click`,()=>{n>=e||(n+=1,i())}),t.append(c)};return i(),addEventListener(`resize`,i),t}var O={data:{slug:`tukoni-forest-keepers`,name:`Tukoni: Forest Keepers`,heroImage:`/assets/images/games/tukoni-forest-keepers-hero.jpg`,rating:4.9,likesCount:31200,isLikedByCurrentUser:!1,fullDescription:`Tukoni: Forest Keepers — a cozy hand-drawn puzzle-adventure. You are Traveller, a little forest spirit on an important mission. Wander storybook meadows, visit mushroom villages, meet adorable inhabitants, solve gentle hand-crafted puzzles, brew herbal teas and help the Tukoni forest prepare peacefully for the coming winter.`,specs:{genre:`Puzzle`,players:`Solo`,duration:`40-90 min`,price:`Free`},topRecords:[{position:1,playerName:`ForestSpirit`,score:356700,achievedAt:`2026-08-28T14:30:00Z`},{position:2,playerName:`TeaBrewer`,score:332400,achievedAt:`2026-08-25T09:12:00Z`},{position:3,playerName:`HerbalistPath`,score:308900,achievedAt:`2026-08-23T18:45:00Z`}]}};function k(e){return e<1e3?String(e):`${Math.floor(e/100)/10}K`}function A(e){return e.toFixed(1)}function j(e){let t=new Date(e),n=Math.floor((new Date().getTime()-t.getTime())/864e5);if(n<1)return`today`;if(n<7)return`${n} day${n===1?``:`s`} ago`;let r=Math.floor(n/7);return`${r} week${r===1?``:`s`} ago`}var M={data:[{commentId:`c5d9f2a1-7c3b-4e8f-9a0d-000000000001`,authorName:`ForestDweller`,text:`The hand-drawn art is absolutely magical 🍄 Every location feels like a page from a children's storybook. The mushroom village made me cry happy tears!`,likesCount:12,isLikedByCurrentUser:!1,createdAt:`2026-08-30T07:00:00Z`},{commentId:`c5d9f2a1-7c3b-4e8f-9a0d-000000000002`,authorName:`HerbalTeaLover`,text:`Perfect cozy evening game — brew a cup of chamomile, wrap in a blanket and help the little Tukoni prepare for winter. The puzzles are gentle but satisfying.`,likesCount:5,isLikedByCurrentUser:!1,createdAt:`2026-08-29T15:30:00Z`},{commentId:`c5d9f2a1-7c3b-4e8f-9a0d-000000000003`,authorName:`CottageCoreMia`,text:`I want to live inside this game forever 🌿 The NPCs are so charming, the tea recipes are real, and the atmosphere is pure warmth and calm.`,likesCount:8,isLikedByCurrentUser:!1,createdAt:`2026-08-27T20:10:00Z`}],meta:{totalComments:3,returnedCount:3,sort:`newest`}},N=`/minigames/assets/tukoni-forest-keepers-hero-D-UQTA7d.jpg`,P={1:`🥇`,2:`🥈`,3:`🥉`};function F(){return O.data.topRecords.map(e=>`
        <div class="game-details-dialog__record">
          <div class="game-details-dialog__record-player-group">
            <span class="game-details-dialog__record-medal" aria-hidden="true">
              ${P[e.position]??``}
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
              ${j(e.achievedAt)}
            </span>
          </div>
        </div>
      `).join(``)}function I(){return M.data.map((e,t)=>{let n=e.isLikedByCurrentUser?` game-details-dialog__comment-likes-group--active`:``;return`
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
              ${j(e.createdAt)}
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
      `}).join(``)}function L(){let e=O.data,t=F(),n=I(),r=document.createElement(`div`);r.className=`game-details-backdrop`,document.body.classList.add(`dialog-open`);let i=document.createElement(`section`);i.className=`game-details-dialog`,i.setAttribute(`role`,`dialog`),i.setAttribute(`aria-modal`,`true`),i.setAttribute(`aria-label`,`Game details`),i.innerHTML=`
  <div class="game-details-dialog__hero">
    <img
      class="game-details-dialog__hero-image"
      src="${N}"
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
        ${e.name}
      </h2>  

      <div class="game-details-dialog__ratings">
        <span class="game-details-dialog__rating">
          <img src="${f}" alt="" aria-hidden="true" />
          ${A(e.rating)}
        </span>

        <span class="game-details-dialog__likes">
          <img src="${p}" alt="" aria-hidden="true" />
          ${k(e.likesCount)}
        </span>
      </div>
    </div>

    <p class="game-details-dialog__description">
      ${e.fullDescription} <!-- description -->
    </p>

    <div class="game-details-dialog__info">
      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Genre</span>
        <span class="game-details-dialog__info-value">${e.specs.genre}</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Players</span>
        <span class="game-details-dialog__info-value">${e.specs.players}</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Duration</span>
        <span class="game-details-dialog__info-value">${e.specs.duration}</span>
      </div>

      <div class="game-details-dialog__info-item">
        <span class="game-details-dialog__info-label">Price</span>
        <span class="game-details-dialog__info-value">${e.specs.price}</span>
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

      <div class="game-details-dialog__records-list">
        ${t}
      </div>
    </section>

    <section class="game-details-dialog__comments">
      <h3 class="game-details-dialog__comments-title">
        Comments (${M.meta.totalComments})
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
        ${n}
      </div>
    </section>
  </div>
`;let a=i.querySelector(`.game-details-dialog__favorite`);a?.addEventListener(`click`,()=>{let e=a.classList.toggle(`game-details-dialog__favorite--active`),t=a.querySelector(`.game-details-dialog__favorite-text`);t&&(t.textContent=e?`Remove from Favorites`:`Add to Favorites`),a.setAttribute(`aria-pressed`,String(e))}),r.append(i);let o=i.querySelector(`.game-details-dialog__comment-input`),s=i.querySelector(`.game-details-dialog__send`),c=()=>{o&&s&&(s.disabled=o.value.trim().length===0)};o?.addEventListener(`input`,c),c();let l=i.querySelector(`.game-details-dialog__close`);function u(){document.removeEventListener(`keydown`,d),document.body.classList.remove(`dialog-open`),r.remove()}function d(e){e.key===`Escape`&&u()}return l?.addEventListener(`click`,u),r.addEventListener(`click`,e=>{e.target===r&&u()}),document.addEventListener(`keydown`,d),r}var R=`/minigames/assets/heartopia-card-DRd_6OVG.jpg`,z=`/minigames/assets/palia-card-8xT8yeZQ.jpg`,B=`/minigames/assets/cat-mail-co-card-B0GMTC_n.jpg`;function V({title:e,imageSrc:t,category:n,description:r,rating:i,likes:a,price:o}){let s=document.createElement(`article`);return s.className=`library-game-card`,s.innerHTML=`
    <img
      class="library-game-card__image"
      src="${t}"
      alt=""
    />

    <div class="library-game-card__content">
      <div class="library-game-card__heading">
        <h2 class="library-game-card__title">${e}</h2>
        <span class="library-game-card__tag">${n}</span>
      </div>

      <span class="library-game-card__price">${o}</span>

      <p class="library-game-card__description">
        ${r}
      </p>

      <div class="library-game-card__meta">
        <span class="library-game-card__rating">
          <img src="${f}" alt="" aria-hidden="true" />
          ${i}
        </span>

        <span class="library-game-card__likes">
          <img src="${p}" alt="" aria-hidden="true" />
          ${a}
        </span>
      </div>

      <button class="library-game-card__details" type="button">
        Details
      </button>
    </div>
  `,s}var H={data:[{slug:`all`,label:`All Games`,isDefault:!0},{slug:`puzzle`,label:`Puzzle`,isDefault:!1},{slug:`card`,label:`Card`,isDefault:!1},{slug:`match`,label:`Match`,isDefault:!1},{slug:`farm`,label:`Farm`,isDefault:!1},{slug:`strategy`,label:`Strategy`,isDefault:!1},{slug:`arcade`,label:`Arcade`,isDefault:!1}],meta:{totalItems:7,description:`Game categories for Library filter chips`}},U={data:[{slug:`vacation-cafe-simulator`,name:`Vacation Cafe Simulator`,category:`strategy`,price:`Free`,shortDescription:`Cozy Italian Vacation Cafe 🏖️ No timers, No stress 😌 cook traditional dishes 🍝 upgrade and customize 🏠 just drink Prosecco 🥂 relax and grow your dream cafe ✨`,rating:4.8,likesCount:28750,cardImage:`/assets/images/games/vacation-cafe-simulator-card.jpg`,featured:!0},{slug:`winter-burrow`,name:`Winter Burrow`,category:`farm`,price:`Free`,shortDescription:`A cozy woodland survival game about a mouse restoring their childhood burrow. Explore, gather resources, craft, knit warm sweaters, bake pies and meet the locals.`,rating:4.9,likesCount:32400,cardImage:`/assets/images/games/winter-burrow-card.jpg`,featured:!0},{slug:`shelve-the-potions`,name:`Shelve the Potions!`,category:`puzzle`,price:`Free`,shortDescription:`Organize 2000+ potions on shelves after the witch's cats have knocked them over, using clues around an enchanted cellar. Learn strange symbols and decipher cryptic notes.`,rating:4.7,likesCount:21300,cardImage:`/assets/images/games/shelve-the-potions-card.jpg`,featured:!0},{slug:`heartopia`,name:`Heartopia`,category:`strategy`,price:`$1.99`,shortDescription:`A multiplayer life simulation game crafted for creativity, freedom, and peace. Build your dream home, explore hobbies, and forge warm connections with friends in a cozy town.`,rating:4.6,likesCount:46800,cardImage:`/assets/images/games/heartopia-card.jpg`,featured:!0},{slug:`palia`,name:`Palia`,category:`strategy`,price:`Free`,shortDescription:`A free-to-play fantasy life sim adventure where you can craft, explore, and create the life and home of your dreams in a vibrant, heartwarming world.`,rating:4.8,likesCount:89500,cardImage:`/assets/images/games/palia-card.jpg`,featured:!0},{slug:`cat-mail-co`,name:`Cat Mail Co.`,category:`puzzle`,price:`Free`,shortDescription:`Run a cozy cat post office. Sort and deliver parcels from the daily boat. At night, the moon reveals hidden truths about packages. Clear a strange backlog and unlock new destinations.`,rating:4.9,likesCount:38200,cardImage:`/assets/images/games/cat-mail-co-card.jpg`,featured:!0},{slug:`leaf-it-alone`,name:`Leaf it Alone`,category:`arcade`,price:`Free`,shortDescription:`Finally, it's that time of the year to clean up this leafy mess. Derust your raking skills and don't waste a second — there's a whole lawn waiting!`,rating:4.4,likesCount:12600,cardImage:`/assets/images/games/leaf-it-alone-card.jpg`,featured:!1},{slug:`leafy-corner`,name:`Leafy Corner`,category:`farm`,price:`$1.99`,shortDescription:`Run a cute little plant shop. Grow, sell, and care for real-life plants, help customers find their dream plants, complete orders, and customize your cozy shop.`,rating:4.7,likesCount:19800,cardImage:`/assets/images/games/leafy-corner-card.jpg`,featured:!1},{slug:`grimshire`,name:`Grimshire`,category:`strategy`,price:`Free`,shortDescription:`A deadly plague threatens the village of Grimshire. Manage farmland, forage wilds, stop harvest rot and keep the cellar full. Can you help the community survive?`,rating:4.6,likesCount:15700,cardImage:`/assets/images/games/grimshire-card.jpg`,featured:!1},{slug:`tiny-glade`,name:`Tiny Glade`,category:`arcade`,price:`$3.99`,shortDescription:`A small diorama builder where you doodle whimsical castles, cozy cottages & romantic ruins. No management, combat or goals — just lovable dioramas.`,rating:4.9,likesCount:67300,cardImage:`/assets/images/games/tiny-glade-card.jpg`,featured:!0},{slug:`whisper-of-the-house`,name:`Whisper of the House`,category:`puzzle`,price:`Free`,shortDescription:`A cozy organizing & decorating game. Help townspeople move, organize, and clean their spaces. Your gentle touch may change their lives and uncover hidden stories.`,rating:4.8,likesCount:24900,cardImage:`/assets/images/games/whisper-of-the-house-card.jpg`,featured:!1},{slug:`tukoni-forest-keepers`,name:`Tukoni: Forest Keepers`,category:`puzzle`,price:`Free`,shortDescription:`A cute cozy puzzle adventure. Play as a forest spirit exploring hand-drawn magical locations, meet charming characters, solve puzzles, collect herbs and tea recipes.`,rating:4.9,likesCount:31200,cardImage:`/assets/images/games/tukoni-forest-keepers-card.jpg`,featured:!1},{slug:`cat-chess`,name:`Cat Chess`,category:`strategy`,price:`Free`,shortDescription:`Play the ancient and thrilling game of Chess but with... cats! Lead your furry friends to the Purrfect battle of brains and whiskers!`,rating:4.6,likesCount:17400,cardImage:`/assets/images/games/cat-chess-card.jpg`,featured:!1},{slug:`cast-n-chill`,name:`Cast n Chill`,category:`arcade`,price:`Free`,shortDescription:`A relaxing fishing game where you explore serene lakes, rivers, and oceans. Catch rare fish, upgrade your gear and reel in legendary catches - all with your loyal companion.`,rating:4.7,likesCount:26800,cardImage:`/assets/images/games/cast-n-chill-card.jpg`,featured:!1},{slug:`little-corners`,name:`Little Corners`,category:`puzzle`,price:`Free`,shortDescription:`Peel, place, and arrange stickers across tiny windows into different worlds. Relax and unwind to lofi beats, collect unique stickers and share cozy creations.`,rating:4.8,likesCount:41500,cardImage:`/assets/images/games/little-corners-card.jpg`,featured:!1},{slug:`tailside-cozy-cafe-sim`,name:`Tailside: Cozy Cafe Sim`,category:`strategy`,price:`Free`,shortDescription:`Run your own cozy café in Tailside! Brew coffee, decorate your café, follow small stories in the daily newspaper. Unlock new items, skills, villagers, and creature visitors.`,rating:4.8,likesCount:35600,cardImage:`/assets/images/games/tailside-cozy-cafe-sim-card.jpg`,featured:!0},{slug:`islanders-new-shores`,name:`ISLANDERS: New Shores`,category:`strategy`,price:`Free`,shortDescription:`Build your island retreat in a calm, minimalist world with exciting new features that keep the classic charm while inspiring fresh creativity.`,rating:4.9,likesCount:54200,cardImage:`/assets/images/games/islanders-new-shores-card.jpg`,featured:!0},{slug:`camper-van-make-it-home`,name:`Camper Van: Make it Home`,category:`puzzle`,price:`Free`,shortDescription:`Decorate and organize the camper van of your dreams! Build your own home-on-wheels using creative block organization puzzles and relaxing interior design.`,rating:4.7,likesCount:29300,cardImage:`/assets/images/games/camper-van-make-it-home-card.jpg`,featured:!1},{slug:`organized-inside`,name:`Organized Inside`,category:`puzzle`,price:`Free`,shortDescription:`A slow-paced life sim and tidying up game about a cat, passion, transformation and growth. Categorize household items while uncovering the meaning of life through organization.`,rating:4.8,likesCount:22700,cardImage:`/assets/images/games/organized-inside-card.jpg`,featured:!1},{slug:`cozy-solitaire`,name:`Cozy Solitaire`,category:`card`,price:`Free`,shortDescription:`Classic Solitaire game, accompanied by music and kitties.`,rating:4.5,likesCount:38900,cardImage:`/assets/images/games/cozy-solitaire-card.jpg`,featured:!1},{slug:`cozy-sudoku`,name:`Cozy Sudoku`,category:`puzzle`,price:`Free`,shortDescription:`Sudoku, tunes, and some furry friends.`,rating:4.6,likesCount:21500,cardImage:`/assets/images/games/cozy-sudoku-card.jpg`,featured:!1},{slug:`koroneko`,name:`KoroNeko`,category:`puzzle`,price:`Free`,shortDescription:`Roll your way through a cozy, kawaii world full of charming characters and challenging puzzles to save your siblings from Strawberry the Witch!`,rating:4.9,likesCount:47300,cardImage:`/assets/images/games/koroneko-card.jpg`,featured:!1},{slug:`wytchwood`,name:`Wytchwood`,category:`strategy`,price:`$4.99`,shortDescription:`A crafting adventure game set in a land of gothic fables. As the old witch, explore, collect ingredients, brew spells, and pass judgement upon a capricious cast of characters.`,rating:4.7,likesCount:33100,cardImage:`/assets/images/games/wytchwood-card.jpg`,featured:!1},{slug:`the-wild-at-heart`,name:`The Wild at Heart`,category:`strategy`,price:`Free`,shortDescription:`Wield a herd of quirky creatures to rebuild paths, battle beasts, and solve puzzles in a rich, interconnected nostalgic storybook fantasy world.`,rating:4.8,likesCount:30400,cardImage:`/assets/images/games/the-wild-at-heart-card.jpg`,featured:!1}],meta:{totalItems:24,description:`Full MiniGames library — seed snapshot (24 cozy titles), resets daily 03:00 UTC`,featuredCount:9}},W={"vacation-cafe-simulator":s,"winter-burrow":c,"shelve-the-potions":l,heartopia:R,palia:z,"cat-mail-co":B};function G(){let e=document.createElement(`div`);e.className=`page`,e.append(r());let t=document.createElement(`main`);t.className=`library`;let n=document.createElement(`section`);n.className=`library__title-section`;let i=document.createElement(`h1`);i.className=`library__title`,i.textContent=`Game Library`;let a=document.createElement(`p`);a.className=`library__subtitle`,a.textContent=`Browse our collection of casual mini-games`,n.append(i,a);let o=document.createElement(`section`);o.className=`library__controls`;let s=document.createElement(`div`);s.className=`library__filters`;for(let e of H.data){let t=document.createElement(`button`);t.className=`library__filter`,t.type=`button`,t.textContent=e.label,t.dataset.category=e.slug,t.setAttribute(`aria-pressed`,String(e.isDefault)),e.isDefault&&t.classList.add(`library__filter--active`),s.append(t)}let c=s.querySelectorAll(`.library__filter`),l=!1,u=!1,d=0,f=0,p=0;s.addEventListener(`pointerdown`,e=>{l=!0,u=!1,d=e.clientX,f=s.scrollLeft,p=0}),s.addEventListener(`pointermove`,e=>{if(!l)return;let t=e.clientX-d;p=Math.abs(t),!(p<=5)&&(u||(u=!0,s.setPointerCapture(e.pointerId)),s.scrollLeft=f-t)}),s.addEventListener(`pointerup`,e=>{l=!1,u&&s.hasPointerCapture(e.pointerId)&&s.releasePointerCapture(e.pointerId),u=!1}),s.addEventListener(`pointercancel`,()=>{l=!1,u=!1});for(let e of c)e.addEventListener(`click`,()=>{if(!(p>5)){for(let e of c)e.classList.remove(`library__filter--active`),e.setAttribute(`aria-pressed`,`false`);e.classList.add(`library__filter--active`),e.setAttribute(`aria-pressed`,`true`)}});let m=document.createElement(`div`);m.className=`library__sort-wrapper`;let h=document.createElement(`button`);h.className=`library__sort`,h.type=`button`,h.setAttribute(`aria-expanded`,`false`),h.setAttribute(`aria-haspopup`,`listbox`);let g=document.createElement(`span`);g.textContent=`Sort by: Rating ↓`;let _=document.createElement(`span`);_.className=`material-symbols-outlined`,_.setAttribute(`aria-hidden`,`true`),_.textContent=`arrow_drop_down`,h.append(g,_);let v=document.createElement(`div`);v.className=`library__sort-menu`,v.setAttribute(`role`,`listbox`),v.hidden=!0;for(let e of[`Rating ↑`,`Rating ↓`,`Name A→Z`,`Name Z→A`]){let t=document.createElement(`button`);t.className=`library__sort-option`,t.type=`button`,t.setAttribute(`role`,`option`),t.textContent=e,e===`Rating ↓`?(t.classList.add(`library__sort-option--active`),t.setAttribute(`aria-selected`,`true`)):t.setAttribute(`aria-selected`,`false`),v.append(t)}h.addEventListener(`click`,()=>{let e=!v.hidden;v.hidden=e,h.setAttribute(`aria-expanded`,String(!e))});let y=v.querySelectorAll(`.library__sort-option`);for(let e of y)e.addEventListener(`click`,()=>{for(let e of y)e.classList.remove(`library__sort-option--active`),e.setAttribute(`aria-selected`,`false`);e.classList.add(`library__sort-option--active`),e.setAttribute(`aria-selected`,`true`),g.textContent=`Sort by: ${e.textContent}`,v.hidden=!0,h.setAttribute(`aria-expanded`,`false`)});m.append(h,v);let b=document.createElement(`section`);b.className=`library__games`;let x=U.data.slice(0,6);for(let e of x)b.append(V({title:e.name,imageSrc:W[e.slug],category:e.category,description:e.shortDescription,rating:A(e.rating),likes:k(e.likesCount),price:e.price}));b.addEventListener(`click`,e=>{let t=e.target;if(!(t instanceof HTMLElement)||!t.closest(`.library-game-card__details`))return;let n=L();document.body.append(n)});let S=D(Math.ceil(U.data.length/6));return o.append(s,m),t.append(n,o,b,S),e.append(t),e.append(T()),e}function K(e){let t=document.querySelector(`#app`);if(t){if(t.replaceChildren(),e===`library`){t.append(G());return}t.append(E())}}function q(){return location.hash===`#library`?`library`:`home`}var J=document.createElement(`div`);J.id=`app`,document.body.append(J);function Y(){K(q())}addEventListener(`hashchange`,Y),Y();