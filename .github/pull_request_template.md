## Description

### Changes Made
- Created `Dockerfile`:
  - Uses `node:18-alpine` as base image
  - Sets working directory to `/app`
  - Implements layer caching by copying `package.json` and `package-lock.json` first
  - Runs `npm ci` to install dependencies
  - Copies `src/`, `data/`, and `tests/` directories
  - Runs as non-root user (`node`)
  - Includes health check using `node -e "require('./src/index.js')"`
  - Sets default command to `["node", "src/index.js"]`
- Created `docker-compose.yml`:
  - Defines `auth-service` service
  - Builds from Dockerfile in current directory
  - Maps port 3000:3000
  - Sets `NODE_ENV=production` environment variable
- Created `.dockerignore`:
  - Excludes `node_modules`, `.git`, and `*.log` files from Docker builds
- Created `.github/workflows/ci.yml`:
  - Implements CI pipeline with three jobs: lint, build, test
  - Runs on pull requests and pushes to main branch
  - Each job depends on the previous one succeeding
- Updated `package.json`:
  - Added `lint` script for code quality checks

## Purpose

These changes containerize the authentication service and establish automated quality checks to:
- **Enable consistent deployment** across different environments using Docker
- **Optimize build performance** through Docker layer caching
- **Improve security** by running containers as non-root user
- **Automate quality gates** with CI pipeline that validates code before merging
- **Ensure code quality** through automated linting, building, and testing on every PR

## Testing Performed
- [ ] Ran `npm test` and all tests passed
- [ ] Ran `npm run lint` and linting passed
- [ ] Verified Docker build succeeds with `docker build -t auth-service .`
- [ ] Verified Docker image is under 200 MB
- [ ] Tested `docker compose up` runs successfully
- [ ] Manually tested functionality

## Screenshots / Logs

### Test Results
```text
(Paste npm test output here)
```

### Lint Results
```text
(Paste npm run lint output here)
```

### Docker Build
```text
(Paste docker build output or confirmation here)
```

## CI Pipeline Status
- [ ] All CI checks passed (lint, build, test)