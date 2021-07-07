const firstDayMockData = [
  {
    dt: 1595203200,
    main: {
      temp: 292.87,
      feels_like: 295.37,
      temp_min: 292.85,
      temp_max: 292.87,
      pressure: 1003,
      sea_level: 1003,
      grnd_level: 862,
      humidity: 94,
      temp_kf: 0.02,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 0.87,
      deg: 84,
    },
    visibility: 1343,
    pop: 1,
    rain: {
      "3h": 4.01,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-07-20 00:00:00",
  },
  {
    dt: 1595214000,
    main: {
      temp: 292.95,
      feels_like: 295.37,
      temp_min: 292.95,
      temp_max: 292.95,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 863,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.04,
      deg: 102,
    },
    visibility: 2124,
    pop: 1,
    rain: {
      "3h": 10.12,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-07-20 03:00:00",
  },
  {
    dt: 1595224800,
    main: {
      temp: 293.05,
      feels_like: 295.53,
      temp_min: 293.05,
      temp_max: 293.05,
      pressure: 1004,
      sea_level: 1004,
      grnd_level: 863,
      humidity: 94,
      temp_kf: 0,
    },
    weather: [
      {
        id: 502,
        main: "Rain",
        description: "heavy intensity rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.01,
      deg: 89,
    },
    visibility: 3826,
    pop: 1,
    rain: {
      "3h": 15.14,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-07-20 06:00:00",
  },
  {
    dt: 1595235600,
    main: {
      temp: 293.57,
      feels_like: 296.59,
      temp_min: 293.57,
      temp_max: 293.57,
      pressure: 1003,
      sea_level: 1003,
      grnd_level: 862,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 0.35,
      deg: 92,
    },
    visibility: 10000,
    pop: 0.92,
    rain: {
      "3h": 5.83,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-07-20 09:00:00",
  },
  {
    dt: 1595246400,
    main: {
      temp: 293.79,
      feels_like: 295.87,
      temp_min: 293.79,
      temp_max: 293.79,
      pressure: 1003,
      sea_level: 1003,
      grnd_level: 862,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 1.72,
      deg: 130,
    },
    visibility: 10000,
    pop: 0.92,
    rain: {
      "3h": 0.43,
    },
    sys: {
      pod: "d",
    },
    dt_txt: "2020-07-20 12:00:00",
  },
  {
    dt: 1595257200,
    main: {
      temp: 293.07,
      feels_like: 295.14,
      temp_min: 293.07,
      temp_max: 293.07,
      pressure: 1005,
      sea_level: 1005,
      grnd_level: 864,
      humidity: 92,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: {
      all: 85,
    },
    wind: {
      speed: 1.39,
      deg: 129,
    },
    visibility: 10000,
    pop: 0.73,
    rain: {
      "3h": 0.42,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2020-07-20 15:00:00",
  },
  {
    dt: 1595268000,
    main: {
      temp: 292.88,
      feels_like: 294.88,
      temp_min: 292.88,
      temp_max: 292.88,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 865,
      humidity: 91,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: {
      all: 91,
    },
    wind: {
      speed: 1.27,
      deg: 105,
    },
    visibility: 10000,
    pop: 0.95,
    rain: {
      "3h": 1,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2020-07-20 18:00:00",
  },
  {
    dt: 1595278800,
    main: {
      temp: 292.57,
      feels_like: 294.84,
      temp_min: 292.57,
      temp_max: 292.57,
      pressure: 1006,
      sea_level: 1006,
      grnd_level: 864,
      humidity: 93,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 0.91,
      deg: 95,
    },
    visibility: 10000,
    pop: 1,
    rain: {
      "3h": 2.36,
    },
    sys: {
      pod: "n",
    },
    dt_txt: "2020-07-20 21:00:00",
  },
];

export default firstDayMockData