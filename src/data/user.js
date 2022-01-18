import React from "react";

const username = "Liza";
const city = "New York";

const image = "https://i.imgur.com/mV8PQxj.gif";

// export all three variables as named exports
export default class UserName extends React.Component{
render() {
    return username
}
}
export default class City extends React.Component{
   render() {
    return city
} 
}
export default class Image extends React.Component{
    render() {
    return image
}
}