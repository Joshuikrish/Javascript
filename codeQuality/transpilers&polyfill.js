/**
 * @author Krishna Shrestha
 * 
 * Transpilers are used from converting newly launched function to
 * older function to run smoothly in older engines.
 *
 * ?? nullish operator is launced after 2020 thus engine before 2020 can't 
 * understand this operator thus, transpiler like babel, webpack is use to 
 * convert the function into 
 * before running the transpiler
 * height = height ?? 100;
 * after running the transpiler
 * height = (height !== undefined && height !== null) ? height : 100;
 * so that the engine works fine
 * 
 * Polyfillers are works for same as transpilers but for functions 
 * ex - math.trunc function is not recognized in outdated engines
 * example polyfill.io, core.js
 */