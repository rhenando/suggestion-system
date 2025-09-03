# Project Structure

suggestion-system
├── .next
│   ├── cache
│   │   ├── swc
│   │   │   └── plugins
│   │   │       └── windows_x86_64_18.0.0
│   │   ├── webpack
│   │   │   ├── client-development
│   │   │   │   ├── 0.pack.gz
│   │   │   │   ├── 1.pack.gz
│   │   │   │   ├── 2.pack.gz
│   │   │   │   ├── 3.pack.gz
│   │   │   │   ├── 4.pack.gz
│   │   │   │   ├── 5.pack.gz
│   │   │   │   ├── index.pack.gz
│   │   │   │   └── index.pack.gz.old
│   │   │   └── server-development
│   │   │       ├── 0.pack.gz
│   │   │       ├── 1.pack.gz
│   │   │       ├── 2.pack.gz
│   │   │       ├── 3.pack.gz
│   │   │       ├── 4.pack.gz
│   │   │       ├── 5.pack.gz
│   │   │       ├── 6.pack.gz
│   │   │       ├── index.pack.gz
│   │   │       └── index.pack.gz.old
│   │   ├── .rscinfo
│   │   └── next-devtools-config.json
│   ├── server
│   │   ├── app
│   │   │   ├── page_client-reference-manifest.js
│   │   │   └── page.js
│   │   ├── vendor-chunks
│   │   │   ├── @radix-ui.js
│   │   │   ├── @swc.js
│   │   │   ├── class-variance-authority.js
│   │   │   ├── clsx.js
│   │   │   ├── lucide-react.js
│   │   │   ├── next.js
│   │   │   └── tailwind-merge.js
│   │   ├── app-paths-manifest.json
│   │   ├── interception-route-rewrite-manifest.js
│   │   ├── middleware-build-manifest.js
│   │   ├── middleware-manifest.json
│   │   ├── middleware-react-loadable-manifest.js
│   │   ├── next-font-manifest.js
│   │   ├── next-font-manifest.json
│   │   ├── pages-manifest.json
│   │   ├── server-reference-manifest.js
│   │   ├── server-reference-manifest.json
│   │   └── webpack-runtime.js
│   ├── static
│   │   ├── chunks
│   │   │   ├── app
│   │   │   │   ├── layout.js
│   │   │   │   └── page.js
│   │   │   ├── _app-pages-browser_node_modules_next_dist_client_dev_noop-turbopack-hmr_js.js
│   │   │   ├── app-pages-internals.js
│   │   │   ├── main-app.js
│   │   │   ├── polyfills.js
│   │   │   └── webpack.js
│   │   ├── css
│   │   │   └── app
│   │   │       └── layout.css
│   │   ├── development
│   │   │   ├── _buildManifest.js
│   │   │   └── _ssgManifest.js
│   │   ├── media
│   │   │   ├── 26a46d62cd723877-s.woff2
│   │   │   ├── 55c55f0601d81cf3-s.woff2
│   │   │   ├── 581909926a08bbc8-s.woff2
│   │   │   ├── 8e9860b6e62d6359-s.woff2
│   │   │   ├── 97e0cb1ae144a2a9-s.woff2
│   │   │   ├── df0a9ae256c0569c-s.woff2
│   │   │   └── e4af272ccee01ff0-s.p.woff2
│   │   └── webpack
│   │       └── 633457081244afec._.hot-update.json
│   ├── types
│   │   ├── app
│   │   │   ├── layout.ts
│   │   │   └── page.ts
│   │   ├── cache-life.d.ts
│   │   ├── package.json
│   │   └── routes.d.ts
│   ├── app-build-manifest.json
│   ├── build-manifest.json
│   ├── package.json
│   ├── prerender-manifest.json
│   ├── react-loadable-manifest.json
│   ├── routes-manifest.json
│   └── trace
├── app
│   ├── auth
│   │   ├── login
│   │   │   └── page.jsx
│   │   └── register
│   ├── components
│   ├── dashboard
│   │   ├── admin
│   │   │   └── page.jsx
│   │   ├── employee
│   │   │   └── page.jsx
│   │   ├── executive
│   │   │   └── page.jsx
│   │   └── manager
│   │       └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components
│   └── ui
│       ├── accordion.jsx
│       ├── alert-dialog.jsx
│       ├── alert.jsx
│       ├── aspect-ratio.jsx
│       ├── avatar.jsx
│       ├── badge.jsx
│       ├── breadcrumb.jsx
│       ├── button.jsx
│       ├── calendar.jsx
│       ├── card.jsx
│       ├── carousel.jsx
│       ├── chart.jsx
│       ├── checkbox.jsx
│       ├── collapsible.jsx
│       ├── command.jsx
│       ├── context-menu.jsx
│       ├── dialog.jsx
│       ├── drawer.jsx
│       ├── dropdown-menu.jsx
│       ├── form.jsx
│       ├── hover-card.jsx
│       ├── input-otp.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── menubar.jsx
│       ├── navigation-menu.jsx
│       ├── pagination.jsx
│       ├── popover.jsx
│       ├── progress.jsx
│       ├── radio-group.jsx
│       ├── resizable.jsx
│       ├── scroll-area.jsx
│       ├── select.jsx
│       ├── separator.jsx
│       ├── sheet.jsx
│       ├── sidebar.jsx
│       ├── skeleton.jsx
│       ├── slider.jsx
│       ├── sonner.jsx
│       ├── switch.jsx
│       ├── table.jsx
│       ├── tabs.jsx
│       ├── textarea.jsx
│       ├── toggle-group.jsx
│       ├── toggle.jsx
│       └── tooltip.jsx
├── hooks
│   └── use-mobile.js
├── lib
│   └── utils.js
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .gitignore
├── components.json
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── postcss.config.mjs
