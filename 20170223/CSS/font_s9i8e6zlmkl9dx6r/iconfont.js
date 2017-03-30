;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-arrowleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M33.0752 519.4752l307.2-307.2c9.984-9.984 26.2144-9.984 36.1984 0s9.984 26.2144 0 36.1984l-263.4752 263.4752 834.2016 0c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6l-834.2016 0 263.4752 263.4752c9.984 9.984 9.984 26.2144 0 36.1984-5.0176 5.0176-11.5712 7.4752-18.1248 7.4752s-13.1072-2.5088-18.1248-7.4752l-307.2-307.2c-9.984-9.984-9.984-26.2144 0-36.1984z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan" viewBox="0 0 1083 1024">' +
    '' +
    '<path d="M32.756068 512.915599a32.756068 32.756068 0 0 1-22.435663-56.53787l448.713258-417.752043A126.537139 126.537139 0 0 1 628.198561 38.176973l443.777412 415.059763a32.756068 32.756068 0 0 1-44.871326 47.563605L583.327235 86.189291a61.025003 61.025003 0 0 0-83.460666 0l-448.713258 417.752043a32.307355 32.307355 0 0 1-18.397243 8.974265z" fill="#727171" ></path>' +
    '' +
    '<path d="M197.882547 465.800707V897.462861a93.332358 93.332358 0 0 0 93.332357 93.332358h123.844859v-284.035492a126.537139 126.537139 0 1 1 253.074278 0v284.484205h123.844859A93.332358 93.332358 0 0 0 885.311258 897.462861V323.109891l-278.650933-261.151116a84.806806 84.806806 0 0 0-127.883279 0C407.880351 128.368337 197.882547 337.020002 197.882547 337.020002z" fill="#727171" ></path>' +
    '' +
    '<path d="M792.427613 1024h-156.600927v-317.240273a93.781071 93.781071 0 1 0-188.010855 0v317.240273H291.214904A126.088425 126.088425 0 0 1 165.575192 897.462861V323.109891L174.998171 314.135626c8.525552-8.974265 210.895231-209.997805 281.343212-275.958653A123.844859 123.844859 0 0 1 548.776314 0.036346a124.742286 124.742286 0 0 1 82.56324 40.384193l287.176485 269.227955V897.462861a126.088425 126.088425 0 0 1-126.088426 126.537139z m-89.742651-65.512136h89.742651A60.57629 60.57629 0 0 0 852.55519 897.462861V337.468716l-269.227955-251.279425a62.819856 62.819856 0 0 0-39.486767-20.64081 65.063422 65.063422 0 0 0-44.871325 20.64081c-61.025003 56.986584-227.946335 224.356629-269.227955 264.292109V897.462861a60.57629 60.57629 0 0 0 60.57629 60.57629h89.742651v-251.279424a159.293207 159.293207 0 0 1 318.586413 0z" fill="#727171" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan1" viewBox="0 0 1088 1024">' +
    '' +
    '<path d="M32.901408 510.647887a32.901408 32.901408 0 0 1-22.535211-56.788732l450.704226-419.605634a127.098592 127.098592 0 0 1 169.915492 0L1078.084507 450.704225a32.901408 32.901408 0 0 1-45.070422 47.774648L585.915493 82.028169a61.295775 61.295775 0 0 0-83.830986 0l-450.704225 419.605634a32.450704 32.450704 0 0 1-18.478874 9.014084z" fill="#515151" ></path>' +
    '' +
    '<path d="M796.394366 1024h-157.295774v-318.647887a94.197183 94.197183 0 1 0-188.845071 0v318.647887H293.408451a126.647887 126.647887 0 0 1-126.647888-126.197183v-434.478873a32.901408 32.901408 0 0 1 65.802817 0v434.028169a60.84507 60.84507 0 0 0 60.845071 60.84507h90.140845v-252.84507a160 160 0 0 1 320 0v252.84507h90.140845A60.84507 60.84507 0 0 0 856.338028 897.802817v-434.478873a32.901408 32.901408 0 0 1 65.802817 0v434.028169a126.647887 126.647887 0 0 1-125.746479 126.647887z" fill="#515151" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan2" viewBox="0 0 1028 1024">' +
    '' +
    '<path d="M476.978805 476.978805H184.971098A185.464355 185.464355 0 0 1 0 292.007707V184.971098A185.464355 185.464355 0 0 1 184.971098 0h107.036609a185.464355 185.464355 0 0 1 184.971098 184.971098zM184.971098 72.015414a113.44894 113.44894 0 0 0-112.955684 112.955684v107.036609a113.44894 113.44894 0 0 0 112.955684 112.955684h219.992293V184.971098a113.44894 113.44894 0 0 0-112.955684-112.955684zM843.468208 476.978805h-291.514451V184.971098A185.464355 185.464355 0 0 1 736.924855 0h106.543353a184.971098 184.971098 0 0 1 184.971098 184.971098v107.036609a184.971098 184.971098 0 0 1-184.971098 184.971098z m-219.992293-72.015414h219.992293a113.44894 113.44894 0 0 0 113.44894-112.955684V184.971098a113.44894 113.44894 0 0 0-113.44894-112.955684h-106.543353a113.44894 113.44894 0 0 0-112.955684 112.955684zM843.468208 1024h-106.543353A185.464355 185.464355 0 0 1 551.953757 838.535645v-291.021194h291.514451a184.971098 184.971098 0 0 1 184.971098 184.971098V838.535645a184.971098 184.971098 0 0 1-184.971098 184.971099z m-219.992293-404.963391V838.535645a113.44894 113.44894 0 0 0 112.955684 112.955684h107.036609A112.955684 112.955684 0 0 0 956.917148 838.535645v-106.050096a113.44894 113.44894 0 0 0-112.955684-112.955684zM292.007707 1024H184.971098A185.464355 185.464355 0 0 1 0 838.535645v-106.050096a185.464355 185.464355 0 0 1 184.971098-184.971098h292.007707V838.535645a185.464355 185.464355 0 0 1-184.971098 185.464355z m-107.036609-404.963391a113.44894 113.44894 0 0 0-112.955684 112.955684V838.535645a113.44894 113.44894 0 0 0 112.955684 112.955684h107.036609A113.44894 113.44894 0 0 0 404.963391 838.535645v-219.499036z" fill="#515151" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan3" viewBox="0 0 1028 1024">' +
    '' +
    '<path d="M184.971098 36.007707h107.036609a147.976879 147.976879 0 0 1 147.976879 147.976879v256.986512H184.971098a147.976879 147.976879 0 0 1-147.976878-147.976878V184.971098a147.976879 147.976879 0 0 1 147.976878-147.976878z" fill="#727171" ></path>' +
    '' +
    '<path d="M476.978805 476.978805H184.971098A184.971098 184.971098 0 0 1 0 292.007707V184.971098A185.464355 185.464355 0 0 1 184.971098 0h107.036609a185.464355 185.464355 0 0 1 184.971098 184.971098zM184.971098 72.015414a113.44894 113.44894 0 0 0-112.955684 112.955684v107.036609a113.44894 113.44894 0 0 0 112.955684 112.955684h219.992293V184.971098a113.44894 113.44894 0 0 0-112.955684-112.955684zM736.924855 36.007707h106.543353a147.976879 147.976879 0 0 1 147.976879 147.976879v108.023121a147.976879 147.976879 0 0 1-147.976879 147.976879h-255.506744V184.971098A147.976879 147.976879 0 0 1 736.924855 36.007707z" fill="#727171" ></path>' +
    '' +
    '<path d="M843.468208 476.978805h-291.514451V184.971098A185.464355 185.464355 0 0 1 736.924855 0h106.543353a184.971098 184.971098 0 0 1 184.971098 184.971098v107.036609a184.971098 184.971098 0 0 1-184.971098 184.971098z m-219.992293-72.015414h219.992293a113.44894 113.44894 0 0 0 113.44894-112.955684V184.971098a113.44894 113.44894 0 0 0-113.44894-112.955684h-106.543353a113.44894 113.44894 0 0 0-112.955684 112.955684zM843.468208 986.512524h-106.543353a147.976879 147.976879 0 0 1-147.976878-147.976879v-255.013487h254.520231a147.976879 147.976879 0 0 1 147.976879 147.976879V838.535645a147.976879 147.976879 0 0 1-147.976879 147.976879z" fill="#727171" ></path>' +
    '' +
    '<path d="M843.468208 1024h-106.543353A185.464355 185.464355 0 0 1 551.953757 838.535645v-291.021194h291.514451a184.971098 184.971098 0 0 1 184.971098 184.971098V838.535645a184.971098 184.971098 0 0 1-184.971098 184.971099z m-219.992293-404.963391V838.535645a113.44894 113.44894 0 0 0 112.955684 112.955684h107.036609A112.955684 112.955684 0 0 0 956.917148 838.535645v-106.050096a113.44894 113.44894 0 0 0-112.955684-112.955684zM184.971098 583.522158h256V838.535645a147.976879 147.976879 0 0 1-147.976878 147.976879H184.971098a147.976879 147.976879 0 0 1-147.976878-147.976879v-106.050096a147.976879 147.976879 0 0 1 147.976878-148.963391z" fill="#727171" ></path>' +
    '' +
    '<path d="M292.007707 1024H184.971098A185.464355 185.464355 0 0 1 0 838.535645v-106.050096a185.464355 185.464355 0 0 1 184.971098-184.971098h292.007707V838.535645a185.464355 185.464355 0 0 1-184.971098 185.464355z m-107.036609-404.963391a113.44894 113.44894 0 0 0-112.955684 112.955684V838.535645a113.44894 113.44894 0 0 0 112.955684 112.955684h107.036609A113.44894 113.44894 0 0 0 404.963391 838.535645v-219.499036z" fill="#727171" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan4" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.082255 343.781264m-310.275212 0a310.275213 310.275213 0 1 0 620.550425 0 310.275213 310.275213 0 1 0-620.550425 0Z" fill="#727171" ></path>' +
    '' +
    '<path d="M511.082255 688.480502a343.781264 343.781264 0 1 1 343.781264-343.781264A344.240251 344.240251 0 0 1 511.082255 688.480502z m0-621.009413a275.392201 275.392201 0 1 0 275.392201 275.392201 275.392201 275.392201 0 0 0-275.392201-275.851188z" fill="#727171" ></path>' +
    '' +
    '<path d="M69.077773 1024H65.864864a33.506051 33.506051 0 0 1-30.293142-36.259973 481.936351 481.936351 0 0 1 298.800538-410.334379 33.506051 33.506051 0 0 1 27.080233 61.045271 413.088301 413.088301 0 0 0-259.327656 355.255939 33.506051 33.506051 0 0 1-33.047064 30.293142zM953.545725 1024a33.506051 33.506051 0 0 1-33.047064-30.293142 413.088301 413.088301 0 0 0-156.055581-288.243837 33.506051 33.506051 0 0 1 45.8987-50.029583 472.756611 472.756611 0 0 1 178.086957 332.306589 33.506051 33.506051 0 0 1-30.293142 36.259973z" fill="#727171" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan5" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.082255 688.480502a343.781264 343.781264 0 1 1 343.781264-343.781264A344.240251 344.240251 0 0 1 511.082255 688.480502z m0-621.009413a275.392201 275.392201 0 1 0 275.392201 275.392201 275.392201 275.392201 0 0 0-275.392201-275.851188z" fill="#515151" ></path>' +
    '' +
    '<path d="M69.077773 1024H65.864864a33.506051 33.506051 0 0 1-30.293142-36.259973 481.936351 481.936351 0 0 1 298.800538-410.334379 33.506051 33.506051 0 0 1 27.080233 61.045271 413.088301 413.088301 0 0 0-259.327656 355.255939 33.506051 33.506051 0 0 1-33.047064 30.293142zM953.545725 1024a33.506051 33.506051 0 0 1-33.047064-30.293142 413.088301 413.088301 0 0 0-156.055581-288.243837 33.506051 33.506051 0 1 1 45.8987-50.029583 472.756611 472.756611 0 0 1 178.086957 332.306589 33.506051 33.506051 0 0 1-30.293142 36.259973z" fill="#515151" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan6" viewBox="0 0 1187 1024">' +
    '' +
    '<path d="M406.736182 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z" fill="#515151" ></path>' +
    '' +
    '<path d="M1015.373632 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z" fill="#515151" ></path>' +
    '' +
    '<path d="M620.370371 811.832407H404.291855a160.836724 160.836724 0 0 1-141.770973-146.659626c0-2.933193-48.886542-345.627853-64.530235-491.309749a132.971395 132.971395 0 0 0-38.620369-91.417834 48.886542 48.886542 0 0 0-28.84306-9.777309H36.176192A35.687176 35.687176 0 1 1 36.176192 0.315807h86.040314a116.34997 116.34997 0 0 1 79.685064 23.954406 195.546169 195.546169 0 0 1 66.485697 140.304376c17.599155 146.659626 64.04137 488.865422 64.530236 488.865421S342.694811 733.61394 408.691643 738.991459c74.307544 4.399789 677.567474 0 684.411591 0a34.22058 34.22058 0 0 1 35.687175 35.198311 35.687176 35.687176 0 0 1-35.19831 35.687175c-17.599155 0-275.720098 1.955462-473.221728 1.955462z" fill="#515151" ></path>' +
    '' +
    '<path d="M434.601511 635.840855a35.687176 35.687176 0 0 1 0-71.374351c3.422058 0 349.049911-7.332981 484.465633-16.132559 105.594931-6.844116 121.72749-53.286331 122.216355-55.241793S1097.014157 278.480232 1112.65785 195.861976a65.996832 65.996832 0 0 0-5.377519-54.752928 52.797466 52.797466 0 0 0-39.109234-9.288443H368.604679a35.687176 35.687176 0 1 1 0-71.374351h691.255706a120.260894 120.260894 0 0 1 97.773084 30.309656 126.616144 126.616144 0 0 1 24.443271 117.816567c-16.132559 83.595987-70.885486 293.319253-73.329813 303.096561s-27.376464 97.773084-186.746591 108.039258c-136.393453 8.799578-483.976767 16.132559-488.865422 16.132559z" fill="#515151" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan7" viewBox="0 0 1187 1024">' +
    '' +
    '<path d="M406.736182 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z" fill="#727171" ></path>' +
    '' +
    '<path d="M1015.373632 946.759263m-77.240737 0a77.240737 77.240737 0 1 0 154.481473 0 77.240737 77.240737 0 1 0-154.481473 0Z" fill="#727171" ></path>' +
    '' +
    '<path d="M620.370371 811.832407H404.291855a160.836724 160.836724 0 0 1-141.770973-146.659626c0-2.933193-48.886542-345.627853-64.530235-491.309749a132.971395 132.971395 0 0 0-38.620369-91.417834 48.886542 48.886542 0 0 0-28.84306-9.777309H36.176192A35.687176 35.687176 0 1 1 36.176192 0.315807h86.040314a116.34997 116.34997 0 0 1 79.685064 23.954406 195.546169 195.546169 0 0 1 66.485697 140.304376c17.599155 146.659626 64.04137 488.865422 64.530236 488.865421S342.694811 733.61394 408.691643 738.991459c74.307544 4.399789 677.567474 0 684.411591 0a34.709445 34.709445 0 0 1 35.687175 35.198311 35.687176 35.687176 0 0 1-35.19831 35.687175c-17.599155 0-275.720098 1.955462-473.221728 1.955462z" fill="#727171" ></path>' +
    '' +
    '<path d="M289.897346 602.109141S782.673691 594.77616 920.53374 586.954313 1075.992944 504.824922 1075.992944 504.824922s56.708389-217.545113 72.840948-301.1411C1171.321701 80.489736 1062.304712 98.088891 1062.304712 98.088891H227.811437z" fill="#727171" ></path>' +
    '' +
    '<path d="M258.609959 635.840855L187.724473 62.401716h872.135912a120.749759 120.749759 0 0 1 97.773084 30.309656 126.616144 126.616144 0 0 1 24.443271 117.816566c-16.132559 83.595987-70.885486 293.319253-73.329813 303.096562s-27.376464 97.773084-186.746591 108.039258c-136.882318 8.799578-612.059508 15.643693-632.10299 16.132559z m9.777308-504.509115l53.286331 432.157033c111.461316 0 482.021306-7.821847 596.90468-15.154828 105.594931-6.844116 121.72749-53.286331 122.216356-55.241793S1097.014157 278.480232 1112.65785 195.861976a65.996832 65.996832 0 0 0-5.377519-54.752928 52.3086 52.3086 0 0 0-39.109234-9.288443H267.898402z" fill="#727171" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-ziyuan8" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M402.853151 687.701518a343.850759 343.850759 0 1 1 343.850759-343.850759 344.295011 344.295011 0 0 1-343.850759 343.850759z m0-621.952277A277.213015 277.213015 0 1 0 680.954669 343.850759 277.213015 277.213015 0 0 0 402.853151 66.637744zM931.512587 1024a33.318872 33.318872 0 0 1-25.766595-12.439046l-253.667679-310.976138a33.318872 33.318872 0 1 1 51.533189-44.425163l253.667679 310.976139a33.318872 33.318872 0 0 1-25.766594 54.64295z" fill="#515151" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)