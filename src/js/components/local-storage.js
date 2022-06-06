export default function localStorage(){
    console.log('HEllo frrm localStorage');
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=8f517ea939a3e5bbc59bc55f9e33cbf1')
        .then((response) => {
            return response.json();
        }).then(data => {
            console.log(data);
            // localStorage.setItem("data", JSON.stringify(data));
            // console.log(localStorage.getItem("data"))
        })
}
// const storage = {
//     addFilm(data, value) {
//         const result = JSON.stringify(value)
//         localStorage.setItem(data, result)
//               }
// },
//     getItem (data) {
//         try {
//             const savedFilm = localStorage.getItem(key);
//             return JSON.parse(savedFilm)
//         }
//         catch (error) {
//             console.log("Error parse")
//         }
//           }