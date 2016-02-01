# mon-it
Website monitoring tool


## Docker
There is the available option to run your development environment as a set of docker containers.

There is a docker-compose file which defines the behaviour of all of this but will require docker-compose to be installed.

https://docs.docker.com/compose/install/

You will need to alter your .env file, a docker version has been provided
```bash
cp .env.docker .env
```

```bash
docker-compose up
```

This will start the following containers:
- php ( This contains php, nodejs, phpfpm and nginx )
- mariadb ( A mysql instance )

Once these have all been successfully downloaded and launched their names should be displayed in the following format
```
<folder of project>_<name of container>_<number of container>
```

This is important because running any command ( apart from git and docker commands ) against the project will need to be done from inside of the php container.

You may open a shell using the following command:
```bash
docker exec -it monit_php_1 bash
```
This command follows the previously described naming convention.

From here the base minimum the project needs to run properly from a fresh install will be:
```bash
php composer.phar install
php artisan migrate
```
