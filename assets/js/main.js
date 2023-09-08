const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "06-25-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "09-03-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "05-15-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "04-03-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "03-05-2021"
    }
];
const postsListEl = document.querySelector(".posts-list");

/**
 * Generate a post
 * @param {string} authorImage 
 * @param {string} authorName 
 * @param {string} dateCreated 
 * @param {string} contentText 
 * @param {string} media 
 * @param {number} idPost 
 * @param {number} likes 
 * @returns 
 */
function addPost (authorImage, authorName, dateCreated, contentText, media, idPost, likes){
   return `<div class="post">
      <div class="post__header">
         <div class="post-meta">                    
            <div class="post-meta__icon">
               <img class="profile-pic" src=${authorImage} alt=${authorName}>                    
            </div>
            <div class="post-meta__data">
               <div class="post-meta__author">${authorName}</div>
               <div class="post-meta__time">${dateCreated}</div>
            </div>                    
         </div>
      </div>
      <div class="post__text">
         ${contentText}
      </div>
      <div class="post__image">
         <img src=${media} alt="">
      </div>
      <div class="post__footer">
         <div class="likes js-likes">
            <div class="likes__cta">
               <a class="like-button  js-like-button" href="#" data-postid=${idPost}>
                  <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                  <span class="like-button__label">Mi Piace</span>
               </a>
            </div>
            <div class="likes__counter">
               Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
            </div>
         </div> 
      </div>            
   </div>`
};

posts.forEach(post => postsListEl.insertAdjacentHTML("beforeend", addPost(post.author.image, post.author.name, post.created, post.content, post.media, post.id, post.likes)));



