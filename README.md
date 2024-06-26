# Travelogue

Travelogue is an travel platform, for sharing and storing collections and user items. This project is crafted using a fine technology stack to ensure a seamless and good user experience. The key technologies employed in this project include MySQL, Laravel, React and bootstrap. it uses Laravel Sanctum for user authentication token and Graph QL for both the Laravel Lighthouse Server and React's Apollo client for data coming from the server.

![Example Screenshot](travelogue-login-1.jpg)

![Example Screenshot](travelogue-profile-1.jpg)

![Example Screenshot](travelogue-activities-1.jpg)


> [!NOTE]
> ### Backend Technologies:

## Laravel: 
The backend of Travelogue is powered by Laravel, a PHP web application framework known for its elegance and simplicity. Laravel provides a solid foundation for building secure, scalable, and feature-rich applications.

## MySQL: 
The project relies on MySQL, a powerful relational database management system, to efficiently store and manage data related to user profiles, posts, photos, and itineraries.

## GraphQL with Laravel Sanctum: 
Travelogue leverages GraphQL for efficient and flexible data querying. Laravel Sanctum is employed for user authentication, ensuring secure access to the platform's features.

## Lighthouse: 
To enhance the interaction between the backend and GraphQL, Travelogue utilizes Lighthouse. Lighthouse is a PHP package that serves as a GraphQL server for Laravel, streamlining the integration of GraphQL into the Laravel ecosystem.

> [!NOTE]
> ### Frontend Technologies:

## React: 
The frontend of Travelogue is developed using React, a popular JavaScript library for building user interfaces. React's component-based architecture facilitates the creation of dynamic and responsive user interfaces.

## Bootstrap: 
Travelogue adopts Bootstrap to ensure a sleek and mobile-friendly design. Bootstrap's CSS and JavaScript components are utilized to enhance the overall visual appeal and user experience of the platform.

## Apollo Client: 
For seamless communication between the frontend and the GraphQL backend, Travelogue employs Apollo Client. This powerful library simplifies state management and data fetching, enabling a smooth and efficient user experience.



> [!NOTE]
> ## Installation
> 1. Clone the repository: `git clone https://github.com/diellidemjaha/taskform.git`
> 2. Navigate to backend folder root
> 3. Install dependencies for Laravel: `composer install`
> 4. Navitage to frontend folder root
> 5. Install dependencies for React: `npm install`
> 6. Set up your database and update the `.env` file with the necessary configurations.
> 7. Run migrations: `php artisan migrate`
> 8. Start the development server: `php artisan serve` for Laravel and `npm start` for React.
> 9. The app will run into `localhost:5173` port of React.

### Key Features:

Authentication: Utilizing Laravel Sanctum and GraphQL, Travelogue ensures secure user authentication, allowing users to access personalized features and data.

Post Creation: Authenticated users can create engaging travel posts, sharing their experiences, insights, and memories with the Travelogue community.

Photo Saving: The platform enables users to save and organize their travel memories by securely storing photos associated with their posts.

Itinerary Publishing: Authenticated users can publish detailed travel itineraries, providing valuable insights and recommendations for fellow travelers.
