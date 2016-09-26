export class simpleArgsParser {
    private args: Array<any>;
    constructor(args: Array<string>) {
        this.args = args;
    }
    public getArgs = (): any => {
        let result: any = {};
        this.args.filter(getValidArg).forEach((arg) => {
          const args: Array<string> = getValidArg(arg);
          try{
             result[args[1]] = eval(args[2]);             
          } catch(e){
            result[args[1]] = args[2];
          }
        });
        return result;
    }

}
const getValidArg = (arg: any) => arg.match(/^--([^\s=]+)\s*=\s*([^\s]*)$/);

