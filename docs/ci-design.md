# CI Pipeline Design

## 1. Which three stages will your pipeline include, and what does each stage do?

1. **Lint Stage**: Check code style and formatting rules (ensures code follows standards)
2. **Build Stage**: Build the Docker image from the Dockerfile (ensures the app can be containerized)
3. **Test Stage**: Run the test suite with `npm test` (ensures all tests pass)

## 2. What event(s) should trigger the pipeline?

- **Pull Requests**: Trigger on any PR to the `main` branch
- **Push to main**: (Optional) Trigger when code is pushed directly to main

## 3. What is your quality gate — i.e., under what conditions should a PR be blocked?

A PR should be blocked if:
- Linting fails (code doesn't follow style rules)
- Docker build fails (Dockerfile has errors or image can't be built)
- Tests fail (any test in `npm test` fails)

## 4. How will you ensure the pipeline finishes in under 10 minutes?

- Use Docker layer caching to speed up builds
- Run stages in parallel where possible
- Use lightweight base image (`node:18-alpine`)
- Keep dependencies minimal