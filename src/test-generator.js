
export function getCases(config) {
  const positiveTestCases = generatePositiveTestCases(config);
  const negativeTestCases = generateNegativeTestCases(config);
  return { positiveTestCases, negativeTestCases };
}

function generatePositiveTestCases(inputSpec) {
  const testCases = [];

  // Generate test case with all mandatory parameters
  const allMandatoryTestCase = {};
  inputSpec.parameters.forEach(param => {
    if (param.mandatory) {
      allMandatoryTestCase[param.name] = generateValidValueForType(param.type);
    }
  });
  testCases.push(allMandatoryTestCase);

  // Generate additional test cases with combinations of non-mandatory parameters
  for (let i = 0; i < inputSpec.parameters.length; i++) {
    const param = inputSpec.parameters[i];
    if (!param.mandatory) {
      const testCase = { ...allMandatoryTestCase };
      testCase[param.name] = generateValidValueForType(param.type);
      testCases.push(testCase);
    }
  }

  // Generate a test case with all non-mandatory parameters
  const allNonMandatoryTestCase = { ...allMandatoryTestCase };
  inputSpec.parameters.forEach(param => {
    if (!param.mandatory) {
      allNonMandatoryTestCase[param.name] = generateValidValueForType(param.type);
    }
  });
  testCases.push(allNonMandatoryTestCase);

  return testCases;
}

function generateNegativeTestCases(inputSpec) {
  const testCases = [];

  inputSpec.parameters.forEach(missingParam => {
    if (!missingParam.mandatory) return;
    const testCase = {};
    inputSpec.parameters.forEach(param => {
      if (param.name === missingParam.name) return;
      testCase[param.name] = generateValidValueForType(param.type);
    });
    testCases.push(testCase);
  });

  inputSpec.parameters.forEach(param => {
    const testCase = {};
    inputSpec.parameters.forEach(p => {
      if (p.name === param.name) {
        testCase[param.name] = generateInvalidValueForType(param.type);
      } else {
        testCase[p.name] = generateValidValueForType(p.type);
      }
    });
    testCases.push(testCase);
  });

  return testCases;
}


function generateValidValueForType(type) {
  switch (type) {
    case String:
      return 'exampleString';
    case Number:
      return 42;
    case Boolean:
      return true;
    case Object:
      return {};
    case Array:
      return [];
    // Handle other data types here
    default:
      return null;
  }
}

function generateInvalidValueForType(type) {
  if (type == String) {
    return 12345;
  } else {
    return 'InvalidInteger';
  }
}


