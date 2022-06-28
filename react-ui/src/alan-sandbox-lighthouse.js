export default {
  "lighthouseVersion": "9.4.0",
  "requestedUrl": "http://alan-sandbox.herokuapp.com/",
  "finalUrl": "http://alan-sandbox.herokuapp.com/",
  "fetchTime": "2022-06-08T19:02:05.503Z",
  "gatherMode": "navigation",
  "runWarnings": [],
  "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
  "environment": {
    "networkUserAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "hostUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
    "benchmarkIndex": 1700,
    "credits": {
      "axe-core": "4.3.5"
    }
  },
  "audits": {
    "is-on-https": {
      "id": "is-on-https",
      "title": "Does not use HTTPS",
      "description": "All sites should be protected with HTTPS, even ones that don't handle sensitive data. This includes avoiding [mixed content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content), where some resources are loaded over HTTP despite the initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively listening in on the communications between your app and your users, and is a prerequisite for HTTP/2 and many new web platform APIs. [Learn more](https://web.dev/is-on-https/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "21 insecure requests found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "Insecure URL"
          },
          {
            "key": "resolution",
            "itemType": "text",
            "text": "Request Resolution"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/css/ed547189269bee504cfb.css",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/main-1684f93a95aaf8cda693.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/webpack-eb080e3f091731f228fb.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/06e761b829e8d85b17f0a798a20c84d88b84d64f.c1cf3003fbb503ebd62b.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/025d993ffb707cb2ecdbca0e3694e23204337195.eb1ffa06ee9961509b5c.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/_app-51766c705f0f5fd8efef.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/index-27a14f9bd3a023a1fee4.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/icons/carrot.svg",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/images/cook.png",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_buildManifest.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_ssgManifest.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/favicon.ico",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/api/auth/mutations/login",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/api/users/queries/getCurrentUser",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/recipes-a5a93f476b545bedabae.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/about-0627e69f27f73a0dc192.js",
            "resolution": "Allowed"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/login-cd16701a794f686b3e41.js",
            "resolution": "Allowed"
          }
        ]
      }
    },
    "service-worker": {
      "id": "service-worker",
      "title": "Does not register a service worker that controls page and `start_url`",
      "description": "The service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. [Learn more](https://web.dev/service-worker/).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "viewport": {
      "id": "viewport",
      "title": "Has a `<meta name=\"viewport\">` tag with `width` or `initial-scale`",
      "description": "A `<meta name=\"viewport\">` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away). [Learn more](https://web.dev/viewport/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://web.dev/first-contentful-paint/).",
      "score": 0.81,
      "scoreDisplayMode": "numeric",
      "numericValue": 2089.7960249999996,
      "numericUnit": "millisecond",
      "displayValue": "2.1 s"
    },
    "largest-contentful-paint": {
      "id": "largest-contentful-paint",
      "title": "Largest Contentful Paint",
      "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more](https://web.dev/lighthouse-largest-contentful-paint/)",
      "score": 0.81,
      "scoreDisplayMode": "numeric",
      "numericValue": 2865.9491249999996,
      "numericUnit": "millisecond",
      "displayValue": "2.9 s"
    },
    "first-meaningful-paint": {
      "id": "first-meaningful-paint",
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://web.dev/first-meaningful-paint/).",
      "score": 0.94,
      "scoreDisplayMode": "numeric",
      "numericValue": 2089.7960249999996,
      "numericUnit": "millisecond",
      "displayValue": "2.1 s"
    },
    "speed-index": {
      "id": "speed-index",
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://web.dev/speed-index/).",
      "score": 0.99,
      "scoreDisplayMode": "numeric",
      "numericValue": 2089.7960249999996,
      "numericUnit": "millisecond",
      "displayValue": "2.1 s"
    },
    "screenshot-thumbnails": {
      "id": "screenshot-thumbnails",
      "title": "Screenshot Thumbnails",
      "description": "This is what the load of your site looked like.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "filmstrip",
        "scale": 3000,
        "items": [
          {
            "timing": 300,
            "timestamp": 9128910543201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 600,
            "timestamp": 9128910843201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 900,
            "timestamp": 9128911143201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1200,
            "timestamp": 9128911443201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1500,
            "timestamp": 9128911743201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 1800,
            "timestamp": 9128912043201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2100,
            "timestamp": 9128912343201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2400,
            "timestamp": 9128912643201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 2700,
            "timestamp": 9128912943201,
            "data": "data:image/jpeg;base64,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"
          },
          {
            "timing": 3000,
            "timestamp": 9128913243201,
            "data": "data:image/jpeg;base64,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"
          }
        ]
      }
    },
    "final-screenshot": {
      "id": "final-screenshot",
      "title": "Final Screenshot",
      "description": "The last screenshot captured of the pageload.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "screenshot",
        "timing": 877,
        "timestamp": 9128911120249,
        "data": "data:image/jpeg;base64,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"
      }
    },
    "total-blocking-time": {
      "id": "total-blocking-time",
      "title": "Total Blocking Time",
      "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more](https://web.dev/lighthouse-total-blocking-time/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 26,
      "numericUnit": "millisecond",
      "displayValue": "30 ms"
    },
    "max-potential-fid": {
      "id": "max-potential-fid",
      "title": "Max Potential First Input Delay",
      "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more](https://web.dev/lighthouse-max-potential-fid/).",
      "score": 0.96,
      "scoreDisplayMode": "numeric",
      "numericValue": 102,
      "numericUnit": "millisecond",
      "displayValue": "100 ms"
    },
    "cumulative-layout-shift": {
      "id": "cumulative-layout-shift",
      "title": "Cumulative Layout Shift",
      "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more](https://web.dev/cls/).",
      "score": 0.81,
      "scoreDisplayMode": "numeric",
      "numericValue": 0.13027479383680557,
      "numericUnit": "unitless",
      "displayValue": "0.13",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "cumulativeLayoutShiftMainFrame": 0.13027479383680557,
            "totalCumulativeLayoutShift": 0.13027479383680557
          }
        ]
      }
    },
    "errors-in-console": {
      "id": "errors-in-console",
      "title": "No browser errors logged to the console",
      "description": "Errors logged to the console indicate unresolved problems. They can come from network request failures and other browser concerns. [Learn more](https://web.dev/errors-in-console/)",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "server-response-time": {
      "id": "server-response-time",
      "title": "Initial server response time was short",
      "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more](https://web.dev/time-to-first-byte/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "numericValue": 35.156,
      "numericUnit": "millisecond",
      "displayValue": "Root document took 40 ms",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "responseTime",
            "valueType": "timespanMs",
            "label": "Time Spent"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/",
            "responseTime": 35.156
          }
        ],
        "overallSavingsMs": -64.844
      }
    },
    "interactive": {
      "id": "interactive",
      "title": "Time to Interactive",
      "description": "Time to interactive is the amount of time it takes for the page to become fully interactive. [Learn more](https://web.dev/interactive/).",
      "score": 0.98,
      "scoreDisplayMode": "numeric",
      "numericValue": 2471.296025,
      "numericUnit": "millisecond",
      "displayValue": "2.5 s"
    },
    "user-timings": {
      "id": "user-timings",
      "title": "User Timing marks and measures",
      "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more](https://web.dev/user-timings/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "critical-request-chains": {
      "id": "critical-request-chains",
      "title": "Avoid chaining critical requests",
      "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn more](https://web.dev/critical-request-chains/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "displayValue": "",
      "details": {
        "type": "criticalrequestchain",
        "chains": {
          "8F725C50BD2C9A7767063A138477E034": {
            "request": {
              "url": "http://alan-sandbox.herokuapp.com/",
              "startTime": 9128910.245089,
              "endTime": 9128910.282894,
              "responseReceivedTime": 9128910.280546,
              "transferSize": 1807
            }
          }
        },
        "longestChain": {
          "duration": 37.80500032007694,
          "length": 1,
          "transferSize": 1807
        }
      }
    },
    "redirects": {
      "id": "redirects",
      "title": "Avoid multiple page redirects",
      "description": "Redirects introduce additional delays before the page can be loaded. [Learn more](https://web.dev/redirects/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "installable-manifest": {
      "id": "installable-manifest",
      "title": "Web app manifest or service worker do not meet the installability requirements",
      "description": "Service worker is the technology that enables your app to use many Progressive Web App features, such as offline, add to homescreen, and push notifications. With proper service worker and manifest implementations, browsers can proactively prompt users to add your app to their homescreen, which can lead to higher engagement. [Learn more](https://web.dev/installable-manifest/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "numericValue": 1,
      "numericUnit": "element",
      "displayValue": "1 reason",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "reason",
            "itemType": "text",
            "text": "Failure reason"
          }
        ],
        "items": [
          {
            "reason": "No manifest was fetched"
          }
        ],
        "debugData": {
          "type": "debugdata",
          "manifestUrl": null
        }
      }
    },
    "apple-touch-icon": {
      "id": "apple-touch-icon",
      "title": "Does not provide a valid `apple-touch-icon`",
      "description": "For ideal appearance on iOS when users add a progressive web app to the home screen, define an `apple-touch-icon`. It must point to a non-transparent 192px (or 180px) square PNG. [Learn More](https://web.dev/apple-touch-icon/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "warnings": []
    },
    "splash-screen": {
      "id": "splash-screen",
      "title": "Is not configured for a custom splash screen",
      "description": "A themed splash screen ensures a high-quality experience when users launch your app from their homescreens. [Learn more](https://web.dev/splash-screen/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched"
            ],
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "themed-omnibox": {
      "id": "themed-omnibox",
      "title": "Does not set a theme color for the address bar.",
      "description": "The browser address bar can be themed to match your site. [Learn more](https://web.dev/themed-omnibox/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "Failures: No manifest was fetched,\nNo `<meta name=\"theme-color\">` tag found.",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "failures": [
              "No manifest was fetched",
              "No `<meta name=\"theme-color\">` tag found"
            ],
            "themeColor": null,
            "isParseFailure": true,
            "parseFailureReason": "No manifest was fetched"
          }
        ]
      }
    },
    "maskable-icon": {
      "id": "maskable-icon",
      "title": "Manifest doesn't have a maskable icon",
      "description": "A maskable icon ensures that the image fills the entire shape without being letterboxed when installing the app on a device. [Learn more](https://web.dev/maskable-icon-audit/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "explanation": "No manifest was fetched"
    },
    "content-width": {
      "id": "content-width",
      "title": "Content is sized correctly for the viewport",
      "description": "If the width of your app's content doesn't match the width of the viewport, your app might not be optimized for mobile screens. [Learn more](https://web.dev/content-width/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "image-aspect-ratio": {
      "id": "image-aspect-ratio",
      "title": "Displays images with correct aspect ratio",
      "description": "Image display dimensions should match natural aspect ratio. [Learn more](https://web.dev/image-aspect-ratio/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "image-size-responsive": {
      "id": "image-size-responsive",
      "title": "Serves images with appropriate resolution",
      "description": "Image natural dimensions should be proportional to the display size and the pixel ratio to maximize image clarity. [Learn more](https://web.dev/serve-responsive-images/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "preload-fonts": {
      "id": "preload-fonts",
      "title": "Fonts with `font-display: optional` are preloaded",
      "description": "Preload `optional` fonts so first-time visitors may use them. [Learn more](https://web.dev/preload-optional-fonts/)",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "deprecations": {
      "id": "deprecations",
      "title": "Avoids deprecated APIs",
      "description": "Deprecated APIs will eventually be removed from the browser. [Learn more](https://web.dev/deprecations/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "mainthread-work-breakdown": {
      "id": "mainthread-work-breakdown",
      "title": "Minimizes main-thread work",
      "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/mainthread-work-breakdown/)",
      "score": 0.98,
      "scoreDisplayMode": "numeric",
      "numericValue": 1316.1280000000008,
      "numericUnit": "millisecond",
      "displayValue": "1.3 s",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "groupLabel",
            "itemType": "text",
            "text": "Category"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "group": "scriptEvaluation",
            "groupLabel": "Script Evaluation",
            "duration": 536.8560000000004
          },
          {
            "group": "styleLayout",
            "groupLabel": "Style & Layout",
            "duration": 423.5200000000001
          },
          {
            "group": "other",
            "groupLabel": "Other",
            "duration": 206.7360000000004
          },
          {
            "group": "scriptParseCompile",
            "groupLabel": "Script Parsing & Compilation",
            "duration": 92.39200000000001
          },
          {
            "group": "parseHTML",
            "groupLabel": "Parse HTML & CSS",
            "duration": 33.67999999999999
          },
          {
            "group": "paintCompositeRender",
            "groupLabel": "Rendering",
            "duration": 22.944
          }
        ]
      }
    },
    "bootup-time": {
      "id": "bootup-time",
      "title": "JavaScript execution time",
      "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn more](https://web.dev/bootup-time/).",
      "score": 0.99,
      "scoreDisplayMode": "numeric",
      "numericValue": 535.5240000000001,
      "numericUnit": "millisecond",
      "displayValue": "0.5 s",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "total",
            "granularity": 1,
            "itemType": "ms",
            "text": "Total CPU Time"
          },
          {
            "key": "scripting",
            "granularity": 1,
            "itemType": "ms",
            "text": "Script Evaluation"
          },
          {
            "key": "scriptParseCompile",
            "granularity": 1,
            "itemType": "ms",
            "text": "Script Parse"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/",
            "total": 827.7840000000002,
            "scripting": 226.81200000000013,
            "scriptParseCompile": 69.256
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js",
            "total": 135.67200000000003,
            "scripting": 124.69200000000002,
            "scriptParseCompile": 5.58
          },
          {
            "url": "Unattributable",
            "total": 132.46399999999994,
            "scripting": 13.155999999999999,
            "scriptParseCompile": 0.664
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js",
            "total": 101.972,
            "scripting": 93.47599999999998,
            "scriptParseCompile": 1.888
          }
        ],
        "summary": {
          "wastedMs": 535.5240000000001
        }
      }
    },
    "uses-rel-preload": {
      "id": "uses-rel-preload",
      "title": "Preload key requests",
      "description": "Consider using `<link rel=preload>` to prioritize fetching resources that are currently requested later in page load. [Learn more](https://web.dev/uses-rel-preload/).",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "uses-rel-preconnect": {
      "id": "uses-rel-preconnect",
      "title": "Preconnect to required origins",
      "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn more](https://web.dev/uses-rel-preconnect/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "font-display": {
      "id": "font-display",
      "title": "All text remains visible during webfont loads",
      "description": "Leverage the font-display CSS feature to ensure text is user-visible while webfonts are loading. [Learn more](https://web.dev/font-display/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "warnings": [],
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "diagnostics": {
      "id": "diagnostics",
      "title": "Diagnostics",
      "description": "Collection of useful page vitals.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "numRequests": 23,
            "numScripts": 11,
            "numStylesheets": 1,
            "numFonts": 0,
            "numTasks": 357,
            "numTasksOver10ms": 5,
            "numTasksOver25ms": 3,
            "numTasksOver50ms": 2,
            "numTasksOver100ms": 1,
            "numTasksOver500ms": 0,
            "rtt": 0.036449999999999996,
            "throughput": 3118931.5893616164,
            "maxRtt": 0.036449999999999996,
            "maxServerLatency": 35.32655,
            "totalByteWeight": 196020,
            "totalTaskTime": 329.0319999999995,
            "mainDocumentTransferSize": 1807
          }
        ]
      }
    },
    "network-requests": {
      "id": "network-requests",
      "title": "Network Requests",
      "description": "Lists the network requests that were made during page load.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "protocol",
            "itemType": "text",
            "text": "Protocol"
          },
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "endTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "End Time"
          },
          {
            "key": "transferSize",
            "itemType": "bytes",
            "displayUnit": "kb",
            "granularity": 1,
            "text": "Transfer Size"
          },
          {
            "key": "resourceSize",
            "itemType": "bytes",
            "displayUnit": "kb",
            "granularity": 1,
            "text": "Resource Size"
          },
          {
            "key": "statusCode",
            "itemType": "text",
            "text": "Status Code"
          },
          {
            "key": "mimeType",
            "itemType": "text",
            "text": "MIME Type"
          },
          {
            "key": "resourceType",
            "itemType": "text",
            "text": "Resource Type"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/",
            "protocol": "http/1.1",
            "startTime": 0,
            "endTime": 37.80500032007694,
            "finished": true,
            "transferSize": 1807,
            "resourceSize": 4526,
            "statusCode": 200,
            "mimeType": "text/html",
            "resourceType": "Document"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/css/ed547189269bee504cfb.css",
            "protocol": "http/1.1",
            "startTime": 51.60599946975708,
            "endTime": 88.01599964499474,
            "finished": true,
            "transferSize": 3067,
            "resourceSize": 9140,
            "statusCode": 200,
            "mimeType": "text/css",
            "resourceType": "Stylesheet"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/main-1684f93a95aaf8cda693.js",
            "protocol": "http/1.1",
            "startTime": 53.13600040972233,
            "endTime": 86.45500056445599,
            "finished": true,
            "transferSize": 7054,
            "resourceSize": 18925,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/webpack-eb080e3f091731f228fb.js",
            "protocol": "http/1.1",
            "startTime": 54.704999551177025,
            "endTime": 91.38399921357632,
            "finished": true,
            "transferSize": 1155,
            "resourceSize": 1539,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js",
            "protocol": "http/1.1",
            "startTime": 55.05100078880787,
            "endTime": 156.35200031101704,
            "finished": true,
            "transferSize": 44351,
            "resourceSize": 141286,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js",
            "protocol": "http/1.1",
            "startTime": 55.831000208854675,
            "endTime": 121.47899903357029,
            "finished": true,
            "transferSize": 13781,
            "resourceSize": 42120,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/06e761b829e8d85b17f0a798a20c84d88b84d64f.c1cf3003fbb503ebd62b.js",
            "protocol": "http/1.1",
            "startTime": 56.58699944615364,
            "endTime": 157.49100036919117,
            "finished": true,
            "transferSize": 60626,
            "resourceSize": 192440,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js",
            "protocol": "http/1.1",
            "startTime": 57.03900009393692,
            "endTime": 132.55799934267998,
            "finished": true,
            "transferSize": 11679,
            "resourceSize": 35970,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/025d993ffb707cb2ecdbca0e3694e23204337195.eb1ffa06ee9961509b5c.js",
            "protocol": "http/1.1",
            "startTime": 57.559000328183174,
            "endTime": 126.45299918949604,
            "finished": true,
            "transferSize": 9493,
            "resourceSize": 52466,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/_app-51766c705f0f5fd8efef.js",
            "protocol": "http/1.1",
            "startTime": 57.99799971282482,
            "endTime": 125.57799927890301,
            "finished": true,
            "transferSize": 2547,
            "resourceSize": 4913,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/index-27a14f9bd3a023a1fee4.js",
            "protocol": "http/1.1",
            "startTime": 58.33099968731403,
            "endTime": 159.26099941134453,
            "finished": true,
            "transferSize": 2792,
            "resourceSize": 5589,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/icons/carrot.svg",
            "protocol": "http/1.1",
            "startTime": 125.77199935913086,
            "endTime": 584.5539998263121,
            "finished": true,
            "transferSize": 1370,
            "resourceSize": 2792,
            "statusCode": 200,
            "mimeType": "image/svg+xml",
            "resourceType": "Image"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/images/cook.png",
            "protocol": "http/1.1",
            "startTime": 126.7280001193285,
            "endTime": 189.6269991993904,
            "finished": true,
            "transferSize": 25051,
            "resourceSize": 24761,
            "statusCode": 200,
            "mimeType": "image/png",
            "resourceType": "Image"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_buildManifest.js",
            "protocol": "http/1.1",
            "startTime": 132.90899991989136,
            "endTime": 590.8809993416071,
            "finished": true,
            "transferSize": 832,
            "resourceSize": 1120,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_ssgManifest.js",
            "protocol": "http/1.1",
            "startTime": 156.62099979817867,
            "endTime": 591.703999787569,
            "finished": true,
            "transferSize": 430,
            "resourceSize": 76,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Script"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/favicon.ico",
            "protocol": "http/1.1",
            "startTime": 238.6109996587038,
            "endTime": 591.9989999383688,
            "finished": true,
            "transferSize": 1874,
            "resourceSize": 5558,
            "statusCode": 200,
            "mimeType": "image/x-icon",
            "resourceType": "Image"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/api/auth/mutations/login",
            "protocol": "http/1.1",
            "startTime": 291.37999936938286,
            "endTime": 598.0079993605614,
            "finished": true,
            "transferSize": 112,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "",
            "resourceType": "Fetch"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/api/users/queries/getCurrentUser",
            "protocol": "http/1.1",
            "startTime": 298.4079997986555,
            "endTime": 598.2249993830919,
            "finished": true,
            "transferSize": 112,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "",
            "resourceType": "Fetch"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/index-27a14f9bd3a023a1fee4.js",
            "protocol": "http/1.1",
            "startTime": 602.7109995484352,
            "endTime": 603.8189996033907,
            "finished": true,
            "transferSize": 0,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Other"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/recipes-a5a93f476b545bedabae.js",
            "protocol": "http/1.1",
            "startTime": 603.0109990388155,
            "endTime": 628.8479994982481,
            "finished": true,
            "transferSize": 3422,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Other"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/about-0627e69f27f73a0dc192.js",
            "protocol": "http/1.1",
            "startTime": 603.6210004240274,
            "endTime": 634.0900007635355,
            "finished": true,
            "transferSize": 2689,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Other"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/login-cd16701a794f686b3e41.js",
            "protocol": "http/1.1",
            "startTime": 605.1819995045662,
            "endTime": 634.3380007892847,
            "finished": true,
            "transferSize": 1505,
            "resourceSize": 0,
            "statusCode": 200,
            "mimeType": "application/javascript",
            "resourceType": "Other"
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/favicon.ico",
            "protocol": "http/1.1",
            "startTime": 610.5370000004768,
            "endTime": 638.1800007075071,
            "finished": true,
            "transferSize": 271,
            "resourceSize": 5558,
            "statusCode": 200,
            "mimeType": "image/x-icon",
            "resourceType": "Other"
          }
        ]
      }
    },
    "network-rtt": {
      "id": "network-rtt",
      "title": "Network Round Trip Times",
      "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more](https://hpbn.co/primer-on-latency-and-bandwidth/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 0.036449999999999996,
      "numericUnit": "millisecond",
      "displayValue": "0 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "origin",
            "itemType": "text",
            "text": "URL"
          },
          {
            "key": "rtt",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "origin": "http://alan-sandbox.herokuapp.com",
            "rtt": 0.036449999999999996
          }
        ]
      }
    },
    "network-server-latency": {
      "id": "network-server-latency",
      "title": "Server Backend Latencies",
      "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 35.32655,
      "numericUnit": "millisecond",
      "displayValue": "40 ms",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "origin",
            "itemType": "text",
            "text": "URL"
          },
          {
            "key": "serverResponseTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Time Spent"
          }
        ],
        "items": [
          {
            "origin": "http://alan-sandbox.herokuapp.com",
            "serverResponseTime": 35.32655
          }
        ]
      }
    },
    "main-thread-tasks": {
      "id": "main-thread-tasks",
      "title": "Tasks",
      "description": "Lists the toplevel main thread tasks that executed during page load.",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "End Time"
          }
        ],
        "items": [
          {
            "duration": 10.351,
            "startTime": 50.967
          },
          {
            "duration": 70.694,
            "startTime": 61.569
          },
          {
            "duration": 107.93,
            "startTime": 137.953
          },
          {
            "duration": 12.975,
            "startTime": 264.566
          },
          {
            "duration": 25.493,
            "startTime": 283.934
          },
          {
            "duration": 5.782,
            "startTime": 315.041
          },
          {
            "duration": 8.961,
            "startTime": 321.089
          },
          {
            "duration": 6.546,
            "startTime": 609.681
          }
        ]
      }
    },
    "metrics": {
      "id": "metrics",
      "title": "Metrics",
      "description": "Collects all available metrics.",
      "score": null,
      "scoreDisplayMode": "informative",
      "numericValue": 2471,
      "numericUnit": "millisecond",
      "details": {
        "type": "debugdata",
        "items": [
          {
            "firstContentfulPaint": 2090,
            "firstMeaningfulPaint": 2090,
            "largestContentfulPaint": 2866,
            "interactive": 2471,
            "speedIndex": 2090,
            "totalBlockingTime": 26,
            "maxPotentialFID": 102,
            "cumulativeLayoutShift": 0.13027479383680557,
            "cumulativeLayoutShiftMainFrame": 0.13027479383680557,
            "totalCumulativeLayoutShift": 0.13027479383680557,
            "observedTimeOrigin": 0,
            "observedTimeOriginTs": 9128910243201,
            "observedNavigationStart": 0,
            "observedNavigationStartTs": 9128910243201,
            "observedFirstPaint": 238,
            "observedFirstPaintTs": 9128910480757,
            "observedFirstContentfulPaint": 238,
            "observedFirstContentfulPaintTs": 9128910480843,
            "observedFirstContentfulPaintAllFrames": 238,
            "observedFirstContentfulPaintAllFramesTs": 9128910480843,
            "observedFirstMeaningfulPaint": 238,
            "observedFirstMeaningfulPaintTs": 9128910480932,
            "observedLargestContentfulPaint": 277,
            "observedLargestContentfulPaintTs": 9128910520542,
            "observedLargestContentfulPaintAllFrames": 277,
            "observedLargestContentfulPaintAllFramesTs": 9128910520542,
            "observedTraceEnd": 2966,
            "observedTraceEndTs": 9128913208951,
            "observedLoad": 609,
            "observedLoadTs": 9128910852526,
            "observedDomContentLoaded": 240,
            "observedDomContentLoadedTs": 9128910483243,
            "observedCumulativeLayoutShift": 0.13027479383680557,
            "observedCumulativeLayoutShiftMainFrame": 0.13027479383680557,
            "observedTotalCumulativeLayoutShift": 0.13027479383680557,
            "observedFirstVisualChange": 276,
            "observedFirstVisualChangeTs": 9128910519201,
            "observedLastVisualChange": 610,
            "observedLastVisualChangeTs": 9128910853201,
            "observedSpeedIndex": 340,
            "observedSpeedIndexTs": 9128910583507
          },
          {
            "lcpInvalidated": false
          }
        ]
      }
    },
    "performance-budget": {
      "id": "performance-budget",
      "title": "Performance budget",
      "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "timing-budget": {
      "id": "timing-budget",
      "title": "Timing budget",
      "description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "resource-summary": {
      "id": "resource-summary",
      "title": "Keep request counts low and transfer sizes small",
      "description": "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more](https://web.dev/use-lighthouse-for-performance-budgets/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "22 requests • 191 KiB",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "label",
            "itemType": "text",
            "text": "Resource Type"
          },
          {
            "key": "requestCount",
            "itemType": "numeric",
            "text": "Requests"
          },
          {
            "key": "transferSize",
            "itemType": "bytes",
            "text": "Transfer Size"
          }
        ],
        "items": [
          {
            "resourceType": "total",
            "label": "Total",
            "requestCount": 22,
            "transferSize": 195749
          },
          {
            "resourceType": "script",
            "label": "Script",
            "requestCount": 11,
            "transferSize": 154740
          },
          {
            "resourceType": "image",
            "label": "Image",
            "requestCount": 3,
            "transferSize": 28295
          },
          {
            "resourceType": "other",
            "label": "Other",
            "requestCount": 6,
            "transferSize": 7840
          },
          {
            "resourceType": "stylesheet",
            "label": "Stylesheet",
            "requestCount": 1,
            "transferSize": 3067
          },
          {
            "resourceType": "document",
            "label": "Document",
            "requestCount": 1,
            "transferSize": 1807
          },
          {
            "resourceType": "media",
            "label": "Media",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "font",
            "label": "Font",
            "requestCount": 0,
            "transferSize": 0
          },
          {
            "resourceType": "third-party",
            "label": "Third-party",
            "requestCount": 0,
            "transferSize": 0
          }
        ]
      }
    },
    "third-party-summary": {
      "id": "third-party-summary",
      "title": "Minimize third-party usage",
      "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn more](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "third-party-facades": {
      "id": "third-party-facades",
      "title": "Lazy load third-party resources with facades",
      "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn more](https://web.dev/third-party-facades/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "largest-contentful-paint-element": {
      "id": "largest-contentful-paint-element",
      "title": "Largest Contentful Paint element",
      "description": "This is the largest contentful element painted within the viewport. [Learn More](https://web.dev/lighthouse-largest-contentful-paint/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "1 element found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-1-IMG",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,MAIN,0,DIV,1,IMG",
              "selector": "div.w-full > main.flex-1 > div.text-center > img.w-full",
              "boundingRect": {
                "top": 258,
                "bottom": 586,
                "left": 16,
                "right": 344,
                "width": 328,
                "height": 328
              },
              "snippet": "<img src=\"/images/cook.png\" alt=\"Woman cooking soup\" class=\"w-full max-w-sm my-0 mx-auto\">",
              "nodeLabel": "Woman cooking soup"
            }
          }
        ]
      }
    },
    "lcp-lazy-loaded": {
      "id": "lcp-lazy-loaded",
      "title": "Largest Contentful Paint image was not lazily loaded",
      "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more](https://web.dev/lcp-lazy-loading/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-1-IMG",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,MAIN,0,DIV,1,IMG",
              "selector": "div.w-full > main.flex-1 > div.text-center > img.w-full",
              "boundingRect": {
                "top": 258,
                "bottom": 586,
                "left": 16,
                "right": 344,
                "width": 328,
                "height": 328
              },
              "snippet": "<img src=\"/images/cook.png\" alt=\"Woman cooking soup\" class=\"w-full max-w-sm my-0 mx-auto\">",
              "nodeLabel": "Woman cooking soup"
            }
          }
        ]
      }
    },
    "layout-shift-elements": {
      "id": "layout-shift-elements",
      "title": "Avoid large layout shifts",
      "description": "These DOM elements contribute most to the CLS of the page.",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "4 elements found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          },
          {
            "key": "score",
            "itemType": "numeric",
            "granularity": 0.001,
            "text": "CLS Contribution"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-2-MAIN",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,MAIN",
              "selector": "body > div#__next > div.w-full > main.flex-1",
              "boundingRect": {
                "top": 234,
                "bottom": 610,
                "left": 16,
                "right": 344,
                "width": 328,
                "height": 376
              },
              "snippet": "<main class=\"flex-1\">",
              "nodeLabel": "Welcome to #recipeoftheday\n\nExplore recipes"
            },
            "score": 0.09029255023771184
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-3-NAV",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,HEADER,2,NAV",
              "selector": "div#__next > div.w-full > header.flex > nav.flex",
              "boundingRect": {
                "top": 144,
                "bottom": 202,
                "left": 17,
                "right": 343,
                "width": 326,
                "height": 58
              },
              "snippet": "<nav class=\"flex items-center p-4 border-b-2 border-gray-300 border-solid\">",
              "nodeLabel": "home\nrecipes\nabout\nlogin"
            },
            "score": 0.021530652254832087
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-4-FOOTER",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,2,FOOTER",
              "selector": "body > div#__next > div.w-full > footer.w-full",
              "boundingRect": {
                "top": 610,
                "bottom": 682,
                "left": 16,
                "right": 344,
                "width": 328,
                "height": 72
              },
              "snippet": "<footer class=\"w-full py-4 text-gray-500 text-sm\">",
              "nodeLabel": "Created by Global App Testing ®\nPrivacy policy\nFAQ"
            },
            "score": 0.013445839952668567
          },
          {
            "node": {
              "type": "node",
              "lhId": "page-5-H1",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,HEADER,1,H1",
              "selector": "div#__next > div.w-full > header.flex > h1.text-center",
              "boundingRect": {
                "top": 116,
                "bottom": 144,
                "left": 102,
                "right": 258,
                "width": 157,
                "height": 28
              },
              "snippet": "<h1 class=\"text-center text-xl font-bold\">",
              "nodeLabel": "#recipeoftheday"
            },
            "score": 0.005005751391593074
          }
        ]
      }
    },
    "long-tasks": {
      "id": "long-tasks",
      "title": "Avoid long main-thread tasks",
      "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn more](https://web.dev/long-tasks-devtools/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "displayValue": "4 long tasks found",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "startTime",
            "itemType": "ms",
            "granularity": 1,
            "text": "Start Time"
          },
          {
            "key": "duration",
            "itemType": "ms",
            "granularity": 1,
            "text": "Duration"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/",
            "duration": 283,
            "startTime": 676.32655
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/",
            "duration": 216,
            "startTime": 959.32655
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js",
            "duration": 102,
            "startTime": 2532.6124
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js",
            "duration": 52,
            "startTime": 1676.63275
          }
        ]
      }
    },
    "no-unload-listeners": {
      "id": "no-unload-listeners",
      "title": "Avoids `unload` event listeners",
      "description": "The `unload` event does not fire reliably and listening for it can prevent browser optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead. [Learn more](https://web.dev/bfcache/#never-use-the-unload-event)",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "non-composited-animations": {
      "id": "non-composited-animations",
      "title": "Avoid non-composited animations",
      "description": "Animations which are not composited can be janky and increase CLS. [Learn more](https://web.dev/non-composited-animations)",
      "score": null,
      "scoreDisplayMode": "notApplicable",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "unsized-images": {
      "id": "unsized-images",
      "title": "Image elements do not have explicit `width` and `height`",
      "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn more](https://web.dev/optimize-cls/#images-without-dimensions)",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "text": ""
          },
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/images/cook.png",
            "node": {
              "type": "node",
              "lhId": "page-1-IMG",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,MAIN,0,DIV,1,IMG",
              "selector": "div.w-full > main.flex-1 > div.text-center > img.w-full",
              "boundingRect": {
                "top": 258,
                "bottom": 586,
                "left": 16,
                "right": 344,
                "width": 328,
                "height": 328
              },
              "snippet": "<img src=\"/images/cook.png\" alt=\"Woman cooking soup\" class=\"w-full max-w-sm my-0 mx-auto\">",
              "nodeLabel": "Woman cooking soup"
            }
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/icons/carrot.svg",
            "node": {
              "type": "node",
              "lhId": "page-0-IMG",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,HEADER,0,A,0,IMG",
              "selector": "div.w-full > header.flex > a > img.mt-4",
              "boundingRect": {
                "top": 16,
                "bottom": 116,
                "left": 130,
                "right": 230,
                "width": 100,
                "height": 100
              },
              "snippet": "<img class=\"mt-4 shake\" src=\"/icons/carrot.svg\" alt=\"carrot\" width=\"100\">",
              "nodeLabel": "carrot"
            }
          }
        ]
      }
    },
    "valid-source-maps": {
      "id": "valid-source-maps",
      "title": "Page has valid source maps",
      "description": "Source maps translate minified code to the original source code. This helps developers debug in production. In addition, Lighthouse is able to provide further insights. Consider deploying source maps to take advantage of these benefits. [Learn more](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "preload-lcp-image": {
      "id": "preload-lcp-image",
      "title": "Preload Largest Contentful Paint image",
      "description": "Preload the image used by the LCP element in order to improve your LCP time. [Learn more](https://web.dev/optimize-lcp/#preload-important-resources).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "node",
            "valueType": "node",
            "label": ""
          },
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "wastedMs",
            "valueType": "timespanMs",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "page-1-IMG",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,1,MAIN,0,DIV,1,IMG",
              "selector": "div.w-full > main.flex-1 > div.text-center > img.w-full",
              "boundingRect": {
                "top": 258,
                "bottom": 586,
                "left": 16,
                "right": 344,
                "width": 328,
                "height": 328
              },
              "snippet": "<img src=\"/images/cook.png\" alt=\"Woman cooking soup\" class=\"w-full max-w-sm my-0 mx-auto\">",
              "nodeLabel": "Woman cooking soup"
            },
            "url": "http://alan-sandbox.herokuapp.com/images/cook.png",
            "wastedMs": 0
          }
        ],
        "overallSavingsMs": 0
      }
    },
    "csp-xss": {
      "id": "csp-xss",
      "title": "Ensure CSP is effective against XSS attacks",
      "description": "A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks. [Learn more](https://web.dev/csp-xss/)",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "description",
            "itemType": "text",
            "subItemsHeading": {
              "key": "description"
            },
            "text": "Description"
          },
          {
            "key": "directive",
            "itemType": "code",
            "subItemsHeading": {
              "key": "directive"
            },
            "text": "Directive"
          },
          {
            "key": "severity",
            "itemType": "text",
            "subItemsHeading": {
              "key": "severity"
            },
            "text": "Severity"
          }
        ],
        "items": [
          {
            "severity": "High",
            "description": "No CSP found in enforcement mode"
          }
        ]
      }
    },
    "full-page-screenshot": {
      "id": "full-page-screenshot",
      "title": "Full-page screenshot",
      "description": "A full-height screenshot of the final rendered page",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "full-page-screenshot",
        "screenshot": {
          "data": "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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",
          "width": 720,
          "height": 1364
        },
        "nodes": {
          "page-0-IMG": {
            "top": 16,
            "bottom": 116,
            "left": 310,
            "right": 410,
            "width": 100,
            "height": 100
          },
          "page-1-IMG": {
            "top": 258,
            "bottom": 642,
            "left": 168,
            "right": 552,
            "width": 384,
            "height": 384
          },
          "page-2-MAIN": {
            "top": 234,
            "bottom": 1312,
            "left": 16,
            "right": 704,
            "width": 688,
            "height": 1078
          },
          "page-3-NAV": {
            "top": 144,
            "bottom": 202,
            "left": 197,
            "right": 523,
            "width": 326,
            "height": 58
          },
          "page-4-FOOTER": {
            "top": 1312,
            "bottom": 1364,
            "left": 16,
            "right": 704,
            "width": 688,
            "height": 52
          },
          "page-5-H1": {
            "top": 116,
            "bottom": 144,
            "left": 282,
            "right": 438,
            "width": 157,
            "height": 28
          },
          "5-0-A": {
            "top": 0,
            "bottom": 116,
            "left": 310,
            "right": 410,
            "width": 100,
            "height": 116
          },
          "5-1-A": {
            "top": 163,
            "bottom": 182,
            "left": 221,
            "right": 277,
            "width": 56,
            "height": 19
          },
          "5-2-A": {
            "top": 163,
            "bottom": 182,
            "left": 293,
            "right": 360,
            "width": 67,
            "height": 19
          },
          "5-3-A": {
            "top": 163,
            "bottom": 182,
            "left": 376,
            "right": 433,
            "width": 57,
            "height": 19
          },
          "5-4-A": {
            "top": 163,
            "bottom": 182,
            "left": 449,
            "right": 499,
            "width": 50,
            "height": 19
          },
          "5-5-A": {
            "top": 635,
            "bottom": 674,
            "left": 283,
            "right": 437,
            "width": 153,
            "height": 39
          },
          "5-6-A": {
            "top": 1330,
            "bottom": 1346,
            "left": 617,
            "right": 704,
            "width": 87,
            "height": 17
          },
          "5-7-A": {
            "top": 1330,
            "bottom": 1346,
            "left": 574,
            "right": 601,
            "width": 27,
            "height": 17
          },
          "5-8-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-9-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-10-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-11-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-12-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-13-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-14-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-15-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-16-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-17-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-18-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-19-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-20-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-21-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-22-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-23-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-24-LINK": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-25-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-26-META": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-27-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-28-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-29-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-30-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-31-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-32-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-33-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-34-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-35-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-36-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-37-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-38-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-39-SCRIPT": {
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "width": 0,
            "height": 0
          },
          "5-40-BODY": {
            "top": 0,
            "bottom": 1364,
            "left": 0,
            "right": 720,
            "width": 720,
            "height": 1364
          },
          "5-41-SPAN": {
            "top": 1330,
            "bottom": 1346,
            "left": 16,
            "right": 218,
            "width": 202,
            "height": 17
          }
        }
      }
    },
    "script-treemap-data": {
      "id": "script-treemap-data",
      "title": "Script Treemap Data",
      "description": "Used for treemap app",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "treemap-data",
        "nodes": [
          {
            "name": "http://alan-sandbox.herokuapp.com/",
            "resourceBytes": 427
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/polyfills-e47f1d36b568911cae68.js",
            "resourceBytes": 87
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/main-1684f93a95aaf8cda693.js",
            "resourceBytes": 18925,
            "unusedBytes": 7465
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/webpack-eb080e3f091731f228fb.js",
            "resourceBytes": 1539,
            "unusedBytes": 288
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js",
            "resourceBytes": 141286,
            "unusedBytes": 46791
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js",
            "resourceBytes": 42120,
            "unusedBytes": 17768
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/06e761b829e8d85b17f0a798a20c84d88b84d64f.c1cf3003fbb503ebd62b.js",
            "resourceBytes": 192440,
            "unusedBytes": 120543
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js",
            "resourceBytes": 35970,
            "unusedBytes": 29903
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/025d993ffb707cb2ecdbca0e3694e23204337195.eb1ffa06ee9961509b5c.js",
            "resourceBytes": 52466,
            "unusedBytes": 28949
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/_app-51766c705f0f5fd8efef.js",
            "resourceBytes": 4913,
            "unusedBytes": 2693
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/index-27a14f9bd3a023a1fee4.js",
            "resourceBytes": 5589,
            "unusedBytes": 4869
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_buildManifest.js",
            "resourceBytes": 1120,
            "unusedBytes": 0
          },
          {
            "name": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_ssgManifest.js",
            "resourceBytes": 76,
            "unusedBytes": 0
          }
        ]
      }
    },
    "pwa-cross-browser": {
      "id": "pwa-cross-browser",
      "title": "Site works cross-browser",
      "description": "To reach the most number of users, sites should work across every major browser. [Learn more](https://web.dev/pwa-cross-browser/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "pwa-page-transitions": {
      "id": "pwa-page-transitions",
      "title": "Page transitions don't feel like they block on the network",
      "description": "Transitions should feel snappy as you tap around, even on a slow network. This experience is key to a user's perception of performance. [Learn more](https://web.dev/pwa-page-transitions/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "pwa-each-page-has-url": {
      "id": "pwa-each-page-has-url",
      "title": "Each page has a URL",
      "description": "Ensure individual pages are deep linkable via URL and that URLs are unique for the purpose of shareability on social media. [Learn more](https://web.dev/pwa-each-page-has-url/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "accesskeys": {
      "id": "accesskeys",
      "title": "`[accesskey]` values are unique",
      "description": "Access keys let users quickly focus a part of the page. For proper navigation, each access key must be unique. [Learn more](https://web.dev/accesskeys/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-allowed-attr": {
      "id": "aria-allowed-attr",
      "title": "`[aria-*]` attributes match their roles",
      "description": "Each ARIA `role` supports a specific subset of `aria-*` attributes. Mismatching these invalidates the `aria-*` attributes. [Learn more](https://web.dev/aria-allowed-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-command-name": {
      "id": "aria-command-name",
      "title": "`button`, `link`, and `menuitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-hidden-body": {
      "id": "aria-hidden-body",
      "title": "`[aria-hidden=\"true\"]` is not present on the document `<body>`",
      "description": "Assistive technologies, like screen readers, work inconsistently when `aria-hidden=\"true\"` is set on the document `<body>`. [Learn more](https://web.dev/aria-hidden-body/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "aria-hidden-focus": {
      "id": "aria-hidden-focus",
      "title": "`[aria-hidden=\"true\"]` elements do not contain focusable descendents",
      "description": "Focusable descendents within an `[aria-hidden=\"true\"]` element prevent those interactive elements from being available to users of assistive technologies like screen readers. [Learn more](https://web.dev/aria-hidden-focus/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-input-field-name": {
      "id": "aria-input-field-name",
      "title": "ARIA input fields have accessible names",
      "description": "When an input field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-meter-name": {
      "id": "aria-meter-name",
      "title": "ARIA `meter` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-progressbar-name": {
      "id": "aria-progressbar-name",
      "title": "ARIA `progressbar` elements have accessible names",
      "description": "When a `progressbar` element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-attr": {
      "id": "aria-required-attr",
      "title": "`[role]`s have all required `[aria-*]` attributes",
      "description": "Some ARIA roles have required attributes that describe the state of the element to screen readers. [Learn more](https://web.dev/aria-required-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-children": {
      "id": "aria-required-children",
      "title": "Elements with an ARIA `[role]` that require children to contain a specific `[role]` have all required children.",
      "description": "Some ARIA parent roles must contain specific child roles to perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-children/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-required-parent": {
      "id": "aria-required-parent",
      "title": "`[role]`s are contained by their required parent element",
      "description": "Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions. [Learn more](https://web.dev/aria-required-parent/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-roles": {
      "id": "aria-roles",
      "title": "`[role]` values are valid",
      "description": "ARIA roles must have valid values in order to perform their intended accessibility functions. [Learn more](https://web.dev/aria-roles/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-toggle-field-name": {
      "id": "aria-toggle-field-name",
      "title": "ARIA toggle fields have accessible names",
      "description": "When a toggle field doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-tooltip-name": {
      "id": "aria-tooltip-name",
      "title": "ARIA `tooltip` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-treeitem-name": {
      "id": "aria-treeitem-name",
      "title": "ARIA `treeitem` elements have accessible names",
      "description": "When an element doesn't have an accessible name, screen readers announce it with a generic name, making it unusable for users who rely on screen readers. [Learn more](https://web.dev/aria-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr-value": {
      "id": "aria-valid-attr-value",
      "title": "`[aria-*]` attributes have valid values",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid values. [Learn more](https://web.dev/aria-valid-attr-value/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "aria-valid-attr": {
      "id": "aria-valid-attr",
      "title": "`[aria-*]` attributes are valid and not misspelled",
      "description": "Assistive technologies, like screen readers, can't interpret ARIA attributes with invalid names. [Learn more](https://web.dev/aria-valid-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "button-name": {
      "id": "button-name",
      "title": "Buttons have an accessible name",
      "description": "When a button doesn't have an accessible name, screen readers announce it as \"button\", making it unusable for users who rely on screen readers. [Learn more](https://web.dev/button-name/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "bypass": {
      "id": "bypass",
      "title": "The page contains a heading, skip link, or landmark region",
      "description": "Adding ways to bypass repetitive content lets keyboard users navigate the page more efficiently. [Learn more](https://web.dev/bypass/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "color-contrast": {
      "id": "color-contrast",
      "title": "Background and foreground colors do not have a sufficient contrast ratio.",
      "description": "Low-contrast text is difficult or impossible for many users to read. [Learn more](https://web.dev/color-contrast/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "node",
            "itemType": "node",
            "subItemsHeading": {
              "key": "relatedNode",
              "itemType": "node"
            },
            "text": "Failing Elements"
          }
        ],
        "items": [
          {
            "node": {
              "type": "node",
              "lhId": "5-1-A",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,HEADER,2,NAV,0,UL,0,LI,0,A",
              "selector": "nav.flex > ul.flex > li.mx-2 > a.px-2",
              "boundingRect": {
                "top": 163,
                "bottom": 182,
                "left": 41,
                "right": 97,
                "width": 56,
                "height": 19
              },
              "snippet": "<a class=\"px-2 hover:opacity-75 text-orange-600\" href=\"/\">",
              "nodeLabel": "home",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 3.38 (foreground color: #dd6b20, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "5-41-SPAN",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,2,FOOTER,0,SPAN",
              "selector": "div#__next > div.w-full > footer.w-full > span",
              "boundingRect": {
                "top": 628,
                "bottom": 644,
                "left": 16,
                "right": 218,
                "width": 202,
                "height": 17
              },
              "snippet": "<span>",
              "nodeLabel": "Created by Global App Testing ®",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.25 (foreground color: #a0aec0, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "5-6-A",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,2,FOOTER,1,SPAN,0,A",
              "selector": "div.w-full > footer.w-full > span.float-right > a",
              "boundingRect": {
                "top": 628,
                "bottom": 644,
                "left": 257,
                "right": 344,
                "width": 87,
                "height": 17
              },
              "snippet": "<a href=\"/privacy-policy\">",
              "nodeLabel": "Privacy policy",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.25 (foreground color: #a0aec0, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
            }
          },
          {
            "node": {
              "type": "node",
              "lhId": "5-7-A",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,2,FOOTER,2,SPAN,0,A",
              "selector": "div.w-full > footer.w-full > span.float-right > a",
              "boundingRect": {
                "top": 648,
                "bottom": 664,
                "left": 301,
                "right": 328,
                "width": 27,
                "height": 17
              },
              "snippet": "<a href=\"about:blank\">",
              "nodeLabel": "FAQ",
              "explanation": "Fix any of the following:\n  Element has insufficient color contrast of 2.25 (foreground color: #a0aec0, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
            }
          }
        ],
        "debugData": {
          "type": "debugdata",
          "impact": "serious",
          "tags": [
            "cat.color",
            "wcag2aa",
            "wcag143"
          ]
        }
      }
    },
    "definition-list": {
      "id": "definition-list",
      "title": "`<dl>`'s contain only properly-ordered `<dt>` and `<dd>` groups, `<script>`, `<template>` or `<div>` elements.",
      "description": "When definition lists are not properly marked up, screen readers may produce confusing or inaccurate output. [Learn more](https://web.dev/definition-list/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "dlitem": {
      "id": "dlitem",
      "title": "Definition list items are wrapped in `<dl>` elements",
      "description": "Definition list items (`<dt>` and `<dd>`) must be wrapped in a parent `<dl>` element to ensure that screen readers can properly announce them. [Learn more](https://web.dev/dlitem/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "document-title": {
      "id": "document-title",
      "title": "Document has a `<title>` element",
      "description": "The title gives screen reader users an overview of the page, and search engine users rely on it heavily to determine if a page is relevant to their search. [Learn more](https://web.dev/document-title/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "duplicate-id-active": {
      "id": "duplicate-id-active",
      "title": "`[id]` attributes on active, focusable elements are unique",
      "description": "All focusable elements must have a unique `id` to ensure that they're visible to assistive technologies. [Learn more](https://web.dev/duplicate-id-active/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "duplicate-id-aria": {
      "id": "duplicate-id-aria",
      "title": "ARIA IDs are unique",
      "description": "The value of an ARIA ID must be unique to prevent other instances from being overlooked by assistive technologies. [Learn more](https://web.dev/duplicate-id-aria/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "form-field-multiple-labels": {
      "id": "form-field-multiple-labels",
      "title": "No form fields have multiple labels",
      "description": "Form fields with multiple labels can be confusingly announced by assistive technologies like screen readers which use either the first, the last, or all of the labels. [Learn more](https://web.dev/form-field-multiple-labels/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "frame-title": {
      "id": "frame-title",
      "title": "`<frame>` or `<iframe>` elements have a title",
      "description": "Screen reader users rely on frame titles to describe the contents of frames. [Learn more](https://web.dev/frame-title/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "heading-order": {
      "id": "heading-order",
      "title": "Heading elements appear in a sequentially-descending order",
      "description": "Properly ordered headings that do not skip levels convey the semantic structure of the page, making it easier to navigate and understand when using assistive technologies. [Learn more](https://web.dev/heading-order/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "html-has-lang": {
      "id": "html-has-lang",
      "title": "`<html>` element has a `[lang]` attribute",
      "description": "If a page doesn't specify a lang attribute, a screen reader assumes that the page is in the default language that the user chose when setting up the screen reader. If the page isn't actually in the default language, then the screen reader might not announce the page's text correctly. [Learn more](https://web.dev/html-has-lang/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "html-lang-valid": {
      "id": "html-lang-valid",
      "title": "`<html>` element has a valid value for its `[lang]` attribute",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) helps screen readers announce text properly. [Learn more](https://web.dev/html-lang-valid/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "image-alt": {
      "id": "image-alt",
      "title": "Image elements have `[alt]` attributes",
      "description": "Informative elements should aim for short, descriptive alternate text. Decorative elements can be ignored with an empty alt attribute. [Learn more](https://web.dev/image-alt/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "input-image-alt": {
      "id": "input-image-alt",
      "title": "`<input type=\"image\">` elements have `[alt]` text",
      "description": "When an image is being used as an `<input>` button, providing alternative text can help screen reader users understand the purpose of the button. [Learn more](https://web.dev/input-image-alt/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "label": {
      "id": "label",
      "title": "Form elements have associated labels",
      "description": "Labels ensure that form controls are announced properly by assistive technologies, like screen readers. [Learn more](https://web.dev/label/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "link-name": {
      "id": "link-name",
      "title": "Links have a discernible name",
      "description": "Link text (and alternate text for images, when used as links) that is discernible, unique, and focusable improves the navigation experience for screen reader users. [Learn more](https://web.dev/link-name/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "list": {
      "id": "list",
      "title": "Lists contain only `<li>` elements and script supporting elements (`<script>` and `<template>`).",
      "description": "Screen readers have a specific way of announcing lists. Ensuring proper list structure aids screen reader output. [Learn more](https://web.dev/list/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "listitem": {
      "id": "listitem",
      "title": "List items (`<li>`) are contained within `<ul>` or `<ol>` parent elements",
      "description": "Screen readers require list items (`<li>`) to be contained within a parent `<ul>` or `<ol>` to be announced properly. [Learn more](https://web.dev/listitem/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "meta-refresh": {
      "id": "meta-refresh",
      "title": "The document does not use `<meta http-equiv=\"refresh\">`",
      "description": "Users do not expect a page to refresh automatically, and doing so will move focus back to the top of the page. This may create a frustrating or confusing experience. [Learn more](https://web.dev/meta-refresh/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "meta-viewport": {
      "id": "meta-viewport",
      "title": "`[user-scalable=\"no\"]` is not used in the `<meta name=\"viewport\">` element and the `[maximum-scale]` attribute is not less than 5.",
      "description": "Disabling zooming is problematic for users with low vision who rely on screen magnification to properly see the contents of a web page. [Learn more](https://web.dev/meta-viewport/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "object-alt": {
      "id": "object-alt",
      "title": "`<object>` elements have alternate text",
      "description": "Screen readers cannot translate non-text content. Adding alternate text to `<object>` elements helps screen readers convey meaning to users. [Learn more](https://web.dev/object-alt/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "tabindex": {
      "id": "tabindex",
      "title": "No element has a `[tabindex]` value greater than 0",
      "description": "A value greater than 0 implies an explicit navigation ordering. Although technically valid, this often creates frustrating experiences for users who rely on assistive technologies. [Learn more](https://web.dev/tabindex/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "td-headers-attr": {
      "id": "td-headers-attr",
      "title": "Cells in a `<table>` element that use the `[headers]` attribute refer to table cells within the same table.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring `<td>` cells using the `[headers]` attribute only refer to other cells in the same table may improve the experience for screen reader users. [Learn more](https://web.dev/td-headers-attr/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "th-has-data-cells": {
      "id": "th-has-data-cells",
      "title": "`<th>` elements and elements with `[role=\"columnheader\"/\"rowheader\"]` have data cells they describe.",
      "description": "Screen readers have features to make navigating tables easier. Ensuring table headers always refer to some set of cells may improve the experience for screen reader users. [Learn more](https://web.dev/th-has-data-cells/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "valid-lang": {
      "id": "valid-lang",
      "title": "`[lang]` attributes have a valid value",
      "description": "Specifying a valid [BCP 47 language](https://www.w3.org/International/questions/qa-choosing-language-tags#question) on elements helps ensure that text is pronounced correctly by a screen reader. [Learn more](https://web.dev/valid-lang/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "video-caption": {
      "id": "video-caption",
      "title": "`<video>` elements contain a `<track>` element with `[kind=\"captions\"]`",
      "description": "When a video provides a caption it is easier for deaf and hearing impaired users to access its information. [Learn more](https://web.dev/video-caption/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "custom-controls-labels": {
      "id": "custom-controls-labels",
      "title": "Custom controls have associated labels",
      "description": "Custom interactive controls have associated labels, provided by aria-label or aria-labelledby. [Learn more](https://web.dev/custom-controls-labels/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "custom-controls-roles": {
      "id": "custom-controls-roles",
      "title": "Custom controls have ARIA roles",
      "description": "Custom interactive controls have appropriate ARIA roles. [Learn more](https://web.dev/custom-control-roles/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focus-traps": {
      "id": "focus-traps",
      "title": "User focus is not accidentally trapped in a region",
      "description": "A user can tab into and out of any control or region without accidentally trapping their focus. [Learn more](https://web.dev/focus-traps/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "focusable-controls": {
      "id": "focusable-controls",
      "title": "Interactive controls are keyboard focusable",
      "description": "Custom interactive controls are keyboard focusable and display a focus indicator. [Learn more](https://web.dev/focusable-controls/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "interactive-element-affordance": {
      "id": "interactive-element-affordance",
      "title": "Interactive elements indicate their purpose and state",
      "description": "Interactive elements, such as links and buttons, should indicate their state and be distinguishable from non-interactive elements. [Learn more](https://web.dev/interactive-element-affordance/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "logical-tab-order": {
      "id": "logical-tab-order",
      "title": "The page has a logical tab order",
      "description": "Tabbing through the page follows the visual layout. Users cannot focus elements that are offscreen. [Learn more](https://web.dev/logical-tab-order/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "managed-focus": {
      "id": "managed-focus",
      "title": "The user's focus is directed to new content added to the page",
      "description": "If new content, such as a dialog, is added to the page, the user's focus is directed to it. [Learn more](https://web.dev/managed-focus/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "offscreen-content-hidden": {
      "id": "offscreen-content-hidden",
      "title": "Offscreen content is hidden from assistive technology",
      "description": "Offscreen content is hidden with display: none or aria-hidden=true. [Learn more](https://web.dev/offscreen-content-hidden/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "use-landmarks": {
      "id": "use-landmarks",
      "title": "HTML5 landmark elements are used to improve navigation",
      "description": "Landmark elements (<main>, <nav>, etc.) are used to improve the keyboard navigation of the page for assistive technology. [Learn more](https://web.dev/use-landmarks/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "visual-order-follows-dom": {
      "id": "visual-order-follows-dom",
      "title": "Visual order on the page follows DOM order",
      "description": "DOM order matches the visual order, improving navigation for assistive technology. [Learn more](https://web.dev/visual-order-follows-dom/).",
      "score": null,
      "scoreDisplayMode": "manual"
    },
    "uses-long-cache-ttl": {
      "id": "uses-long-cache-ttl",
      "title": "Uses efficient cache policy on static assets",
      "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more](https://web.dev/uses-long-cache-ttl/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "byte",
      "displayValue": "0 resources found",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {
          "wastedBytes": 0
        }
      }
    },
    "total-byte-weight": {
      "id": "total-byte-weight",
      "title": "Avoids enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://web.dev/total-byte-weight/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 196020,
      "numericUnit": "byte",
      "displayValue": "Total size was 191 KiB",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "totalBytes",
            "itemType": "bytes",
            "text": "Transfer Size"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/06e761b829e8d85b17f0a798a20c84d88b84d64f.c1cf3003fbb503ebd62b.js",
            "totalBytes": 60626
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js",
            "totalBytes": 44351
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/images/cook.png",
            "totalBytes": 25051
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js",
            "totalBytes": 13781
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js",
            "totalBytes": 11679
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/025d993ffb707cb2ecdbca0e3694e23204337195.eb1ffa06ee9961509b5c.js",
            "totalBytes": 9493
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/main-1684f93a95aaf8cda693.js",
            "totalBytes": 7054
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/recipes-a5a93f476b545bedabae.js",
            "totalBytes": 3422
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/css/ed547189269bee504cfb.css",
            "totalBytes": 3067
          },
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/index-27a14f9bd3a023a1fee4.js",
            "totalBytes": 2792
          }
        ]
      }
    },
    "offscreen-images": {
      "id": "offscreen-images",
      "title": "Defer offscreen images",
      "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn more](https://web.dev/offscreen-images/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "render-blocking-resources": {
      "id": "render-blocking-resources",
      "title": "Eliminate render-blocking resources",
      "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn more](https://web.dev/render-blocking-resources/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0
      }
    },
    "unminified-css": {
      "id": "unminified-css",
      "title": "Minify CSS",
      "description": "Minifying CSS files can reduce network payload sizes. [Learn more](https://web.dev/unminified-css/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "unminified-javascript": {
      "id": "unminified-javascript",
      "title": "Minify JavaScript",
      "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn more](https://web.dev/unminified-javascript/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "unused-css-rules": {
      "id": "unused-css-rules",
      "title": "Reduce unused CSS",
      "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-css-rules/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "unused-javascript": {
      "id": "unused-javascript",
      "title": "Reduce unused JavaScript",
      "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn more](https://web.dev/unused-javascript/).",
      "score": 0.88,
      "scoreDisplayMode": "numeric",
      "numericValue": 150,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 37 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "subItemsHeading": {
              "key": "source",
              "valueType": "code"
            },
            "label": "URL"
          },
          {
            "key": "totalBytes",
            "valueType": "bytes",
            "subItemsHeading": {
              "key": "sourceBytes"
            },
            "label": "Transfer Size"
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "subItemsHeading": {
              "key": "sourceWastedBytes"
            },
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/06e761b829e8d85b17f0a798a20c84d88b84d64f.c1cf3003fbb503ebd62b.js",
            "totalBytes": 60626,
            "wastedBytes": 37976,
            "wastedPercent": 62.63926418623986
          }
        ],
        "overallSavingsMs": 150,
        "overallSavingsBytes": 37976
      }
    },
    "modern-image-formats": {
      "id": "modern-image-formats",
      "title": "Serve images in next-gen formats",
      "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more](https://web.dev/uses-webp-images/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "uses-optimized-images": {
      "id": "uses-optimized-images",
      "title": "Efficiently encode images",
      "description": "Optimized images load faster and consume less cellular data. [Learn more](https://web.dev/uses-optimized-images/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "warnings": [],
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "uses-text-compression": {
      "id": "uses-text-compression",
      "title": "Enable text compression",
      "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more](https://web.dev/uses-text-compression/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "uses-responsive-images": {
      "id": "uses-responsive-images",
      "title": "Properly size images",
      "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn more](https://web.dev/uses-responsive-images/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "efficient-animated-content": {
      "id": "efficient-animated-content",
      "title": "Use video formats for animated content",
      "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more](https://web.dev/efficient-animated-content/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "duplicated-javascript": {
      "id": "duplicated-javascript",
      "title": "Remove duplicate modules in JavaScript bundles",
      "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "",
      "details": {
        "type": "opportunity",
        "headings": [],
        "items": [],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 0
      }
    },
    "legacy-javascript": {
      "id": "legacy-javascript",
      "title": "Avoid serving legacy JavaScript to modern browsers",
      "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn More](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 0,
      "numericUnit": "millisecond",
      "displayValue": "Potential savings of 0 KiB",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "subItemsHeading": {
              "key": "location",
              "valueType": "source-location"
            },
            "label": "URL"
          },
          {
            "key": null,
            "valueType": "code",
            "subItemsHeading": {
              "key": "signal"
            },
            "label": ""
          },
          {
            "key": "wastedBytes",
            "valueType": "bytes",
            "label": "Potential Savings"
          }
        ],
        "items": [
          {
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js",
            "wastedBytes": 55,
            "subItems": {
              "type": "subitems",
              "items": [
                {
                  "signal": "@babel/plugin-transform-classes",
                  "location": {
                    "type": "source-location",
                    "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js",
                    "urlProvider": "network",
                    "line": 0,
                    "column": 18932
                  }
                }
              ]
            },
            "totalBytes": 0
          }
        ],
        "overallSavingsMs": 0,
        "overallSavingsBytes": 55
      }
    },
    "doctype": {
      "id": "doctype",
      "title": "Page has the HTML doctype",
      "description": "Specifying a doctype prevents the browser from switching to quirks-mode. [Learn more](https://web.dev/doctype/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "charset": {
      "id": "charset",
      "title": "Properly defines charset",
      "description": "A character encoding declaration is required. It can be done with a `<meta>` tag in the first 1024 bytes of the HTML or in the Content-Type HTTP response header. [Learn more](https://web.dev/charset/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "dom-size": {
      "id": "dom-size",
      "title": "Avoids an excessive DOM size",
      "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://web.dev/dom-size/).",
      "score": 1,
      "scoreDisplayMode": "numeric",
      "numericValue": 41,
      "numericUnit": "element",
      "displayValue": "41 elements",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "statistic",
            "itemType": "text",
            "text": "Statistic"
          },
          {
            "key": "node",
            "itemType": "node",
            "text": "Element"
          },
          {
            "key": "value",
            "itemType": "numeric",
            "text": "Value"
          }
        ],
        "items": [
          {
            "statistic": "Total DOM Elements",
            "value": 41
          },
          {
            "node": {
              "type": "node",
              "lhId": "5-1-A",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,HEADER,2,NAV,0,UL,0,LI,0,A",
              "selector": "nav.flex > ul.flex > li.mx-2 > a.px-2",
              "boundingRect": {
                "top": 163,
                "bottom": 182,
                "left": 41,
                "right": 97,
                "width": 56,
                "height": 19
              },
              "snippet": "<a class=\"px-2 hover:opacity-75 text-orange-600\" href=\"/\">",
              "nodeLabel": "home"
            },
            "statistic": "Maximum DOM Depth",
            "value": 8
          },
          {
            "node": {
              "type": "node",
              "lhId": "5-40-BODY",
              "path": "1,HTML,1,BODY",
              "selector": "body",
              "boundingRect": {
                "top": 0,
                "bottom": 682,
                "left": 0,
                "right": 360,
                "width": 360,
                "height": 682
              },
              "snippet": "<body>",
              "nodeLabel": "body"
            },
            "statistic": "Maximum Child Elements",
            "value": 14
          }
        ]
      }
    },
    "geolocation-on-start": {
      "id": "geolocation-on-start",
      "title": "Avoids requesting the geolocation permission on page load",
      "description": "Users are mistrustful of or confused by sites that request their location without context. Consider tying the request to a user action instead. [Learn more](https://web.dev/geolocation-on-start/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "inspector-issues": {
      "id": "inspector-issues",
      "title": "No issues in the `Issues` panel in Chrome Devtools",
      "description": "Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems. They can come from network request failures, insufficient security controls, and other browser concerns. Open up the Issues panel in Chrome DevTools for more details on each issue.",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "no-document-write": {
      "id": "no-document-write",
      "title": "Avoids `document.write()`",
      "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn more](https://web.dev/no-document-write/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "no-vulnerable-libraries": {
      "id": "no-vulnerable-libraries",
      "title": "Includes front-end JavaScript libraries with known security vulnerabilities",
      "description": "Some third-party scripts may contain known security vulnerabilities that are easily identified and exploited by attackers. [Learn more](https://web.dev/no-vulnerable-libraries/).",
      "score": 0,
      "scoreDisplayMode": "binary",
      "displayValue": "1 vulnerability detected",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "detectedLib",
            "itemType": "link",
            "text": "Library Version"
          },
          {
            "key": "vulnCount",
            "itemType": "text",
            "text": "Vulnerability Count"
          },
          {
            "key": "highestSeverity",
            "itemType": "text",
            "text": "Highest Severity"
          }
        ],
        "items": [
          {
            "highestSeverity": "Medium",
            "vulnCount": 1,
            "detectedLib": {
              "text": "Next.js@9.5.5",
              "url": "https://snyk.io/vuln/npm:next?lh=9.5.5&utm_source=lighthouse&utm_medium=ref&utm_campaign=audit",
              "type": "link"
            }
          }
        ],
        "summary": {}
      }
    },
    "js-libraries": {
      "id": "js-libraries",
      "title": "Detected JavaScript libraries",
      "description": "All front-end JavaScript libraries detected on the page. [Learn more](https://web.dev/js-libraries/).",
      "score": null,
      "scoreDisplayMode": "informative",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "name",
            "itemType": "text",
            "text": "Name"
          },
          {
            "key": "version",
            "itemType": "text",
            "text": "Version"
          }
        ],
        "items": [
          {
            "name": "Next.js",
            "version": "9.5.5",
            "npm": "next"
          }
        ],
        "summary": {},
        "debugData": {
          "type": "debugdata",
          "stacks": [
            {
              "id": "next",
              "version": "9.5.5"
            },
            {
              "id": "next-fast"
            }
          ]
        }
      }
    },
    "notification-on-start": {
      "id": "notification-on-start",
      "title": "Avoids requesting the notification permission on page load",
      "description": "Users are mistrustful of or confused by sites that request to send notifications without context. Consider tying the request to user gestures instead. [Learn more](https://web.dev/notification-on-start/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "password-inputs-can-be-pasted-into": {
      "id": "password-inputs-can-be-pasted-into",
      "title": "Allows users to paste into password fields",
      "description": "Preventing password pasting undermines good security policy. [Learn more](https://web.dev/password-inputs-can-be-pasted-into/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "uses-http2": {
      "id": "uses-http2",
      "title": "Use HTTP/2",
      "description": "HTTP/2 offers many benefits over HTTP/1.1, including binary headers and multiplexing. [Learn more](https://web.dev/uses-http2/).",
      "score": 0.71,
      "scoreDisplayMode": "numeric",
      "numericValue": 370,
      "numericUnit": "millisecond",
      "displayValue": "21 requests not served via HTTP/2",
      "details": {
        "type": "opportunity",
        "headings": [
          {
            "key": "url",
            "valueType": "url",
            "label": "URL"
          },
          {
            "key": "protocol",
            "valueType": "text",
            "label": "Protocol"
          }
        ],
        "items": [
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/css/ed547189269bee504cfb.css"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/main-1684f93a95aaf8cda693.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/webpack-eb080e3f091731f228fb.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/framework.03c1ece5341e1cfc1570.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/commons.59db9bc5059ab8acc72a.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/06e761b829e8d85b17f0a798a20c84d88b84d64f.c1cf3003fbb503ebd62b.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/a10e5aa71f79a3c06c7d83d369f2e091636cb0d9.a3329967f55c66ddd9f3.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/025d993ffb707cb2ecdbca0e3694e23204337195.eb1ffa06ee9961509b5c.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/_app-51766c705f0f5fd8efef.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/index-27a14f9bd3a023a1fee4.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/icons/carrot.svg"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/images/cook.png"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_buildManifest.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/e62Dw5FzTyMwRzNXta97-/_ssgManifest.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/favicon.ico"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/api/auth/mutations/login"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/api/users/queries/getCurrentUser"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/recipes-a5a93f476b545bedabae.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/about-0627e69f27f73a0dc192.js"
          },
          {
            "protocol": "http/1.1",
            "url": "http://alan-sandbox.herokuapp.com/_next/static/chunks/pages/login-cd16701a794f686b3e41.js"
          }
        ],
        "overallSavingsMs": 370
      }
    },
    "uses-passive-event-listeners": {
      "id": "uses-passive-event-listeners",
      "title": "Uses passive listeners to improve scrolling performance",
      "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more](https://web.dev/uses-passive-event-listeners/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "meta-description": {
      "id": "meta-description",
      "title": "Document does not have a meta description",
      "description": "Meta descriptions may be included in search results to concisely summarize page content. [Learn more](https://web.dev/meta-description/).",
      "score": 0,
      "scoreDisplayMode": "binary"
    },
    "http-status-code": {
      "id": "http-status-code",
      "title": "Page has successful HTTP status code",
      "description": "Pages with unsuccessful HTTP status codes may not be indexed properly. [Learn more](https://web.dev/http-status-code/).",
      "score": 1,
      "scoreDisplayMode": "binary"
    },
    "font-size": {
      "id": "font-size",
      "title": "Document uses legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://web.dev/font-size/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "displayValue": "100% legible text",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "source",
            "itemType": "source-location",
            "text": "Source"
          },
          {
            "key": "selector",
            "itemType": "code",
            "text": "Selector"
          },
          {
            "key": "coverage",
            "itemType": "text",
            "text": "% of Page Text"
          },
          {
            "key": "fontSize",
            "itemType": "text",
            "text": "Font Size"
          }
        ],
        "items": [
          {
            "source": {
              "type": "code",
              "value": "Legible text"
            },
            "selector": "",
            "coverage": "100.00%",
            "fontSize": "≥ 12px"
          }
        ]
      }
    },
    "link-text": {
      "id": "link-text",
      "title": "Links have descriptive text",
      "description": "Descriptive link text helps search engines understand your content. [Learn more](https://web.dev/link-text/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": [],
        "summary": {}
      }
    },
    "crawlable-anchors": {
      "id": "crawlable-anchors",
      "title": "Links are crawlable",
      "description": "Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute of anchor elements links to an appropriate destination, so more pages of the site can be discovered. [Learn More](https://support.google.com/webmasters/answer/9112205)",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "is-crawlable": {
      "id": "is-crawlable",
      "title": "Page isn’t blocked from indexing",
      "description": "Search engines are unable to include your pages in search results if they don't have permission to crawl them. [Learn more](https://web.dev/is-crawable/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "robots-txt": {
      "id": "robots-txt",
      "title": "robots.txt is valid",
      "description": "If your robots.txt file is malformed, crawlers may not be able to understand how you want your website to be crawled or indexed. [Learn more](https://web.dev/robots-txt/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "tap-targets": {
      "id": "tap-targets",
      "title": "Tap targets are not sized appropriately",
      "description": "Interactive elements like buttons and links should be large enough (48x48px), and have enough space around them, to be easy enough to tap without overlapping onto other elements. [Learn more](https://web.dev/tap-targets/).",
      "score": 0.67,
      "scoreDisplayMode": "binary",
      "displayValue": "75% appropriately sized tap targets",
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "tapTarget",
            "itemType": "node",
            "text": "Tap Target"
          },
          {
            "key": "size",
            "itemType": "text",
            "text": "Size"
          },
          {
            "key": "overlappingTarget",
            "itemType": "node",
            "text": "Overlapping Target"
          }
        ],
        "items": [
          {
            "tapTarget": {
              "type": "node",
              "lhId": "5-7-A",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,2,FOOTER,2,SPAN,0,A",
              "selector": "div.w-full > footer.w-full > span.float-right > a",
              "boundingRect": {
                "top": 606,
                "bottom": 622,
                "left": 301,
                "right": 328,
                "width": 27,
                "height": 17
              },
              "snippet": "<a href=\"about:blank\">",
              "nodeLabel": "FAQ"
            },
            "overlappingTarget": {
              "type": "node",
              "lhId": "5-6-A",
              "path": "1,HTML,1,BODY,0,DIV,0,DIV,2,FOOTER,1,SPAN,0,A",
              "selector": "div.w-full > footer.w-full > span.float-right > a",
              "boundingRect": {
                "top": 586,
                "bottom": 602,
                "left": 257,
                "right": 344,
                "width": 87,
                "height": 17
              },
              "snippet": "<a href=\"/privacy-policy\">",
              "nodeLabel": "Privacy policy"
            },
            "tapTargetScore": 444.59765625,
            "overlappingTargetScore": 588,
            "overlapScoreRatio": 1.3225440839241942,
            "size": "26x16",
            "width": 26,
            "height": 16
          }
        ]
      }
    },
    "hreflang": {
      "id": "hreflang",
      "title": "Document has a valid `hreflang`",
      "description": "hreflang links tell search engines what version of a page they should list in search results for a given language or region. [Learn more](https://web.dev/hreflang/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "plugins": {
      "id": "plugins",
      "title": "Document avoids plugins",
      "description": "Search engines can't index plugin content, and many devices restrict plugins or don't support them. [Learn more](https://web.dev/plugins/).",
      "score": 1,
      "scoreDisplayMode": "binary",
      "details": {
        "type": "table",
        "headings": [],
        "items": []
      }
    },
    "canonical": {
      "id": "canonical",
      "title": "Document has a valid `rel=canonical`",
      "description": "Canonical links suggest which URL to show in search results. [Learn more](https://web.dev/canonical/).",
      "score": null,
      "scoreDisplayMode": "notApplicable"
    },
    "structured-data": {
      "id": "structured-data",
      "title": "Structured data is valid",
      "description": "Run the [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/) and the [Structured Data Linter](http://linter.structured-data.org/) to validate structured data. [Learn more](https://web.dev/structured-data/).",
      "score": null,
      "scoreDisplayMode": "manual"
    }
  },
  "configSettings": {
    "output": "json",
    "maxWaitForFcp": 30000,
    "maxWaitForLoad": 45000,
    "formFactor": "mobile",
    "throttling": {
      "rttMs": 150,
      "throughputKbps": 1638.4,
      "requestLatencyMs": 562.5,
      "downloadThroughputKbps": 1474.5600000000002,
      "uploadThroughputKbps": 675,
      "cpuSlowdownMultiplier": 4
    },
    "throttlingMethod": "simulate",
    "screenEmulation": {
      "mobile": true,
      "width": 360,
      "height": 640,
      "deviceScaleFactor": 2.625,
      "disabled": true
    },
    "emulatedUserAgent": "Mozilla/5.0 (Linux; Android 7.0; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4695.0 Mobile Safari/537.36 Chrome-Lighthouse",
    "auditMode": false,
    "gatherMode": false,
    "disableStorageReset": false,
    "debugNavigation": false,
    "channel": "devtools",
    "budgets": null,
    "locale": "en-US",
    "blockedUrlPatterns": null,
    "additionalTraceCategories": null,
    "extraHeaders": null,
    "precomputedLanternData": null,
    "onlyAudits": null,
    "onlyCategories": [
      "performance",
      "pwa",
      "best-practices",
      "accessibility",
      "seo"
    ],
    "skipAudits": null
  },
  "categories": {
    "performance": {
      "title": "Performance",
      "supportedModes": [
        "navigation",
        "timespan",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "first-contentful-paint",
          "weight": 10,
          "group": "metrics",
          "acronym": "FCP",
          "relevantAudits": [
            "server-response-time",
            "render-blocking-resources",
            "redirects",
            "critical-request-chains",
            "uses-text-compression",
            "uses-rel-preconnect",
            "uses-rel-preload",
            "font-display",
            "unminified-javascript",
            "unminified-css",
            "unused-css-rules"
          ]
        },
        {
          "id": "interactive",
          "weight": 10,
          "group": "metrics",
          "acronym": "TTI"
        },
        {
          "id": "speed-index",
          "weight": 10,
          "group": "metrics",
          "acronym": "SI"
        },
        {
          "id": "total-blocking-time",
          "weight": 30,
          "group": "metrics",
          "acronym": "TBT",
          "relevantAudits": [
            "long-tasks",
            "third-party-summary",
            "third-party-facades",
            "bootup-time",
            "mainthread-work-breakdown",
            "dom-size",
            "duplicated-javascript",
            "legacy-javascript",
            "viewport"
          ]
        },
        {
          "id": "largest-contentful-paint",
          "weight": 25,
          "group": "metrics",
          "acronym": "LCP",
          "relevantAudits": [
            "server-response-time",
            "render-blocking-resources",
            "redirects",
            "critical-request-chains",
            "uses-text-compression",
            "uses-rel-preconnect",
            "uses-rel-preload",
            "font-display",
            "unminified-javascript",
            "unminified-css",
            "unused-css-rules",
            "largest-contentful-paint-element",
            "preload-lcp-image",
            "unused-javascript",
            "efficient-animated-content",
            "total-byte-weight"
          ]
        },
        {
          "id": "cumulative-layout-shift",
          "weight": 15,
          "group": "metrics",
          "acronym": "CLS",
          "relevantAudits": [
            "layout-shift-elements",
            "non-composited-animations",
            "unsized-images"
          ]
        },
        {
          "id": "max-potential-fid",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "first-meaningful-paint",
          "weight": 0,
          "acronym": "FMP",
          "group": "hidden"
        },
        {
          "id": "render-blocking-resources",
          "weight": 0
        },
        {
          "id": "uses-responsive-images",
          "weight": 0
        },
        {
          "id": "offscreen-images",
          "weight": 0
        },
        {
          "id": "unminified-css",
          "weight": 0
        },
        {
          "id": "unminified-javascript",
          "weight": 0
        },
        {
          "id": "unused-css-rules",
          "weight": 0
        },
        {
          "id": "unused-javascript",
          "weight": 0
        },
        {
          "id": "uses-optimized-images",
          "weight": 0
        },
        {
          "id": "modern-image-formats",
          "weight": 0
        },
        {
          "id": "uses-text-compression",
          "weight": 0
        },
        {
          "id": "uses-rel-preconnect",
          "weight": 0
        },
        {
          "id": "server-response-time",
          "weight": 0
        },
        {
          "id": "redirects",
          "weight": 0
        },
        {
          "id": "uses-rel-preload",
          "weight": 0
        },
        {
          "id": "uses-http2",
          "weight": 0
        },
        {
          "id": "efficient-animated-content",
          "weight": 0
        },
        {
          "id": "duplicated-javascript",
          "weight": 0
        },
        {
          "id": "legacy-javascript",
          "weight": 0
        },
        {
          "id": "preload-lcp-image",
          "weight": 0
        },
        {
          "id": "total-byte-weight",
          "weight": 0
        },
        {
          "id": "uses-long-cache-ttl",
          "weight": 0
        },
        {
          "id": "dom-size",
          "weight": 0
        },
        {
          "id": "critical-request-chains",
          "weight": 0
        },
        {
          "id": "user-timings",
          "weight": 0
        },
        {
          "id": "bootup-time",
          "weight": 0
        },
        {
          "id": "mainthread-work-breakdown",
          "weight": 0
        },
        {
          "id": "font-display",
          "weight": 0
        },
        {
          "id": "resource-summary",
          "weight": 0
        },
        {
          "id": "third-party-summary",
          "weight": 0
        },
        {
          "id": "third-party-facades",
          "weight": 0
        },
        {
          "id": "largest-contentful-paint-element",
          "weight": 0
        },
        {
          "id": "lcp-lazy-loaded",
          "weight": 0
        },
        {
          "id": "layout-shift-elements",
          "weight": 0
        },
        {
          "id": "uses-passive-event-listeners",
          "weight": 0
        },
        {
          "id": "no-document-write",
          "weight": 0
        },
        {
          "id": "long-tasks",
          "weight": 0
        },
        {
          "id": "non-composited-animations",
          "weight": 0
        },
        {
          "id": "unsized-images",
          "weight": 0
        },
        {
          "id": "viewport",
          "weight": 0
        },
        {
          "id": "no-unload-listeners",
          "weight": 0
        },
        {
          "id": "performance-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "timing-budget",
          "weight": 0,
          "group": "budgets"
        },
        {
          "id": "network-requests",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "network-rtt",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "network-server-latency",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "main-thread-tasks",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "diagnostics",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "metrics",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "screenshot-thumbnails",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "final-screenshot",
          "weight": 0,
          "group": "hidden"
        },
        {
          "id": "script-treemap-data",
          "weight": 0,
          "group": "hidden"
        }
      ],
      "id": "performance",
      "score": 0.9
    },
    "accessibility": {
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://web.dev/lighthouse-accessibility/). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.",
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-command-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-body",
          "weight": 10,
          "group": "a11y-aria"
        },
        {
          "id": "aria-hidden-focus",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-input-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-meter-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-progressbar-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-toggle-field-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-tooltip-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-treeitem-name",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "button-name",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": 3,
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": 3,
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id-active",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "duplicate-id-aria",
          "weight": 0,
          "group": "a11y-aria"
        },
        {
          "id": "form-field-multiple-labels",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "frame-title",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "heading-order",
          "weight": 2,
          "group": "a11y-navigation"
        },
        {
          "id": "html-has-lang",
          "weight": 3,
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": 3,
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": 10,
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "link-name",
          "weight": 3,
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": 3,
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": 3,
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": 0,
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": 10,
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": 0,
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": 0,
          "group": "a11y-navigation"
        },
        {
          "id": "td-headers-attr",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": 0,
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": 0,
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": 0,
          "group": "a11y-audio-video"
        },
        {
          "id": "logical-tab-order",
          "weight": 0
        },
        {
          "id": "focusable-controls",
          "weight": 0
        },
        {
          "id": "interactive-element-affordance",
          "weight": 0
        },
        {
          "id": "managed-focus",
          "weight": 0
        },
        {
          "id": "focus-traps",
          "weight": 0
        },
        {
          "id": "custom-controls-labels",
          "weight": 0
        },
        {
          "id": "custom-controls-roles",
          "weight": 0
        },
        {
          "id": "visual-order-follows-dom",
          "weight": 0
        },
        {
          "id": "offscreen-content-hidden",
          "weight": 0
        },
        {
          "id": "use-landmarks",
          "weight": 0
        }
      ],
      "id": "accessibility",
      "score": 0.95
    },
    "best-practices": {
      "title": "Best Practices",
      "supportedModes": [
        "navigation",
        "timespan",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "is-on-https",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "geolocation-on-start",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "notification-on-start",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "no-vulnerable-libraries",
          "weight": 1,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "csp-xss",
          "weight": 0,
          "group": "best-practices-trust-safety"
        },
        {
          "id": "password-inputs-can-be-pasted-into",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "image-aspect-ratio",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "image-size-responsive",
          "weight": 1,
          "group": "best-practices-ux"
        },
        {
          "id": "preload-fonts",
          "weight": 0,
          "group": "best-practices-ux"
        },
        {
          "id": "doctype",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "charset",
          "weight": 1,
          "group": "best-practices-browser-compat"
        },
        {
          "id": "js-libraries",
          "weight": 0,
          "group": "best-practices-general"
        },
        {
          "id": "deprecations",
          "weight": 1,
          "group": "best-practices-general"
        },
        {
          "id": "errors-in-console",
          "weight": 1,
          "group": "best-practices-general"
        },
        {
          "id": "valid-source-maps",
          "weight": 0,
          "group": "best-practices-general"
        },
        {
          "id": "inspector-issues",
          "weight": 1,
          "group": "best-practices-general"
        }
      ],
      "id": "best-practices",
      "score": 0.83
    },
    "seo": {
      "title": "SEO",
      "description": "These checks ensure that your page is following basic search engine optimization advice. There are many additional factors Lighthouse does not score here that may affect your search ranking, including performance on [Core Web Vitals](https://web.dev/learn-web-vitals/). [Learn more](https://support.google.com/webmasters/answer/35769).",
      "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
      "supportedModes": [
        "navigation",
        "snapshot"
      ],
      "auditRefs": [
        {
          "id": "viewport",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "document-title",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "meta-description",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "http-status-code",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "link-text",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "crawlable-anchors",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "is-crawlable",
          "weight": 1,
          "group": "seo-crawl"
        },
        {
          "id": "robots-txt",
          "weight": 0,
          "group": "seo-crawl"
        },
        {
          "id": "image-alt",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "hreflang",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "canonical",
          "weight": 0,
          "group": "seo-content"
        },
        {
          "id": "font-size",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "plugins",
          "weight": 1,
          "group": "seo-content"
        },
        {
          "id": "tap-targets",
          "weight": 1,
          "group": "seo-mobile"
        },
        {
          "id": "structured-data",
          "weight": 0
        }
      ],
      "id": "seo",
      "score": 0.89
    },
    "pwa": {
      "title": "PWA",
      "description": "These checks validate the aspects of a Progressive Web App. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist).",
      "manualDescription": "These checks are required by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
      "supportedModes": [
        "navigation"
      ],
      "auditRefs": [
        {
          "id": "installable-manifest",
          "weight": 2,
          "group": "pwa-installable"
        },
        {
          "id": "service-worker",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "splash-screen",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "themed-omnibox",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "content-width",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "viewport",
          "weight": 2,
          "group": "pwa-optimized"
        },
        {
          "id": "apple-touch-icon",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "maskable-icon",
          "weight": 1,
          "group": "pwa-optimized"
        },
        {
          "id": "pwa-cross-browser",
          "weight": 0
        },
        {
          "id": "pwa-page-transitions",
          "weight": 0
        },
        {
          "id": "pwa-each-page-has-url",
          "weight": 0
        }
      ],
      "id": "pwa",
      "score": 0.3
    }
  },
  "categoryGroups": {
    "metrics": {
      "title": "Metrics"
    },
    "load-opportunities": {
      "title": "Opportunities",
      "description": "These suggestions can help your page load faster. They don't [directly affect](https://web.dev/performance-scoring/) the Performance score."
    },
    "budgets": {
      "title": "Budgets",
      "description": "Performance budgets set standards for the performance of your site."
    },
    "diagnostics": {
      "title": "Diagnostics",
      "description": "More information about the performance of your application. These numbers don't [directly affect](https://web.dev/performance-scoring/) the Performance score."
    },
    "pwa-installable": {
      "title": "Installable"
    },
    "pwa-optimized": {
      "title": "PWA Optimized"
    },
    "a11y-best-practices": {
      "title": "Best practices",
      "description": "These items highlight common accessibility best practices."
    },
    "a11y-color-contrast": {
      "title": "Contrast",
      "description": "These are opportunities to improve the legibility of your content."
    },
    "a11y-names-labels": {
      "title": "Names and labels",
      "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-navigation": {
      "title": "Navigation",
      "description": "These are opportunities to improve keyboard navigation in your application."
    },
    "a11y-aria": {
      "title": "ARIA",
      "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
    },
    "a11y-language": {
      "title": "Internationalization and localization",
      "description": "These are opportunities to improve the interpretation of your content by users in different locales."
    },
    "a11y-audio-video": {
      "title": "Audio and video",
      "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
    },
    "a11y-tables-lists": {
      "title": "Tables and lists",
      "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
    },
    "seo-mobile": {
      "title": "Mobile Friendly",
      "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn more](https://developers.google.com/search/mobile-sites/)."
    },
    "seo-content": {
      "title": "Content Best Practices",
      "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
    },
    "seo-crawl": {
      "title": "Crawling and Indexing",
      "description": "To appear in search results, crawlers need access to your app."
    },
    "best-practices-trust-safety": {
      "title": "Trust and Safety"
    },
    "best-practices-ux": {
      "title": "User Experience"
    },
    "best-practices-browser-compat": {
      "title": "Browser Compatibility"
    },
    "best-practices-general": {
      "title": "General"
    },
    "hidden": {
      "title": ""
    },
    "lighthouse-plugin-publisher-ads-metrics": {
      "title": "Metrics"
    },
    "lighthouse-plugin-publisher-ads-ads-performance": {
      "title": "Ad Speed"
    },
    "lighthouse-plugin-publisher-ads-ads-best-practices": {
      "title": "Tag Best Practices"
    }
  },
  "stackPacks": [
    {
      "id": "next.js",
      "title": "Next.js",
      "iconDataURL": "data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 207 124\"><path d=\"M48.942 32.632h38.96v3.082h-35.39v23.193H85.79v3.082H52.513v25.464h35.794v3.081H48.942V32.632Zm42.45 0h4.139l18.343 25.464 18.749-25.464L158.124.287l-41.896 60.485 21.59 29.762h-4.302l-19.642-27.086L94.15 90.534h-4.22l21.751-29.762-20.29-28.14Zm47.967 3.082v-3.082h44.397v3.082h-20.453v54.82h-3.571v-54.82h-20.373ZM.203 32.632h4.464l61.557 91.671-25.439-33.769L3.936 37.011l-.162 53.523H.203zm183.194 53.891c.738 0 1.276-.563 1.276-1.29 0-.727-.538-1.29-1.276-1.29-.73 0-1.277.563-1.277 1.29 0 .727.547 1.29 1.277 1.29Zm3.509-3.393c0 2.146 1.555 3.549 3.822 3.549 2.414 0 3.874-1.446 3.874-3.956v-8.837h-1.946v8.828c0 1.394-.704 2.138-1.946 2.138-1.112 0-1.867-.692-1.893-1.722h-1.911Zm10.24-.113c.14 2.233 2.007 3.662 4.787 3.662 2.97 0 4.83-1.498 4.83-3.887 0-1.878-1.06-2.917-3.632-3.514l-1.38-.338c-1.634-.38-2.294-.891-2.294-1.783 0-1.125 1.025-1.86 2.563-1.86 1.459 0 2.466.718 2.649 1.869h1.893c-.113-2.103-1.971-3.583-4.516-3.583-2.737 0-4.56 1.48-4.56 3.704 0 1.835 1.033 2.926 3.3 3.454l1.616.39c1.659.389 2.388.96 2.388 1.912 0 1.108-1.146 1.913-2.71 1.913-1.676 0-2.84-.753-3.005-1.939h-1.928Z\" fill=\"%23000\"/></svg>",
      "descriptions": {
        "unused-css-rules": "Consider setting up `PurgeCSS` in `Next.js` configuration to remove unused rules from stylesheets. [Learn more](https://purgecss.com/guides/next.html).",
        "modern-image-formats": "Use the `Next.js` Image Optimization API to serve modern formats like `WebP` and `AVIF`. [Learn more](https://nextjs.org/docs/api-reference/next/image#acceptable-formats).",
        "offscreen-images": "Use the `next/image` component, which defaults to `loading=\"lazy\"`. [Learn more](https://nextjs.org/docs/api-reference/next/image#loading).",
        "render-blocking-resources": "Use the `next/script` component to defer loading of non-critical third-party scripts. [Learn more](https://nextjs.org/docs/basic-features/script).",
        "unused-javascript": "Use `Webpack Bundle Analyzer` to detect unused JavaScript code. [Learn more](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)",
        "uses-long-cache-ttl": "Configure caching for immutable assets and `Server-side Rendered` (SSR) pages. [Learn more](https://nextjs.org/docs/going-to-production#caching).",
        "uses-optimized-images": "Use the `next/image` component instead of `<img>` to optimize images. [Learn more](https://nextjs.org/docs/basic-features/image-optimization).",
        "uses-text-compression": "Enable compression on your Next.js server. [Learn more](https://nextjs.org/docs/api-reference/next.config.js/compression).",
        "uses-responsive-images": "Use the `next/image` component to set the appropriate `sizes`. [Learn more](https://nextjs.org/docs/api-reference/next/image#sizes).",
        "user-timings": "Consider using `Next.js Analytics` to measure your app's real-world performance. [Learn more](https://nextjs.org/docs/advanced-features/measuring-performance).",
        "preload-lcp-image": "Use the `next/image` component and set \"priority\" to true to preload LCP image. [Learn more](https://nextjs.org/docs/api-reference/next/image#priority)."
      }
    }
  ],
  "timing": {
    "entries": [
      {
        "startTime": 99.9,
        "name": "lh:init:config",
        "duration": 282.9,
        "entryType": "measure"
      },
      {
        "startTime": 106.3,
        "name": "lh:config:requireGatherers",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 107.7,
        "name": "lh:config:requireAudits",
        "duration": 172.1,
        "entryType": "measure"
      },
      {
        "startTime": 383,
        "name": "lh:runner:gather",
        "duration": 11822.7,
        "entryType": "measure"
      },
      {
        "startTime": 383.6,
        "name": "lh:init:connect",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 386.2,
        "name": "lh:gather:loadBlank",
        "duration": 125.2,
        "entryType": "measure"
      },
      {
        "startTime": 386.5,
        "name": "lh:driver:navigate",
        "duration": 124.6,
        "entryType": "measure"
      },
      {
        "startTime": 511.4,
        "name": "lh:gather:getVersion",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 514.4,
        "name": "lh:gather:getBenchmarkIndex",
        "duration": 1008,
        "entryType": "measure"
      },
      {
        "startTime": 1522.6,
        "name": "lh:gather:setupDriver",
        "duration": 15.5,
        "entryType": "measure"
      },
      {
        "startTime": 1530.2,
        "name": "lh:prepare:navigationMode",
        "duration": 7.8,
        "entryType": "measure"
      },
      {
        "startTime": 1538.3,
        "name": "lh:gather:runPass-defaultPass",
        "duration": 10210.1,
        "entryType": "measure"
      },
      {
        "startTime": 1538.4,
        "name": "lh:gather:loadBlank",
        "duration": 13.2,
        "entryType": "measure"
      },
      {
        "startTime": 1538.5,
        "name": "lh:driver:navigate",
        "duration": 13,
        "entryType": "measure"
      },
      {
        "startTime": 1551.7,
        "name": "lh:prepare:navigation",
        "duration": 1353.2,
        "entryType": "measure"
      },
      {
        "startTime": 1554.6,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 5.9,
        "entryType": "measure"
      },
      {
        "startTime": 1560.6,
        "name": "lh:storage:clearBrowserCaches",
        "duration": 1342.2,
        "entryType": "measure"
      },
      {
        "startTime": 2903,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 2905.1,
        "name": "lh:gather:beforePass:CSSUsage",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2905.1,
        "name": "lh:gather:beforePass",
        "duration": 8.7,
        "entryType": "measure"
      },
      {
        "startTime": 2905.2,
        "name": "lh:gather:beforePass:JsUsage",
        "duration": 3.4,
        "entryType": "measure"
      },
      {
        "startTime": 2908.6,
        "name": "lh:gather:beforePass:ViewportDimensions",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2908.6,
        "name": "lh:gather:beforePass:ConsoleMessages",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 2910.7,
        "name": "lh:gather:beforePass:AnchorElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2910.7,
        "name": "lh:gather:beforePass:ImageElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2910.8,
        "name": "lh:gather:beforePass:LinkElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2910.8,
        "name": "lh:gather:beforePass:MetaElements",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2910.9,
        "name": "lh:gather:beforePass:ScriptElements",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2910.9,
        "name": "lh:gather:beforePass:MainDocumentContent",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 2911.1,
        "name": "lh:gather:beforePass:GlobalListeners",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2911.1,
        "name": "lh:gather:beforePass:Doctype",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2911.1,
        "name": "lh:gather:beforePass:DOMStats",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2911.2,
        "name": "lh:gather:beforePass:OptimizedImages",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2911.2,
        "name": "lh:gather:beforePass:PasswordInputsWithPreventedPaste",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2911.3,
        "name": "lh:gather:beforePass:ResponseCompression",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2911.4,
        "name": "lh:gather:beforePass:TagsBlockingFirstPaint",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 2912,
        "name": "lh:gather:beforePass:FontSize",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2912.1,
        "name": "lh:gather:beforePass:EmbeddedContent",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2912.1,
        "name": "lh:gather:beforePass:RobotsTxt",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2912.2,
        "name": "lh:gather:beforePass:TapTargets",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2912.2,
        "name": "lh:gather:beforePass:Accessibility",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 2912.3,
        "name": "lh:gather:beforePass:TraceElements",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 2912.9,
        "name": "lh:gather:beforePass:InspectorIssues",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 2913.4,
        "name": "lh:gather:beforePass:SourceMaps",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 2913.7,
        "name": "lh:gather:beforePass:FullPageScreenshot",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 2913.8,
        "name": "lh:gather:beginRecording",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 2916.4,
        "name": "lh:driver:navigate",
        "duration": 2969.3,
        "entryType": "measure"
      },
      {
        "startTime": 2916.4,
        "name": "lh:gather:loadPage-defaultPass",
        "duration": 2969.3,
        "entryType": "measure"
      },
      {
        "startTime": 5886,
        "name": "lh:gather:pass",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 5887.9,
        "name": "lh:gather:getTrace",
        "duration": 166.5,
        "entryType": "measure"
      },
      {
        "startTime": 6054.4,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 6054.7,
        "name": "lh:computed:NetworkRecords$M",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 6057,
        "name": "lh:gather:afterPass",
        "duration": 5691.3,
        "entryType": "measure"
      },
      {
        "startTime": 6061.9,
        "name": "lh:gather:afterPass:CSSUsage",
        "duration": 18.4,
        "entryType": "measure"
      },
      {
        "startTime": 6080.3,
        "name": "lh:gather:afterPass:JsUsage",
        "duration": 48.2,
        "entryType": "measure"
      },
      {
        "startTime": 6128.5,
        "name": "lh:gather:afterPass:ViewportDimensions",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 6131.4,
        "name": "lh:gather:afterPass:ConsoleMessages",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 6135,
        "name": "lh:gather:afterPass:AnchorElements",
        "duration": 16.9,
        "entryType": "measure"
      },
      {
        "startTime": 6151.9,
        "name": "lh:gather:afterPass:ImageElements",
        "duration": 27.1,
        "entryType": "measure"
      },
      {
        "startTime": 6179.1,
        "name": "lh:gather:afterPass:LinkElements",
        "duration": 5.9,
        "entryType": "measure"
      },
      {
        "startTime": 6185,
        "name": "lh:gather:afterPass:MetaElements",
        "duration": 7,
        "entryType": "measure"
      },
      {
        "startTime": 6192,
        "name": "lh:gather:afterPass:ScriptElements",
        "duration": 15.8,
        "entryType": "measure"
      },
      {
        "startTime": 6207.8,
        "name": "lh:gather:afterPass:MainDocumentContent",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 6210.3,
        "name": "lh:gather:afterPass:GlobalListeners",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 6213.3,
        "name": "lh:gather:afterPass:Doctype",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 6215.6,
        "name": "lh:gather:afterPass:DOMStats",
        "duration": 6.2,
        "entryType": "measure"
      },
      {
        "startTime": 6221.8,
        "name": "lh:gather:afterPass:OptimizedImages",
        "duration": 120.2,
        "entryType": "measure"
      },
      {
        "startTime": 6342,
        "name": "lh:gather:afterPass:PasswordInputsWithPreventedPaste",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 6345.2,
        "name": "lh:gather:afterPass:ResponseCompression",
        "duration": 10.7,
        "entryType": "measure"
      },
      {
        "startTime": 6355.9,
        "name": "lh:gather:afterPass:TagsBlockingFirstPaint",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 6359.1,
        "name": "lh:gather:afterPass:FontSize",
        "duration": 14,
        "entryType": "measure"
      },
      {
        "startTime": 6373.1,
        "name": "lh:gather:afterPass:EmbeddedContent",
        "duration": 3.7,
        "entryType": "measure"
      },
      {
        "startTime": 6376.8,
        "name": "lh:gather:afterPass:RobotsTxt",
        "duration": 41.1,
        "entryType": "measure"
      },
      {
        "startTime": 6377,
        "name": "lh:gather:getVersion",
        "duration": 0.7,
        "entryType": "measure"
      },
      {
        "startTime": 6379,
        "name": "lh:gather:getVersion",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 6417.9,
        "name": "lh:gather:afterPass:TapTargets",
        "duration": 17.8,
        "entryType": "measure"
      },
      {
        "startTime": 6435.7,
        "name": "lh:gather:afterPass:Accessibility",
        "duration": 137.4,
        "entryType": "measure"
      },
      {
        "startTime": 6573.1,
        "name": "lh:gather:afterPass:TraceElements",
        "duration": 41.3,
        "entryType": "measure"
      },
      {
        "startTime": 6575.2,
        "name": "lh:computed:ProcessedTrace$f",
        "duration": 21.6,
        "entryType": "measure"
      },
      {
        "startTime": 6596.8,
        "name": "lh:computed:ProcessedNavigation$7",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 6614.4,
        "name": "lh:gather:afterPass:InspectorIssues",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 6616.5,
        "name": "lh:gather:afterPass:SourceMaps",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 6618.1,
        "name": "lh:gather:afterPass:FullPageScreenshot",
        "duration": 5130.2,
        "entryType": "measure"
      },
      {
        "startTime": 11748.7,
        "name": "lh:gather:populateBaseArtifacts",
        "duration": 16,
        "entryType": "measure"
      },
      {
        "startTime": 11749.9,
        "name": "lh:gather:collectStacks",
        "duration": 14.7,
        "entryType": "measure"
      },
      {
        "startTime": 11765.7,
        "name": "lh:gather:runPass-offlinePass",
        "duration": 435.3,
        "entryType": "measure"
      },
      {
        "startTime": 11765.8,
        "name": "lh:gather:loadBlank",
        "duration": 133.4,
        "entryType": "measure"
      },
      {
        "startTime": 11765.9,
        "name": "lh:driver:navigate",
        "duration": 133.2,
        "entryType": "measure"
      },
      {
        "startTime": 11899.3,
        "name": "lh:gather:prepareThrottlingAndNetwork",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 11899.3,
        "name": "lh:prepare:navigation",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 11901.1,
        "name": "lh:gather:beforePass:ServiceWorker",
        "duration": 9.6,
        "entryType": "measure"
      },
      {
        "startTime": 11901.1,
        "name": "lh:gather:beforePass",
        "duration": 9.7,
        "entryType": "measure"
      },
      {
        "startTime": 11910.8,
        "name": "lh:gather:beginRecording",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 11910.9,
        "name": "lh:gather:loadPage-offlinePass",
        "duration": 269.5,
        "entryType": "measure"
      },
      {
        "startTime": 11911,
        "name": "lh:driver:navigate",
        "duration": 269.3,
        "entryType": "measure"
      },
      {
        "startTime": 12180.4,
        "name": "lh:gather:pass",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12180.6,
        "name": "lh:gather:getDevtoolsLog",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 12180.8,
        "name": "lh:computed:NetworkRecords$M",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 12187.6,
        "name": "lh:gather:afterPass",
        "duration": 13.3,
        "entryType": "measure"
      },
      {
        "startTime": 12199.7,
        "name": "lh:gather:afterPass:ServiceWorker",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 12201.2,
        "name": "lh:storage:clearDataForOrigin",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 12201.2,
        "name": "lh:gather:disconnect",
        "duration": 4.2,
        "entryType": "measure"
      },
      {
        "startTime": 12205.9,
        "name": "lh:runner:audit",
        "duration": 885.8,
        "entryType": "measure"
      },
      {
        "startTime": 12206,
        "name": "lh:runner:auditing",
        "duration": 885,
        "entryType": "measure"
      },
      {
        "startTime": 12207.4,
        "name": "lh:audit:is-on-https",
        "duration": 5.7,
        "entryType": "measure"
      },
      {
        "startTime": 12213.7,
        "name": "lh:audit:service-worker",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 12216.9,
        "name": "lh:audit:viewport",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 12218.5,
        "name": "lh:computed:ViewportMeta",
        "duration": 0.4,
        "entryType": "measure"
      },
      {
        "startTime": 12220.4,
        "name": "lh:audit:first-contentful-paint",
        "duration": 13.3,
        "entryType": "measure"
      },
      {
        "startTime": 12221,
        "name": "lh:computed:FirstContentfulPaint$3",
        "duration": 11.7,
        "entryType": "measure"
      },
      {
        "startTime": 12221.3,
        "name": "lh:computed:LanternFirstContentfulPaint$6",
        "duration": 11.4,
        "entryType": "measure"
      },
      {
        "startTime": 12221.5,
        "name": "lh:computed:PageDependencyGraph$a",
        "duration": 4.4,
        "entryType": "measure"
      },
      {
        "startTime": 12226,
        "name": "lh:computed:LoadSimulator$a",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 12226.1,
        "name": "lh:computed:NetworkAnalysis$1",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12234,
        "name": "lh:audit:largest-contentful-paint",
        "duration": 4.5,
        "entryType": "measure"
      },
      {
        "startTime": 12234.5,
        "name": "lh:computed:LargestContentfulPaint$2",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 12234.7,
        "name": "lh:computed:LanternLargestContentfulPaint$1",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 12238.8,
        "name": "lh:audit:first-meaningful-paint",
        "duration": 3.7,
        "entryType": "measure"
      },
      {
        "startTime": 12239.5,
        "name": "lh:computed:FirstMeaningfulPaint$2",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 12239.7,
        "name": "lh:computed:LanternFirstMeaningfulPaint$2",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 12242.8,
        "name": "lh:audit:speed-index",
        "duration": 229,
        "entryType": "measure"
      },
      {
        "startTime": 12243.3,
        "name": "lh:computed:SpeedIndex$2",
        "duration": 227.2,
        "entryType": "measure"
      },
      {
        "startTime": 12243.4,
        "name": "lh:computed:Speedline$4",
        "duration": 223.5,
        "entryType": "measure"
      },
      {
        "startTime": 12243.4,
        "name": "lh:computed:LanternSpeedIndex$2",
        "duration": 227.1,
        "entryType": "measure"
      },
      {
        "startTime": 12471.8,
        "name": "lh:audit:screenshot-thumbnails",
        "duration": 77.8,
        "entryType": "measure"
      },
      {
        "startTime": 12549.6,
        "name": "lh:audit:final-screenshot",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 12549.8,
        "name": "lh:computed:Screenshots$1",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 12551.5,
        "name": "lh:audit:total-blocking-time",
        "duration": 11.6,
        "entryType": "measure"
      },
      {
        "startTime": 12552.3,
        "name": "lh:computed:LanternTotalBlockingTime$1",
        "duration": 9.7,
        "entryType": "measure"
      },
      {
        "startTime": 12552.3,
        "name": "lh:computed:TotalBlockingTime$2",
        "duration": 9.7,
        "entryType": "measure"
      },
      {
        "startTime": 12552.5,
        "name": "lh:computed:LanternInteractive$4",
        "duration": 3.8,
        "entryType": "measure"
      },
      {
        "startTime": 12563.6,
        "name": "lh:audit:max-potential-fid",
        "duration": 4.3,
        "entryType": "measure"
      },
      {
        "startTime": 12564.2,
        "name": "lh:computed:MaxPotentialFID$2",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 12564.3,
        "name": "lh:computed:LanternMaxPotentialFID$1",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 12568.3,
        "name": "lh:audit:cumulative-layout-shift",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 12568.8,
        "name": "lh:computed:CumulativeLayoutShift$2",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12570.5,
        "name": "lh:audit:errors-in-console",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 12571.4,
        "name": "lh:computed:JSBundles",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12573.6,
        "name": "lh:audit:server-response-time",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 12574.2,
        "name": "lh:computed:MainResource$g",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12576,
        "name": "lh:audit:interactive",
        "duration": 5.3,
        "entryType": "measure"
      },
      {
        "startTime": 12578.9,
        "name": "lh:computed:Interactive$4",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12582.4,
        "name": "lh:audit:user-timings",
        "duration": 5,
        "entryType": "measure"
      },
      {
        "startTime": 12583.6,
        "name": "lh:computed:UserTimings$1",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 12588.5,
        "name": "lh:audit:critical-request-chains",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 12589.4,
        "name": "lh:computed:CriticalRequestChains$2",
        "duration": 0.6,
        "entryType": "measure"
      },
      {
        "startTime": 12592.1,
        "name": "lh:audit:redirects",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 12594.6,
        "name": "lh:audit:installable-manifest",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 12595.4,
        "name": "lh:computed:ManifestValues$4",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12597.9,
        "name": "lh:audit:apple-touch-icon",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12599.9,
        "name": "lh:audit:splash-screen",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12601.8,
        "name": "lh:audit:themed-omnibox",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12603.7,
        "name": "lh:audit:maskable-icon",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 12605.8,
        "name": "lh:audit:content-width",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 12607.8,
        "name": "lh:audit:image-aspect-ratio",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 12610.5,
        "name": "lh:audit:image-size-responsive",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 12612.6,
        "name": "lh:audit:preload-fonts",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 12614,
        "name": "lh:audit:deprecations",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 12615.5,
        "name": "lh:audit:mainthread-work-breakdown",
        "duration": 6.8,
        "entryType": "measure"
      },
      {
        "startTime": 12616.1,
        "name": "lh:computed:MainThreadTasks$7",
        "duration": 4.7,
        "entryType": "measure"
      },
      {
        "startTime": 12622.7,
        "name": "lh:audit:bootup-time",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 12625.8,
        "name": "lh:audit:uses-rel-preload",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 12627,
        "name": "lh:audit:uses-rel-preconnect",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12628.9,
        "name": "lh:audit:font-display",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12630.5,
        "name": "lh:audit:diagnostics",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 12631,
        "name": "lh:audit:network-requests",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 12631.9,
        "name": "lh:audit:network-rtt",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 12634.2,
        "name": "lh:audit:network-server-latency",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 12635.6,
        "name": "lh:audit:main-thread-tasks",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 12636,
        "name": "lh:audit:metrics",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 12636.1,
        "name": "lh:computed:TimingSummary$1",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 12636.3,
        "name": "lh:computed:FirstContentfulPaintAllFrames$1",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12636.5,
        "name": "lh:computed:LargestContentfulPaintAllFrames$1",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12637.8,
        "name": "lh:audit:performance-budget",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12638.3,
        "name": "lh:computed:ResourceSummary$2",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 12639.7,
        "name": "lh:audit:timing-budget",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 12641.1,
        "name": "lh:audit:resource-summary",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 12643.5,
        "name": "lh:audit:third-party-summary",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 12646.5,
        "name": "lh:audit:third-party-facades",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 12648.9,
        "name": "lh:audit:largest-contentful-paint-element",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 12650.4,
        "name": "lh:audit:lcp-lazy-loaded",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 12652,
        "name": "lh:audit:layout-shift-elements",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12653.8,
        "name": "lh:audit:long-tasks",
        "duration": 3.3,
        "entryType": "measure"
      },
      {
        "startTime": 12657.4,
        "name": "lh:audit:no-unload-listeners",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 12659.1,
        "name": "lh:audit:non-composited-animations",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 12660.5,
        "name": "lh:audit:unsized-images",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 12662.6,
        "name": "lh:audit:valid-source-maps",
        "duration": 1.8,
        "entryType": "measure"
      },
      {
        "startTime": 12664.6,
        "name": "lh:audit:preload-lcp-image",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 12667.3,
        "name": "lh:audit:csp-xss",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 12668.6,
        "name": "lh:audit:full-page-screenshot",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12668.7,
        "name": "lh:audit:script-treemap-data",
        "duration": 11.1,
        "entryType": "measure"
      },
      {
        "startTime": 12669,
        "name": "lh:computed:ModuleDuplication$2",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12669.2,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 12670.4,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12670.7,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 6.1,
        "entryType": "measure"
      },
      {
        "startTime": 12676.9,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 12677.2,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 12678.1,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 12678.5,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 12678.9,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12679.1,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12679.3,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12679.5,
        "name": "lh:computed:UnusedJavascriptSummary",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12680.1,
        "name": "lh:audit:pwa-cross-browser",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 12681.4,
        "name": "lh:audit:pwa-page-transitions",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 12682.7,
        "name": "lh:audit:pwa-each-page-has-url",
        "duration": 0.8,
        "entryType": "measure"
      },
      {
        "startTime": 12683.9,
        "name": "lh:audit:accesskeys",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 12685.7,
        "name": "lh:audit:aria-allowed-attr",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12687.7,
        "name": "lh:audit:aria-command-name",
        "duration": 2.1,
        "entryType": "measure"
      },
      {
        "startTime": 12690.2,
        "name": "lh:audit:aria-hidden-body",
        "duration": 6.8,
        "entryType": "measure"
      },
      {
        "startTime": 12697.5,
        "name": "lh:audit:aria-hidden-focus",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 12699.9,
        "name": "lh:audit:aria-input-field-name",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 12702.3,
        "name": "lh:audit:aria-meter-name",
        "duration": 2.2,
        "entryType": "measure"
      },
      {
        "startTime": 12705,
        "name": "lh:audit:aria-progressbar-name",
        "duration": 2.5,
        "entryType": "measure"
      },
      {
        "startTime": 12707.8,
        "name": "lh:audit:aria-required-attr",
        "duration": 2.7,
        "entryType": "measure"
      },
      {
        "startTime": 12711,
        "name": "lh:audit:aria-required-children",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 12714.1,
        "name": "lh:audit:aria-required-parent",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 12716.8,
        "name": "lh:audit:aria-roles",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 12719.3,
        "name": "lh:audit:aria-toggle-field-name",
        "duration": 3.7,
        "entryType": "measure"
      },
      {
        "startTime": 12723.5,
        "name": "lh:audit:aria-tooltip-name",
        "duration": 3.6,
        "entryType": "measure"
      },
      {
        "startTime": 12727.5,
        "name": "lh:audit:aria-treeitem-name",
        "duration": 3,
        "entryType": "measure"
      },
      {
        "startTime": 12730.9,
        "name": "lh:audit:aria-valid-attr-value",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 12733.9,
        "name": "lh:audit:aria-valid-attr",
        "duration": 3,
        "entryType": "measure"
      },
      {
        "startTime": 12737.4,
        "name": "lh:audit:button-name",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 12741.8,
        "name": "lh:audit:bypass",
        "duration": 5.9,
        "entryType": "measure"
      },
      {
        "startTime": 12748,
        "name": "lh:audit:color-contrast",
        "duration": 6,
        "entryType": "measure"
      },
      {
        "startTime": 12754.5,
        "name": "lh:audit:definition-list",
        "duration": 6,
        "entryType": "measure"
      },
      {
        "startTime": 12760.9,
        "name": "lh:audit:dlitem",
        "duration": 3.5,
        "entryType": "measure"
      },
      {
        "startTime": 12764.7,
        "name": "lh:audit:document-title",
        "duration": 6.6,
        "entryType": "measure"
      },
      {
        "startTime": 12771.8,
        "name": "lh:audit:duplicate-id-active",
        "duration": 3.7,
        "entryType": "measure"
      },
      {
        "startTime": 12775.9,
        "name": "lh:audit:duplicate-id-aria",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 12779.4,
        "name": "lh:audit:form-field-multiple-labels",
        "duration": 3.7,
        "entryType": "measure"
      },
      {
        "startTime": 12783.4,
        "name": "lh:audit:frame-title",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 12787.9,
        "name": "lh:audit:heading-order",
        "duration": 7,
        "entryType": "measure"
      },
      {
        "startTime": 12795.4,
        "name": "lh:audit:html-has-lang",
        "duration": 8.1,
        "entryType": "measure"
      },
      {
        "startTime": 12803.9,
        "name": "lh:audit:html-lang-valid",
        "duration": 6.3,
        "entryType": "measure"
      },
      {
        "startTime": 12810.5,
        "name": "lh:audit:image-alt",
        "duration": 5.6,
        "entryType": "measure"
      },
      {
        "startTime": 12816.6,
        "name": "lh:audit:input-image-alt",
        "duration": 4.3,
        "entryType": "measure"
      },
      {
        "startTime": 12821.4,
        "name": "lh:audit:label",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 12825.8,
        "name": "lh:audit:link-name",
        "duration": 5.8,
        "entryType": "measure"
      },
      {
        "startTime": 12832.1,
        "name": "lh:audit:list",
        "duration": 6.2,
        "entryType": "measure"
      },
      {
        "startTime": 12839,
        "name": "lh:audit:listitem",
        "duration": 6.7,
        "entryType": "measure"
      },
      {
        "startTime": 12846.2,
        "name": "lh:audit:meta-refresh",
        "duration": 4.6,
        "entryType": "measure"
      },
      {
        "startTime": 12851.2,
        "name": "lh:audit:meta-viewport",
        "duration": 9.2,
        "entryType": "measure"
      },
      {
        "startTime": 12860.8,
        "name": "lh:audit:object-alt",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 12865.3,
        "name": "lh:audit:tabindex",
        "duration": 5.6,
        "entryType": "measure"
      },
      {
        "startTime": 12871.6,
        "name": "lh:audit:td-headers-attr",
        "duration": 7.5,
        "entryType": "measure"
      },
      {
        "startTime": 12879.6,
        "name": "lh:audit:th-has-data-cells",
        "duration": 6.6,
        "entryType": "measure"
      },
      {
        "startTime": 12886.7,
        "name": "lh:audit:valid-lang",
        "duration": 6.2,
        "entryType": "measure"
      },
      {
        "startTime": 12893.4,
        "name": "lh:audit:video-caption",
        "duration": 5.8,
        "entryType": "measure"
      },
      {
        "startTime": 12899.2,
        "name": "lh:audit:custom-controls-labels",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12899.3,
        "name": "lh:audit:custom-controls-roles",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12899.4,
        "name": "lh:audit:focus-traps",
        "duration": 0.2,
        "entryType": "measure"
      },
      {
        "startTime": 12899.6,
        "name": "lh:audit:focusable-controls",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12899.7,
        "name": "lh:audit:interactive-element-affordance",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12899.7,
        "name": "lh:audit:logical-tab-order",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12899.8,
        "name": "lh:audit:managed-focus",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12899.9,
        "name": "lh:audit:offscreen-content-hidden",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12899.9,
        "name": "lh:audit:use-landmarks",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12900,
        "name": "lh:audit:visual-order-follows-dom",
        "duration": 0,
        "entryType": "measure"
      },
      {
        "startTime": 12900.5,
        "name": "lh:audit:uses-long-cache-ttl",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 12903.1,
        "name": "lh:audit:total-byte-weight",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 12905,
        "name": "lh:audit:offscreen-images",
        "duration": 3.8,
        "entryType": "measure"
      },
      {
        "startTime": 12909.2,
        "name": "lh:audit:render-blocking-resources",
        "duration": 2,
        "entryType": "measure"
      },
      {
        "startTime": 12909.9,
        "name": "lh:computed:UnusedCSS$3",
        "duration": 0.3,
        "entryType": "measure"
      },
      {
        "startTime": 12910.3,
        "name": "lh:computed:FirstContentfulPaint$3",
        "duration": 0.1,
        "entryType": "measure"
      },
      {
        "startTime": 12911.4,
        "name": "lh:audit:unminified-css",
        "duration": 4.2,
        "entryType": "measure"
      },
      {
        "startTime": 12915.8,
        "name": "lh:audit:unminified-javascript",
        "duration": 70.3,
        "entryType": "measure"
      },
      {
        "startTime": 12986.4,
        "name": "lh:audit:unused-css-rules",
        "duration": 4,
        "entryType": "measure"
      },
      {
        "startTime": 12990.9,
        "name": "lh:audit:unused-javascript",
        "duration": 4.1,
        "entryType": "measure"
      },
      {
        "startTime": 12995.2,
        "name": "lh:audit:modern-image-formats",
        "duration": 2.8,
        "entryType": "measure"
      },
      {
        "startTime": 12998.2,
        "name": "lh:audit:uses-optimized-images",
        "duration": 2.3,
        "entryType": "measure"
      },
      {
        "startTime": 13000.9,
        "name": "lh:audit:uses-text-compression",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 13003.5,
        "name": "lh:audit:uses-responsive-images",
        "duration": 3.2,
        "entryType": "measure"
      },
      {
        "startTime": 13004.2,
        "name": "lh:computed:ImageRecords$1",
        "duration": 0.5,
        "entryType": "measure"
      },
      {
        "startTime": 13007.1,
        "name": "lh:audit:efficient-animated-content",
        "duration": 2.6,
        "entryType": "measure"
      },
      {
        "startTime": 13009.9,
        "name": "lh:audit:duplicated-javascript",
        "duration": 2.4,
        "entryType": "measure"
      },
      {
        "startTime": 13012.7,
        "name": "lh:audit:legacy-javascript",
        "duration": 26.3,
        "entryType": "measure"
      },
      {
        "startTime": 13041,
        "name": "lh:audit:doctype",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 13042.6,
        "name": "lh:audit:charset",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 13044.4,
        "name": "lh:audit:dom-size",
        "duration": 1.7,
        "entryType": "measure"
      },
      {
        "startTime": 13046.5,
        "name": "lh:audit:geolocation-on-start",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 13048.5,
        "name": "lh:audit:inspector-issues",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 13050.3,
        "name": "lh:audit:no-document-write",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 13051.9,
        "name": "lh:audit:no-vulnerable-libraries",
        "duration": 6.9,
        "entryType": "measure"
      },
      {
        "startTime": 13059.1,
        "name": "lh:audit:js-libraries",
        "duration": 0.9,
        "entryType": "measure"
      },
      {
        "startTime": 13060.4,
        "name": "lh:audit:notification-on-start",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 13062.1,
        "name": "lh:audit:password-inputs-can-be-pasted-into",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 13063.9,
        "name": "lh:audit:uses-http2",
        "duration": 2.9,
        "entryType": "measure"
      },
      {
        "startTime": 13067.2,
        "name": "lh:audit:uses-passive-event-listeners",
        "duration": 1.2,
        "entryType": "measure"
      },
      {
        "startTime": 13068.7,
        "name": "lh:audit:meta-description",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 13070.2,
        "name": "lh:audit:http-status-code",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 13071.8,
        "name": "lh:audit:font-size",
        "duration": 1.9,
        "entryType": "measure"
      },
      {
        "startTime": 13074,
        "name": "lh:audit:link-text",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 13075.5,
        "name": "lh:audit:crawlable-anchors",
        "duration": 1.6,
        "entryType": "measure"
      },
      {
        "startTime": 13077.4,
        "name": "lh:audit:is-crawlable",
        "duration": 1.3,
        "entryType": "measure"
      },
      {
        "startTime": 13079.1,
        "name": "lh:audit:robots-txt",
        "duration": 1,
        "entryType": "measure"
      },
      {
        "startTime": 13080.5,
        "name": "lh:audit:tap-targets",
        "duration": 3.1,
        "entryType": "measure"
      },
      {
        "startTime": 13083.9,
        "name": "lh:audit:hreflang",
        "duration": 1.4,
        "entryType": "measure"
      },
      {
        "startTime": 13085.7,
        "name": "lh:audit:plugins",
        "duration": 1.1,
        "entryType": "measure"
      },
      {
        "startTime": 13087.2,
        "name": "lh:audit:canonical",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 13089.5,
        "name": "lh:audit:structured-data",
        "duration": 1.5,
        "entryType": "measure"
      },
      {
        "startTime": 13091,
        "name": "lh:runner:generate",
        "duration": 0.7,
        "entryType": "measure"
      }
    ],
    "total": 12708.5
  },
  "i18n": {
    "rendererFormattedStrings": {},
    "icuMessagePaths": {
      "lighthouse-core/audits/is-on-https.js | failureTitle": [
        "audits[is-on-https].title"
      ],
      "lighthouse-core/audits/is-on-https.js | description": [
        "audits[is-on-https].description"
      ],
      "lighthouse-core/audits/is-on-https.js | displayValue": [
        {
          "values": {
            "itemCount": 21
          },
          "path": "audits[is-on-https].displayValue"
        }
      ],
      "lighthouse-core/audits/is-on-https.js | columnInsecureURL": [
        "audits[is-on-https].details.headings[0].text"
      ],
      "lighthouse-core/audits/is-on-https.js | columnResolution": [
        "audits[is-on-https].details.headings[1].text"
      ],
      "lighthouse-core/audits/is-on-https.js | allowed": [
        "audits[is-on-https].details.items[0].resolution",
        "audits[is-on-https].details.items[1].resolution",
        "audits[is-on-https].details.items[2].resolution",
        "audits[is-on-https].details.items[3].resolution",
        "audits[is-on-https].details.items[4].resolution",
        "audits[is-on-https].details.items[5].resolution",
        "audits[is-on-https].details.items[6].resolution",
        "audits[is-on-https].details.items[7].resolution",
        "audits[is-on-https].details.items[8].resolution",
        "audits[is-on-https].details.items[9].resolution",
        "audits[is-on-https].details.items[10].resolution",
        "audits[is-on-https].details.items[11].resolution",
        "audits[is-on-https].details.items[12].resolution",
        "audits[is-on-https].details.items[13].resolution",
        "audits[is-on-https].details.items[14].resolution",
        "audits[is-on-https].details.items[15].resolution",
        "audits[is-on-https].details.items[16].resolution",
        "audits[is-on-https].details.items[17].resolution",
        "audits[is-on-https].details.items[18].resolution",
        "audits[is-on-https].details.items[19].resolution",
        "audits[is-on-https].details.items[20].resolution"
      ],
      "lighthouse-core/audits/service-worker.js | failureTitle": [
        "audits[service-worker].title"
      ],
      "lighthouse-core/audits/service-worker.js | description": [
        "audits[service-worker].description"
      ],
      "lighthouse-core/audits/viewport.js | title": [
        "audits.viewport.title"
      ],
      "lighthouse-core/audits/viewport.js | description": [
        "audits.viewport.description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | firstContentfulPaintMetric": [
        "audits[first-contentful-paint].title"
      ],
      "lighthouse-core/audits/metrics/first-contentful-paint.js | description": [
        "audits[first-contentful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | seconds": [
        {
          "values": {
            "timeInMs": 2089.7960249999996
          },
          "path": "audits[first-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 2865.9491249999996
          },
          "path": "audits[largest-contentful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 2089.7960249999996
          },
          "path": "audits[first-meaningful-paint].displayValue"
        },
        {
          "values": {
            "timeInMs": 2089.7960249999996
          },
          "path": "audits[speed-index].displayValue"
        },
        {
          "values": {
            "timeInMs": 2471.296025
          },
          "path": "audits.interactive.displayValue"
        },
        {
          "values": {
            "timeInMs": 1316.1280000000008
          },
          "path": "audits[mainthread-work-breakdown].displayValue"
        },
        {
          "values": {
            "timeInMs": 535.5240000000001
          },
          "path": "audits[bootup-time].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | largestContentfulPaintMetric": [
        "audits[largest-contentful-paint].title"
      ],
      "lighthouse-core/audits/metrics/largest-contentful-paint.js | description": [
        "audits[largest-contentful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | firstMeaningfulPaintMetric": [
        "audits[first-meaningful-paint].title"
      ],
      "lighthouse-core/audits/metrics/first-meaningful-paint.js | description": [
        "audits[first-meaningful-paint].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | speedIndexMetric": [
        "audits[speed-index].title"
      ],
      "lighthouse-core/audits/metrics/speed-index.js | description": [
        "audits[speed-index].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | totalBlockingTimeMetric": [
        "audits[total-blocking-time].title"
      ],
      "lighthouse-core/audits/metrics/total-blocking-time.js | description": [
        "audits[total-blocking-time].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | ms": [
        {
          "values": {
            "timeInMs": 26
          },
          "path": "audits[total-blocking-time].displayValue"
        },
        {
          "values": {
            "timeInMs": 102
          },
          "path": "audits[max-potential-fid].displayValue"
        },
        {
          "values": {
            "timeInMs": 0.036449999999999996
          },
          "path": "audits[network-rtt].displayValue"
        },
        {
          "values": {
            "timeInMs": 35.32655
          },
          "path": "audits[network-server-latency].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | maxPotentialFIDMetric": [
        "audits[max-potential-fid].title"
      ],
      "lighthouse-core/audits/metrics/max-potential-fid.js | description": [
        "audits[max-potential-fid].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | cumulativeLayoutShiftMetric": [
        "audits[cumulative-layout-shift].title"
      ],
      "lighthouse-core/audits/metrics/cumulative-layout-shift.js | description": [
        "audits[cumulative-layout-shift].description"
      ],
      "lighthouse-core/audits/errors-in-console.js | title": [
        "audits[errors-in-console].title"
      ],
      "lighthouse-core/audits/errors-in-console.js | description": [
        "audits[errors-in-console].description"
      ],
      "lighthouse-core/audits/server-response-time.js | title": [
        "audits[server-response-time].title"
      ],
      "lighthouse-core/audits/server-response-time.js | description": [
        "audits[server-response-time].description"
      ],
      "lighthouse-core/audits/server-response-time.js | displayValue": [
        {
          "values": {
            "timeInMs": 35.156
          },
          "path": "audits[server-response-time].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnURL": [
        "audits[server-response-time].details.headings[0].label",
        "audits[bootup-time].details.headings[0].text",
        "audits[network-rtt].details.headings[0].text",
        "audits[network-server-latency].details.headings[0].text",
        "audits[long-tasks].details.headings[0].text",
        "audits[unsized-images].details.headings[1].text",
        "audits[preload-lcp-image].details.headings[1].label",
        "audits[total-byte-weight].details.headings[0].text",
        "audits[unused-javascript].details.headings[0].label",
        "audits[legacy-javascript].details.headings[0].label",
        "audits[uses-http2].details.headings[0].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnTimeSpent": [
        "audits[server-response-time].details.headings[1].label",
        "audits[mainthread-work-breakdown].details.headings[1].text",
        "audits[network-rtt].details.headings[1].text",
        "audits[network-server-latency].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | interactiveMetric": [
        "audits.interactive.title"
      ],
      "lighthouse-core/audits/metrics/interactive.js | description": [
        "audits.interactive.description"
      ],
      "lighthouse-core/audits/user-timings.js | title": [
        "audits[user-timings].title"
      ],
      "lighthouse-core/audits/user-timings.js | description": [
        "audits[user-timings].description"
      ],
      "lighthouse-core/audits/critical-request-chains.js | title": [
        "audits[critical-request-chains].title"
      ],
      "lighthouse-core/audits/critical-request-chains.js | description": [
        "audits[critical-request-chains].description"
      ],
      "lighthouse-core/audits/redirects.js | title": [
        "audits.redirects.title"
      ],
      "lighthouse-core/audits/redirects.js | description": [
        "audits.redirects.description"
      ],
      "lighthouse-core/audits/installable-manifest.js | failureTitle": [
        "audits[installable-manifest].title"
      ],
      "lighthouse-core/audits/installable-manifest.js | description": [
        "audits[installable-manifest].description"
      ],
      "lighthouse-core/audits/installable-manifest.js | displayValue": [
        {
          "values": {
            "itemCount": 1
          },
          "path": "audits[installable-manifest].displayValue"
        }
      ],
      "lighthouse-core/audits/installable-manifest.js | columnValue": [
        "audits[installable-manifest].details.headings[0].text"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | failureTitle": [
        "audits[apple-touch-icon].title"
      ],
      "lighthouse-core/audits/apple-touch-icon.js | description": [
        "audits[apple-touch-icon].description"
      ],
      "lighthouse-core/audits/splash-screen.js | failureTitle": [
        "audits[splash-screen].title"
      ],
      "lighthouse-core/audits/splash-screen.js | description": [
        "audits[splash-screen].description"
      ],
      "lighthouse-core/audits/themed-omnibox.js | failureTitle": [
        "audits[themed-omnibox].title"
      ],
      "lighthouse-core/audits/themed-omnibox.js | description": [
        "audits[themed-omnibox].description"
      ],
      "lighthouse-core/audits/maskable-icon.js | failureTitle": [
        "audits[maskable-icon].title"
      ],
      "lighthouse-core/audits/maskable-icon.js | description": [
        "audits[maskable-icon].description"
      ],
      "lighthouse-core/audits/content-width.js | title": [
        "audits[content-width].title"
      ],
      "lighthouse-core/audits/content-width.js | description": [
        "audits[content-width].description"
      ],
      "lighthouse-core/audits/image-aspect-ratio.js | title": [
        "audits[image-aspect-ratio].title"
      ],
      "lighthouse-core/audits/image-aspect-ratio.js | description": [
        "audits[image-aspect-ratio].description"
      ],
      "lighthouse-core/audits/image-size-responsive.js | title": [
        "audits[image-size-responsive].title"
      ],
      "lighthouse-core/audits/image-size-responsive.js | description": [
        "audits[image-size-responsive].description"
      ],
      "lighthouse-core/audits/preload-fonts.js | title": [
        "audits[preload-fonts].title"
      ],
      "lighthouse-core/audits/preload-fonts.js | description": [
        "audits[preload-fonts].description"
      ],
      "lighthouse-core/audits/deprecations.js | title": [
        "audits.deprecations.title"
      ],
      "lighthouse-core/audits/deprecations.js | description": [
        "audits.deprecations.description"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | title": [
        "audits[mainthread-work-breakdown].title"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | description": [
        "audits[mainthread-work-breakdown].description"
      ],
      "lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory": [
        "audits[mainthread-work-breakdown].details.headings[0].text"
      ],
      "lighthouse-core/audits/bootup-time.js | title": [
        "audits[bootup-time].title"
      ],
      "lighthouse-core/audits/bootup-time.js | description": [
        "audits[bootup-time].description"
      ],
      "lighthouse-core/audits/bootup-time.js | columnTotal": [
        "audits[bootup-time].details.headings[1].text"
      ],
      "lighthouse-core/audits/bootup-time.js | columnScriptEval": [
        "audits[bootup-time].details.headings[2].text"
      ],
      "lighthouse-core/audits/bootup-time.js | columnScriptParse": [
        "audits[bootup-time].details.headings[3].text"
      ],
      "lighthouse-core/audits/uses-rel-preload.js | title": [
        "audits[uses-rel-preload].title"
      ],
      "lighthouse-core/audits/uses-rel-preload.js | description": [
        "audits[uses-rel-preload].description"
      ],
      "lighthouse-core/audits/uses-rel-preconnect.js | title": [
        "audits[uses-rel-preconnect].title"
      ],
      "lighthouse-core/audits/uses-rel-preconnect.js | description": [
        "audits[uses-rel-preconnect].description"
      ],
      "lighthouse-core/audits/font-display.js | title": [
        "audits[font-display].title"
      ],
      "lighthouse-core/audits/font-display.js | description": [
        "audits[font-display].description"
      ],
      "lighthouse-core/audits/network-rtt.js | title": [
        "audits[network-rtt].title"
      ],
      "lighthouse-core/audits/network-rtt.js | description": [
        "audits[network-rtt].description"
      ],
      "lighthouse-core/audits/network-server-latency.js | title": [
        "audits[network-server-latency].title"
      ],
      "lighthouse-core/audits/network-server-latency.js | description": [
        "audits[network-server-latency].description"
      ],
      "lighthouse-core/audits/performance-budget.js | title": [
        "audits[performance-budget].title"
      ],
      "lighthouse-core/audits/performance-budget.js | description": [
        "audits[performance-budget].description"
      ],
      "lighthouse-core/audits/timing-budget.js | title": [
        "audits[timing-budget].title"
      ],
      "lighthouse-core/audits/timing-budget.js | description": [
        "audits[timing-budget].description"
      ],
      "lighthouse-core/audits/resource-summary.js | title": [
        "audits[resource-summary].title"
      ],
      "lighthouse-core/audits/resource-summary.js | description": [
        "audits[resource-summary].description"
      ],
      "lighthouse-core/audits/resource-summary.js | displayValue": [
        {
          "values": {
            "requestCount": 22,
            "byteCount": 195749
          },
          "path": "audits[resource-summary].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnResourceType": [
        "audits[resource-summary].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnRequests": [
        "audits[resource-summary].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnTransferSize": [
        "audits[resource-summary].details.headings[2].text",
        "audits[total-byte-weight].details.headings[1].text",
        "audits[unused-javascript].details.headings[1].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | totalResourceType": [
        "audits[resource-summary].details.items[0].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | scriptResourceType": [
        "audits[resource-summary].details.items[1].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | imageResourceType": [
        "audits[resource-summary].details.items[2].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | otherResourceType": [
        "audits[resource-summary].details.items[3].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType": [
        "audits[resource-summary].details.items[4].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | documentResourceType": [
        "audits[resource-summary].details.items[5].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | mediaResourceType": [
        "audits[resource-summary].details.items[6].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | fontResourceType": [
        "audits[resource-summary].details.items[7].label"
      ],
      "lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType": [
        "audits[resource-summary].details.items[8].label"
      ],
      "lighthouse-core/audits/third-party-summary.js | title": [
        "audits[third-party-summary].title"
      ],
      "lighthouse-core/audits/third-party-summary.js | description": [
        "audits[third-party-summary].description"
      ],
      "lighthouse-core/audits/third-party-facades.js | title": [
        "audits[third-party-facades].title"
      ],
      "lighthouse-core/audits/third-party-facades.js | description": [
        "audits[third-party-facades].description"
      ],
      "lighthouse-core/audits/largest-contentful-paint-element.js | title": [
        "audits[largest-contentful-paint-element].title"
      ],
      "lighthouse-core/audits/largest-contentful-paint-element.js | description": [
        "audits[largest-contentful-paint-element].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueElementsFound": [
        {
          "values": {
            "nodeCount": 1
          },
          "path": "audits[largest-contentful-paint-element].displayValue"
        },
        {
          "values": {
            "nodeCount": 4
          },
          "path": "audits[layout-shift-elements].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnElement": [
        "audits[largest-contentful-paint-element].details.headings[0].text",
        "audits[lcp-lazy-loaded].details.headings[0].text",
        "audits[layout-shift-elements].details.headings[0].text",
        "audits[dom-size].details.headings[1].text"
      ],
      "lighthouse-core/audits/lcp-lazy-loaded.js | title": [
        "audits[lcp-lazy-loaded].title"
      ],
      "lighthouse-core/audits/lcp-lazy-loaded.js | description": [
        "audits[lcp-lazy-loaded].description"
      ],
      "lighthouse-core/audits/layout-shift-elements.js | title": [
        "audits[layout-shift-elements].title"
      ],
      "lighthouse-core/audits/layout-shift-elements.js | description": [
        "audits[layout-shift-elements].description"
      ],
      "lighthouse-core/audits/layout-shift-elements.js | columnContribution": [
        "audits[layout-shift-elements].details.headings[1].text"
      ],
      "lighthouse-core/audits/long-tasks.js | title": [
        "audits[long-tasks].title"
      ],
      "lighthouse-core/audits/long-tasks.js | description": [
        "audits[long-tasks].description"
      ],
      "lighthouse-core/audits/long-tasks.js | displayValue": [
        {
          "values": {
            "itemCount": 4
          },
          "path": "audits[long-tasks].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnStartTime": [
        "audits[long-tasks].details.headings[1].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnDuration": [
        "audits[long-tasks].details.headings[2].text"
      ],
      "lighthouse-core/audits/no-unload-listeners.js | title": [
        "audits[no-unload-listeners].title"
      ],
      "lighthouse-core/audits/no-unload-listeners.js | description": [
        "audits[no-unload-listeners].description"
      ],
      "lighthouse-core/audits/non-composited-animations.js | title": [
        "audits[non-composited-animations].title"
      ],
      "lighthouse-core/audits/non-composited-animations.js | description": [
        "audits[non-composited-animations].description"
      ],
      "lighthouse-core/audits/unsized-images.js | failureTitle": [
        "audits[unsized-images].title"
      ],
      "lighthouse-core/audits/unsized-images.js | description": [
        "audits[unsized-images].description"
      ],
      "lighthouse-core/audits/valid-source-maps.js | title": [
        "audits[valid-source-maps].title"
      ],
      "lighthouse-core/audits/valid-source-maps.js | description": [
        "audits[valid-source-maps].description"
      ],
      "lighthouse-core/audits/preload-lcp-image.js | title": [
        "audits[preload-lcp-image].title"
      ],
      "lighthouse-core/audits/preload-lcp-image.js | description": [
        "audits[preload-lcp-image].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnWastedBytes": [
        "audits[preload-lcp-image].details.headings[2].label",
        "audits[unused-javascript].details.headings[2].label",
        "audits[legacy-javascript].details.headings[2].label"
      ],
      "lighthouse-core/audits/csp-xss.js | title": [
        "audits[csp-xss].title"
      ],
      "lighthouse-core/audits/csp-xss.js | description": [
        "audits[csp-xss].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnDescription": [
        "audits[csp-xss].details.headings[0].text"
      ],
      "lighthouse-core/audits/csp-xss.js | columnDirective": [
        "audits[csp-xss].details.headings[1].text"
      ],
      "lighthouse-core/audits/csp-xss.js | columnSeverity": [
        "audits[csp-xss].details.headings[2].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | itemSeverityHigh": [
        "audits[csp-xss].details.items[0].severity"
      ],
      "lighthouse-core/audits/csp-xss.js | noCsp": [
        "audits[csp-xss].details.items[0].description"
      ],
      "lighthouse-core/audits/manual/pwa-cross-browser.js | title": [
        "audits[pwa-cross-browser].title"
      ],
      "lighthouse-core/audits/manual/pwa-cross-browser.js | description": [
        "audits[pwa-cross-browser].description"
      ],
      "lighthouse-core/audits/manual/pwa-page-transitions.js | title": [
        "audits[pwa-page-transitions].title"
      ],
      "lighthouse-core/audits/manual/pwa-page-transitions.js | description": [
        "audits[pwa-page-transitions].description"
      ],
      "lighthouse-core/audits/manual/pwa-each-page-has-url.js | title": [
        "audits[pwa-each-page-has-url].title"
      ],
      "lighthouse-core/audits/manual/pwa-each-page-has-url.js | description": [
        "audits[pwa-each-page-has-url].description"
      ],
      "lighthouse-core/audits/accessibility/accesskeys.js | title": [
        "audits.accesskeys.title"
      ],
      "lighthouse-core/audits/accessibility/accesskeys.js | description": [
        "audits.accesskeys.description"
      ],
      "lighthouse-core/audits/accessibility/aria-allowed-attr.js | title": [
        "audits[aria-allowed-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-allowed-attr.js | description": [
        "audits[aria-allowed-attr].description"
      ],
      "lighthouse-core/audits/accessibility/aria-command-name.js | title": [
        "audits[aria-command-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-command-name.js | description": [
        "audits[aria-command-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-body.js | title": [
        "audits[aria-hidden-body].title"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-body.js | description": [
        "audits[aria-hidden-body].description"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-focus.js | title": [
        "audits[aria-hidden-focus].title"
      ],
      "lighthouse-core/audits/accessibility/aria-hidden-focus.js | description": [
        "audits[aria-hidden-focus].description"
      ],
      "lighthouse-core/audits/accessibility/aria-input-field-name.js | title": [
        "audits[aria-input-field-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-input-field-name.js | description": [
        "audits[aria-input-field-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-meter-name.js | title": [
        "audits[aria-meter-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-meter-name.js | description": [
        "audits[aria-meter-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-progressbar-name.js | title": [
        "audits[aria-progressbar-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-progressbar-name.js | description": [
        "audits[aria-progressbar-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-attr.js | title": [
        "audits[aria-required-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-attr.js | description": [
        "audits[aria-required-attr].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-children.js | title": [
        "audits[aria-required-children].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-children.js | description": [
        "audits[aria-required-children].description"
      ],
      "lighthouse-core/audits/accessibility/aria-required-parent.js | title": [
        "audits[aria-required-parent].title"
      ],
      "lighthouse-core/audits/accessibility/aria-required-parent.js | description": [
        "audits[aria-required-parent].description"
      ],
      "lighthouse-core/audits/accessibility/aria-roles.js | title": [
        "audits[aria-roles].title"
      ],
      "lighthouse-core/audits/accessibility/aria-roles.js | description": [
        "audits[aria-roles].description"
      ],
      "lighthouse-core/audits/accessibility/aria-toggle-field-name.js | title": [
        "audits[aria-toggle-field-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-toggle-field-name.js | description": [
        "audits[aria-toggle-field-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-tooltip-name.js | title": [
        "audits[aria-tooltip-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-tooltip-name.js | description": [
        "audits[aria-tooltip-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-treeitem-name.js | title": [
        "audits[aria-treeitem-name].title"
      ],
      "lighthouse-core/audits/accessibility/aria-treeitem-name.js | description": [
        "audits[aria-treeitem-name].description"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | title": [
        "audits[aria-valid-attr-value].title"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr-value.js | description": [
        "audits[aria-valid-attr-value].description"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr.js | title": [
        "audits[aria-valid-attr].title"
      ],
      "lighthouse-core/audits/accessibility/aria-valid-attr.js | description": [
        "audits[aria-valid-attr].description"
      ],
      "lighthouse-core/audits/accessibility/button-name.js | title": [
        "audits[button-name].title"
      ],
      "lighthouse-core/audits/accessibility/button-name.js | description": [
        "audits[button-name].description"
      ],
      "lighthouse-core/audits/accessibility/bypass.js | title": [
        "audits.bypass.title"
      ],
      "lighthouse-core/audits/accessibility/bypass.js | description": [
        "audits.bypass.description"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | failureTitle": [
        "audits[color-contrast].title"
      ],
      "lighthouse-core/audits/accessibility/color-contrast.js | description": [
        "audits[color-contrast].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnFailingElem": [
        "audits[color-contrast].details.headings[0].text"
      ],
      "lighthouse-core/audits/accessibility/definition-list.js | title": [
        "audits[definition-list].title"
      ],
      "lighthouse-core/audits/accessibility/definition-list.js | description": [
        "audits[definition-list].description"
      ],
      "lighthouse-core/audits/accessibility/dlitem.js | title": [
        "audits.dlitem.title"
      ],
      "lighthouse-core/audits/accessibility/dlitem.js | description": [
        "audits.dlitem.description"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | title": [
        "audits[document-title].title"
      ],
      "lighthouse-core/audits/accessibility/document-title.js | description": [
        "audits[document-title].description"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-active.js | title": [
        "audits[duplicate-id-active].title"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-active.js | description": [
        "audits[duplicate-id-active].description"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-aria.js | title": [
        "audits[duplicate-id-aria].title"
      ],
      "lighthouse-core/audits/accessibility/duplicate-id-aria.js | description": [
        "audits[duplicate-id-aria].description"
      ],
      "lighthouse-core/audits/accessibility/form-field-multiple-labels.js | title": [
        "audits[form-field-multiple-labels].title"
      ],
      "lighthouse-core/audits/accessibility/form-field-multiple-labels.js | description": [
        "audits[form-field-multiple-labels].description"
      ],
      "lighthouse-core/audits/accessibility/frame-title.js | title": [
        "audits[frame-title].title"
      ],
      "lighthouse-core/audits/accessibility/frame-title.js | description": [
        "audits[frame-title].description"
      ],
      "lighthouse-core/audits/accessibility/heading-order.js | title": [
        "audits[heading-order].title"
      ],
      "lighthouse-core/audits/accessibility/heading-order.js | description": [
        "audits[heading-order].description"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | title": [
        "audits[html-has-lang].title"
      ],
      "lighthouse-core/audits/accessibility/html-has-lang.js | description": [
        "audits[html-has-lang].description"
      ],
      "lighthouse-core/audits/accessibility/html-lang-valid.js | title": [
        "audits[html-lang-valid].title"
      ],
      "lighthouse-core/audits/accessibility/html-lang-valid.js | description": [
        "audits[html-lang-valid].description"
      ],
      "lighthouse-core/audits/accessibility/image-alt.js | title": [
        "audits[image-alt].title"
      ],
      "lighthouse-core/audits/accessibility/image-alt.js | description": [
        "audits[image-alt].description"
      ],
      "lighthouse-core/audits/accessibility/input-image-alt.js | title": [
        "audits[input-image-alt].title"
      ],
      "lighthouse-core/audits/accessibility/input-image-alt.js | description": [
        "audits[input-image-alt].description"
      ],
      "lighthouse-core/audits/accessibility/label.js | title": [
        "audits.label.title"
      ],
      "lighthouse-core/audits/accessibility/label.js | description": [
        "audits.label.description"
      ],
      "lighthouse-core/audits/accessibility/link-name.js | title": [
        "audits[link-name].title"
      ],
      "lighthouse-core/audits/accessibility/link-name.js | description": [
        "audits[link-name].description"
      ],
      "lighthouse-core/audits/accessibility/list.js | title": [
        "audits.list.title"
      ],
      "lighthouse-core/audits/accessibility/list.js | description": [
        "audits.list.description"
      ],
      "lighthouse-core/audits/accessibility/listitem.js | title": [
        "audits.listitem.title"
      ],
      "lighthouse-core/audits/accessibility/listitem.js | description": [
        "audits.listitem.description"
      ],
      "lighthouse-core/audits/accessibility/meta-refresh.js | title": [
        "audits[meta-refresh].title"
      ],
      "lighthouse-core/audits/accessibility/meta-refresh.js | description": [
        "audits[meta-refresh].description"
      ],
      "lighthouse-core/audits/accessibility/meta-viewport.js | title": [
        "audits[meta-viewport].title"
      ],
      "lighthouse-core/audits/accessibility/meta-viewport.js | description": [
        "audits[meta-viewport].description"
      ],
      "lighthouse-core/audits/accessibility/object-alt.js | title": [
        "audits[object-alt].title"
      ],
      "lighthouse-core/audits/accessibility/object-alt.js | description": [
        "audits[object-alt].description"
      ],
      "lighthouse-core/audits/accessibility/tabindex.js | title": [
        "audits.tabindex.title"
      ],
      "lighthouse-core/audits/accessibility/tabindex.js | description": [
        "audits.tabindex.description"
      ],
      "lighthouse-core/audits/accessibility/td-headers-attr.js | title": [
        "audits[td-headers-attr].title"
      ],
      "lighthouse-core/audits/accessibility/td-headers-attr.js | description": [
        "audits[td-headers-attr].description"
      ],
      "lighthouse-core/audits/accessibility/th-has-data-cells.js | title": [
        "audits[th-has-data-cells].title"
      ],
      "lighthouse-core/audits/accessibility/th-has-data-cells.js | description": [
        "audits[th-has-data-cells].description"
      ],
      "lighthouse-core/audits/accessibility/valid-lang.js | title": [
        "audits[valid-lang].title"
      ],
      "lighthouse-core/audits/accessibility/valid-lang.js | description": [
        "audits[valid-lang].description"
      ],
      "lighthouse-core/audits/accessibility/video-caption.js | title": [
        "audits[video-caption].title"
      ],
      "lighthouse-core/audits/accessibility/video-caption.js | description": [
        "audits[video-caption].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | title": [
        "audits[uses-long-cache-ttl].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description": [
        "audits[uses-long-cache-ttl].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue": [
        {
          "values": {
            "itemCount": 0
          },
          "path": "audits[uses-long-cache-ttl].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | title": [
        "audits[total-byte-weight].title"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description": [
        "audits[total-byte-weight].description"
      ],
      "lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue": [
        {
          "values": {
            "totalBytes": 196020
          },
          "path": "audits[total-byte-weight].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/offscreen-images.js | title": [
        "audits[offscreen-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/offscreen-images.js | description": [
        "audits[offscreen-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title": [
        "audits[render-blocking-resources].title"
      ],
      "lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description": [
        "audits[render-blocking-resources].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | title": [
        "audits[unminified-css].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-css.js | description": [
        "audits[unminified-css].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title": [
        "audits[unminified-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description": [
        "audits[unminified-javascript].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title": [
        "audits[unused-css-rules].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description": [
        "audits[unused-css-rules].description"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-javascript.js | title": [
        "audits[unused-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/unused-javascript.js | description": [
        "audits[unused-javascript].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings": [
        {
          "values": {
            "wastedBytes": 37976
          },
          "path": "audits[unused-javascript].displayValue"
        },
        {
          "values": {
            "wastedBytes": 55
          },
          "path": "audits[legacy-javascript].displayValue"
        }
      ],
      "lighthouse-core/audits/byte-efficiency/modern-image-formats.js | title": [
        "audits[modern-image-formats].title"
      ],
      "lighthouse-core/audits/byte-efficiency/modern-image-formats.js | description": [
        "audits[modern-image-formats].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title": [
        "audits[uses-optimized-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description": [
        "audits[uses-optimized-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title": [
        "audits[uses-text-compression].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description": [
        "audits[uses-text-compression].description"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title": [
        "audits[uses-responsive-images].title"
      ],
      "lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description": [
        "audits[uses-responsive-images].description"
      ],
      "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title": [
        "audits[efficient-animated-content].title"
      ],
      "lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description": [
        "audits[efficient-animated-content].description"
      ],
      "lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | title": [
        "audits[duplicated-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | description": [
        "audits[duplicated-javascript].description"
      ],
      "lighthouse-core/audits/byte-efficiency/legacy-javascript.js | title": [
        "audits[legacy-javascript].title"
      ],
      "lighthouse-core/audits/byte-efficiency/legacy-javascript.js | description": [
        "audits[legacy-javascript].description"
      ],
      "lighthouse-core/audits/dobetterweb/doctype.js | title": [
        "audits.doctype.title"
      ],
      "lighthouse-core/audits/dobetterweb/doctype.js | description": [
        "audits.doctype.description"
      ],
      "lighthouse-core/audits/dobetterweb/charset.js | title": [
        "audits.charset.title"
      ],
      "lighthouse-core/audits/dobetterweb/charset.js | description": [
        "audits.charset.description"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | title": [
        "audits[dom-size].title"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | description": [
        "audits[dom-size].description"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | displayValue": [
        {
          "values": {
            "itemCount": 41
          },
          "path": "audits[dom-size].displayValue"
        }
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic": [
        "audits[dom-size].details.headings[0].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | columnValue": [
        "audits[dom-size].details.headings[2].text"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements": [
        "audits[dom-size].details.items[0].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth": [
        "audits[dom-size].details.items[1].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth": [
        "audits[dom-size].details.items[2].statistic"
      ],
      "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | title": [
        "audits[geolocation-on-start].title"
      ],
      "lighthouse-core/audits/dobetterweb/geolocation-on-start.js | description": [
        "audits[geolocation-on-start].description"
      ],
      "lighthouse-core/audits/dobetterweb/inspector-issues.js | title": [
        "audits[inspector-issues].title"
      ],
      "lighthouse-core/audits/dobetterweb/inspector-issues.js | description": [
        "audits[inspector-issues].description"
      ],
      "lighthouse-core/audits/dobetterweb/no-document-write.js | title": [
        "audits[no-document-write].title"
      ],
      "lighthouse-core/audits/dobetterweb/no-document-write.js | description": [
        "audits[no-document-write].description"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | failureTitle": [
        "audits[no-vulnerable-libraries].title"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | description": [
        "audits[no-vulnerable-libraries].description"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | displayValue": [
        {
          "values": {
            "itemCount": 1
          },
          "path": "audits[no-vulnerable-libraries].displayValue"
        }
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVersion": [
        "audits[no-vulnerable-libraries].details.headings[0].text"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnVuln": [
        "audits[no-vulnerable-libraries].details.headings[1].text"
      ],
      "lighthouse-core/audits/dobetterweb/no-vulnerable-libraries.js | columnSeverity": [
        "audits[no-vulnerable-libraries].details.headings[2].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | itemSeverityMedium": [
        "audits[no-vulnerable-libraries].details.items[0].highestSeverity"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | title": [
        "audits[js-libraries].title"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | description": [
        "audits[js-libraries].description"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnName": [
        "audits[js-libraries].details.headings[0].text"
      ],
      "lighthouse-core/audits/dobetterweb/js-libraries.js | columnVersion": [
        "audits[js-libraries].details.headings[1].text"
      ],
      "lighthouse-core/audits/dobetterweb/notification-on-start.js | title": [
        "audits[notification-on-start].title"
      ],
      "lighthouse-core/audits/dobetterweb/notification-on-start.js | description": [
        "audits[notification-on-start].description"
      ],
      "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | title": [
        "audits[password-inputs-can-be-pasted-into].title"
      ],
      "lighthouse-core/audits/dobetterweb/password-inputs-can-be-pasted-into.js | description": [
        "audits[password-inputs-can-be-pasted-into].description"
      ],
      "lighthouse-core/audits/dobetterweb/uses-http2.js | title": [
        "audits[uses-http2].title"
      ],
      "lighthouse-core/audits/dobetterweb/uses-http2.js | description": [
        "audits[uses-http2].description"
      ],
      "lighthouse-core/audits/dobetterweb/uses-http2.js | displayValue": [
        {
          "values": {
            "itemCount": 21
          },
          "path": "audits[uses-http2].displayValue"
        }
      ],
      "lighthouse-core/audits/dobetterweb/uses-http2.js | columnProtocol": [
        "audits[uses-http2].details.headings[1].label"
      ],
      "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | title": [
        "audits[uses-passive-event-listeners].title"
      ],
      "lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description": [
        "audits[uses-passive-event-listeners].description"
      ],
      "lighthouse-core/audits/seo/meta-description.js | failureTitle": [
        "audits[meta-description].title"
      ],
      "lighthouse-core/audits/seo/meta-description.js | description": [
        "audits[meta-description].description"
      ],
      "lighthouse-core/audits/seo/http-status-code.js | title": [
        "audits[http-status-code].title"
      ],
      "lighthouse-core/audits/seo/http-status-code.js | description": [
        "audits[http-status-code].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | title": [
        "audits[font-size].title"
      ],
      "lighthouse-core/audits/seo/font-size.js | description": [
        "audits[font-size].description"
      ],
      "lighthouse-core/audits/seo/font-size.js | displayValue": [
        {
          "values": {
            "decimalProportion": 1
          },
          "path": "audits[font-size].displayValue"
        }
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnSource": [
        "audits[font-size].details.headings[0].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | columnSelector": [
        "audits[font-size].details.headings[1].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | columnPercentPageText": [
        "audits[font-size].details.headings[2].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | columnFontSize": [
        "audits[font-size].details.headings[3].text"
      ],
      "lighthouse-core/audits/seo/font-size.js | legibleText": [
        "audits[font-size].details.items[0].source.value"
      ],
      "lighthouse-core/audits/seo/link-text.js | title": [
        "audits[link-text].title"
      ],
      "lighthouse-core/audits/seo/link-text.js | description": [
        "audits[link-text].description"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | title": [
        "audits[crawlable-anchors].title"
      ],
      "lighthouse-core/audits/seo/crawlable-anchors.js | description": [
        "audits[crawlable-anchors].description"
      ],
      "lighthouse-core/audits/seo/is-crawlable.js | title": [
        "audits[is-crawlable].title"
      ],
      "lighthouse-core/audits/seo/is-crawlable.js | description": [
        "audits[is-crawlable].description"
      ],
      "lighthouse-core/audits/seo/robots-txt.js | title": [
        "audits[robots-txt].title"
      ],
      "lighthouse-core/audits/seo/robots-txt.js | description": [
        "audits[robots-txt].description"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | failureTitle": [
        "audits[tap-targets].title"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | description": [
        "audits[tap-targets].description"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | displayValue": [
        {
          "values": {
            "decimalProportion": 0.75
          },
          "path": "audits[tap-targets].displayValue"
        }
      ],
      "lighthouse-core/audits/seo/tap-targets.js | tapTargetHeader": [
        "audits[tap-targets].details.headings[0].text"
      ],
      "lighthouse-core/lib/i18n/i18n.js | columnSize": [
        "audits[tap-targets].details.headings[1].text"
      ],
      "lighthouse-core/audits/seo/tap-targets.js | overlappingTargetHeader": [
        "audits[tap-targets].details.headings[2].text"
      ],
      "lighthouse-core/audits/seo/hreflang.js | title": [
        "audits.hreflang.title"
      ],
      "lighthouse-core/audits/seo/hreflang.js | description": [
        "audits.hreflang.description"
      ],
      "lighthouse-core/audits/seo/plugins.js | title": [
        "audits.plugins.title"
      ],
      "lighthouse-core/audits/seo/plugins.js | description": [
        "audits.plugins.description"
      ],
      "lighthouse-core/audits/seo/canonical.js | title": [
        "audits.canonical.title"
      ],
      "lighthouse-core/audits/seo/canonical.js | description": [
        "audits.canonical.description"
      ],
      "lighthouse-core/audits/seo/manual/structured-data.js | title": [
        "audits[structured-data].title"
      ],
      "lighthouse-core/audits/seo/manual/structured-data.js | description": [
        "audits[structured-data].description"
      ],
      "lighthouse-core/config/default-config.js | performanceCategoryTitle": [
        "categories.performance.title"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryTitle": [
        "categories.accessibility.title"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryDescription": [
        "categories.accessibility.description"
      ],
      "lighthouse-core/config/default-config.js | a11yCategoryManualDescription": [
        "categories.accessibility.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesCategoryTitle": [
        "categories[best-practices].title"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryTitle": [
        "categories.seo.title"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryDescription": [
        "categories.seo.description"
      ],
      "lighthouse-core/config/default-config.js | seoCategoryManualDescription": [
        "categories.seo.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | pwaCategoryTitle": [
        "categories.pwa.title"
      ],
      "lighthouse-core/config/default-config.js | pwaCategoryDescription": [
        "categories.pwa.description"
      ],
      "lighthouse-core/config/default-config.js | pwaCategoryManualDescription": [
        "categories.pwa.manualDescription"
      ],
      "lighthouse-core/config/default-config.js | metricGroupTitle": [
        "categoryGroups.metrics.title"
      ],
      "lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle": [
        "categoryGroups[load-opportunities].title"
      ],
      "lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription": [
        "categoryGroups[load-opportunities].description"
      ],
      "lighthouse-core/config/default-config.js | budgetsGroupTitle": [
        "categoryGroups.budgets.title"
      ],
      "lighthouse-core/config/default-config.js | budgetsGroupDescription": [
        "categoryGroups.budgets.description"
      ],
      "lighthouse-core/config/default-config.js | diagnosticsGroupTitle": [
        "categoryGroups.diagnostics.title"
      ],
      "lighthouse-core/config/default-config.js | diagnosticsGroupDescription": [
        "categoryGroups.diagnostics.description"
      ],
      "lighthouse-core/config/default-config.js | pwaInstallableGroupTitle": [
        "categoryGroups[pwa-installable].title"
      ],
      "lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle": [
        "categoryGroups[pwa-optimized].title"
      ],
      "lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle": [
        "categoryGroups[a11y-best-practices].title"
      ],
      "lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription": [
        "categoryGroups[a11y-best-practices].description"
      ],
      "lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle": [
        "categoryGroups[a11y-color-contrast].title"
      ],
      "lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription": [
        "categoryGroups[a11y-color-contrast].description"
      ],
      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle": [
        "categoryGroups[a11y-names-labels].title"
      ],
      "lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription": [
        "categoryGroups[a11y-names-labels].description"
      ],
      "lighthouse-core/config/default-config.js | a11yNavigationGroupTitle": [
        "categoryGroups[a11y-navigation].title"
      ],
      "lighthouse-core/config/default-config.js | a11yNavigationGroupDescription": [
        "categoryGroups[a11y-navigation].description"
      ],
      "lighthouse-core/config/default-config.js | a11yAriaGroupTitle": [
        "categoryGroups[a11y-aria].title"
      ],
      "lighthouse-core/config/default-config.js | a11yAriaGroupDescription": [
        "categoryGroups[a11y-aria].description"
      ],
      "lighthouse-core/config/default-config.js | a11yLanguageGroupTitle": [
        "categoryGroups[a11y-language].title"
      ],
      "lighthouse-core/config/default-config.js | a11yLanguageGroupDescription": [
        "categoryGroups[a11y-language].description"
      ],
      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle": [
        "categoryGroups[a11y-audio-video].title"
      ],
      "lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription": [
        "categoryGroups[a11y-audio-video].description"
      ],
      "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle": [
        "categoryGroups[a11y-tables-lists].title"
      ],
      "lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription": [
        "categoryGroups[a11y-tables-lists].description"
      ],
      "lighthouse-core/config/default-config.js | seoMobileGroupTitle": [
        "categoryGroups[seo-mobile].title"
      ],
      "lighthouse-core/config/default-config.js | seoMobileGroupDescription": [
        "categoryGroups[seo-mobile].description"
      ],
      "lighthouse-core/config/default-config.js | seoContentGroupTitle": [
        "categoryGroups[seo-content].title"
      ],
      "lighthouse-core/config/default-config.js | seoContentGroupDescription": [
        "categoryGroups[seo-content].description"
      ],
      "lighthouse-core/config/default-config.js | seoCrawlingGroupTitle": [
        "categoryGroups[seo-crawl].title"
      ],
      "lighthouse-core/config/default-config.js | seoCrawlingGroupDescription": [
        "categoryGroups[seo-crawl].description"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesTrustSafetyGroupTitle": [
        "categoryGroups[best-practices-trust-safety].title"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesUXGroupTitle": [
        "categoryGroups[best-practices-ux].title"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesBrowserCompatGroupTitle": [
        "categoryGroups[best-practices-browser-compat].title"
      ],
      "lighthouse-core/config/default-config.js | bestPracticesGeneralGroupTitle": [
        "categoryGroups[best-practices-general].title"
      ],
      "node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__METRICS": [
        "categoryGroups[lighthouse-plugin-publisher-ads-metrics].title"
      ],
      "node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__ADS_PERFORMANCE": [
        "categoryGroups[lighthouse-plugin-publisher-ads-ads-performance].title"
      ],
      "node_modules/lighthouse-plugin-publisher-ads/messages/common-strings.js | GROUPS__ADS_BEST_PRACTICES": [
        "categoryGroups[lighthouse-plugin-publisher-ads-ads-best-practices].title"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | unused-css-rules": [
        "stackPacks[0].descriptions[unused-css-rules]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | modern-image-formats": [
        "stackPacks[0].descriptions[modern-image-formats]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | offscreen-images": [
        "stackPacks[0].descriptions[offscreen-images]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | render-blocking-resources": [
        "stackPacks[0].descriptions[render-blocking-resources]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | unused-javascript": [
        "stackPacks[0].descriptions[unused-javascript]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | uses-long-cache-ttl": [
        "stackPacks[0].descriptions[uses-long-cache-ttl]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | uses-optimized-images": [
        "stackPacks[0].descriptions[uses-optimized-images]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | uses-text-compression": [
        "stackPacks[0].descriptions[uses-text-compression]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | uses-responsive-images": [
        "stackPacks[0].descriptions[uses-responsive-images]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | user-timings": [
        "stackPacks[0].descriptions[user-timings]"
      ],
      "node_modules/lighthouse-stack-packs/packs/next.js.js | preload-lcp-image": [
        "stackPacks[0].descriptions[preload-lcp-image]"
      ]
    }
  }
}
