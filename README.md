<h2 align="center">GitHub Followers Management API</h2>

___

<p align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-256/github-brand-logo-47401.png" width="100" heigth="100">
  <img src="https://i.dlpng.com/static/png/6210243-follower-instagram-notification-icon-follower-png-512_512_preview.png" width="100" heigth="100">
</p>


<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
    <img src="https://img.shields.io/github/languages/top/lucas-felinto/github-followers-management"/>
    <img src="https://img.shields.io/node/v/nodemon"/>
    <img src="https://img.shields.io/github/last-commit/lucas-felinto/github-followers-management"/>
  </a>
</p>

___

<h4 align="center">
  <a href="#information_source-about">About</a>&nbsp;|&nbsp;
  <a href="#interrobang-reason">Why this project</a>&nbsp;|&nbsp;
  <a href="#seedling-minimal-requirements">Minimal Requirements</a>&nbsp;|&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;|&nbsp;
  <a href="#wrench-installation">Installation</a>&nbsp;|&nbsp;
  <a href="#arrow_right_hook-requests">Requests</a>&nbsp;|&nbsp;
  <a href="#link-how-to-contribute">How To Contribute</a>&nbsp;|&nbsp;
  <a href="#license">License</a>
</h4>

___

## :information_source: About

GitHub Followers Management it's an API to manage your GitHub followers and discover more about they. You can find out, for example, users who's follow you, but you don't follow they back, and find out users you follow, but don't follow you back.
The API uses the GitHub Developers API, it's just provide your GitHub user in the endpoint and discover what you want, you don't need even login at GitHub. 

## :interrobang: Reason

This is a project to help the GitHub community, use and try the GitHub Developers API, besides, use the knowledge at the used technologies to practice.

## :seedling: Minimal Requirements

- [Node v8+](https://nodejs.org/en/docs/) or [Docker](https://docs.docker.com/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/docs/).

## :rocket: Technologies

This API was developed using the following technologies:

- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/pt-br/)
- [Docker](https://docs.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/compose-file/)
- [Swagger](https://swagger.io/docs/specification/about/)
- [GitHub API](https://docs.github.com/)

## :wrench: Installation
```bash
# Cloning the repository
git clone https://github.com/lucas-felinto/github-followers-management.git

# Changing the directory
cd github-followers-management

# Start the application
npm start or docker-compose up
```

## :arrow_right_hook: Requests
- GET `/api/v1/not-follow-you` 
- Returns a users list who don't follow you back
- Example Request: `/api/v1/not-follow-you?user=octocat`
```json
Code: 200 OK
[
  {
    "login": "octocat",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "lucas-felinto",
    "id": 62717182,
    "node_id": "MDQ6VXNlcjYyNzE3MTgy",
    "avatar_url": "https://avatars3.githubusercontent.com/u/62717182?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lucas-felinto",
    "html_url": "https://github.com/lucas-felinto",
    "followers_url": "https://api.github.com/users/lucas-felinto/followers",
    "following_url": "https://api.github.com/users/lucas-felinto/following{/other_user}",
    "gists_url": "https://api.github.com/users/lucas-felinto/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lucas-felinto/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lucas-felinto/subscriptions",
    "organizations_url": "https://api.github.com/users/lucas-felinto/orgs",
    "repos_url": "https://api.github.com/users/lucas-felinto/repos",
    "events_url": "https://api.github.com/users/lucas-felinto/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lucas-felinto/received_events",
    "type": "User",
    "site_admin": false
  }
]
```
- GET `/api/v1/you-not-follow` 
- Returns a users list who follows you, but you don't follow back
- Example Request: `/api/v1/you-not-follow?user=octocat`
```json
Code: 200 OK
[
  {
    "login": "octocat",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user}",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy}",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "lucas-felinto",
    "id": 62717182,
    "node_id": "MDQ6VXNlcjYyNzE3MTgy",
    "avatar_url": "https://avatars3.githubusercontent.com/u/62717182?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lucas-felinto",
    "html_url": "https://github.com/lucas-felinto",
    "followers_url": "https://api.github.com/users/lucas-felinto/followers",
    "following_url": "https://api.github.com/users/lucas-felinto/following{/other_user}",
    "gists_url": "https://api.github.com/users/lucas-felinto/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lucas-felinto/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lucas-felinto/subscriptions",
    "organizations_url": "https://api.github.com/users/lucas-felinto/orgs",
    "repos_url": "https://api.github.com/users/lucas-felinto/repos",
    "events_url": "https://api.github.com/users/lucas-felinto/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lucas-felinto/received_events",
    "type": "User",
    "site_admin": false
  }
]
```

## :link: How To Contribute

- Fork the repository
- Git clone your forked repository ```git clone https://github.com/your-user/github-followers-management.git```
- Create a branch with your feature ```git checkout -b your-branch-name```
- Commiy your changes ```git add . && git commit -m "your commit changes"```
- Push your changes ```git push```
- [Open a pull request in this repository with your branch](https://github.com/lucas-felinto/github-followers-management/pulls)

## License 

This project is under MIT license. See the documentation [LICENSE](LICENSE) for details.
