import { Roles } from './role';
export class Usuario {
  id: number;
  login: string;
  senha: string;
  email: string;
  nome: string;
  roles: Array<Roles>;
}
