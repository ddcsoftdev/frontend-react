
# Frontend React

This repository contains the frontend code for our application built with React, featuring reusable components and a flexible schema for building dynamic UIs. State management is handled using Redux for predictable state updates and centralized application state.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Schema Description](#schema-description)
- [State Management](#state-management)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ddcsoftdev/frontend-react.git
cd frontend-react
npm install
```

## Usage

Start the development server:

```bash
npm start
```

Build the project for production:

```bash
npm run build
```

## Components

Key components used in this project:

- **Screen**: Main container for a page or view.
- **Header**: Includes site logo, navigation links, and user account info.
- **Footer**: Contains site-wide links and copyright info.
- **Sidebar**: Contains navigation links or additional information.
- **Section**: Groups related components.

## Schema Description

The schema defines the structure and components of the UI. It's designed to be flexible and extensible.

### Basic Layout Components

1. **Screen**: Main container for a page or view.
2. **Header**: Includes site logo and navigation links.
3. **Footer**: Contains site-wide links and copyright info.
4. **Sidebar**: Contains navigation links or additional information.
5. **Section**: A container for grouping related components.

### Interactive Components

1. **Button**: Clickable element for actions.
2. **Form**: Contains input fields and submit actions.
3. **Input (Text, Password, Submit, etc.)**: Various input fields within forms.
4. **Table**: Displays data in a tabular format.
5. **Chat**: Interactive messaging component.
6. **Modal**: Popup dialog for additional information or actions.

### Content Display Components

1. **Text**: Simple text display.
2. **Image**: Display images.
3. **Video**: Embedding videos.
4. **List**: Ordered or unordered lists.
5. **Card**: Display content in a card format.

### Advanced Interactive Components

1. **Chart**: Display data visually in charts.
2. **Calendar**: Show dates and events.
3. **Slider**: Interactive slider for selecting values.

### Navigation Components

1. **Navigation Menu**: Primary or secondary navigation links.
2. **Breadcrumbs**: Show the user’s navigation path.
3. **Tabs**: Switch between different views or content.

## State Management

State management is handled using Redux, providing a centralized store for application state and ensuring predictable state updates. Actions and reducers are used to manage and update the state.

## Structure Example

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://webapp.com/page-structure-json",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": ["screen"]
    },
    "title": {
      "type": "string"
    },
    "components": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["header", "footer", "sidebar", "section"]
          },
          "title": { "type": "string" },
          "logo": { "type": "string" },
          "visibility": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": ["user", "admin", "guest", "editor"]
            }
          },
          "components": {
            "type": "array",
            "items": { "$ref": "#" }
          }
        },
        "required": ["type"]
      }
    }
  },
  "required": ["type", "title", "components"]
}
```
