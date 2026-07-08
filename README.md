# cicd-githubacc-with-node

A simple Node.js sample project designed for GitHub Actions CI/CD testing.

## What it includes

- `app.js` — a minimal HTTP server with a health endpoint
- `test/test.js` — built-in Node.js tests using `assert`
- `Dockerfile` — container build definition
- `k8s-deployment.yml` — Kubernetes deployment/service manifest
- GitHub Actions workflow for build, test, Docker push, and deploy

## Quick start

1. Install dependencies:

```bash
npm install
```

2. Run tests locally:

```bash
npm test
```

3. Start the app locally:

```bash
npm start
```

4. Open `http://localhost:3000`.

## GitHub Actions workflow

The workflow runs on `push` and `pull_request` to `main`.

On `main` push it will:

- run `npm ci`
- run tests
- run `npm run build`
- log in to Docker registry
- build and push Docker image
- deploy via SSH using `kubectl apply`

## Required repository secrets

Create these secrets in GitHub settings for the repository:

- `DOCKER_REGISTRY` — Docker registry hostname (for example `ghcr.io` or `docker.io`)
- `DOCKER_USERNAME` — Docker registry username
- `DOCKER_PASSWORD` — Docker registry password or token
- `SSH_HOST` — host/IP of deployment server
- `SSH_USER` — SSH user for deployment
- `SSH_PRIVATE_KEY` — private SSH key for the deployment user

## Notes

- The workflow uses `kubectl apply -f k8s-deployment.yml` on the remote host.
- Ensure the remote host has `kubectl` configured for the target cluster.
- If the container image is hosted in a private registry, ensure the cluster can pull it.
