import httpInstance from "../httpInstance";

export const getNowPlaying = async () => {
    let res: any;
    const endpoint = `now_playing?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
    await httpInstance.get(endpoint)
    .then((dataNP) => {
        res = dataNP;
    })
    .catch((err) => {
       res = err.message;
    });
    return res;
}