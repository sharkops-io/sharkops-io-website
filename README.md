# sharkops-io-website

The source for [sharkops.io](https://sharkops.io), the landing page for the
SharkOps open source projects.

The site is plain HTML and CSS in `site/`, with no build step. Open
`site/index.html` in a browser to preview it.

## Publishing

Every pull request runs the shared secret scan. A push to `master` publishes
`site/` to GitHub Pages through `.github/workflows/ci.yml`.

## Adding a project

Add a card to the matching group under **Projects** in `site/index.html`, using
the repository's GitHub description.

## License

The code in this repository is licensed under the Apache License 2.0
([LICENSE](LICENSE)). The site's written content is licensed under Creative
Commons Attribution 4.0 International ([LICENSE-CONTENT](LICENSE-CONTENT)).
