# Gage Kehoe apps

Public pages for apps that do not need their own marketing site. The only app today is [Letter Box AAC](letter-box/).

The site is static HTML, CSS, and one small script. Upload the files to GitHub Pages, Cloudflare, S3, or any web server that serves `index.html` for a folder. There is no build step, no Node server, and no platform config.

## Run locally

From this folder:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

## URL map

Use these paths at the root of the host. Paste the full `https://…` URL into App Store Connect and Play Console.

| Use | Path | File |
| --- | --- | --- |
| Home, the list of apps | `/` | `index.html` |
| Letter Box AAC marketing URL (App Store) and listing link (Play) | `/letter-box/` | `letter-box/index.html` |
| Support URL (Apple and Google) | `/letter-box/support/` | `letter-box/support/index.html` |
| Privacy policy URL (Apple and Google) | `/letter-box/privacy/` | `letter-box/privacy/index.html` |
| Terms of use | `/letter-box/terms/` | `letter-box/terms/index.html` |
| Account and data deletion URL (Google Play) | `/letter-box/delete-account/` | `letter-box/delete-account/index.html` |

Hosts that serve directory indexes also answer `/letter-box` without the trailing slash. Point the store consoles at the directory URL.

No public Letter Box AAC listing was available to quote, so the pages describe the app in general terms. Match this privacy policy to the App Store privacy labels and the Play Data safety form when you fill those in.

## Strings to personalize

Edit the four empty strings at the top of [`assets/site-config.js`](assets/site-config.js). Leave a value as `""` until you have it. Empty values keep the sentences already written in the HTML. The script only replaces those sentences when a value is a plain email or an `https` URL. With JavaScript off, readers still see the sentences below.

| Key | Replace with | What readers see while it is empty |
| --- | --- | --- |
| `supportEmail` | A plain support address you actually read | A support email is not listed on this page yet. Use the developer contact shown on the Apple App Store or Google Play listing for Letter Box AAC. |
| `legalEntity` | The company or other legal name. This is not a street address. | A company legal name is not published on this site. Gage Kehoe is the developer named for Letter Box AAC. |
| `appleStoreUrl` | The `https` App Store listing URL | Letter Box AAC is being prepared for the Apple App Store and Google Play. This page is the marketing address for both listings. Listing links are not published here yet. |
| `playStoreUrl` | The `https` Google Play listing URL | Same sentence as the Apple link, until either store URL is set. |

A mailing address is intentionally absent. Do not invent one.

The deletion page says requests are completed within 30 days. That sentence is in `letter-box/delete-account/index.html`, under “How long it takes,” if you want a different timeline.

Have a lawyer read the privacy policy and terms before you rely on them.

## Add another app

On the home page, copy one `<li class="app-card">` inside `<ol class="app-list">` in `index.html`. That card is the whole home-page change.

Then copy the `letter-box/` folder as the page pattern (overview, support, privacy, terms, delete-account), and add one `<li>` for the new app in the site header on each page. The header comment marks that list.
