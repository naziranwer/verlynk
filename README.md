# Weather Application

This project is a weather application developed using React, which retrieves data from the OpenWeatherMap API to present current weather information for specified locations. Users can easily search for cities, view current temperature, weather conditions, and other relevant details. They also have the flexibility to add and monitor multiple cities on their weather dashboard.

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd weather-application`
3. Install dependencies: `npm install` or `yarn install`

## OpenWeatherMap API

This application uses the OpenWeatherMap API to retrieve weather data. You will need to obtain an API key from OpenWeatherMap and replace the placeholder in the code with your actual API key.

## Components

### Form Component

The form component enables users to input city names. It manages the input field state and handles weather data fetched from the API.

### WeatherCard Component

The WeatherCard component displays current temperature, weather conditions, and additional relevant data retrieved from the API for a specific city.

### City Management

Users can add multiple cities to their weather dashboard for convenient weather tracking. The application supports managing multiple cities.

### Error Handling

Robust error handling is implemented for cases such as invalid city names or failed API requests. Appropriate error messages are displayed to the user.

## Responsiveness

The application is designed to be responsive to varying screen sizes and devices for optimal user experience. It ensures a consistent and user-friendly interface across different devices.

## Technologies Used

- React
- Redux for global state management
- Axios for HTTP requests
- Tailwind CSS for styling

## Evaluation Criteria

- **Code Quality:** The code is clean, readable, and well-organized.
- **Error Handling:** Effective error handling and input validation mechanisms are implemented.
- **Testing:** Comprehensive test coverage is provided across various scenarios.
- **Documentation:** Clear and thorough documentation is provided for ease of understanding and maintenance.

## How to Run

To run the application locally, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Obtain an API key from OpenWeatherMap.
3. Replace the placeholder API key in the code with your actual API key.
4. Run the application: `npm start` or `yarn start`
5. Open the application in your browser at `http://localhost:3000`

## Contributors

- [Mohd Nazir Anwer](https://github.com/your_username) - Full Stack Developer

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
