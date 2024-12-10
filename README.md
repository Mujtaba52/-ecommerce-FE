# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# E-commerce Frontend with React + TypeScript + Vite

This project is a modern e-commerce frontend application built using React, TypeScript, and Vite. It provides a clean and intuitive interface for users, with essential functionalities like product browsing and cart management.

## Key Features

- **React**: Fast and modular UI development.
- **TypeScript**: Enhances code quality and maintainability.
- **Redux Toolkit**: For state management.
- **React Router DOM**: For seamless navigation.
- **TailwindCSS**: Provides a utility-first CSS framework.
- **React Query**: Simplifies server-state management and data fetching.

---

## ⚡️ Quick Install

### Run the Project Locally

```bash
# Clone the repository
git clone https://github.com/your-repo/ecommerce-fe.git

# Navigate to the project directory
cd ecommerce-fe

# Install the dependencies
npm install

# Set up the environment variable
echo "VITE_API_URL=https://api.mujtaba-demo.online/" > .env

# Start the development server
npm run dev
```

### Run the Project on Production

```bash
# Build the application
npm run build

# Serve the built files
npm run preview
```

## 📖 Documentation
### Project Description
This e-commerce frontend application is designed to provide users with a seamless shopping experience. Built with scalability in mind, it currently includes core functionalities such as product browsing and cart management. The purpose of this application is to serve as the foundation for a larger e-commerce platform, with plans to integrate advanced features like AI chatbot support for product inquiries in the future.
