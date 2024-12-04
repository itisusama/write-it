# Write It  

Write It is a web application built using Next.js and Appwrite that allows users(this version for me because I am the only one who can see the data) to share and aceess their content from anywhere, and the only need is the internet connection. This application demonstrates how to integrate Appwrite for seamless database management and provide a responsive user experience using Tailwind CSS.  

## Features  

- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.  
- **Appwrite Integration**: Data is securely stored in Appwrite's cloud-based database.  

## Tech Stack  

- **Frontend**: [Next.js](https://nextjs.org/)  
- **Backend**: [Appwrite](https://appwrite.io/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  

## Environment Variables  

The application requires the following environment variables to be set in a `.env` file:  

```env  
NEXT_PUBLIC_PROJECT_ID=your_project_id  
NEXT_PUBLIC_DATABASE_ID=your_database_id  
NEXT_PUBLIC_COLLECTION_ID=your_collection_id  
```  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone <repository_url>  
   cd <repository_name>  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Create a `.env` file in the root directory and add the required environment variables.  

4. Start the development server:  
   ```bash  
   npm run dev  
   ```  

 ![Live Preview](https://write.usamahassanasi.com)  

## Usage  

1. Open the application in your browser.  
2. Use the form on the homepage to input a title and content for your post.  
3. Click **WRITE IT** to save the post to the database.  

## File Structure  

```plaintext  
src  
├── app  
│   └── page.js        # Main page with the form  
├── styles  
│   └── globals.css    # Tailwind CSS setup  
└── .env.example        # Example environment variables  
```  

## Dependencies  

- `appwrite`: Appwrite JavaScript SDK for database operations  
- `tailwindcss`: Utility-first CSS framework  

## Deployment  

1. Build the application for production:  
   ```bash  
   npm run build  
   ```  

2. Deploy the `out` directory to your hosting service.  

## Contributing  

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to see.  