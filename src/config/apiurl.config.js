let currentUrl = window.location.href;
let url = '';
currentUrl = currentUrl.substring(currentUrl.indexOf("://") + 3);
url = url.substring(0, currentUrl.indexOf("/"));
export const API_URL = {

    index () {
        return ``;
    },
}
export default { API_URL }
