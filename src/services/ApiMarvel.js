import axios from "axios";
import md5 from "md5";
import { EnvConfig } from "../config";

const { getKeyPrivate, getKeyPublic } = EnvConfig();

const ts = Number(new Date());
const privateKey = getKeyPrivate();
const publicKey = getKeyPublic();
const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
