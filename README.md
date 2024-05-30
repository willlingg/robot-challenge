# Robot Challenge

The Robot Challenge is a project to simulate a toy robot moving on a 5x5 unit tabletop. The robot can be controlled using specific commands to move, rotate, and report its position.

#### Table of Contents

[Technology Used](#technology-used)

[Running the Application](#running-the-application)

[Running in Docker](#running-in-docker)

[Running the Tests](#running-the-tests)

[Controlling the Robot](#controlling-the-robot)

[Architectural Decisions](#architectural-decisions)

## Technology Used

- Typescript
- Node.js
- Jest

## Running the application

1. **Clone the repository:**

   ```sh
   git clone https://github.com/willlingg/robot-challenge.git
   cd robot-challenge
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Build the application:**

   ```sh
   npm run build
   ```

4. **Start the application:**

   ```sh
   npm start
   ```

## Running in Docker

1. **Build the Docker Image:**

   ```sh
    docker build -t robot-challenge .
   ```

2. **Run the Docker container:**

   ```sh
   docker run -it -p 3000:3000 robot-challenge
   ```

## Running the Tests

The command to run the test suite is `npm run test`.

You can also run with coverage with `npm run test:coverage`

## Controlling the Robot

- `PLACE X,Y,F` - Places the robot on the table at position (X,Y) facing direction F (NORTH, EAST, SOUTH, WEST)
- `MOVE` - Moves the robot one unit forward in the direction it is currently facing
- `LEFT` - Rotates the robot 90 degrees to the left
- `RIGHT` - Rotates the robot 90 degrees to the right
- `REPORT` - Outputs the current position and direction of the robot

Example of commands:

```plaintext
> PLACE 0,0,NORTH
> LEFT
> RIGHT
> MOVE
> REPORT
0,1,NORTH
```

# Architectural Decisions

## File Structure

This file structure is designed to enhance code organization, maintainability, and scalability. By separating concerns, promoting modularity, and supporting a clean testing strategy, the structure helps ensure that the project remains manageable as it grows and evolves. Each component and its related logic are isolated, which simplifies development, debugging, and future enhancements.

## Input buffering

I've implemented a buffer to gracefully handle large/rapid inputs. This ensures that all commands are processed sequentially without overwhelming the system
