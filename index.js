// //let key: "4c59d8b2"

function myFunc(){
    var title=document.querySelector("#title").value;
    var year=document.querySelector("#year").value;
    var imdb=document.querySelector("#imdb").value;
    let url=`http://www.omdbapi.com/?t=${title}&y=${year}&apikey=4c59d8b2`
    
  console.log(url)
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        append(res)
        // console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}

function append(movie){
    console.log(movie)

    var div=document.createElement("div")

    var image=document.createElement("img")
    image.src=movie.Poster;

    var h2=document.createElement("h2");
    h2.innerText=movie.Title+"-"+movie.Year;

    var p1=document.createElement("p");
   p1.innerText = `Actors : ${movie.Actors}`
    // p1.innerText="Actor's"+":-"+movie.Actors;

    var p2=document.createElement("p");
    p2.innerText="Director's"+":-"+movie.Director;

    var p3=document.createElement("p");
    p3.innerText="Language"+":-"+movie.Language;

    var p4=document.createElement("p");
    p4.innerText="Genre"+":-"+movie.Genre;

    var p5=document.createElement("p");
    p5.innerText="IMBD's Rating"+":-"+movie.imdbRating;

    if((movie.imdbRating)>8.5)
    {
        p7=document.createElement("h3");
        p5.innerText="IMBD's Rating"+":-"+movie.imdbRating+p7;
        p7.style.color="red"
        p7.innerText="Recommanded"

    }

    var p6=document.createElement("p");
    p6.innerText="Released"+":-"+movie.Released;

    div.append(image,h2,p1,p2,p3,p4,p5,p6,p7);
    document.querySelector("#container").append(div);

}
