

import { downloadfiles } from "../service/Api"
export const formateDate = (data) => {
    let hours = new Date(data).getHours();
    hours = hours >= 12 ? hours - 12 : hours
    const minut = new Date(data).getMinutes();
    const second = new Date(data).getSeconds();
    return `${hours < 10 ? "0" + hours : hours}:${minut < 10 ? "0" + minut : minut}:${second < 10 ? "0" + second : second}`

}
export const downloadMedia = async (e, Image) => {
    e.preventDefault()
    await downloadfiles(Image)
}