This is a customizable blog starter based on Bejamas Next.js Blog using:

- [Next.js](https://github.com/vercel/next.js) v12
- [Tailwind](https://tailwindcss.com/) v3.0
- Built-in [MDX](https://mdxjs.com/) v1 support
- Includes modern design with dark & light themes
- Feature management with [LaunchDarkly](https://launchdarkly.com/) to demostrate turning on and off the Theme Switcher feature

> 🎉 We’re really excited about the Bejamas + Netlify collaboration and we were going to celebrate it with some swag, but we realized we could put that money into supporting OSS and our ecosystem even more! After all, who needs another t-shirt or sticker?!
>
> [Click this link](https://oss-form.netlify.app/) to vote for your favorite Open Source project!

## Getting Started

---

### Setting up LaunchDrakly 

If you do not have an account start by setting a trail account [here](https://launchdarkly.com/start-trial/)

Once you have your account login and create a feature flag

> -Make sure the name of the feature flag is **Show Theme Switcher**
> -Make sure you check the **SDKs using Client-side ID** option under **Settings** -> **Client-side SDK availability** 
> -The documentation to create a feature flag can be found [here](htps://docs.launchdarkly.com/home/getting-started/feature-flags)

Go to **Account settings** -> **Projects** click on the default project and take a note of the **Client-side ID**

### Setting Up the App Locally

Clone your [this repo](https://github.com/lcarrasco79/nextjs-blog-theme.git) and navigate to it in your terminal.

From there, you can install the project's dependencies by running:

```shell
yarn install
```

Edit line 15 [`pages/_app.js`](pages/_app.js) and replace process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID with you **Client-side ID** noted before. Your code should look like this;

```nodejs
  clientSideID: '`12345678910',
  user: {
      "key": "example_user",
      "name": "Example user",
      "email": "User@example.com",
      "country": "USA"
  }
```


Finally, you can run your project locally with:

```shell
yarn run dev
```

Open your browser and visit <http://localhost:3000>, your project should be running!

### Using the Setup Wizard

![Preview of Setup Wizard showing the initial page of a setup form](nextjs-setup-wizard.png)

Through the [setup wizard](https://nextjs-wizard.netlify.app/), you can create your blog in a few clicks and deploy to Netlify.

## Configuring the blog

The config is based on environment variables to make it easy to integrate with any Jamstack platform, like Netlify.

Here are the variables you can edit:
| Variable | Description | Options
| --- | --- | --- |
| `BLOG_NAME` | the name of your blog, displayed below the avatar ||
| `BLOG_TITLE` | the main header (`h1`) on the home page ||
| `BLOG_FOOTER_TEXT`| the text in the footer ||
| `BLOG_THEME` | the theme to pass to Tailwind | default |
| `BLOG_FONT_HEADINGS` | the font-family for all HTML headings, from `h1` to `h6`| sans-serif (default), serif, monospace|
| `BLOG_FONT_PARAGRAPHS` | the font-family for all other HTML elements | sans-serif (default), serif, monospace|

All of the env variables can be configured through the [Wizard](https://nextjs-wizard.netlify.app/) or through setting the project's environment variables. You can do this in your Netlify dashaboard (Site settings/Build & deploy/Environment/Environment variables).

https://user-images.githubusercontent.com/3611928/153997545-6dcdeef0-e570-49e7-93d6-ce0d393d16c9.mp4

[alt: video walkthrough of editing env vars]

If setting an environment variable isn't your cup of tea, the defaults can be changed in [`utils/global-data.js`](/utils/global-data.js). You can also remove the variables and hard code blog information where these variables are used in the code base.

- `BLOG_THEME, BLOG_FONT_HEADINGS, & BLOG_FONT_PARAGRAPHS` are used in [`tailwind-preset.js`](tailwind-preset.js)
- `BLOG_NAME, BLOG_TITLE, BLOG_FOOTER_TEXT` are used in [`pages/index.js`](pages/index.js) & [`pages/posts/[slug].js`](pages/posts/[slug].js) through the `globalData` object.

## Adding new posts

All posts are stored in `/posts` directory. To make a new post, create a new file with the [`.mdx` extension](https://mdxjs.com/).

Since the posts are written in `MDX` format you can pass props and components. That means you can use [React components](https://reactjs.org/docs/components-and-props.html) inside your posts to make them more interactive. Learn more about how to do so in the [MDX docs on content](https://mdxjs.com/docs/using-mdx/#components).

https://user-images.githubusercontent.com/3611928/152727802-102ec296-41c8-446d-93ed-922d11187073.mp4

[alt: video walkthrough of adding a new blog post]
