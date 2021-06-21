import Cookies from "js-cookie";
import React, { Suspense, useState } from "react";
import { Helmet } from "react-helmet";

const CookieConsent = React.lazy(() => import("react-cookie-consent"));

const BannerCookies = () => {
  const isSSR = typeof window === "undefined"; // hack to ssr and lazy
  const [cookieTag, setCookieTag] = useState(
    Cookies.get("gdpr-google-tagmanager")
  );

  return (
    <>
      {!isSSR && (
        <Suspense fallback={null}>
          {cookieTag && (
            <>
              <Helmet>
                <script>
                  {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var
                    f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID}')
                  `}
                </script>
              </Helmet>
              <noscript
                dangerouslySetInnerHTML={{
                  __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}>" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
              />
            </>
          )}
          <CookieConsent
            enableDeclineButton
            onDecline={() => {
              setCookieTag(false);
            }}
            onAccept={() => {
              setCookieTag(true);
            }}
            location="bottom"
            buttonText="Aceptar todas"
            declineButtonText="Rechazar"
            style={{
              background: "linear-gradient(to left, #c9216c, #f04d2d)",
              minHeight: "12%",
              diplay: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              opacity: "0.9",
            }}
            buttonStyle={{
              borderRadius: "3em",
              color: "#c9216c",
              fontSize: "1rem",
              backgroundColor: "#fff",
              padding: "0.5em 1em",
            }}
            declineButtonStyle={{
              borderRadius: "3em",
              color: "#c9216c",
              fontSize: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.592)",
              padding: "0.5em 1em",
            }}
            cookieName="gdpr-google-tagmanager"
          >
            Este sitio web utiliza{" "}
            <a href="/politica-cookies/" className="cookies" target="_blank">
              cookies
            </a>{" "}
            propias y de terceros para recopilar información estadística sobre
            su navegación.
          </CookieConsent>
        </Suspense>
      )}
    </>
  );
};
export default BannerCookies;
