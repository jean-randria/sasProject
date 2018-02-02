import { File } from 'app/model/file.model';


export class Folder {
    constructor(
        public name: string,
        public path: string,
        public numberOfFiles: number,
        public files: File[]
    ) { }
}
