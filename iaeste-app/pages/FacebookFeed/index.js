import React from "react";
import { WebView } from "react-native";

const javascript = `
const removeElements = [
  '#header-notices',
  '#header',
  '#mobile_login_bar',
  '#u_0_1n',
  '#msite-pages-header-contents'
];
removeElements.forEach(identifier => {
  const elem = document.querySelector(identifier);
  elem.parentElement.removeChild(elem);
});
`;

const FacebookFeed = () => {
  return (
    <WebView
      source={{
        uri: "https://m.facebook.com/pg/iaeste.sverige/posts"
      }}
      thirdPartyCookiesEnabled={false}
      injectedJavaScript={javascript}
      originWhitelist={[
        "https://m.facebook.com",
        "https://www.facebook.com",
        "https://facebook.com"
      ]}
    />
  );
};

export default FacebookFeed;
