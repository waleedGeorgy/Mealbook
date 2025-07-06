/*
Just like `page.js`, there exists another reserved file name, which is `layout.js`.
`layout.js` is a wrapper around one or more `page.js` files, and is responsible for creating the skeleton of the page,
defining the metadata, adding fonts, etc...
Every Next app should have at least one `layout.js` file in the root `app` directory.
To define a favicon for our website, we add the desired image to the `app` directory and name it 'icon', which is a 
reserved name. The image can be of type .ico, .png, etc...
*/
import MainHeader from "@/components/main-header/MainHeader";
import "./globals.css";

export const metadata = {
  title: "Mealbook",
  description: "An app for sharing your favorite meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
