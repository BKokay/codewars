// I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

//P takes in an array of integers consisting of all the values and then all the values multiplied by one of the other integers
//R return the value of D
//E [2, 3, 4, 1, 12, 6, 2, 4] -> 4
//P find Math.max(ofArr) and return that number

function alphabet(ns) {
  let sorted = ns.sort((a, b) => a - b);
  return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2];
}
