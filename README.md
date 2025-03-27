# Program to add frontmatter to Markdown files

This program adds frontmatter at the begining of a Markdown file,
formatted with information derived from the filename.

### Example Filename: 

    YYYY-MM-DD-example-1-primary

### Generated Frontmatter: 

    ---
    title: 'ejemplo 1 primary'
    description: 'ejemplo 1 primary'
    pubDate: 'YYYY-MM-DD'
    heroImage: ''
    ---

### How it works:

1. The program extracts the date (YYYY-MM-DD) from the filename and assigns 
   it to the pubDate field.
2. It then takes the remaining phrase (example-1-primary) and inserts it 
   into both the title and description fields.
