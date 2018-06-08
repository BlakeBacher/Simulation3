module.exports = {
    addpost:(req, res) => {
        const db = req.app.get('db'); 
    
        const {title, image, content }=req.body

        db.add_post(title, image, content)
            .then(post => res.status(200).send(post))
            .catch(x => res.status(500).send(x))
      },
      getposts: (req, res) => {
   
        const db = req.app.get("db");
    
        db.get_posts()
          .then(posts => res.status(200).send(posts))
          .catch(x => res.status(500).send(x));
      },
}