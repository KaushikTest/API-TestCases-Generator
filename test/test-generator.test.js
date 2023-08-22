import * as TestCaseGenerator from '../src/cases';
import { getCases } from '../src/test-generator';

describe('Test Case Generator', () => {
    it('GenerateTestCase_WithAllPropertyMandate', () => {
        const testCase = getCases(TestCaseGenerator.caseWithAllPropertyMandates());
        expect(testCase).toBeDefined();
        expect(testCase.positiveTestCases.length).toEqual(1);
        expect(testCase.negativeTestCases.length).toBeGreaterThan(1);
    });

    it('GenerateTestCase_StringPropertyNotMandate', () => {
        const testCase = getCases(TestCaseGenerator.caseWithAllStringPropertyNotMandates());
        expect(testCase).toBeDefined();
        expect(testCase.positiveTestCases.length).toEqual(2);
        expect(testCase.negativeTestCases.length).toBeGreaterThan(1);
    });

    it('GenerateTestCase_NumberPropertyNotMandate', () => {
        const testCase = getCases(TestCaseGenerator.caseWithAllNumberPropertyNotMandates());
        expect(testCase).toBeDefined();
        expect(testCase.positiveTestCases.length).toEqual(2);
        expect(testCase.negativeTestCases.length).toBeGreaterThan(1);
    });

    it('GenerateTestCase_BooleanPropertyNotMandate', () => {
        const testCase = getCases(TestCaseGenerator.caseWithAllBooleanPropertyNotMandates());
        expect(testCase).toBeDefined();
        expect(testCase.positiveTestCases.length).toEqual(2);
        expect(testCase.negativeTestCases.length).toBeGreaterThan(1);
    });

    it('GenerateTestCase_ObjectPropertyNotMandate', () => {
        const testCase = getCases(TestCaseGenerator.caseWithAllObjectPropertyNotMandates());
        expect(testCase).toBeDefined();
        expect(testCase.positiveTestCases.length).toEqual(2);
        expect(testCase.negativeTestCases.length).toBeGreaterThan(1);
    });

    it('GenerateTestCase_ArrayPropertyNotMandate', () => {
        const testCase = getCases(TestCaseGenerator.caseWithAllArrayPropertyNotMandates());
        expect(testCase).toBeDefined();
        expect(testCase.positiveTestCases.length).toEqual(2);
        expect(testCase.negativeTestCases.length).toBeGreaterThan(1);
    });

});

