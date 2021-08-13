import { Query } from '../';
import type { TUsers } from '../models';

const all = () => Query<TUsers[]>('SELECT id, userbame FROM users');
const one = (userid: number) => Query<TUsers[]>('SELECT id, username FROM users WHERE id = ?', [userid]);

export default {
    all,
    one
}n