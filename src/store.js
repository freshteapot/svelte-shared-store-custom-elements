import { writable } from 'svelte/store';

const count = writable(0);

const api = {
    hello: () => {
        console.log("yo")
    }

}
const loggedIn = () => {
    console.log("am I logged in")
}

const logout = () => {
    console.log("I want to be logged out")
}

export {
    count,
    loggedIn,
    logout,
    api,
}

