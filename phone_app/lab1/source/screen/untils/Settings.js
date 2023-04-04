export const urlUtils = "http://utils.mandakh.org:8000/utils/";
export const urllookUp = "http://btax.mandakh.org:8000/lookup/";

export const sendRequest = async (url, body) => {
    console.log(url);
    try {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw "Something went wrong.";
        }
        let data = await response.json();

        // Log the data to the console
        console.log(data);
        return data;
    } catch (error) {
        console.warn(error);
    }
};