# Gage Kehoe apps

Public pages for apps that do not need their own marketing site. The only app today is [Letter Box AAC](letter-box/).

The site is static HTML, CSS, self-hosted fonts, and one small script. There is no build step and no server to run in production. Internal links are root-relative (`/letter-box/`, `/assets/site.css`). The base path is `/`, the root of the domain, which is how a custom domain on GitHub Pages serves this folder.

Home (`/`) is only the list of apps. Each app’s overview, support, privacy, terms, and deletion pages live under that app’s folder.

## Run locally

From this folder:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/). Serve this folder itself. Root-relative links need the site at the host root, the same way the custom domain will.

## GitHub Pages

Publish the files in this folder. `index.html` sits next to this README, so the Pages folder is `/ (root)`. `.nojekyll` is already here so Pages serves the files as they are.

1. Keep the repository public.
2. Merge these files onto the branch you want to publish. After this pull request merges, that branch is `main`.
3. On GitHub, open the repository, then Settings, then Pages.
4. Under Build and deployment, set Source to Deploy from a branch.
5. Choose that branch, and folder `/ (root)`. Save.

The store consoles should use the custom domain below, not `https://gagekehoe.github.io/gagekehoe/`. That project address is a subpath, and these root-relative links are written for the domain root.

## Custom domain

Replace `YOUR-DOMAIN` with the hostname you own. This file does not name one.

Tell GitHub the hostname in one of these ways. Either one writes a `CNAME` file at the publishing root, next to `index.html`.

- Add a file named `CNAME` in this folder. One line, the hostname only, no `https://`:

  ```
  YOUR-DOMAIN
  ```

- Or, on Settings → Pages, enter `YOUR-DOMAIN` in Custom domain and save. Leave the `CNAME` file GitHub commits. The file holds one hostname.

DNS, at the registrar. For this repository the GitHub host is `gagekehoe.github.io`.

- Apex (`YOUR-DOMAIN`): four `A` records on `@` — `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`. For IPv6, four `AAAA` records on `@` — `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
- A subdomain such as `www.YOUR-DOMAIN`: a `CNAME` record for that host, pointing at `gagekehoe.github.io`.

The hostname in `CNAME` is the one the site answers as. Point any other hostname at the same records if it should redirect there.

HTTPS: after DNS matches those records, GitHub requests a certificate. When Settings → Pages shows the certificate is ready, turn on Enforce HTTPS. Wait for the certificate before enforcing HTTPS. If the domain has CAA records, one of them must allow `letsencrypt.org`.

## URL map

Paste `https://YOUR-DOMAIN` plus the path into App Store Connect and Play Console.

| Use | Path | File |
| --- | --- | --- |
| Home, the list of apps | `/` | `index.html` |
| Letter Box AAC marketing URL (App Store) and listing link (Play) | `/letter-box/` | `letter-box/index.html` |
| Support URL (Apple and Google) | `/letter-box/support/` | `letter-box/support/index.html` |
| Privacy policy URL (Apple and Google) | `/letter-box/privacy/` | `letter-box/privacy/index.html` |
| Terms of use | `/letter-box/terms/` | `letter-box/terms/index.html` |
| Account and data deletion URL (Google Play) | `/letter-box/delete-account/` | `letter-box/delete-account/index.html` |

Pages also answers `/letter-box` without the trailing slash. Point the store consoles at `https://YOUR-DOMAIN/letter-box/` and the other directory URLs.

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
