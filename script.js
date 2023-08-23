document.addEventListener('DOMContentLoaded', () => {
    const bookSearchForm = document.getElementById('SearchForm');
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const addBookForm = document.getElementById('BookForm');
    const bookTitleInput = document.getElementById('bookTitle');
    const bookAuthorInput = document.getElementById('bookAuthor');
    const bookDescriptionInput = document.getElementById('bookDescription');
    const bookGenreInput = document.getElementById('bookGenre');
    let storedBooks = JSON.parse(localStorage.getItem('storedBooks')) || [];

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toUpperCase();
        showBooks(query);
    });

    addBookForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const title = bookTitleInput.value.trim();
        const author = bookAuthorInput.value.trim();
        const description = bookDescriptionInput.value.trim();
        const genre = bookGenreInput.value.trim();

        if (title && author && description && genre) {
            const newBook = { title, author, description, genre };
            storedBooks.push(newBook);
            localStorage.setItem('storedBooks', JSON.stringify(storedBooks));

            bookTitleInput.value = '';
            bookAuthorInput.value = '';
            bookDescriptionInput.value = '';
            bookGenreInput.value = '';
            showBooks('');
        }
    });

    function showBooks(query) {
        itemList.innerHTML = '';
        
        storedBooks.forEach(book => {
            if (book.title.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = `${book.title} by ${book.author} | ${book.description} | ${book.genre}`;
                itemList.appendChild(li);
            }
        });
    }

    showBooks('');
});








// function showBooks(list ) {
       
   
   
//         <table>
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Author</th>
//                 </tr>
//             </thead>
//             <tbody>
        
//                 {list && list.map((itemList, i) => (
//                     <tr key={i}>
//                         <td>{itemList.title}</td>
//                         <td>{itemList.author}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
  
// }




