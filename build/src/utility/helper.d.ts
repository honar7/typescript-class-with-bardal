declare const fnCompose: (...fns: Function[]) => (value: any) => any;
declare const fnPipe: (...fns: Function[]) => (value: any) => any;
declare const compose: (...fns: Function[]) => (value: any) => any;
declare const pipeNumber: (...fns: Func[]) => (value: number) => number;
declare const pipe: (...fns: Function[]) => (value: any) => any;
interface Func {
    (value: number): number;
}
//# sourceMappingURL=helper.d.ts.map