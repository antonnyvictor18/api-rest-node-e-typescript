import { ICidade } from '../models/cidade';
declare module 'knez/types/table' {
    interface Table {
        cidade: ICidade;
    };
}