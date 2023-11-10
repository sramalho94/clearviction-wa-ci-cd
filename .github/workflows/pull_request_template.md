name: Dependency Check

on:
  pull_request:
    branches:
      - main

jobs:
  check_dependencies:
    runs-on: ubuntu-latest

    steps:
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Install Dependencies
        run: npm install

      - name: Check for Dependency Issues
        run: npm audit > issues/issues-file.txt || true

      - name: Comment on PR with Issues
        uses: actions/github-script@0.9.0
        with:
          script: |
            const fs = require('fs');
            const issues = fs.readFileSync('issues/issues-file.txt', 'utf-8');
            if (!issues.includes("found 0 vulnerabilities")) {
              github.issues.createComment({
                issue_number: context.issue.number,
                owner: context.repo.owner,
                repo: context.repo.repo,
                body: `PR has dependency issues:\n${issues}`,
              });
            }
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      

      - name: Check for Issues and Reject PR
        run: |
            if ! grep -q "found 0 vulnerabilities" issues/issues-file.txt; then
              echo "Dependency issues found. Rejecting PR."
              exit 1
            fi