# 💱 CurrencyConverter

CurrencyConverter is a lightning-fast web application offering instant currency conversions with hourly updated rates. Enjoy a responsive design for seamless use on any device, and an intuitive interface for easy navigation.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Bun](https://bun.sh/) 1.1.20
- [Angular CLI](https://angular.dev/installation#install-angular-cli) 17.2.1

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gabrielpalassi/CurrencyConverter.git
   ```

2. Install dependencies:

   ```bash
   cd CurrencyConverter
   bun run post-clone
   ```

### Running localy

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Start the backend server:

   ```bash
   bun run start
   ```

3. Open another terminal and navigate to the frontend directory:

   ```bash
   cd frontend
   ```

4. Serve the Angular application:

   ```bash
   bun run start
   ```

5. Your browser should automatically open at `http://localhost:4200`, where the app will be accessible.

## Code Quality

To ensure code quality and consistency, the following tools are required and should be run from the root of the repository:

- **Formatting**: Use Prettier to automatically format your code according to the project's style guidelines.

  ```bash
  bun run format
  ```

- **Linting**: Employ ESLint to identify and address code quality issues.

  ```bash
  bun run lint
  ```

- **Format and Lint**: Run both formatting and linting in one step to ensure your code meets all quality standards.

  ```bash
  bun run format-and-lint
  ```

- **Pre-commit**: This script runs before each commit to enforce code quality. It performs formatting checks with Prettier and linting checks with ESLint, in that order. The commit will only proceed if all checks pass.

  ```bash
  bun run pre-commit
  ```

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more information.

Happy converting!
