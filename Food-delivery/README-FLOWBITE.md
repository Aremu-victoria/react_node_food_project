Fix for `Cannot find module 'flowbite-react/tailwind'`

What I changed

- Replaced `require('flowbite-react/tailwind')` with the official Tailwind plugin `require('flowbite/plugin')` in `tailwind.config.js`.
- Added `./node_modules/flowbite-react/**/*.js` to the `content` array so Tailwind scans Flowbite React components.
- Installed the `flowbite` package (adds the `flowbite/plugin` entrypoint).

Why

The `flowbite-react` package in this project doesn't provide a `tailwind` entrypoint at `flowbite-react/tailwind`. The official Tailwind plugin is shipped by the `flowbite` package under `flowbite/plugin`. Requiring the plugin from `flowbite` and including the `flowbite-react` files in Tailwind's `content` ensures the plugin loads and Tailwind can tree-shake Flowbite React components.

How to verify

From the `Food-delivery` directory:

- Quick module check:
  node -e "require('flowbite/plugin'); console.log('flowbite plugin loaded')"

- Start dev server:
  npm run dev

- Or build for production:
  npm run build

Notes

- I left a short inline comment in `tailwind.config.js` explaining the content inclusion for `flowbite-react` components.
- If you prefer the previous `flowbite-react/tailwind` API, you could upgrade/downgrade `flowbite-react` to a version that exposes that entrypoint, but the approach used here is robust and matches official Flowbite docs.
