/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara
 * Created on: Nov 8th
 * This program ...
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.showIcon(IconNames.Silly)

// servo turns 180 degrees
input.onButtonPressed(Button.A, function () {
  robotbit.Servo(servoNumber1, 180)
  basic.clearScreen()

  // show amount turned
  basic.showString('180')
  basic.showIcon(IconNames.SmallSquare)

  // clear screen 
  basic.clearScreen()
  basic.showIcon(IconNames.Silly)
})

// servo turns to 0 degrees
input.onButtonPressed(Button.B, function () {
  robotbit.Servo(servoNumber1, 0)
  basic.clearScreen()
  // show amount turned 
  basic.showString('0')
  basic.showIcon(IconNames.SmallSquare)
  // clear screen
  basic.clearScreen()
  basic.showIcon(IconNames.Silly)
})