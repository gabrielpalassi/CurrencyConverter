# 💱 CurrencyConverter

CurrencyConverter is a web application that facilitates seamless currency conversion, offering real-time exchange rates and a user-friendly experience.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Bun](https://bun.sh/)
- [Angular CLI](https://angular.dev/installation#install-angular-cli)

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

- **Formatting**: Automatically format code using Prettier to adhere to the project's style guidelines.

  ```bash
  bun run format
  ```

- **Linting**: Check for and resolve code quality issues using ESLint.

  ```bash
  bun run lint
  ```

- **Pre-commit**: This script runs before each commit to enforce code quality. It performs formatting with Prettier and linting with ESLin, in that order. The commit will only proceed if all checks pass.

  ```bash
  bun run pre-commit
  ```

## License

This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- Special thanks to [Open Exchange Rates](https://openexchangerates.org/) for providing exchange rate data.

Happy converting!
