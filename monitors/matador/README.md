## Run Monitor

1. Setup environment variables with their respective values in `.env` file

    ```
    REDIS_HOST=value
    REDIS_PORT=value
    REDIS_PASSWORD=value
    ```
1. `cd monitors/matador`
1. Start dashboard locally without docker:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      node monitor.js
    ```
1. OR, start dashboard with docker:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      docker-compose up
    ```
1. Access the dashboard at `http://localhost:3000` or `http://<your_host>:3000`
