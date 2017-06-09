## Run Redis

1. Setup environment variables with their respective values in `.env` file

    ```
    REDIS_PASS=value
    ```
1. `cd redis`
1. Start redis: `. ./setenv.sh && docker-compose up`

## Reference

* Instructions from https://github.com/dockerfile/redis were used to create the `docker-compose.yml` file
