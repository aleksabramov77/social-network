# Social Network

A single-page social network built with **React + Redux** while learning front-end architecture.
It was my first large learning project: the history goes step by step from plain components and
CSS modules to Redux, thunks, HOCs, forms, selectors, hooks, lazy loading and a migration to TypeScript.

**Live demo:** https://aleksabramov77.github.io/social-network/

> Built in Sep–Nov 2021 following the [IT-Kamasutra](https://it-kamasutra.com/) React course.
> The back end is the course's public REST API (`social-network.samuraijs.com`), so you need an
> account there to log in.

## Features

- **Authentication**: login and logout via cookies, captcha after failed attempts, redirect of guests to the login page
- **Profile**: view any user's profile, edit your own status inline, upload an avatar, edit profile data with server-side validation errors
- **Users**: paginated user list with follow and unfollow (buttons are disabled while a request is in flight)
- **Posts and messenger**: add posts and messages through validated forms
- **App initialization**: a preloader until the auth check finishes; heavy pages are code-split with `React.lazy` + `Suspense`

## Tech stack

| Area      | Tools                                                                 |
| --------- | --------------------------------------------------------------------- |
| UI        | React 17 (class and function components, hooks), CSS Modules          |
| State     | Redux 4, redux-thunk, reselect, react-redux (`connect`)               |
| Routing   | React Router 5                                                        |
| Forms     | React Final Form (migrated from redux-form)                           |
| API       | Axios with a shared instance (`withCredentials`, API key)             |
| Language  | JavaScript, gradually migrated to TypeScript (reducers, components)   |
| Tests     | Jest, React Testing Library, react-test-renderer                      |
| Tooling   | Create React App, GitHub Pages (`gh-pages`)                           |

## Architecture

```
src/
├── api/          # Axios instance and API groups: usersAPI, profileAPI, authAPI, securityAPI
├── redux/        # Reducers, action creators and thunks per page, selectors, store setup
├── components/   # Header, Navbar and page components (Profile, Users, Messenger, Login, ...)
│   └── common/   # Reusable Paginator, Preloader, form controls
├── hoc/          # withAuthRedirect, withSuspense
├── types/        # Shared TypeScript types
├── utils/        # Validators and helpers
└── __tests__/    # Reducer and component tests
```

Patterns used:

- **Container and presentational components**: containers are connected to the store via `connect`
  and `mapStateToProps`/`mapDispatchToProps`, presentational components only receive props
- **Thunks** hold all side effects; components never call the API directly
- **Higher-order components** composed with `compose` (auth redirect, lazy loading with `Suspense`)
- **Memoized selectors** with reselect, plus `PureComponent` and `React.memo` to avoid extra renders
- **Immutable reducer updates**, covered with unit tests

## What I learned

The commits roughly follow the course lessons, so the history doubles as a learning log:

1. Components, props, routing, CSS Modules
2. Flux and a hand-written store (observer pattern), then Redux and `react-redux`
3. Working with a REST API: Axios, pagination, preloaders, cookies and auth
4. Thunks, HOCs, `compose`, redirects
5. Forms and validation: redux-form, then React Final Form, server-side error handling
6. Performance: reselect, `shouldComponentUpdate`, `PureComponent`, `memo`
7. Hooks (`useState`, `useEffect`), lazy loading, testing
8. Deployment to GitHub Pages and a step-by-step migration to TypeScript

## Getting started

```bash
git clone https://github.com/aleksabramov77/social-network.git
cd social-network
npm install
npm start        # dev server on http://localhost:3000
npm test         # run tests
npm run deploy   # build and publish to GitHub Pages
```

Requires Node.js. The project uses `react-scripts` 4, so on recent Node versions you may need
`NODE_OPTIONS=--openssl-legacy-provider` for `npm start` and `npm run build`.
