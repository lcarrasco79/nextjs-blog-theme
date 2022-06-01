import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import { withLDProvider } from "launchdarkly-react-client-sdk";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default withLDProvider({
  clientSideID: process.env.LAUNCHDARKLY_SDK_CLIENT_SIDE_ID,
  user: {
      "key": "example_user2",
      "name": "Example user 2",
      "email": "User2@example.com",
      "country": "MEX"
  }
})(MyApp);
