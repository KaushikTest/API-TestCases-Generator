
export function caseWithAllPropertyMandates() {
  return {
    "parameters": [
      {
        "name": "username",
        "type": String,
        "mandatory": true
      },
      {
        "name": "age",
        "type": Number,
        "mandatory": true,
        "minValue": 0,
        "maxValue": 120
      },
      {
        "name": "isSubscribed",
        "type": Boolean,
        "mandatory": true
      },
      {
        "name": "address",
        "type": Object,
        "mandatory": true
      },
      {
        "name": "hobbies",
        "type": Array,
        "mandatory": true
      }
    ]
  }
}

export function caseWithAllStringPropertyNotMandates(){
  return {
    "parameters": [
      {
        "name": "username",
        "type": String,
        "mandatory": false
      },
      {
        "name": "age",
        "type": Number,
        "mandatory": true,
        "minValue": 0,
        "maxValue": 120
      },
      {
        "name": "isSubscribed",
        "type": Boolean,
        "mandatory": true
      },
      {
        "name": "address",
        "type": Object,
        "mandatory": true
      },
      {
        "name": "hobbies",
        "type": Array,
        "mandatory": true
      }
    ]
  }
}

export function caseWithAllNumberPropertyNotMandates(){
  return {
    "parameters": [
      {
        "name": "username",
        "type": String,
        "mandatory": true
      },
      {
        "name": "age",
        "type": Number,
        "mandatory": false,
        "minValue": 0,
        "maxValue": 120
      },
      {
        "name": "isSubscribed",
        "type": Boolean,
        "mandatory": true
      },
      {
        "name": "address",
        "type": Object,
        "mandatory": true
      },
      {
        "name": "hobbies",
        "type": Array,
        "mandatory": true
      }
    ]
  }
}

export function caseWithAllBooleanPropertyNotMandates(){
  return {
    "parameters": [
      {
        "name": "username",
        "type": String,
        "mandatory": true
      },
      {
        "name": "age",
        "type": Number,
        "mandatory": true,
        "minValue": 0,
        "maxValue": 120
      },
      {
        "name": "isSubscribed",
        "type": Boolean,
        "mandatory": false
      },
      {
        "name": "address",
        "type": Object,
        "mandatory": true
      },
      {
        "name": "hobbies",
        "type": Array,
        "mandatory": true
      }
    ]
  }
}

export function caseWithAllObjectPropertyNotMandates(){
  return {
    "parameters": [
      {
        "name": "username",
        "type": String,
        "mandatory": true
      },
      {
        "name": "age",
        "type": Number,
        "mandatory": true,
        "minValue": 0,
        "maxValue": 120
      },
      {
        "name": "isSubscribed",
        "type": Boolean,
        "mandatory": true
      },
      {
        "name": "address",
        "type": Object,
        "mandatory": false
      },
      {
        "name": "hobbies",
        "type": Array,
        "mandatory": true
      }
    ]
  }
}

export function caseWithAllArrayPropertyNotMandates(){
  return {
    "parameters": [
      {
        "name": "username",
        "type": String,
        "mandatory": true
      },
      {
        "name": "age",
        "type": Number,
        "mandatory": true,
        "minValue": 0,
        "maxValue": 120
      },
      {
        "name": "isSubscribed",
        "type": Boolean,
        "mandatory": true
      },
      {
        "name": "address",
        "type": Object,
        "mandatory": true
      },
      {
        "name": "hobbies",
        "type": Array,
        "mandatory": false
      }
    ]
  }
}


