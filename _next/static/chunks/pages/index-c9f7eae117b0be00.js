(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (t, a, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return e(2304);
        },
      ]);
    },
    195: function (t, a, e) {
      "use strict";
      e.d(a, {
        Z: function () {
          return i;
        },
      });
      var r = e(5893),
        n = e(7566),
        s = e.n(n),
        o = e(2235),
        p = e.n(o);
      function i(t) {
        let { children: a } = t;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("main", {
              className: "jsx-77b2d9927536d25c " + (s().variable || ""),
              children: a,
            }),
            (0, r.jsx)(p(), {
              id: "77b2d9927536d25c",
              children:
                "main.jsx-77b2d9927536d25c{width:100%;height:-webkit-min-content;height:-moz-min-content;height:min-content;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}",
            }),
          ],
        });
      }
    },
    2304: function (t, a, e) {
      "use strict";
      e.r(a),
        e.d(a, {
          default: function () {
            return m;
          },
        });
      var r = e(5893),
        n = e(2235),
        s = e.n(n),
        o = e(9008),
        p = e.n(o),
        i = e(7294),
        l = e(1163),
        x = e(195);
      function m() {
        let t = (0, l.useRouter)(),
          a = (0, i.useRef)(null),
          e = () => {
            let t = document.getElementById("tempBtn"),
              a = document.getElementById("btnEffect");
            setTimeout(() => {
              t.classList.add("tempBtnShow");
            }, 6700),
              setTimeout(() => {
                (a.style.transition = "2s ease-out"),
                  (a.style.visibility = "visible");
              }, 7500);
          };
        return (
          (0, i.useEffect)(() => {
            let t = a.current,
              r = () => {
                t.play();
              };
            return (
              e(),
              t.addEventListener("canplay", r),
              () => {
                t.removeEventListener("canplay", r);
              }
            );
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(p(), {
                children: [
                  (0, r.jsx)("title", {
                    className: "jsx-f1d00e56b487a7b2",
                    children: "DOMES",
                  }),
                  (0, r.jsx)("meta", {
                    name: "description",
                    content: "",
                    className: "jsx-f1d00e56b487a7b2",
                  }),
                  (0, r.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                    className: "jsx-f1d00e56b487a7b2",
                  }),
                  (0, r.jsx)("link", {
                    rel: "icon",
                    href: "/favicon.ico",
                    className: "jsx-f1d00e56b487a7b2",
                  }),
                ],
              }),
              (0, r.jsxs)(x.Z, {
                children: [
                  (0, r.jsxs)("div", {
                    className: "jsx-f1d00e56b487a7b2 mainContainer",
                    children: [
                      (0, r.jsx)("div", {
                        id: "tempBtn",
                        className: "jsx-f1d00e56b487a7b2 tempBtn",
                        children: (0, r.jsx)("div", {
                          id: "btnEffect",
                          className: "jsx-f1d00e56b487a7b2 btnEffect",
                          children: (0, r.jsx)("button", {
                            onClick: (a) => {
                              a.stopPropagation(), t.push("/home");
                            },
                            className: "jsx-f1d00e56b487a7b2",
                            children: "Join the Domes",
                          }),
                        }),
                      }),
                      (0, r.jsx)("video", {
                        ref: a,
                        autoPlay: !0,
                        muted: !0,
                        playsInline: !0,
                        controls: !1,
                        className: "jsx-f1d00e56b487a7b2",
                        children: (0, r.jsx)("source", {
                          src: "/intro.mp4",
                          type: "video/mp4",
                          className: "jsx-f1d00e56b487a7b2",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "jsx-f1d00e56b487a7b2 mainMobile",
                    children: (0, r.jsx)("div", {
                      className: "jsx-f1d00e56b487a7b2 tempBtnMobile",
                      children: (0, r.jsx)("div", {
                        id: "btnEffect",
                        className: "jsx-f1d00e56b487a7b2",
                        children: (0, r.jsx)("button", {
                          onClick: (a) => {
                            a.stopPropagation(), t.push("/home");
                          },
                          className: "jsx-f1d00e56b487a7b2",
                          children: "Join the Domes",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, r.jsx)(s(), {
                id: "f1d00e56b487a7b2",
                children:
                  '.mainContainer.jsx-f1d00e56b487a7b2{width:100%;height:100vh;background-color:black}.mainContainer.jsx-f1d00e56b487a7b2 video.jsx-f1d00e56b487a7b2{width:100%;height:100%}.mainMobile.jsx-f1d00e56b487a7b2{visibility:hidden}.tempBtn.jsx-f1d00e56b487a7b2{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;z-index:1;display:none}.tempBtnMobile.jsx-f1d00e56b487a7b2{width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;z-index:1;-webkit-transition:.2s ease-out;-moz-transition:.2s ease-out;-o-transition:.2s ease-out;transition:.2s ease-out;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:black}.btnEffect.jsx-f1d00e56b487a7b2{visibility:hidden}.tempBtnShow.jsx-f1d00e56b487a7b2{-webkit-transition:.2s ease-out;-moz-transition:.2s ease-out;-o-transition:.2s ease-out;transition:.2s ease-out;display:block;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:black}.tempBtnShow.jsx-f1d00e56b487a7b2 button.jsx-f1d00e56b487a7b2{cursor:pointer;border:1px solid white;font-family:var(--Row)}button.jsx-f1d00e56b487a7b2,button.jsx-f1d00e56b487a7b2::after{padding:10px 50px;font-size:20px;border:none;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:white;background-color:transparent;position:relative}button.jsx-f1d00e56b487a7b2::after{--move1:inset(50% 50% 50% 50%);--move2:inset(31% 0 40% 0);--move3:inset(39% 0 15% 0);--move4:inset(45% 0 40% 0);--move5:inset(45% 0 6% 0);--move6:inset(14% 0 61% 0);-webkit-clip-path:var(--move1);clip-path:var(--move1);content:"Resistance";position:absolute;top:0;left:0;right:0;bottom:0;display:block}button.jsx-f1d00e56b487a7b2:hover::after{-webkit-animation:glitch_4011 1s;-moz-animation:glitch_4011 1s;-o-animation:glitch_4011 1s;animation:glitch_4011 1s;text-shadow:10 10px 10px black;-webkit-animation-timing-function:steps(2,end);-moz-animation-timing-function:steps(2,end);-o-animation-timing-function:steps(2,end);animation-timing-function:steps(2,end);text-shadow:-3px -3px 0px white,3px 3px 0px#e94be8;background-color:transparent;border:3px solid white}button.jsx-f1d00e56b487a7b2:hover{text-shadow:-1px -1px 0px white,1px 1px 0px#e94be8}button.jsx-f1d00e56b487a7b2:hover{background-color:transparent;border:1px solid white;-webkit-box-shadow:0px 10px 10px -10px white;-moz-box-shadow:0px 10px 10px -10px white;box-shadow:0px 10px 10px -10px white}@-webkit-keyframes glitch_4011{0%{-webkit-clip-path:var(--move1);clip-path:var(--move1);-webkit-transform:translate(0px,-10px);transform:translate(0px,-10px)}10%{-webkit-clip-path:var(--move2);clip-path:var(--move2);-webkit-transform:translate(-10px,10px);transform:translate(-10px,10px)}20%{-webkit-clip-path:var(--move3);clip-path:var(--move3);-webkit-transform:translate(10px,0px);transform:translate(10px,0px)}30%{-webkit-clip-path:var(--move4);clip-path:var(--move4);-webkit-transform:translate(-10px,10px);transform:translate(-10px,10px)}40%{-webkit-clip-path:var(--move5);clip-path:var(--move5);-webkit-transform:translate(10px,-10px);transform:translate(10px,-10px)}50%{-webkit-clip-path:var(--move6);clip-path:var(--move6);-webkit-transform:translate(-10px,10px);transform:translate(-10px,10px)}60%{-webkit-clip-path:var(--move1);clip-path:var(--move1);-webkit-transform:translate(10px,-10px);transform:translate(10px,-10px)}70%{-webkit-clip-path:var(--move3);clip-path:var(--move3);-webkit-transform:translate(-10px,10px);transform:translate(-10px,10px)}80%{-webkit-clip-path:var(--move2);clip-path:var(--move2);-webkit-transform:translate(10px,-10px);transform:translate(10px,-10px)}90%{-webkit-clip-path:var(--move4);clip-path:var(--move4);-webkit-transform:translate(-10px,10px);transform:translate(-10px,10px)}100%{-webkit-clip-path:var(--move1);clip-path:var(--move1);-webkit-transform:translate(0);transform:translate(0)}}@-moz-keyframes glitch_4011{0%{clip-path:var(--move1);-moz-transform:translate(0px,-10px);transform:translate(0px,-10px)}10%{clip-path:var(--move2);-moz-transform:translate(-10px,10px);transform:translate(-10px,10px)}20%{clip-path:var(--move3);-moz-transform:translate(10px,0px);transform:translate(10px,0px)}30%{clip-path:var(--move4);-moz-transform:translate(-10px,10px);transform:translate(-10px,10px)}40%{clip-path:var(--move5);-moz-transform:translate(10px,-10px);transform:translate(10px,-10px)}50%{clip-path:var(--move6);-moz-transform:translate(-10px,10px);transform:translate(-10px,10px)}60%{clip-path:var(--move1);-moz-transform:translate(10px,-10px);transform:translate(10px,-10px)}70%{clip-path:var(--move3);-moz-transform:translate(-10px,10px);transform:translate(-10px,10px)}80%{clip-path:var(--move2);-moz-transform:translate(10px,-10px);transform:translate(10px,-10px)}90%{clip-path:var(--move4);-moz-transform:translate(-10px,10px);transform:translate(-10px,10px)}100%{clip-path:var(--move1);-moz-transform:translate(0);transform:translate(0)}}@-o-keyframes glitch_4011{0%{clip-path:var(--move1);-o-transform:translate(0px,-10px);transform:translate(0px,-10px)}10%{clip-path:var(--move2);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}20%{clip-path:var(--move3);-o-transform:translate(10px,0px);transform:translate(10px,0px)}30%{clip-path:var(--move4);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}40%{clip-path:var(--move5);-o-transform:translate(10px,-10px);transform:translate(10px,-10px)}50%{clip-path:var(--move6);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}60%{clip-path:var(--move1);-o-transform:translate(10px,-10px);transform:translate(10px,-10px)}70%{clip-path:var(--move3);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}80%{clip-path:var(--move2);-o-transform:translate(10px,-10px);transform:translate(10px,-10px)}90%{clip-path:var(--move4);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}100%{clip-path:var(--move1);-o-transform:translate(0);transform:translate(0)}}@keyframes glitch_4011{0%{-webkit-clip-path:var(--move1);clip-path:var(--move1);-webkit-transform:translate(0px,-10px);-moz-transform:translate(0px,-10px);-o-transform:translate(0px,-10px);transform:translate(0px,-10px)}10%{-webkit-clip-path:var(--move2);clip-path:var(--move2);-webkit-transform:translate(-10px,10px);-moz-transform:translate(-10px,10px);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}20%{-webkit-clip-path:var(--move3);clip-path:var(--move3);-webkit-transform:translate(10px,0px);-moz-transform:translate(10px,0px);-o-transform:translate(10px,0px);transform:translate(10px,0px)}30%{-webkit-clip-path:var(--move4);clip-path:var(--move4);-webkit-transform:translate(-10px,10px);-moz-transform:translate(-10px,10px);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}40%{-webkit-clip-path:var(--move5);clip-path:var(--move5);-webkit-transform:translate(10px,-10px);-moz-transform:translate(10px,-10px);-o-transform:translate(10px,-10px);transform:translate(10px,-10px)}50%{-webkit-clip-path:var(--move6);clip-path:var(--move6);-webkit-transform:translate(-10px,10px);-moz-transform:translate(-10px,10px);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}60%{-webkit-clip-path:var(--move1);clip-path:var(--move1);-webkit-transform:translate(10px,-10px);-moz-transform:translate(10px,-10px);-o-transform:translate(10px,-10px);transform:translate(10px,-10px)}70%{-webkit-clip-path:var(--move3);clip-path:var(--move3);-webkit-transform:translate(-10px,10px);-moz-transform:translate(-10px,10px);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}80%{-webkit-clip-path:var(--move2);clip-path:var(--move2);-webkit-transform:translate(10px,-10px);-moz-transform:translate(10px,-10px);-o-transform:translate(10px,-10px);transform:translate(10px,-10px)}90%{-webkit-clip-path:var(--move4);clip-path:var(--move4);-webkit-transform:translate(-10px,10px);-moz-transform:translate(-10px,10px);-o-transform:translate(-10px,10px);transform:translate(-10px,10px)}100%{-webkit-clip-path:var(--move1);clip-path:var(--move1);-webkit-transform:translate(0);-moz-transform:translate(0);-o-transform:translate(0);transform:translate(0)}}@media screen and (max-width:600px){.mainContainer.jsx-f1d00e56b487a7b2{display:none}.mainMobile.jsx-f1d00e56b487a7b2{visibility:visible;width:100%;height:100vh;background-color:black}}',
              }),
            ],
          })
        );
      }
    },
    7566: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Nunito_a68109', '__Nunito_Fallback_a68109'",
          fontWeight: 800,
          fontStyle: "normal",
        },
        className: "__className_a68109",
        variable: "__variable_a68109",
      };
    },
    9008: function (t, a, e) {
      t.exports = e(4764);
    },
    1163: function (t, a, e) {
      t.exports = e(2937);
    },
  },
  function (t) {
    t.O(0, [235, 774, 888, 179], function () {
      return t((t.s = 5557));
    }),
      (_N_E = t.O());
  },
]);
