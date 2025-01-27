let userInput = document.querySelector("input")
let btn = document.querySelector(".btn")
let image = document.querySelector("img")
let userName = document.querySelector(".name span")
let userBio = document.querySelector(".bio span")
let userFollowers = document.querySelector(".followers span")
let userRepos = document.querySelector(".repos span")

btn.addEventListener("click", ()=> {
    // console.log (userinput.value)
    
    fetch(`https://api.github.com/users/${encodeURIComponent(userInput.value.trim())}`)
    .then((res)=> {
if (!res.ok) {
    if (res.status === 404) {
        throw new Error ('User not found!')
    }
    throw new Error ('User not found!')
} 

        return res.json()
    }).then((data)=> {
        // console.log (data)
        let {name, avatar_url, bio, followers, public_repos} = data
        image.src = avatar_url
        userName.innerHTML = name || "Not Found"
        userFollowers.innerHTML = followers || "No followers"
        userBio.innerHTML = bio || "No bio available"
        userRepos.innerHTML = public_repos || "No followers"
        
    }).catch((err)=> {
        alert (`error ${err}`)
    })

})