import {simpleArgsParser} from "./parser";

export function argv(args: Array<string>){
    let parser = new simpleArgsParser(args);
    return parser.getArgs();
}