# Fitness App

## Table of Contents
- [Introduction](#introduction)
- [Preview](#preview)
- [Links](#links)
- [Features](#features)
- [API Used](#api-used)
- [Built With](#built-with)
- [Installation](#installation)
- [Public Info](#public-info)
- [Acknowledgments](#acknowledgments)

###  Introduction
Fitness App is a web application designed to help users track and improve their fitness routines. The app provides a variety of exercises, detailed instructions, and video demonstrations to ensure users can perform exercises correctly and safely.

### Preview
![](/public/fitness-app.png)

### Links

- Solution URL: [Github Repository](https://github.com/Hemazyn/fitness-app.git)
- Live Site URL: [Vercel Link](https://devemma-exercise.netlify.app)

###  Features
- **Exercise Search**: Find exercises based on body parts and equipment.
- **Detailed Exercise Information**: View detailed instructions and videos for each exercise.
- **Similar Exercises**: Discover exercises that target the same muscle groups.
- **Responsive Design**: The app is fully responsive and works on all devices.

### API Used
This app makes use of the [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) from RapidAPI. The ExerciseDB API provides a database of 1300+ exercises with information on body parts, target muscles, necessary equipment, and animations for form and follow-through.

To use the API, you need to sign up for an API key from RapidAPI and add it to your environment variables. Follow these steps:

1. Sign up on RapidAPI and subscribe to the ExerciseDB API.
2. Add your API key to the .env.local file in the project root:

```Copy code
REACT_APP_EXERCISEDB_API_KEY=your_api_key_here
```

### Built With
- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Material-UI**: A popular React UI framework.
- **Emotion**: A library designed for writing css styles with JavaScript.
- **RapidAPI**: A platform for accessing APIs, used here for the ExerciseDB API.
- **React Horizontal Scrolling Menu**: A library for horizontal scrolling components.
- **React Loader Spinner**: A library for loading spinners in React.

### Installation
To get started with the Fitness App, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Hemazyn/fitness-app.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd fitness-app
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```

### Usage
To start the development server, run:
```bash
npm start
```

### Public Info
- Website - [Emmanuel Tofumi](https://devemma.netlify.app)
- Twitter - [@imanuel_tofunmi](https://twitter.com/imanuel_tofunmi)

### Acknowledgments
- ExerciseDB API: Thanks to [Justin](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) for providing an excellent database of exercises.
- [Material-UI Team](https://mui.com/): For the comprehensive and easy-to-use UI components.
- [React Team](https://react.dev/): For creating a powerful and flexible JavaScript library for building user interfaces.