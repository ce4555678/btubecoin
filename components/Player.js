import useScript from "./useScript.js";
import { useRouter } from 'next/router'
export default function Player(config) {
    const router = useRouter()
    const language = router.locale
  if (config.id && config.file) {
    if(typeof window !== 'undefined') {
        if (!window.Playerjs) {
            window.pjsconfig = config;
            useScript("/playerjs-" + language + ".js");
          } else {
            CreatePlayer(config);
          }
    }
  }
  return "";
}
function CreatePlayer(config) {
    if(typeof window !== 'undefined') {
    new window.Playerjs(config);
    }
}

if(typeof window !== 'undefined') {
    window.PlayerjsAsync = function () {
        if (window.pjsconfig) {
          CreatePlayer(window.pjsconfig);
          window.pjsconfig = undefined;
        }
      }
}