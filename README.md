## Motivation

This project is a way to quickly experiment and figure out the quality of the [monitors/dashboards](https://github.com/OptimalBits/bull#uis) that exist for [bull](https://github.com/OptimalBits/bull).

As of this writing, I set out to evaluate two dashbaords, which seemed most current:
[matador](https://github.com/ShaneK/Matador) and [toureiro](https://github.com/Epharmix/Toureiro)

Refer to `README.md` files in their respective folders for more details:
- monitors/matador/README.md
- monitors/toureiro/README.md
- redis/README.md

## Run it

1. Run Redis: see redis/README.md
1. Run the `matador` dashbaord: see monitors/matador/README.md
    * because bull is baked in as a dependency, you don't need to do anything extra there, unless you want to replace the bull module version to be a more current one
1. Run the `toureiro` dashbaord: see monitors/matador/README.md
    * because bull is baked in as a dependency, you don't need to do anything extra there, unless you want to replace the bull module version to be a more current one

## Observations

I paused work after making the following obeservations:
1. `bull` does not have job specific logs like [kue](https://github.com/Automattic/kue#job-logs) which means that I have to colelct the logs and secure a tunnel to send them to an aggregator like logentries or papertrail or S3 which makes for significant leftover work for gettign a solution into production.
2. `matador` has a tab to allow the user to submit a `New Job` which is pretty cool and handy. No need to write dummy producer code ... well that is until you want to enqueue hundreds and thousands of jobs for stress testing aspects like `sorting` and `page load times` in the dashboard.
3. `matador` and `toureiro` are not using anything close to the latest version of `bull`:
    * `matador` is using `bull@1.1.3` as of this writing
    * `toureiro` is using `bull@0.7.0` as of this writing
    * `bull` is at `3.0.0-rc.2` as of this writing
4. `toureiro` could not be initialized programmatically to accept a redis password and use it. Here's the code I tried which didn't work:

    ```
    var toureiro = require('toureiro');
    var app = toureiro({
    redis: {
        host: process.env.REDIS_HOST
        ,port: process.env.REDIS_PORT
        ,password: process.env.REDIS_PASSWORD
    }
    });
    var server = app.listen(3001, function() {
    console.log('Toureiro is now listening at port 3001...');
    });
    ```
    I kept running into an error: `NOAUTH Authentication required` ... so I removed the code. And settled for booting `toureiro` via [CLI](https://github.com/Epharmix/Toureiro#usage).

That is not to say that there isn't any merit in taking this further but this is a good stoping point for me. Please feel free to fork this project and use it in your own learnings.

## Work Remaining

1. There is additional work in setting up a project where we have to ensure that latest version of `bull` is used by each dashboard. Even then we cannot be sure if that will actually work without testing is manually and looking for signs of trouble. Only after that work can we gain some confidence in taking `bull` and these dashboard into a production environment with us.
1. To make this experiment a little more flexible, the ports for accessing the dashboards could be made configurable instead of being hardcoded to `3000` and `3001`

## Recommendations

1. Use a remote-box: https://training.shoppinpal.com/solution.html
1. Setup your preferred IDE for a 2-way sync of files between local and remote-box, for the project in question. This way you can use IDE as an editor and the remote-box as the executor. Please contribute/share any instructions you come up with for doing this on your IDE.
