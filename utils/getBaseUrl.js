import clientSideLang from "next-translate/clientSideLang";

export default function getBaseUrl() {
  const lang = clientSideLang();

  return `${window.location.protocol}//${window.location.host}/${lang}`;
}
