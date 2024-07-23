# clone this repositry
https://github.com/yogesh976398/user-task-management-react

## `install node v18.13.0`

### `install npm`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## CI/CD Pipeline

This repository uses GitHub Actions to implement a CI/CD pipeline, ensuring continuous integration and deployment.

### Workflow Description

The GitHub Actions workflow is defined in the `.github/workflows/ci-cd.yml` file and includes the following steps:

1. **Trigger Events:**
   - The workflow is triggered on pushes to the `master` branch.
   - The workflow is also triggered on pull requests to the `master` branch.

2. **Jobs:**
   - **Build:**
     - The job runs on an `ubuntu-latest` runner.
     - Steps within the job:
       1. Checkout the code from the repository.
       2. Set up Node.js and install frontend dependencies.
       3. Run tests to ensure the application is working correctly.
       4. Build the application for production.
       5. Deploy the build to GitHub Pages if the branch is `master`.

### CI/CD Steps

1. **Continuous Integration:**
   - Automatically triggered on code changes.
   - Ensures that the codebase remains functional by running tests and builds.

2. **Continuous Deployment:**
   - Automatically deploys to GitHub Pages when changes are pushed to the `master` branch.
   - Ensures that the latest changes are always live on the production environment.

### How It Works

1. **On Push or Pull Request:**
   - The workflow is triggered.
   - The code is checked out and dependencies are installed.
   - Tests are run to ensure the functionality of the application.
   - The code is built for production.

2. **On Successful CI:**
   - If the branch is `master`, the code is automatically deployed to GitHub Pages.
   - This ensures that the production environment always has the latest version of the code.

### Setting Up the CI/CD Pipeline

1. **GitHub Pages:**
   - Ensure your repository is set up to use GitHub Pages.
   - Go to the repository settings and enable GitHub Pages from the `gh-pages` branch (created by the workflow).

2. **Add Secrets to GitHub:**
   - No additional secrets are needed for deploying to GitHub Pages with the provided action.

This setup ensures that any changes to the codebase are automatically tested and deployed, providing a seamless integration and deployment process.


