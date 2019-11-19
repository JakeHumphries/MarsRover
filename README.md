# MarsRover
Problem Statement:

A squad of robotic rovers is to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and the location is represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ make the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

## Getting Started

To Drop a rover on the grid call drop rover endpoint. 

example: http://localhost:5000/marsRover/createRover?roverID=1&startingX=1&startingY=1&startingDir=N

To move a rover that is currently on the grid call move rover endpoint.

example: http://localhost:5000/marsRover/moveRover?roverID=1&moveInstructions=RM

To clear all rovers off of the grid call the clear rovers endpoint.

example: http://localhost:5000/marsRover/clearRovers

To show all rovers curently on the grid call the show rovers endpoint.

example: http://localhost:5000/marsRover/showRovers

To update the grid size call the update grid endpoint (default is 5x5).

example: http://localhost:5000/marsRover/updateGrid?gridX=10&gridY=10

There is more documentation! please ask Jake Humphries for more details. 

## Prerequisites
nodejs

## Running the tests
Unit tests - unit tests are written with jest. 

run 

```npm test```

integration tests - TBC 

## Coding Style

This project is following Uncle Bobs Clean architecture - [Clean Architecture](https://blog.cleancoder.com/)

MarsRover is using: 

[EsLint](https://eslint.org/)

[Prettier](https://github.com/prettier/prettier)

## Deployment 
github actions
CI
- on push
- builds app in ubuntu with node version 8,9,10
- runs tests

CD
- builds docker image 
- stores docker image on GCP container registry 
- deploys image to kubernetes cluster

## Authors
Jake Humphries - Initial work - Jake Humphries
