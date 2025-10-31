window.onload = function() {
    //fetch("https://api.npoint.io/7982a148864c6424dc4b")
    fetch("res/css/myjson.json")
    .then((response) => response.json())
    .then(json => {
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

            // set author's profile picture
            let authorImg = document.createElement("a");
            authorImg.className = "authorImg";
            if (json[i].logo !== null) { // if there is a picture -> add it as profile pic
                let logoImg = document.createElement("img");
                logoImg.src = json[i].logo;
                logoImg.width = 50;
                logoImg.height = 50;
                logoImg.alt = "authorImg";
                authorImg.appendChild(logoImg);
            }

            // set username
            let author = document.createElement("p");
            author.className = "username";
            author.innerText = json[i].author;
            post.appendChild(author);

            // poster's username + image
            let authorInfo = this.document.createElement("div");
            authorInfo.className = "authorInfo";
            authorInfo.appendChild(authorImg);
            authorInfo.appendChild(author);

            // create elem for date
            let date = document.createElement("span");
            date.className = "post-date";
            date.innerText = new Date(json[i].created_at).toLocaleDateString("en-GB", {
            year: "numeric", 
            month: "short", 
            day: "numeric"
            });

            header.appendChild(authorInfo);
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
