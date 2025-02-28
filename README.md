# React + Vite

# Workflow Editor

## Overview
The **Workflow Editor** is a React-based component that allows users to create, edit, and manage workflow nodes. Each node consists of a title, description, action type, and an optional reminder feature. The editor provides functionality for adding, editing, and deleting workflow nodes.

## Features
- Add workflow nodes with title, description, and action type.
- Edit existing nodes.
- Delete workflow nodes.
- Set a reminder for nodes (WhatsApp reminder feature included).
- Smooth animations using Framer Motion.

## Technologies Used
- React.js
- Framer Motion (for animations)
- Lucide React (for icons)
- React Icons (for additional icons like WhatsApp)

## Limitations
🚨 **This component is not fully responsive yet.**

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the project:
   ```sh
   npm start
   ```

## Future Improvements
- Make the UI fully responsive for all screen sizes.
- Add drag-and-drop functionality for reordering nodes.
- Improve reminder notifications.
- Enhance the styling and UI experience.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
