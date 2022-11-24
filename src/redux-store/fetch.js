import { useSelector } from "react-redux";

const Fetch = ({ url, method, data }) => {
    const userSliceState = useSelector(state => state.userSliceState);
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader("Authorization", "Bearer" + userSliceState.jwt);
        method.toLowerCase() === "post" && xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            const json = xhr.responseText;
            const data = JSON.parse(json);
            resolve(data);
        };

        xhr.onerror = () => {
            reject("Could not reach the server.");
        };

        method.toLowerCase() === "post" ? xhr.send(JSON.stringify(data)) : xhr.send();
    });
};

export default Fetch;