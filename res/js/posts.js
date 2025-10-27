window.onload = function() {
    fetch("res/css/myjson.json")
    .then((response) => response.json())
    .then(json => {
        console.log(json);
        for (let i = 0; i < json.length; i++) {
            // create div for the post
            let post = document.createElement("div");
            post.className = "post";

            // create div for header
            let header = document.createElement("div");
            header.className = "post-header";

            // create img for profile picture
            let logo = document.createElement("a");
            logo.className = "logo";
            let logoImg = document.createElement("img");
            logoImg.src = "res/images/hw1icon.png";
            logoImg.width = 50;
            logoImg.height = 50;
            logoImg.alt = "logo";
            logo.appendChild(logoImg);

            // create elem for date
            let date = document.createElement("span");
            date.className = "post-date";
            date.innerText = new Date(json[i].created_at).toLocaleDateString("en-GB", {
            year: "numeric", 
            month: "short", 
            day: "numeric"
            });

            header.appendChild(logo);
            header.appendChild(date);
            post.appendChild(header);

            if (json[i].image_url !== null) { // if there is a picture -> add it to post
                let image = document.createElement("img");
                image.className = "post-image";
                image.src = json[i].image_url;
                image.alt = "post image";
                post.appendChild(image);
            }

            // create post-text and add it to post
            let text = document.createElement("p");
            text.className = "post-text";
            text.innerText = json[i].text;
            post.appendChild(text);

            // add like img to posts
            let like = document.createElement("a");
            like.className = "like";
            let likeImg = document.createElement("img");
            likeImg.src = "res/images/like.png";
            likeImg.width = 30;
            likeImg.height = 30;
            likeImg.alt = "like";
            like.appendChild(likeImg);
            post.appendChild(like);

            document.querySelector(".container").appendChild(post); // show the created post
        }
    })
    .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
        })
};
