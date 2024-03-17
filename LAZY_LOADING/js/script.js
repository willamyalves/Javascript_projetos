let callback = (entries) =>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            const image = entry.target
            image.src = image.src.replace("&w=10&", "&w=1000&")
        }
    }))
}

let observer = new IntersectionObserver(callback, {});

document.querySelectorAll(".image img").forEach((image=>{
    observer.observe(image);
}))
