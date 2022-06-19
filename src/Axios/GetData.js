import axios from "axios";

export const getPegawai = async () => {
    let data = []
    await axios.get('https://raw.githubusercontent.com/damaryosaaji/freeapi/main/user.json')
        .then(function (response) {
            data = response
        });
    return data?.data
}