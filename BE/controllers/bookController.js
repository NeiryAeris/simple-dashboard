import Book from "../models/Book.js";

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new book
export const createBook = async (req, res) => {
  try {
    // Handle both form-data and raw JSON
    const bookData = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      price: typeof req.body.price === "string" ? parseFloat(req.body.price) : req.body.price,
      image: req.body.image,
    };

    // Validate required fields
    if (!bookData.title || !bookData.author || !bookData.description || !bookData.price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const book = new Book(bookData);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
