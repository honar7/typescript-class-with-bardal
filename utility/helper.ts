// Shared functions
const fnCompose = (...fns: Function[]) => (value: any) =>
    fns.reduceRight((prevFn, currFn) => currFn(prevFn), value);
 
export const fnPipe = (...fns: Function[]) => (value: any) =>
    fns.reduce((prevFn, currFn) => currFn(prevFn), value);


const compose = (...fns: Function[]) => (value: any) =>
    fns.reduceRight((prevFunc, curFunc) => curFunc(prevFunc), value);

const pipeNumber = (...fns: Func[]) => (value: number) =>
    fns.reduce((prevFunc, curFunc) => curFunc(prevFunc), value);

const pipe = (...fns: Function[]) => (value: any) =>
    fns.reduce((prevFunc, curFunc) => curFunc(prevFunc), value);

interface Func {
    (value: number): number;
}