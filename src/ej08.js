import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./modules/omdb-wrapper.js";

OMDBSearchByPage("batman").then((data) => {
    console.log(data);
});

OMDBSearchComplete("batman").then((data) => {
    console.log(data);
});

OMDBGetByImdbID("tt0372784").then((data) => {
    console.log(data);
});