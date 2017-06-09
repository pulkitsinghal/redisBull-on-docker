## Run Monitor

1. Setup environment variables with their respective values in `.env` file

    ```
    REDIS_HOST=value
    REDIS_PORT=value
    REDIS_PASSWORD=value
    ```
1. `cd monitors/toureiro`
1. Start dashboard locally without docker:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      ./node_modules/.bin/toureiro 3001 --rh ${REDIS_HOST} --pass ${REDIS_PASSWORD}
    ```
1. OR, start dashboard with docker:

    ```
    npm install && \
      chmod 744 setenv.sh && \
      . ./setenv.sh && \
      docker-compose up
    ```
1. Access the dashboard at `http://localhost:3001` or `http://<your_host>:3001`
