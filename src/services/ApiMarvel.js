import axios from "axios";
import md5 from "md5";
import { EnvConfig } from "../config";

class ApiMarvel {
  constructor() {
    const { getKeyPrivate, getKeyPublic } = EnvConfig();

    const ts = Number(new Date());
    const privateKey = getKeyPrivate();
    const publicKey = getKeyPublic();
    const hash = md5(ts + privateKey + publicKey);

    this.api = axios.create({
      baseURL: "http://gateway.marvel.com/v1/public/",
      params: {
        ts,
        apikey: publicKey,
        hash,
      },
    });
  }

  getComic() {}

  async Api(url) {
    await this.api
      .get(url)
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
    // await axios
    //   .get(
    //     `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`,
    //     { method: "GET" }
    //   )
    //   .then((res) => {
    //     // if (!res.ok) {
    //     //   throw Error("Não foi possível buscar os dados para esse recurso");
    //     // }
    //     // return res.json();
    //     console.log(res.data.data);
    //   })
    //   // .then((data) => {
    //   //   this.setMatches(data.matches);
    //   // })
    //   .catch((err) => {
    //     if (err.name === "AbortError") {
    //       console.log("Requisão abortada");
    //     } else {
    //       console.log(err.message);
    //     }
    //   });
  }
}

export default ApiMarvel;
