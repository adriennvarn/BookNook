export default function BookInfo() {
    /* Full card containing book information (cover, title, author, publishing date, etc),
    date read by user, rating in stars, summary of review, and full review. */

    /* NOTE that image will have coverId OR imageSrc but not both*/
    return (
        <div>
            <img src={null} alt="Blank image"/>
            <h2>Title</h2>
            <h3>Author</h3>
            <p>Date published, publisher, ISBN</p>
            <h4>★★★★☆</h4>
            <p>This is a sample of a summary of a review.</p>
            <p>This is a sample of a full summary. It would presumably be several sentences long, perhaps a paragraph or two. 
                I will definitely try to make it able to accommodate those people that type their own book as a book review.</p>
        </div>
    )
}