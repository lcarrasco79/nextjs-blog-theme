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

Once you have your account login and create a feature flag:

- Make sure the name of the feature flag is **Show Theme Switcher**
- Make sure you check the **SDKs using Client-side ID** option under **Settings** -> **Client-side SDK availability** 
- The documentation to create a feature flag can be found [here](htps://docs.launchdarkly.com/home/getting-started/feature-flags)

Go to **Account settings** -> **Projects** click on the default project and take a note of the **Client-side ID**

### Setting Up the App Locally

Clone your [this repo](https://github.com/lcarrasco79/nextjs-blog-theme.git) and navigate to it in your terminal.

From there, you can install the project's dependencies by running:

```shell
yarn install
```

Edit line 15 [`pages/_app.js`](pages/_app.js) and replace process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID with you **Client-side ID** noted before between single quotes. Your code should look like this;

```nodejs
  clientSideID: '12345678910',
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

Open your browser and visit <http://localhost:3000>, your project should be running! :+1:

Play with the **Feature Flag** by turning it on and off so that the Theme Switcher is displayed or hide in the bottom of the blog main page.
![image](https://user-images.githubusercontent.com/64344591/171325161-472a97fa-b475-436b-8f3c-823f80b4bead.png)
![image](https://user-images.githubusercontent.com/64344591/171325310-2eda4779-d0ee-4531-a054-c966acdcfff2.png)

If you want to check the implementation code of the feature flag, inspect [`components/Footer.js`](components/Footer.js)


### References

[Using LaunchDarkly with Next.js](https://docs.launchdarkly.com/guides/platform-specific/nextjs) please check **Client-side rendering**

If you wanto go fancy, you can implement targeting users matching certain rules.

![image](https://user-images.githubusercontent.com/64344591/171326091-1a99bc7d-9c6f-45d1-b9fe-12b734219d88.png)

As of now, the country is hardcoded in the code, but you could set the user as **anonymus** by setting that property to true and then obtain the country based on the IP using axios. A reference implementation can be found [here](https://codesandbox.io/s/50bi9?file=/src/App.js:256-696)

