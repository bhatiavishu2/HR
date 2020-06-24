import {BASE_URL} from '../util';
import axios from 'axios';

export const getAllNews = async () => {
   const result = axios.get(BASE_URL)
   return result
}