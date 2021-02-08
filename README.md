Instrunctions to run the project:

You must have docker in order to run this project.
If you don't have docker you can download it from https://docs.docker.com/docker-for-windows/install/

1. Build the API image with command:

   docker build -t dinu98/nestjs-api:1.0 .

2. Go into the vuejs-app directory with command:

   cd .\vuejs-app\

3. Build the API image with command:

   docker build -t dinu98/vuejs-app:1.0 .

4. Go back into the initial directory with command:

   cd ..

5. Run the project with command:

   docker-compose up
