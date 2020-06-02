<template>
  <v-app>
    <v-content>
      <GoogleMap></GoogleMap>
    </v-content>
  </v-app>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: 'App',

  components: {
    GoogleMap,
  },

  data: () => ({
      drive: {
        title: "Drive",
        subtitle: "Manually operate the robocar's speed.",
        slider: {
          value: 0,
          min: -2800,
          max: 2800
        },
        textFields: [
          {
            name: "Target",
            label: "Speed",
            suffix: "mm/sec",
            value: 0,
            fn: "targetSpeed",
            button: {
              text: "Set Speed",
              fn: "setDriveTarget"
            }
          },
          {
            name: "Wheel Encoder FL",
            label: "Speed",
            suffix: "mm/sec",
            value: 0,
            fn: "setWheelEncoderFL"
          },
          {
            name: "Wheel Encoder FR",
            label: "Speed",
            suffix: "mm/sec",
            value: 0,
            fn: ""
          },
          {
            name: "Wheel Encoder RL",
            label: "Speed",
            suffix: "mm/sec",
            value: 0,
            fn: ""
          },
          {
            name: "Wheel Encoder RR",
            label: "Speed",
            suffix: "mm/sec",
            value: 0,
            fn: ""
          },
          {
            name: "Motor Encoder",
            label: "RPM",
            suffix: "cycle/sec",
            value: 0,
            fn: ""
          }
        ]
      },
      steer: {
        title: "Steer",
        subtitle: "Manually operate the steering angle of robocar.",
        slider: {
          value: 0,
          min: -2800,
          max: 2800
        },
        textFields: [
          {
            name: "Target",
            label: "Degrees",
            suffix: "\xB0",
            value: 0,
            fn: "",
            button: {
              text: "Set Angle"
            }
          },
          {
            name: "Servo Angle",
            label: "Angle",
            suffix: "deg",
            value: 0,
            fn: ""
          },
          {
            name: "Servo Temp",
            label: "Temperature",
            suffix: "\xB0C",
            value: 0,
            fn: ""
          },
          {
            name: "Servo Current",
            label: "Current",
            suffix: "mA",
            value: 0,
            fn: ""
          },
          {
            name: "Servo Voltage",
            label: "Voltage",
            suffix: "mV",
            value: 0,
            fn: ""
          }
        ]
      },
      directInput: {
        title: "Direct Input",
        subtitle:
          "Displays the value of the game handle connected to the PC via USB.",
        enabled: false,
        textFields: [
          {
            name: "Steering Input",
            label: "Steer",
            suffix: "",
            value: "",
            fn: ""
          },
          {
            name: "Accelerator Input",
            label: "Accelerator",
            suffix: "",
            value: "",
            fn: ""
          },
          {
            name: "Break Input",
            label: "Break",
            suffix: "",
            value: "",
            fn: ""
          },
          {
            name: "Button Input",
            label: "Button",
            suffix: "",
            value: "",
            fn: ""
          },
          {
            name: "Steering Target",
            label: "Target",
            suffix: "",
            value: "",
            fn: ""
          },
          {
            name: "Velocity Target",
            label: "Target",
            suffix: "",
            value: "",
            fn: ""
          },
          {
            name: "Max Velocity",
            label: "Velocity",
            suffix: "",
            value: 500,
            fn: ""
          }
        ]
      },
      imu: {
        title: "IMU",
        subtitle:
          "Displays the values of gyro sensors and accelorometer received from the RoboCar.",
        textFields: [
          {
            name: "Gyro",
            label: "Value",
            suffix: "deg/sec",
            value: "",
            fn: ""
          },
          {
            name: "AccX",
            label: "X-axis acceleration value",
            suffix: "G",
            value: "",
            fn: ""
          },
          {
            name: "AccY",
            label: "Y-axis acceleration value",
            suffix: "G",
            value: "",
            fn: ""
          },
          {
            name: "AccZ",
            label: "Z-axis acceleration value",
            suffix: "G",
            value: "",
            fn: ""
          }
        ]
      },
      power: {
        title: "Power",
        subtitle: "Displays the power information received from the RoboCar.",
        textFields: [
          {
            name: "Battery Voltage",
            label: "Voltage",
            suffix: "V",
            value: "",
            fn: ""
          }
        ]
      },
      ir: {
        title: "IR Obstacle",
        subtitle:
          "Displays the value of the infrared ranging sensor received from the RoboCar.",
        textFields: [
          {
            name: "IR0",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR1",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR2",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR3",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR4",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR5",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR6",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          },
          {
            name: "IR7",
            label: "Distance",
            suffix: "mm",
            value: "",
            fn: ""
          }
        ]
      },
      thermo: {
        title: "Thermo",
        subtitle:
          "Displays the value of the temperature sensor received from the RoboCar.",
        textFields: [
          {
            name: "FET1",
            label: "Termperature",
            suffix: "\xB0C",
            value: "",
            fn: ""
          },
          {
            name: "FET2",
            label: "Termperature",
            suffix: "\xB0C",
            value: "",
            fn: ""
          }
        ]
      }
  }),
};
</script>
